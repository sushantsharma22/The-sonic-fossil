/**
 * ManifoldWorker.ts - Web Worker for AI Inference + UMAP Projection
 * 
 * Handles:
 * - Transformers.js CLAP embeddings with WebGPU/WASM fallback
 * - UMAP dimensionality reduction to 3D
 * - Spring-force physics for smooth point animation
 * - SharedArrayBuffer communication with main thread
 */

import { pipeline, env } from '@xenova/transformers';
import { UMAP } from 'umap-js';

// Configure Transformers.js for optimal performance
env.allowLocalModels = false;
env.useBrowserCache = true;

// Types
interface InitMessage {
  type: 'init';
  sab: SharedArrayBuffer;
  sampleRate: number;
}

interface DisposeMessage {
  type: 'dispose';
}

type WorkerMessage = InitMessage | DisposeMessage;

// Shared buffer state
let audioSAB: SharedArrayBuffer;
let writeIndex: Int32Array;
let readIndex: Int32Array;
let audioData: Float32Array;
let capacity = 0;
let sampleRate = 48000;

// Output positions buffer (SharedArrayBuffer for zero-copy transfer)
const MAX_POINTS = 50000;
let positionsSAB: SharedArrayBuffer | null = null;
let positions: Float32Array | null = null;
let velocities: Float32Array | null = null;
let targetPositions: Float32Array | null = null;

// Embeddings storage
const embeddings: number[][] = [];
let currentCount = 0;

// AI Pipeline
let extractor: any = null;
let isInitialized = false;

// UMAP instance
let umapInstance: UMAP | null = null;

// Spring physics parameters
const SPRING_K = 0.08;
const DAMPING = 0.85;
const REST_THRESHOLD = 0.001;

/**
 * Initialize the CLAP feature extractor with WebGPU/WASM fallback
 */
async function initExtractor(): Promise<void> {
  postMessage({ type: 'status', message: 'Loading AI model...' });

  try {
    // Try loading the model (browser will use best available backend)
    extractor = await pipeline('feature-extraction', 'Xenova/clap-htsat-unfused');
    postMessage({ type: 'status', message: 'Model initialized' });
  } catch (e) {
    console.warn('Failed to load model:', e);
    
    try {
      // Try again without quantization
      extractor = await pipeline('feature-extraction', 'Xenova/clap-htsat-unfused');
      
      // Optimize threading
      if (env.backends?.onnx?.wasm) {
        env.backends.onnx.wasm.numThreads = Math.min(navigator.hardwareConcurrency || 4, 4);
      }
      postMessage({ type: 'status', message: 'Model initialized' });
    } catch (e2) {
      console.error('Failed to initialize extractor:', e2);
      postMessage({ type: 'error', message: 'Failed to load AI model' });
      return;
    }
  }

  isInitialized = true;
  postMessage({ type: 'status', message: 'AI ready' });
}

/**
 * Initialize position buffers
 */
function initPositionBuffers(): void {
  // Create SharedArrayBuffer for positions (MAX_POINTS * 3 floats + metadata)
  const bufferSize = MAX_POINTS * 3 * 4 + 16; // Extra 16 bytes for count
  positionsSAB = new SharedArrayBuffer(bufferSize);
  positions = new Float32Array(positionsSAB, 0, MAX_POINTS * 3);
  velocities = new Float32Array(MAX_POINTS * 3);
  targetPositions = new Float32Array(MAX_POINTS * 3);

  // Initialize with random positions for visual feedback
  for (let i = 0; i < 100; i++) {
    const idx = i * 3;
    positions[idx] = (Math.random() - 0.5) * 4;
    positions[idx + 1] = (Math.random() - 0.5) * 4;
    positions[idx + 2] = (Math.random() - 0.5) * 4;
  }
  currentCount = 100;

  postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
}

/**
 * Read audio window from ring buffer
 */
function readAudioWindow(durationSec: number = 1.0): Float32Array {
  const samplesNeeded = Math.floor(durationSec * sampleRate);
  const wi = Atomics.load(writeIndex, 0);
  
  const out = new Float32Array(samplesNeeded);
  const start = (wi - samplesNeeded + capacity) % capacity;
  
  for (let i = 0; i < samplesNeeded; i++) {
    out[i] = audioData[(start + i) % capacity];
  }
  
  return out;
}

/**
 * Check if audio has significant energy
 */
function hasAudioEnergy(samples: Float32Array, threshold: number = 0.01): boolean {
  let energy = 0;
  for (let i = 0; i < samples.length; i += 100) {
    energy += samples[i] * samples[i];
  }
  return energy / (samples.length / 100) > threshold * threshold;
}

/**
 * Extract embedding from audio samples
 */
async function extractEmbedding(samples: Float32Array): Promise<number[] | null> {
  if (!extractor || !isInitialized) return null;

  try {
    const result = await extractor(samples, {
      sampling_rate: sampleRate,
      return_tensors: false,
    });

    // Handle various output formats
    let embedding: number[];
    if (Array.isArray(result)) {
      embedding = result.flat(Infinity) as number[];
    } else if (result?.data) {
      embedding = Array.from(result.data);
    } else {
      embedding = Array.from(result);
    }

    return embedding;
  } catch (e) {
    console.error('Embedding extraction failed:', e);
    return null;
  }
}

/**
 * Compute UMAP projection to 3D
 */
function computeUMAP(): Float32Array | null {
  if (embeddings.length < 5) return null;

  try {
    // Create or update UMAP
    if (!umapInstance || embeddings.length % 50 === 0) {
      umapInstance = new UMAP({
        nComponents: 3,
        nNeighbors: Math.min(15, Math.floor(embeddings.length / 2)),
        minDist: 0.1,
        spread: 1.0,
      });
    }

    const projected = umapInstance.fit(embeddings);
    
    // Normalize to reasonable scale
    let maxDist = 0;
    for (const point of projected) {
      const dist = Math.sqrt(point[0] ** 2 + point[1] ** 2 + point[2] ** 2);
      maxDist = Math.max(maxDist, dist);
    }

    const scale = maxDist > 0 ? 3 / maxDist : 1;
    const result = new Float32Array(projected.length * 3);
    
    for (let i = 0; i < projected.length; i++) {
      result[i * 3] = projected[i][0] * scale;
      result[i * 3 + 1] = projected[i][1] * scale;
      result[i * 3 + 2] = projected[i][2] * scale;
    }

    return result;
  } catch (e) {
    console.error('UMAP projection failed:', e);
    return null;
  }
}

/**
 * Apply spring forces to animate points toward targets
 */
function applySpringForces(): void {
  if (!positions || !velocities || !targetPositions) return;

  for (let i = 0; i < currentCount; i++) {
    const idx = i * 3;

    for (let j = 0; j < 3; j++) {
      const pos = positions[idx + j];
      const target = targetPositions[idx + j];
      const vel = velocities[idx + j];

      // Spring force: F = -k * (pos - target)
      const force = -SPRING_K * (pos - target);
      
      // Update velocity with damping
      const newVel = (vel + force) * DAMPING;
      velocities[idx + j] = Math.abs(newVel) < REST_THRESHOLD ? 0 : newVel;

      // Update position
      positions[idx + j] = pos + velocities[idx + j];
    }
  }
}

/**
 * Compute confidence score from embedding
 */
function computeConfidence(embedding: number[]): number {
  // Use L2 norm as a proxy for signal strength
  let norm = 0;
  for (const v of embedding) {
    norm += v * v;
  }
  norm = Math.sqrt(norm);
  
  // Normalize to 0-1 range (empirically tuned)
  return Math.min(1, Math.max(0, norm / 30));
}

/**
 * Main processing loop
 */
async function processAudio(): Promise<void> {
  // Read audio window
  const samples = readAudioWindow(1.0);
  
  // Check for audio energy
  if (!hasAudioEnergy(samples)) {
    // Still apply spring forces for smooth animation
    applySpringForces();
    if (positionsSAB && currentCount > 0) {
      postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
    }
    return;
  }

  // Extract embedding
  const embedding = await extractEmbedding(samples);
  if (!embedding) return;

  // Store embedding
  embeddings.push(embedding);
  if (embeddings.length > MAX_POINTS) {
    embeddings.shift();
  }
  currentCount = embeddings.length;

  // Compute confidence
  const confidence = computeConfidence(embedding);
  postMessage({ type: 'confidence', value: confidence });

  // Recompute UMAP periodically
  if (embeddings.length % 5 === 0 || embeddings.length < 20) {
    const projected = computeUMAP();
    
    if (projected && targetPositions) {
      // Update targets
      for (let i = 0; i < projected.length; i++) {
        targetPositions[i * 3] = projected[i * 3];
        targetPositions[i * 3 + 1] = projected[i * 3 + 1];
        targetPositions[i * 3 + 2] = projected[i * 3 + 2];
      }

      // Initialize positions for new points
      for (let i = currentCount; i < embeddings.length; i++) {
        const idx = i * 3;
        if (positions) {
          positions[idx] = targetPositions[idx] + (Math.random() - 0.5) * 2;
          positions[idx + 1] = targetPositions[idx + 1] + (Math.random() - 0.5) * 2;
          positions[idx + 2] = targetPositions[idx + 2] + (Math.random() - 0.5) * 2;
        }
      }

      // Detect new cluster for camera animation
      if (embeddings.length > 10 && embeddings.length % 20 === 0) {
        const lastIdx = (embeddings.length - 1) * 3;
        postMessage({
          type: 'newCluster',
          position: {
            x: targetPositions[lastIdx],
            y: targetPositions[lastIdx + 1],
            z: targetPositions[lastIdx + 2],
          },
        });
      }
    }
  }

  // Apply spring forces
  applySpringForces();

  // Send updated positions
  if (positionsSAB) {
    postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
  }
}

// Processing loop
let loopInterval: ReturnType<typeof setInterval> | null = null;
let physicsInterval: ReturnType<typeof setInterval> | null = null;

/**
 * Start the processing loop
 */
function startProcessingLoop(): void {
  if (loopInterval) return;

  // Process every 200ms (5 FPS for inference, sufficient for real-time feel)
  loopInterval = setInterval(async () => {
    try {
      await processAudio();
    } catch (e) {
      console.error('Processing error:', e);
    }
  }, 200);

  // Also run spring physics at higher rate
  physicsInterval = setInterval(() => {
    applySpringForces();
    if (positionsSAB && currentCount > 0) {
      postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
    }
  }, 50);
}

/**
 * Handle incoming messages
 */
self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const msg = event.data;

  switch (msg.type) {
    case 'init':
      // Setup audio buffer references
      audioSAB = msg.sab;
      sampleRate = msg.sampleRate || 48000;
      
      // Parse SharedArrayBuffer layout
      writeIndex = new Int32Array(audioSAB, 0, 1);
      readIndex = new Int32Array(audioSAB, 4, 1);
      capacity = (audioSAB.byteLength - 8) / 4;
      audioData = new Float32Array(audioSAB, 8, capacity);

      // Initialize buffers
      initPositionBuffers();

      // Initialize AI
      await initExtractor();

      // Start processing
      startProcessingLoop();
      break;

    case 'dispose':
      if (loopInterval) {
        clearInterval(loopInterval);
        loopInterval = null;
      }
      if (physicsInterval) {
        clearInterval(physicsInterval);
        physicsInterval = null;
      }
      
      // Clear references
      positionsSAB = null;
      positions = null;
      velocities = null;
      targetPositions = null;
      embeddings.length = 0;
      extractor = null;
      umapInstance = null;
      break;
  }
};

// Log worker initialization
console.log('[ManifoldWorker] Initialized');
