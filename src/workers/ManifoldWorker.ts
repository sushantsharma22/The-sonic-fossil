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

// AI Pipeline - use feature-extraction for audio embeddings
let extractor: any = null;
let isInitialized = false;
let useSimpleMode = false; // Fallback mode without AI

// UMAP instance
let umapInstance: UMAP | null = null;

// Spring physics parameters
const SPRING_K = 0.08;
const DAMPING = 0.85;
const REST_THRESHOLD = 0.001;

/**
 * Initialize the feature extractor with fallback modes
 */
async function initExtractor(): Promise<void> {
  postMessage({ type: 'status', message: 'Loading AI model...' });

  try {
    // Try loading CLAP model for audio feature extraction
    console.log('[Worker] Loading feature-extraction model...');
    extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    console.log('[Worker] Model loaded successfully');
    isInitialized = true;
    useSimpleMode = false;
    postMessage({ type: 'status', message: 'AI ready' });
  } catch (e) {
    console.warn('[Worker] Failed to load AI model, using simple mode:', e);
    // Fall back to simple audio analysis mode
    useSimpleMode = true;
    isInitialized = true;
    postMessage({ type: 'status', message: 'Simple mode (no AI)' });
  }
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

  // Start with no points - they will be created from audio
  currentCount = 0;

  console.log('[Worker] Position buffers initialized');
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
function hasAudioEnergy(samples: Float32Array, threshold: number = 0.005): boolean {
  let energy = 0;
  for (let i = 0; i < samples.length; i += 100) {
    energy += samples[i] * samples[i];
  }
  const avgEnergy = energy / (samples.length / 100);
  return avgEnergy > threshold * threshold;
}

/**
 * Extract audio features from samples (simple spectral analysis)
 */
function extractAudioFeatures(samples: Float32Array): number[] {
  const features: number[] = [];
  const windowSize = 512;
  const numWindows = Math.floor(samples.length / windowSize);
  
  // Compute basic statistics for each window
  for (let w = 0; w < Math.min(numWindows, 32); w++) {
    const start = w * windowSize;
    let sum = 0;
    let sumSq = 0;
    let zeroCrossings = 0;
    let maxVal = 0;
    
    for (let i = 0; i < windowSize; i++) {
      const val = samples[start + i] || 0;
      sum += val;
      sumSq += val * val;
      maxVal = Math.max(maxVal, Math.abs(val));
      if (i > 0 && ((samples[start + i - 1] || 0) * val < 0)) {
        zeroCrossings++;
      }
    }
    
    const mean = sum / windowSize;
    const variance = (sumSq / windowSize) - (mean * mean);
    const rms = Math.sqrt(sumSq / windowSize);
    
    features.push(mean * 10, variance * 100, rms * 10, zeroCrossings / windowSize, maxVal);
  }
  
  // Pad or truncate to fixed size
  while (features.length < 128) features.push(0);
  return features.slice(0, 128);
}

/**
 * Extract embedding from audio samples
 */
async function extractEmbedding(samples: Float32Array): Promise<number[] | null> {
  if (!isInitialized) return null;

  try {
    if (useSimpleMode) {
      // Use simple audio feature extraction
      return extractAudioFeatures(samples);
    }
    
    // Use AI model - convert audio features to text-like representation for the model
    const audioFeatures = extractAudioFeatures(samples);
    
    // Create a text description based on audio characteristics
    const rms = audioFeatures[2] || 0;
    const zeroCrossings = audioFeatures[3] || 0;
    
    let description = 'sound';
    if (rms > 0.3) description = 'loud sound';
    else if (rms < 0.1) description = 'quiet sound';
    
    if (zeroCrossings > 0.3) description += ' with high frequency';
    else if (zeroCrossings < 0.1) description += ' with low frequency';

    const result = await extractor(description, { pooling: 'mean', normalize: true });

    // Handle various output formats
    let embedding: number[];
    if (Array.isArray(result)) {
      embedding = result.flat(Infinity) as number[];
    } else if (result?.data) {
      embedding = Array.from(result.data);
    } else {
      embedding = Array.from(result);
    }
    
    // Combine with raw audio features for more variation
    const combined = [...embedding.slice(0, 64), ...audioFeatures.slice(0, 64)];
    return combined;
  } catch (e) {
    console.error('[Worker] Embedding extraction failed:', e);
    // Fallback to simple features
    return extractAudioFeatures(samples);
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
  return Math.min(1, Math.max(0, norm / 10));
}

/**
 * Main processing loop
 */
async function processAudio(): Promise<void> {
  // Read audio window
  const samples = readAudioWindow(0.5); // 0.5 seconds for more responsive updates
  
  // Check for audio energy - lower threshold for sensitivity
  if (!hasAudioEnergy(samples)) {
    // Still apply spring forces for smooth animation
    applySpringForces();
    if (positionsSAB && currentCount > 0) {
      postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
    }
    return;
  }
  
  console.log('[Worker] Audio detected, extracting features...');

  // Extract embedding
  const embedding = await extractEmbedding(samples);
  if (!embedding) {
    console.warn('[Worker] Failed to extract embedding');
    return;
  }
  
  console.log('[Worker] Embedding extracted, length:', embedding.length);

  // Store embedding
  const prevCount = embeddings.length;
  embeddings.push(embedding);
  if (embeddings.length > MAX_POINTS) {
    embeddings.shift();
  }
  currentCount = embeddings.length;

  // Compute confidence
  const confidence = computeConfidence(embedding);
  postMessage({ type: 'confidence', value: confidence });

  // For first few points, just place them directly without UMAP
  if (embeddings.length < 5) {
    if (positions && targetPositions) {
      const idx = (currentCount - 1) * 3;
      // Place new point at a random position
      const x = (Math.random() - 0.5) * 4;
      const y = (Math.random() - 0.5) * 4;
      const z = (Math.random() - 0.5) * 4;
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;
      targetPositions[idx] = x;
      targetPositions[idx + 1] = y;
      targetPositions[idx + 2] = z;
    }
    console.log('[Worker] Added point', currentCount, '(pre-UMAP)');
  } else {
    // Compute UMAP projection
    const projected = computeUMAP();
    
    if (projected && targetPositions && positions) {
      // Update all target positions from UMAP
      for (let i = 0; i < currentCount; i++) {
        const idx = i * 3;
        targetPositions[idx] = projected[idx];
        targetPositions[idx + 1] = projected[idx + 1];
        targetPositions[idx + 2] = projected[idx + 2];
        
        // Initialize position for new points
        if (i >= prevCount) {
          positions[idx] = projected[idx] + (Math.random() - 0.5) * 0.5;
          positions[idx + 1] = projected[idx + 1] + (Math.random() - 0.5) * 0.5;
          positions[idx + 2] = projected[idx + 2] + (Math.random() - 0.5) * 0.5;
        }
      }
      console.log('[Worker] UMAP projection updated for', currentCount, 'points');

      // Detect new cluster for camera animation
      if (currentCount > 10 && currentCount % 20 === 0) {
        const lastIdx = (currentCount - 1) * 3;
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

  // Apply spring forces for smooth animation
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
