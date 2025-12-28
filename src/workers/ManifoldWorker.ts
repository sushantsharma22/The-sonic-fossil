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
 * Simple FFT implementation (Cooley-Tukey radix-2 DIT)
 * For proper spectral analysis
 */
function fft(real: Float32Array, imag: Float32Array): void {
  const n = real.length;
  
  // Bit-reversal permutation
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    while (j & bit) {
      j ^= bit;
      bit >>= 1;
    }
    j ^= bit;
    
    if (i < j) {
      [real[i], real[j]] = [real[j], real[i]];
      [imag[i], imag[j]] = [imag[j], imag[i]];
    }
  }
  
  // Cooley-Tukey FFT
  for (let len = 2; len <= n; len <<= 1) {
    const halfLen = len >> 1;
    const angle = -2 * Math.PI / len;
    
    for (let i = 0; i < n; i += len) {
      for (let j = 0; j < halfLen; j++) {
        const theta = angle * j;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        
        const re = real[i + j + halfLen];
        const im = imag[i + j + halfLen];
        
        const tRe = cos * re - sin * im;
        const tIm = sin * re + cos * im;
        
        real[i + j + halfLen] = real[i + j] - tRe;
        imag[i + j + halfLen] = imag[i + j] - tIm;
        real[i + j] += tRe;
        imag[i + j] += tIm;
      }
    }
  }
}

/**
 * Compute magnitude spectrum from FFT
 */
function computeSpectrum(samples: Float32Array, fftSize: number): Float32Array {
  // Prepare FFT input with Hann window
  const real = new Float32Array(fftSize);
  const imag = new Float32Array(fftSize);
  
  const len = Math.min(samples.length, fftSize);
  for (let i = 0; i < len; i++) {
    // Hann window to reduce spectral leakage
    const window = 0.5 * (1 - Math.cos(2 * Math.PI * i / (len - 1)));
    real[i] = samples[i] * window;
  }
  
  fft(real, imag);
  
  // Compute magnitude (only need first half due to symmetry)
  const spectrum = new Float32Array(fftSize / 2);
  for (let i = 0; i < fftSize / 2; i++) {
    spectrum[i] = Math.sqrt(real[i] * real[i] + imag[i] * imag[i]) / fftSize;
  }
  
  return spectrum;
}

/**
 * Extract scientifically meaningful audio features
 * Based on established audio analysis techniques
 */
function extractAudioFeatures(samples: Float32Array): {
  rms: number;           // Root Mean Square (loudness)
  spectralCentroid: number;  // "Brightness" - center of mass of spectrum (Hz)
  spectralSpread: number;    // Width of the spectrum
  spectralRolloff: number;   // Frequency below which 85% of energy is contained
  zeroCrossingRate: number;  // Related to noisiness/pitch
  spectralFlatness: number;  // Tonality (0=tonal, 1=noise)
  lowEnergy: number;     // Energy in bass (20-300 Hz)
  midEnergy: number;     // Energy in mids (300-2000 Hz)  
  highEnergy: number;    // Energy in highs (2000-8000 Hz)
} {
  const n = samples.length;
  
  // 1. RMS (Root Mean Square) - Perceived loudness
  let sumSq = 0;
  for (let i = 0; i < n; i++) {
    sumSq += samples[i] * samples[i];
  }
  const rms = Math.sqrt(sumSq / n);
  
  // 2. Zero Crossing Rate - Indicates noisiness and approximate pitch
  let zeroCrossings = 0;
  for (let i = 1; i < n; i++) {
    if ((samples[i] >= 0) !== (samples[i - 1] >= 0)) {
      zeroCrossings++;
    }
  }
  const zeroCrossingRate = zeroCrossings / n;
  
  // 3. Compute FFT spectrum for spectral features
  const fftSize = 2048;
  const spectrum = computeSpectrum(samples, fftSize);
  const binFreq = sampleRate / fftSize; // Frequency per bin
  
  // 4. Spectral Centroid - "Center of mass" of the spectrum
  // Higher = brighter sound, Lower = darker sound
  let weightedSum = 0;
  let totalMag = 0;
  for (let i = 1; i < spectrum.length; i++) {
    const freq = i * binFreq;
    weightedSum += freq * spectrum[i];
    totalMag += spectrum[i];
  }
  const spectralCentroid = totalMag > 0 ? weightedSum / totalMag : 0;
  
  // 5. Spectral Spread - Standard deviation around centroid
  let spreadSum = 0;
  for (let i = 1; i < spectrum.length; i++) {
    const freq = i * binFreq;
    const diff = freq - spectralCentroid;
    spreadSum += diff * diff * spectrum[i];
  }
  const spectralSpread = totalMag > 0 ? Math.sqrt(spreadSum / totalMag) : 0;
  
  // 6. Spectral Rolloff - Frequency containing 85% of energy
  const rolloffThreshold = 0.85;
  let cumEnergy = 0;
  const totalEnergy = spectrum.reduce((a, b) => a + b * b, 0);
  let spectralRolloff = 0;
  for (let i = 0; i < spectrum.length; i++) {
    cumEnergy += spectrum[i] * spectrum[i];
    if (cumEnergy >= rolloffThreshold * totalEnergy) {
      spectralRolloff = i * binFreq;
      break;
    }
  }
  
  // 7. Spectral Flatness - Geometric mean / Arithmetic mean
  // 0 = pure tone, 1 = white noise
  let logSum = 0;
  let sum = 0;
  let count = 0;
  for (let i = 1; i < spectrum.length; i++) {
    if (spectrum[i] > 1e-10) {
      logSum += Math.log(spectrum[i]);
      sum += spectrum[i];
      count++;
    }
  }
  const geometricMean = count > 0 ? Math.exp(logSum / count) : 0;
  const arithmeticMean = count > 0 ? sum / count : 0;
  const spectralFlatness = arithmeticMean > 0 ? geometricMean / arithmeticMean : 0;
  
  // 8. Band Energies - Energy in different frequency ranges
  // These correspond to perceptual categories
  const lowBin = Math.floor(300 / binFreq);      // 0-300 Hz (bass)
  const midBin = Math.floor(2000 / binFreq);     // 300-2000 Hz (mids)
  const highBin = Math.floor(8000 / binFreq);    // 2000-8000 Hz (highs)
  
  let lowEnergy = 0, midEnergy = 0, highEnergy = 0;
  for (let i = 0; i < spectrum.length && i < highBin; i++) {
    const e = spectrum[i] * spectrum[i];
    if (i < lowBin) lowEnergy += e;
    else if (i < midBin) midEnergy += e;
    else highEnergy += e;
  }
  
  // Normalize energies
  const maxE = Math.max(lowEnergy, midEnergy, highEnergy, 1e-10);
  lowEnergy = Math.sqrt(lowEnergy) / Math.sqrt(maxE);
  midEnergy = Math.sqrt(midEnergy) / Math.sqrt(maxE);
  highEnergy = Math.sqrt(highEnergy) / Math.sqrt(maxE);
  
  return {
    rms,
    spectralCentroid,
    spectralSpread,
    spectralRolloff,
    zeroCrossingRate,
    spectralFlatness,
    lowEnergy,
    midEnergy,
    highEnergy
  };
}

/**
 * Map audio features to 3D position using perceptually meaningful axes
 * 
 * Scientific basis:
 * - X axis: Spectral Centroid (brightness/timbre)
 *   Bird chirps → high X (bright), Low rumbles → low X (dark)
 * 
 * - Y axis: Energy/Loudness (RMS)
 *   Loud sounds → high Y, Quiet sounds → low Y
 * 
 * - Z axis: Spectral Flatness (tonality)
 *   Pure tones → low Z, Noisy sounds → high Z
 * 
 * This creates natural clustering:
 * - Bird songs: High X, Variable Y, Low-Mid Z (bright, tonal)
 * - Wind/water: Mid X, Low Y, High Z (broadband noise)
 * - Speech: Mid X, Mid Y, Mid Z (complex harmonic)
 */
function featuresToPosition(features: ReturnType<typeof extractAudioFeatures>): [number, number, number] {
  // Normalize spectral centroid to [-3, 3]
  // Typical range: 500 Hz (dark) to 5000 Hz (bright)
  // Bird chirps: 2000-8000 Hz → will be positive X
  const centroidNorm = Math.log10(Math.max(features.spectralCentroid, 100)) - 3; // log scale
  let x = centroidNorm * 2.5;
  
  // Normalize RMS to [-3, 3]
  // Use log scale for perceptual loudness (dB-like)
  const rmsDb = 20 * Math.log10(Math.max(features.rms, 1e-6));
  // Typical range: -60 dB (very quiet) to 0 dB (max)
  let y = (rmsDb + 40) / 15; // Maps -60dB→-2.7, -10dB→+2
  
  // Spectral flatness to Z axis [-3, 3]
  // 0 = pure tone, 1 = white noise
  let z = (features.spectralFlatness - 0.5) * 6;
  
  // Secondary modulation based on band energies
  // High frequency energy pushes slightly up and right
  x += features.highEnergy * 0.5;
  y += (features.midEnergy - features.lowEnergy) * 0.3;
  
  // Spread affects Z - wide spectrum sounds spread more in Z
  const spreadNorm = features.spectralSpread / 2000;
  z += (spreadNorm - 0.5) * 0.5;
  
  // Clamp to visualization bounds
  x = Math.max(-4, Math.min(4, x));
  y = Math.max(-4, Math.min(4, y));
  z = Math.max(-4, Math.min(4, z));
  
  return [x, y, z];
}

/**
 * Compute confidence based on signal strength and quality
 */
function computeConfidence(features: ReturnType<typeof extractAudioFeatures>): number {
  // Higher confidence for louder, more distinct sounds
  const rmsConf = Math.min(1, features.rms * 10);
  // Lower confidence for pure noise
  const tonalConf = 1 - features.spectralFlatness * 0.5;
  return Math.min(1, Math.max(0, rmsConf * tonalConf));
}

/**
 * Apply spring forces to animate points smoothly toward targets
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
  
  // Extract scientifically meaningful features
  const features = extractAudioFeatures(samples);
  
  // Compute 3D position based on audio characteristics
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
    
    // Log with scientific context
    console.log(`[Worker] Point ${currentCount} → X:${pos[0].toFixed(2)} (brightness) Y:${pos[1].toFixed(2)} (loudness) Z:${pos[2].toFixed(2)} (tonality) | Centroid:${features.spectralCentroid.toFixed(0)}Hz RMS:${(features.rms * 100).toFixed(1)}%`);
    
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
