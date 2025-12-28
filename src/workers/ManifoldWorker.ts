/**
 * ManifoldWorker.ts - Web Worker for Audio Analysis + 3D Visualization
 * 
 * Advanced bioacoustic analysis approach:
 * - FFT-based spectral analysis
 * - MFCC (Mel-Frequency Cepstral Coefficients) for acoustic fingerprinting
 * - Pitch detection for harmonic analysis
 * - UMAP dimensionality reduction: 20D features → 3D visualization space
 * - DBSCAN clustering for unsupervised source counting
 * 
 * FULLY UNSUPERVISED APPROACH:
 * No predefined categories or species labels. UMAP discovers natural structure
 * in 20-dimensional acoustic feature space, DBSCAN identifies distinct clusters.
 */

import DBSCAN from '@cdxoo/dbscan';
import { UMAP } from 'umap-js';

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

// Audio feature data sent to main thread for export
interface AudioFeatureData {
  timestamp: number;
  position: [number, number, number];  // UMAP 3D projection
  rawFeatures: number[];  // Full 20D feature vector for UMAP
  features: {
    rms: number;
    spectralCentroid: number;
    spectralSpread: number;
    spectralRolloff: number;
    zeroCrossingRate: number;
    spectralFlatness: number;
    pitch: number;
    mfcc: number[];
    lowEnergy: number;
    midEnergy: number;
    highEnergy: number;
    veryHighEnergy: number;
  };
  clusterId: number; // DBSCAN cluster assignment (-1 = noise)
}

// Cluster statistics interface
interface ClusterStats {
  numDistinctSounds: number;
  clusterLabels: Int32Array;
  clusterSizes: Array<{ id: number; size: number }>;
  clusterCentroids: Array<{ x: number; y: number; z: number }>;
}

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

// Feature history for export
const featureHistory: AudioFeatureData[] = [];

// Point data storage
let currentCount = 0;

// UMAP batch accumulation
const featureVectors: number[][] = []; // 20D feature vectors
const UMAP_BATCH_SIZE = 200; // Minimum vectors needed for UMAP
let umapModel: UMAP | null = null;
let lastUmapTime = 0;
const UMAP_INTERVAL = 2000; // Run UMAP every 2 seconds when batch ready

// DBSCAN clustering state
let clusterLabels: Int32Array = new Int32Array(MAX_POINTS);
let lastClusterTime = 0;
const CLUSTER_INTERVAL = 500; // Run DBSCAN every 500ms for performance
let dbscanEpsilon = 0.3; // Starting epsilon (smaller for UMAP space)
let lastClusterStats: ClusterStats | null = null;

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
  pitch: number;         // Fundamental frequency estimate (Hz)
  mfcc: number[];        // Mel-frequency cepstral coefficients (13 coefficients)
  lowEnergy: number;     // Energy in bass (20-300 Hz)
  midEnergy: number;     // Energy in mids (300-2000 Hz)  
  highEnergy: number;    // Energy in highs (2000-8000 Hz)
  veryHighEnergy: number; // Ultra-high (8000-20000 Hz) - birds/bats
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
  const veryHighBin = Math.floor(20000 / binFreq); // 8000-20000 Hz (birds/bats)
  
  let lowEnergy = 0, midEnergy = 0, highEnergy = 0, veryHighEnergy = 0;
  for (let i = 0; i < spectrum.length; i++) {
    const e = spectrum[i] * spectrum[i];
    if (i < lowBin) lowEnergy += e;
    else if (i < midBin) midEnergy += e;
    else if (i < highBin) highEnergy += e;
    else if (i < veryHighBin) veryHighEnergy += e;
  }
  
  // Normalize energies
  const totalE = lowEnergy + midEnergy + highEnergy + veryHighEnergy + 1e-10;
  lowEnergy = Math.sqrt(lowEnergy / totalE);
  midEnergy = Math.sqrt(midEnergy / totalE);
  highEnergy = Math.sqrt(highEnergy / totalE);
  veryHighEnergy = Math.sqrt(veryHighEnergy / totalE);
  
  // 9. Pitch Detection using autocorrelation
  const pitch = detectPitch(samples, sampleRate);
  
  // 10. MFCC - Mel-frequency cepstral coefficients (crucial for species ID)
  const mfcc = computeMFCC(spectrum, sampleRate, fftSize, 13);
  
  return {
    rms,
    spectralCentroid,
    spectralSpread,
    spectralRolloff,
    zeroCrossingRate,
    spectralFlatness,
    pitch,
    mfcc,
    lowEnergy,
    midEnergy,
    highEnergy,
    veryHighEnergy
  };
}

/**
 * Pitch detection using autocorrelation method
 * Good for harmonic sounds (birds, humans)
 */
function detectPitch(samples: Float32Array, sr: number): number {
  const n = samples.length;
  const minLag = Math.floor(sr / 8000);  // Max 8kHz
  const maxLag = Math.floor(sr / 50);    // Min 50Hz
  
  let bestCorr = 0;
  let bestLag = 0;
  
  for (let lag = minLag; lag < maxLag && lag < n / 2; lag++) {
    let corr = 0;
    for (let i = 0; i < n - lag; i++) {
      corr += samples[i] * samples[i + lag];
    }
    corr /= (n - lag);
    
    if (corr > bestCorr) {
      bestCorr = corr;
      bestLag = lag;
    }
  }
  
  return bestLag > 0 ? sr / bestLag : 0;
}

/**
 * Compute Mel-Frequency Cepstral Coefficients
 * Standard feature for audio/speech/species classification
 */
function computeMFCC(spectrum: Float32Array, sr: number, fftSize: number, numCoeffs: number): number[] {
  const numFilters = 26;
  const minFreq = 20;
  const maxFreq = Math.min(sr / 2, 20000);
  
  // Mel scale conversion
  const freqToMel = (f: number) => 2595 * Math.log10(1 + f / 700);
  const melToFreq = (m: number) => 700 * (Math.pow(10, m / 2595) - 1);
  
  const minMel = freqToMel(minFreq);
  const maxMel = freqToMel(maxFreq);
  
  // Create mel filter bank
  const melPoints = new Array(numFilters + 2);
  for (let i = 0; i < numFilters + 2; i++) {
    melPoints[i] = melToFreq(minMel + (maxMel - minMel) * i / (numFilters + 1));
  }
  
  // Convert to FFT bins
  const binPoints = melPoints.map(f => Math.floor((fftSize + 1) * f / sr));
  
  // Apply mel filters
  const melEnergies = new Array(numFilters).fill(0);
  for (let m = 0; m < numFilters; m++) {
    const startBin = binPoints[m];
    const peakBin = binPoints[m + 1];
    const endBin = binPoints[m + 2];
    
    for (let k = startBin; k < peakBin && k < spectrum.length; k++) {
      const weight = (k - startBin) / (peakBin - startBin + 1e-10);
      melEnergies[m] += spectrum[k] * spectrum[k] * weight;
    }
    for (let k = peakBin; k < endBin && k < spectrum.length; k++) {
      const weight = (endBin - k) / (endBin - peakBin + 1e-10);
      melEnergies[m] += spectrum[k] * spectrum[k] * weight;
    }
    
    // Log compression
    melEnergies[m] = Math.log(melEnergies[m] + 1e-10);
  }
  
  // DCT to get cepstral coefficients
  const mfcc = new Array(numCoeffs).fill(0);
  for (let i = 0; i < numCoeffs; i++) {
    for (let j = 0; j < numFilters; j++) {
      mfcc[i] += melEnergies[j] * Math.cos(Math.PI * i * (j + 0.5) / numFilters);
    }
    mfcc[i] *= Math.sqrt(2 / numFilters);
  }
  
  return mfcc;
}

/**
 * Extract 20D feature vector for UMAP
 * Combines all meaningful acoustic features into single vector
 */
function extract20DFeatureVector(features: ReturnType<typeof extractAudioFeatures>): number[] {
  return [
    features.spectralCentroid,
    features.spectralSpread,
    features.spectralRolloff,
    features.zeroCrossingRate,
    features.spectralFlatness,
    features.pitch,
    features.lowEnergy,
    features.midEnergy,
    features.highEnergy,
    features.veryHighEnergy,
    ...features.mfcc  // 13 MFCC coefficients
  ];
}

/**
 * Run UMAP dimensionality reduction on accumulated feature vectors
 * Projects 20D feature space to 3D visualization space
 */
function runUMAPProjection(): void {
  if (featureVectors.length < UMAP_BATCH_SIZE) {
    console.log(`[Worker] UMAP waiting: ${featureVectors.length}/${UMAP_BATCH_SIZE} vectors`);
    return;
  }
  
  const startTime = performance.now();
  
  // Initialize or update UMAP model
  if (!umapModel) {
    umapModel = new UMAP({
      nComponents: 3,
      nNeighbors: 15,
      minDist: 0.1,
      spread: 1.0,
      random: Math.random
    });
  }
  
  // Fit UMAP on all accumulated vectors
  const projectedPositions = umapModel.fit(featureVectors);
  
  // Update target positions with UMAP output
  if (targetPositions) {
    for (let i = 0; i < Math.min(projectedPositions.length, currentCount); i++) {
      const idx = i * 3;
      // Scale UMAP output to fit in our [-4, 4] bounds
      // UMAP typically outputs in [-5, 15] range, normalize it
      targetPositions[idx] = Math.max(-4, Math.min(4, (projectedPositions[i][0] - 5) * 0.8));
      targetPositions[idx + 1] = Math.max(-4, Math.min(4, (projectedPositions[i][1] - 5) * 0.8));
      targetPositions[idx + 2] = Math.max(-4, Math.min(4, (projectedPositions[i][2] - 5) * 0.8));
    }
  }
  
  const elapsed = performance.now() - startTime;
  console.log(`[Worker] UMAP: projected ${projectedPositions.length} vectors in ${elapsed.toFixed(1)}ms`);
}

/**
 * REMOVED: classifySound() - No supervised classification in unsupervised clustering
 * All categorization is done by DBSCAN on UMAP-projected space
 */

function classifySound_DEPRECATED(features: ReturnType<typeof extractAudioFeatures>): { category: string; confidence: number } {
  const { spectralCentroid, pitch, spectralFlatness, mfcc, lowEnergy, highEnergy, veryHighEnergy, rms } = features;
  
  let category = 'unknown';
  let confidence = 0;
  
  // High-frequency dominant with harmonic content → Bird (high pitched)
  if (spectralCentroid > 3000 && veryHighEnergy > 0.3 && spectralFlatness < 0.5) {
    if (pitch > 2000) {
      category = 'bird_songbird';
      confidence = 0.7 + (veryHighEnergy * 0.3);
    } else if (pitch > 500 && pitch < 2000) {
      category = 'bird_owl';
      confidence = 0.6 + ((1 - spectralFlatness) * 0.3);
    } else {
      category = 'bird_other';
      confidence = 0.5;
    }
  }
  // Mid-frequency with formants (MFCC pattern) → Human/speech
  else if (spectralCentroid > 500 && spectralCentroid < 3000 && lowEnergy < 0.5 && spectralFlatness < 0.4) {
    // Check for formant-like structure in MFCCs
    const mfccVariance = mfcc.slice(1, 6).reduce((a, b) => a + b * b, 0) / 5;
    if (mfccVariance > 1) {
      category = 'human_speech';
      confidence = 0.6 + Math.min(0.3, mfccVariance / 10);
    } else {
      category = 'human_other';
      confidence = 0.5;
    }
  }
  // Low frequency dominant → Large animal or machinery
  else if (lowEnergy > 0.5 && spectralCentroid < 500) {
    if (spectralFlatness > 0.6) {
      category = 'ambient_machinery';
      confidence = 0.5 + (spectralFlatness * 0.3);
    } else {
      category = 'animal_large';
      confidence = 0.5 + (lowEnergy * 0.3);
    }
  }
  // High flatness → Noise/ambient
  else if (spectralFlatness > 0.7) {
    category = 'ambient_noise';
    confidence = 0.4 + (spectralFlatness * 0.3);
  }
  // Insects have very high frequencies and rhythmic patterns
  else if (veryHighEnergy > 0.4 && spectralFlatness > 0.3) {
    category = 'insect';
    confidence = 0.5 + (veryHighEnergy * 0.3);
  }
  else {
    category = 'unknown';
    confidence = 0.3;
  }
  
  // Adjust confidence by signal strength
  confidence *= Math.min(1, rms * 5 + 0.3);
  
  return { category: 'deprecated', confidence: 0 };
}

// Running statistics for normalization (DEPRECATED - not used with UMAP)
const featureStats = {
  pitchMin: 50, pitchMax: 8000,
  centroidMin: 100, centroidMax: 10000,
  flatnessMin: 0, flatnessMax: 1,
  spreadMin: 0, spreadMax: 3000,
  mfccMin: -20, mfccMax: 20,
  zcMin: 0, zcMax: 0.5
};

/**
 * DEPRECATED: Manual feature mapping removed - replaced by UMAP
 * featuresToPosition() is no longer used. UMAP handles all dimensionality reduction.
 */

/**
 * OLD FUNCTION - Map audio features to 3D position
 * 
 * The key insight: We need ORTHOGONAL (independent) features for each axis
 * to avoid the straight-line problem.
 * 
 * AXIS DESIGN - Truly Independent Dimensions:
 * 
 * X axis: SPECTRAL CENTROID (frequency "center of mass")
 *   - Pure frequency information, independent of amplitude
 *   - Low rumbles → -X, High chirps → +X
 *   - Range: 100Hz to 10000Hz mapped to -4 to +4
 * 
 * Y axis: SPECTRAL CONTRAST (ratio of peak to average energy)
 *   - Measures "peakiness" vs "flatness" of spectrum
 *   - Tonal sounds (clear pitch) → +Y
 *   - Noisy sounds (flat spectrum) → -Y
 *   - Independent of WHERE the frequency is (that's X)
 * 
 * Z axis: TEMPORAL VARIATION (how much the sound changes over time)
 *   - Computed from history of recent samples
 *   - Steady drones → -Z
 *   - Rapidly changing sounds → +Z
 *   - Independent of frequency (X) and tonality (Y)
 * 
 * This creates NATURAL 3D CLUSTERING:
 *   - Bird chirps: +X (high freq), +Y (tonal), +Z (varying) → upper-right-front
 *   - Owl hoots: -X (low freq), +Y (tonal), -Z (steady) → lower-left-back
 *   - Speech: mid X, mid-high Y (harmonic), +Z (varying)
 *   - White noise: spread X, -Y (flat), mid Z
 *   - Engine hum: -X (low), -Y (flat), -Z (steady) → lower-left-back
 */
function featuresToPosition(features: ReturnType<typeof extractAudioFeatures>): [number, number, number] {
  // Store in history for temporal analysis
  recentFeatures.push(features);
  if (recentFeatures.length > HISTORY_SIZE) {
    recentFeatures.shift();
  }
  
  // ═══════════════════════════════════════════════════════════════
  // X AXIS: SPECTRAL CENTROID (Pure Frequency Position)
  // ═══════════════════════════════════════════════════════════════
  // Log scale because human pitch perception is logarithmic
  // 100Hz → -4, 1000Hz → 0, 10000Hz → +4
  const centroidHz = Math.max(100, Math.min(15000, features.spectralCentroid));
  const x = (Math.log10(centroidHz) - 3) * 4; // log10(1000) = 3 is center
  
  // ═══════════════════════════════════════════════════════════════
  // Y AXIS: SPECTRAL CONTRAST / TONALITY
  // ═══════════════════════════════════════════════════════════════
  // Combines:
  // 1. Inverse of spectral flatness (flat = noisy = low Y)
  // 2. Pitch clarity (clear pitch = high Y)
  // 3. Harmonic structure from MFCCs
  
  // Spectral flatness: 0 = pure tone, 1 = white noise
  // Invert so tonal = high Y
  const tonality = 1 - features.spectralFlatness;
  
  // Pitch confidence: if we detected a clear pitch, that's tonal
  const pitchClarity = features.pitch > 0 ? 0.3 : 0;
  
  // MFCC delta (difference between coefficients indicates harmonic structure)
  let mfccContrast = 0;
  for (let i = 1; i < Math.min(6, features.mfcc.length); i++) {
    mfccContrast += Math.abs(features.mfcc[i] - features.mfcc[i-1]);
  }
  mfccContrast = Math.min(1, mfccContrast / 10);
  
  const y = (tonality * 0.5 + pitchClarity + mfccContrast * 0.4) * 8 - 4;
  
  // ═══════════════════════════════════════════════════════════════
  // Z AXIS: TEMPORAL VARIATION (Change Over Time)
  // ═══════════════════════════════════════════════════════════════
  // This is COMPLETELY INDEPENDENT of frequency and tonality
  // It measures how much the sound is changing
  
  let temporalVariation = 0;
  if (recentFeatures.length >= 3) {
    // Compute variance of recent centroids
    const recentCentroids = recentFeatures.map(f => f.spectralCentroid);
    const meanCentroid = recentCentroids.reduce((a, b) => a + b, 0) / recentCentroids.length;
    const centroidVar = recentCentroids.reduce((a, c) => a + Math.pow(c - meanCentroid, 2), 0) / recentCentroids.length;
    
    // Compute variance of recent RMS (amplitude changes)
    const recentRMS = recentFeatures.map(f => f.rms);
    const meanRMS = recentRMS.reduce((a, b) => a + b, 0) / recentRMS.length;
    const rmsVar = recentRMS.reduce((a, r) => a + Math.pow(r - meanRMS, 2), 0) / recentRMS.length;
    
    // Normalize and combine
    temporalVariation = Math.sqrt(centroidVar) / 1000 + Math.sqrt(rmsVar) * 10;
  }
  
  // Also use zero-crossing rate variation as indicator of texture changes
  const zcContrib = features.zeroCrossingRate * 4;
  
  const z = Math.min(4, Math.max(-4, temporalVariation * 2 + zcContrib - 2));
  
  // ═══════════════════════════════════════════════════════════════
  // FINAL BOUNDS CHECK (keep points in visible space)
  // ═══════════════════════════════════════════════════════════════
  // DEPRECATED - Replaced by UMAP projection
  return [0, 0, 0];
}

/**
 * Get UMAP position for point index (from targetPositions buffer)
 */
function getUMAPPosition(index: number): [number, number, number] {
  if (!targetPositions || index >= currentCount) {
    return [0, 0, 0];
  }
  const idx = index * 3;
  return [
    targetPositions[idx],
    targetPositions[idx + 1],
    targetPositions[idx + 2]
  ];
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
 * DBSCAN Clustering for Unsupervised Sound Source Counting
 * 
 * Runs on 3D positions to identify distinct sound clusters without classification.
 * Uses silhouette score to auto-tune epsilon parameter.
 */
function runDBSCANClustering(): ClusterStats | null {
  if (currentCount < 10 || !positions) return null;
  
  const startTime = performance.now();
  
  // Prepare data points as array of [x, y, z]
  const points: number[][] = [];
  for (let i = 0; i < currentCount; i++) {
    points.push([
      positions[i * 3],
      positions[i * 3 + 1],
      positions[i * 3 + 2]
    ]);
  }
  
  // Run DBSCAN with current epsilon
  const dbscan = new DBSCAN({
    epsilon: dbscanEpsilon,
    minPoints: 5,
    distanceFunction: euclideanDistance
  });
  
  const labels = dbscan.fit(points);
  
  // Calculate cluster statistics
  const clusterMap = new Map<number, number[]>();
  let noiseCount = 0;
  
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    clusterLabels[i] = label;
    
    if (label === -1) {
      noiseCount++;
    } else {
      if (!clusterMap.has(label)) {
        clusterMap.set(label, []);
      }
      clusterMap.get(label)!.push(i);
    }
    
    // Update feature history with cluster ID
    if (featureHistory[i]) {
      featureHistory[i].clusterId = label;
    }
  }
  
  // Calculate cluster centroids
  const clusterCentroids: Array<{ x: number; y: number; z: number }> = [];
  const clusterSizes: Array<{ id: number; size: number }> = [];
  
  clusterMap.forEach((indices, clusterId) => {
    let sumX = 0, sumY = 0, sumZ = 0;
    for (const idx of indices) {
      sumX += positions[idx * 3];
      sumY += positions[idx * 3 + 1];
      sumZ += positions[idx * 3 + 2];
    }
    const size = indices.length;
    clusterCentroids.push({
      x: sumX / size,
      y: sumY / size,
      z: sumZ / size
    });
    clusterSizes.push({ id: clusterId, size });
  });
  
  // Sort by size descending
  clusterSizes.sort((a, b) => b.size - a.size);
  
  // Calculate silhouette score for auto-tuning (simplified version)
  const silhouetteScore = calculateSilhouetteScore(points, labels, clusterMap);
  
  // Auto-tune epsilon based on silhouette score
  if (silhouetteScore < 0.3 && clusterMap.size > 1) {
    // Poor clustering, try larger epsilon (merge more)
    dbscanEpsilon = Math.min(1.2, dbscanEpsilon * 1.1);
  } else if (silhouetteScore > 0.7 && clusterMap.size === 1 && noiseCount > currentCount * 0.3) {
    // Too few clusters with lots of noise, try smaller epsilon
    dbscanEpsilon = Math.max(0.15, dbscanEpsilon * 0.9);
  }
  
  const elapsed = performance.now() - startTime;
  
  const stats: ClusterStats = {
    numDistinctSounds: clusterMap.size,
    clusterLabels: clusterLabels.slice(0, currentCount),
    clusterSizes,
    clusterCentroids
  };
  
  console.log(`[Worker] DBSCAN: ${clusterMap.size} clusters, ${noiseCount} noise, ε=${dbscanEpsilon.toFixed(2)}, silhouette=${silhouetteScore.toFixed(2)}, ${elapsed.toFixed(1)}ms`);
  
  return stats;
}

/**
 * Euclidean distance function for DBSCAN
 */
function euclideanDistance(a: number[], b: number[]): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Simplified silhouette score calculation
 * Measures how well-separated clusters are
 */
function calculateSilhouetteScore(
  points: number[][],
  labels: number[],
  clusterMap: Map<number, number[]>
): number {
  if (clusterMap.size < 2) return 0;
  
  let totalScore = 0;
  let validPoints = 0;
  
  // Sample points for performance (max 200)
  const sampleSize = Math.min(200, points.length);
  const step = Math.max(1, Math.floor(points.length / sampleSize));
  
  for (let i = 0; i < points.length; i += step) {
    const label = labels[i];
    if (label === -1) continue; // Skip noise
    
    const cluster = clusterMap.get(label)!;
    if (cluster.length < 2) continue;
    
    // a(i) = average distance to points in same cluster
    let intraClusterDist = 0;
    for (const j of cluster) {
      if (i !== j) {
        intraClusterDist += euclideanDistance(points[i], points[j]);
      }
    }
    const a = intraClusterDist / (cluster.length - 1);
    
    // b(i) = minimum average distance to points in other clusters
    let minInterClusterDist = Infinity;
    clusterMap.forEach((otherCluster, otherLabel) => {
      if (otherLabel === label) return;
      
      let interDist = 0;
      for (const j of otherCluster) {
        interDist += euclideanDistance(points[i], points[j]);
      }
      const avgDist = interDist / otherCluster.length;
      minInterClusterDist = Math.min(minInterClusterDist, avgDist);
    });
    const b = minInterClusterDist;
    
    // Silhouette coefficient for point i
    const s = (b - a) / Math.max(a, b);
    totalScore += s;
    validPoints++;
  }
  
  return validPoints > 0 ? totalScore / validPoints : 0;
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
 * Main processing function - Now uses UMAP for dimensionality reduction
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
  
  // Extract 20D feature vector for UMAP
  const featureVector = extract20DFeatureVector(features);
  featureVectors.push(featureVector);
  
  // Add new point
  if (currentCount < MAX_POINTS && positions && targetPositions) {
    const idx = currentCount * 3;
    
    // Initialize position at origin (will be updated by UMAP)
    if (featureVectors.length < UMAP_BATCH_SIZE) {
      // Before first UMAP run, place points randomly
      targetPositions[idx] = (Math.random() - 0.5) * 2;
      targetPositions[idx + 1] = (Math.random() - 0.5) * 2;
      targetPositions[idx + 2] = (Math.random() - 0.5) * 2;
    }
    // Note: targetPositions will be updated by runUMAPProjection()
    
    // Initialize current position with offset for animation effect
    positions[idx] = targetPositions[idx] + (Math.random() - 0.5) * 1.5;
    positions[idx + 1] = targetPositions[idx + 1] + (Math.random() - 0.5) * 1.5;
    positions[idx + 2] = targetPositions[idx + 2] + (Math.random() - 0.5) * 1.5;
    
    currentCount++;
    
    // Get current UMAP position for storage (will be [0,0,0] before first UMAP run)
    const pos = getUMAPPosition(currentCount - 1);
    
    // Store feature data for export (NO CLASSIFICATION)
    const featureData: AudioFeatureData = {
      timestamp: now,
      position: pos,
      rawFeatures: featureVector,
      features: {
        rms: features.rms,
        spectralCentroid: features.spectralCentroid,
        spectralSpread: features.spectralSpread,
        spectralRolloff: features.spectralRolloff,
        zeroCrossingRate: features.zeroCrossingRate,
        spectralFlatness: features.spectralFlatness,
        pitch: features.pitch,
        mfcc: features.mfcc,
        lowEnergy: features.lowEnergy,
        midEnergy: features.midEnergy,
        highEnergy: features.highEnergy,
        veryHighEnergy: features.veryHighEnergy
      },
      clusterId: -1  // Will be assigned by DBSCAN
    };
    featureHistory.push(featureData);
    
    // Log progress (no classification)
    console.log(`[Worker] #${currentCount} → UMAP batch ${featureVectors.length}/${UMAP_BATCH_SIZE} | Centroid:${features.spectralCentroid.toFixed(0)}Hz Pitch:${features.pitch.toFixed(0)}Hz`);
    
    // Send confidence based on signal strength (no classification)
    const confidence = computeConfidence(features);
    postMessage({ 
      type: 'confidence', 
      value: confidence
    });
    
    // Run UMAP when batch is ready
    if (featureVectors.length >= UMAP_BATCH_SIZE && now - lastUmapTime >= UMAP_INTERVAL) {
      lastUmapTime = now;
      runUMAPProjection();
    }
    
    // Notify about new cluster periodically for camera animation
    if (currentCount % 30 === 0 && currentCount > UMAP_BATCH_SIZE) {
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
let clusterInterval: ReturnType<typeof setInterval> | null = null;

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
  
  // UMAP projection at 0.5Hz (every 2 seconds when batch ready)
  let umapInterval = setInterval(() => {
    const now = Date.now();
    if (featureVectors.length >= UMAP_BATCH_SIZE && now - lastUmapTime >= UMAP_INTERVAL) {
      lastUmapTime = now;
      try {
        runUMAPProjection();
      } catch (e) {
        console.error('[Worker] UMAP error:', e);
      }
    }
  }, 500);
  
  // DBSCAN clustering at 2Hz (every 500ms for performance)
  clusterInterval = setInterval(() => {
    const now = Date.now();
    if (now - lastClusterTime >= CLUSTER_INTERVAL && currentCount >= 10) {
      lastClusterTime = now;
      try {
        const stats = runDBSCANClustering();
        if (stats) {
          lastClusterStats = stats;
          postMessage({
            type: 'clusters_updated',
            numDistinctSounds: stats.numDistinctSounds,
            clusterLabels: stats.clusterLabels,
            clusterSizes: stats.clusterSizes,
            clusterCentroids: stats.clusterCentroids
          });
        }
      } catch (e) {
        console.error('[Worker] DBSCAN error:', e);
      }
    }
  }, 250);
  
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
  if (clusterInterval) {
    clearInterval(clusterInterval);
    clusterInterval = null;
  }
}

// Types for messages
interface ExportMessage {
  type: 'export';
}

type WorkerMessage = InitMessage | DisposeMessage | ExportMessage;

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
    
    case 'export':
      // Send all feature history for JSON export
      postMessage({
        type: 'exportData',
        data: {
          metadata: {
            exportDate: new Date().toISOString(),
            sampleRate,
            totalPoints: currentCount,
            sessionDuration: featureHistory.length > 0 
              ? (featureHistory[featureHistory.length - 1].timestamp - featureHistory[0].timestamp) / 1000 
              : 0,
            umapVectors: featureVectors.length,
            umapProjected: umapModel !== null
          },
          points: featureHistory,
          axisInfo: {
            x: { label: 'UMAP Dimension 1', unit: 'normalized', range: [-4, 4], description: 'First UMAP component of 20D acoustic features' },
            y: { label: 'UMAP Dimension 2', unit: 'normalized', range: [-4, 4], description: 'Second UMAP component of 20D acoustic features' },
            z: { label: 'UMAP Dimension 3', unit: 'normalized', range: [-4, 4], description: 'Third UMAP component of 20D acoustic features' }
          },
          note: 'Fully unsupervised clustering. No predefined categories. DBSCAN discovers natural acoustic clusters in UMAP-projected space.'
        }
      });
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
      featureHistory.length = 0;
      isInitialized = false;
      break;
  }
};

console.log('[ManifoldWorker] Loaded');
