/**
 * ManifoldWorker.ts - Web Worker for Audio Analysis + 3D Visualization
 * 
 * Simplified approach:
 * - Direct audio feature extraction (no heavy AI model)
 * - Simple projection to 3D based on audio characteristics
 * - Spring-force physics for smooth animation
 */

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
let audioData: Float32Array;
let capacity = 0;
let sampleRate = 48000;

// Output positions buffer
const MAX_POINTS = 50000;
let positionsSAB: SharedArrayBuffer | null = null;
let positions: Float32Array | null = null;
let velocities: Float32Array | null = null;
let targetPositions: Float32Array | null = null;

// Point data storage
let currentCount = 0;

// Processing state
let isInitialized = false;
let lastProcessTime = 0;

// Spring physics parameters
const SPRING_K = 0.12;
const DAMPING = 0.8;

/**
 * Initialize position buffers
 */
function initPositionBuffers(): void {
  const bufferSize = MAX_POINTS * 3 * 4 + 16;
  positionsSAB = new SharedArrayBuffer(bufferSize);
  positions = new Float32Array(positionsSAB, 0, MAX_POINTS * 3);
  velocities = new Float32Array(MAX_POINTS * 3);
  targetPositions = new Float32Array(MAX_POINTS * 3);
  currentCount = 0;
  
  console.log('[Worker] Buffers initialized');
  postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
}

/**
 * Read audio window from ring buffer
 */
function readAudioWindow(durationSec: number = 0.3): Float32Array {
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
function hasAudioEnergy(samples: Float32Array): boolean {
  let energy = 0;
  const step = Math.max(1, Math.floor(samples.length / 500));
  let count = 0;
  
  for (let i = 0; i < samples.length; i += step) {
    energy += samples[i] * samples[i];
    count++;
  }
  
  const avgEnergy = energy / count;
  return avgEnergy > 0.00005; // Very low threshold for sensitivity
}

/**
 * Extract rich audio features from samples
 */
function extractAudioFeatures(samples: Float32Array): number[] {
  const features: number[] = [];
  
  // Overall statistics
  let sum = 0, sumSq = 0, maxAmp = 0, minAmp = 0;
  let zeroCrossings = 0;
  
  for (let i = 0; i < samples.length; i++) {
    const val = samples[i];
    sum += val;
    sumSq += val * val;
    maxAmp = Math.max(maxAmp, val);
    minAmp = Math.min(minAmp, val);
    if (i > 0 && samples[i-1] * val < 0) zeroCrossings++;
  }
  
  const mean = sum / samples.length;
  const rms = Math.sqrt(sumSq / samples.length);
  const zcRate = zeroCrossings / samples.length;
  const dynamicRange = maxAmp - minAmp;
  
  features.push(rms, zcRate, dynamicRange, mean);
  
  // Spectral features - split into frequency bands
  const bands = 16;
  const bandSize = Math.floor(samples.length / bands);
  
  for (let b = 0; b < bands; b++) {
    let bandEnergy = 0;
    let bandZC = 0;
    const start = b * bandSize;
    
    for (let i = 0; i < bandSize; i++) {
      const val = samples[start + i] || 0;
      bandEnergy += val * val;
      if (i > 0 && (samples[start + i - 1] || 0) * val < 0) bandZC++;
    }
    
    features.push(Math.sqrt(bandEnergy / bandSize)); // Band RMS
    features.push(bandZC / bandSize); // Band ZC rate
  }
  
  // Temporal envelope (attack/decay characteristics)
  const envSegments = 8;
  const segSize = Math.floor(samples.length / envSegments);
  for (let s = 0; s < envSegments; s++) {
    let segEnergy = 0;
    for (let i = 0; i < segSize; i++) {
      const val = samples[s * segSize + i] || 0;
      segEnergy += val * val;
    }
    features.push(Math.sqrt(segEnergy / segSize));
  }
  
  return features;
}

/**
 * Map features to 3D position
 * This creates natural clustering based on audio characteristics
 */
function featuresToPosition(features: number[]): [number, number, number] {
  const rms = features[0] || 0;
  const zcRate = features[1] || 0;
  const dynamicRange = features[2] || 0;
  
  // X: Based on energy/loudness (quiet left, loud right)
  let x = (rms * 30 - 0.3) * 5;
  
  // Y: Based on pitch approximation via zero crossing rate (low bottom, high top)
  let y = (zcRate * 15 - 0.3) * 5;
  
  // Z: Based on spectral complexity / dynamic range
  let spectralVariance = 0;
  for (let i = 4; i < 20 && i < features.length; i++) {
    spectralVariance += Math.abs(features[i] - rms);
  }
  let z = (spectralVariance - 0.2) * 4;
  
  // Add controlled randomness to prevent exact overlapping
  const jitter = 0.2;
  x += (Math.random() - 0.5) * jitter;
  y += (Math.random() - 0.5) * jitter;
  z += (Math.random() - 0.5) * jitter;
  
  // Clamp to reasonable bounds
  x = Math.max(-5, Math.min(5, x));
  y = Math.max(-5, Math.min(5, y));
  z = Math.max(-5, Math.min(5, z));
  
  return [x, y, z];
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

      const force = -SPRING_K * (pos - target);
      const newVel = (vel + force) * DAMPING;
      velocities[idx + j] = Math.abs(newVel) < 0.0001 ? 0 : newVel;
      positions[idx + j] = pos + velocities[idx + j];
    }
  }
}

/**
 * Compute confidence from audio features
 */
function computeConfidence(features: number[]): number {
  const rms = features[0] || 0;
  return Math.min(1, Math.max(0, rms * 8));
}

/**
 * Main processing function
 */
function processAudio(): void {
  const now = Date.now();
  
  // Throttle to max ~10 points per second
  if (now - lastProcessTime < 100) return;
  
  const samples = readAudioWindow(0.25); // 250ms window
  
  if (!hasAudioEnergy(samples)) {
    return;
  }
  
  lastProcessTime = now;
  
  // Extract features
  const features = extractAudioFeatures(samples);
  
  // Compute 3D position
  const pos = featuresToPosition(features);
  
  // Add new point
  if (currentCount < MAX_POINTS && positions && targetPositions) {
    const idx = currentCount * 3;
    
    // Set target position
    targetPositions[idx] = pos[0];
    targetPositions[idx + 1] = pos[1];
    targetPositions[idx + 2] = pos[2];
    
    // Initialize current position with offset for animation effect
    positions[idx] = pos[0] + (Math.random() - 0.5) * 1.5;
    positions[idx + 1] = pos[1] + (Math.random() - 0.5) * 1.5;
    positions[idx + 2] = pos[2] + (Math.random() - 0.5) * 1.5;
    
    currentCount++;
    
    console.log('[Worker] Point', currentCount, '→', pos.map(p => p.toFixed(2)).join(', '));
    
    // Send confidence
    const confidence = computeConfidence(features);
    postMessage({ type: 'confidence', value: confidence });
    
    // Notify about new cluster periodically for camera animation
    if (currentCount % 30 === 0) {
      postMessage({
        type: 'newCluster',
        position: { x: pos[0], y: pos[1], z: pos[2] },
      });
    }
  }
}

// Processing loops
let processInterval: ReturnType<typeof setInterval> | null = null;
let physicsInterval: ReturnType<typeof setInterval> | null = null;

/**
 * Start processing loops
 */
function startProcessing(): void {
  if (processInterval) return;
  
  // Audio processing at 20Hz (50ms intervals)
  processInterval = setInterval(() => {
    try {
      processAudio();
    } catch (e) {
      console.error('[Worker] Process error:', e);
    }
  }, 50);
  
  // Physics and position updates at 30Hz
  physicsInterval = setInterval(() => {
    applySpringForces();
    if (positionsSAB && currentCount > 0) {
      postMessage({ type: 'positions', sab: positionsSAB, count: currentCount });
    }
  }, 33);
  
  console.log('[Worker] Processing started');
}

/**
 * Stop processing
 */
function stopProcessing(): void {
  if (processInterval) {
    clearInterval(processInterval);
    processInterval = null;
  }
  if (physicsInterval) {
    clearInterval(physicsInterval);
    physicsInterval = null;
  }
}

/**
 * Handle messages from main thread
 */
self.onmessage = (event: MessageEvent<WorkerMessage>) => {
  const msg = event.data;
  
  switch (msg.type) {
    case 'init':
      console.log('[Worker] Initializing...');
      
      // Setup audio buffer references
      audioSAB = msg.sab;
      sampleRate = msg.sampleRate || 48000;
      
      // Parse SharedArrayBuffer layout
      writeIndex = new Int32Array(audioSAB, 0, 1);
      capacity = (audioSAB.byteLength - 8) / 4;
      audioData = new Float32Array(audioSAB, 8, capacity);
      
      // Initialize buffers
      initPositionBuffers();
      
      // Mark as ready immediately (no AI model to load!)
      isInitialized = true;
      postMessage({ type: 'status', message: 'AI ready' });
      
      // Start processing
      startProcessing();
      break;
      
    case 'dispose':
      console.log('[Worker] Disposing...');
      stopProcessing();
      
      // Clear state
      positionsSAB = null;
      positions = null;
      velocities = null;
      targetPositions = null;
      currentCount = 0;
      isInitialized = false;
      break;
  }
};

console.log('[ManifoldWorker] Loaded');
