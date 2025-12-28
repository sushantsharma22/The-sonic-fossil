/**
 * SeparationWorker.ts - Real-Time Audio Source Separation
 * 
 * Implements spectral-based blind source separation for overlapping sounds.
 * Uses Non-negative Matrix Factorization (NMF) for unsupervised demixing.
 * 
 * ARCHITECTURE:
 * - Input: Mixed audio buffer (2 seconds at 48kHz)
 * - Process: STFT → NMF decomposition → Spectral masking → iSTFT
 * - Output: N separated audio streams (typically 2-4)
 * 
 * FALLBACK: When full ML separation unavailable, uses spectral clustering
 * to identify dominant frequency bands per source.
 */

// Types
interface InitMessage {
  type: 'init';
  sab: SharedArrayBuffer;
  sampleRate: number;
  maxSources: number;
}

interface ProcessMessage {
  type: 'process';
  audioData: Float32Array;
}

interface DisposeMessage {
  type: 'dispose';
}

type WorkerMessage = InitMessage | ProcessMessage | DisposeMessage;

interface SeparatedSource {
  sourceId: number;
  audioData: Float32Array;
  dominantFrequency: number;
  energy: number;
  spectralCentroid: number;
}

// Configuration - Optimized for M3 8GB
const CONFIG = {
  FFT_SIZE: 1024,              // Reduced from 2048 for faster processing
  HOP_SIZE: 256,               // Proportionally reduced
  MIN_SOURCES: 1,
  MAX_SOURCES: 4,
  ENERGY_THRESHOLD: 0.0005,    // Minimum energy to detect a source
  FREQUENCY_BANDS: 8,          // Number of frequency bands for separation
  NMF_ITERATIONS: 10,          // Reduced from 50 for real-time on M3 8GB
  OVERLAP_THRESHOLD: 0.3,      // Spectral overlap threshold for multi-source detection
};

// State
let sampleRate = 48000;
let maxSources = 4;
let isInitialized = false;

// FFT buffers
let fftReal: Float32Array;
let fftImag: Float32Array;
let hannWindow: Float32Array;
let magnitudeMatrix: Float32Array[];
let phaseMatrix: Float32Array[];

/**
 * Initialize Hann window for STFT
 */
function initWindow(size: number): Float32Array {
  const w = new Float32Array(size);
  for (let i = 0; i < size; i++) {
    w[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (size - 1)));
  }
  return w;
}

/**
 * Simple FFT implementation (Cooley-Tukey radix-2)
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
 * Inverse FFT
 */
function ifft(real: Float32Array, imag: Float32Array): void {
  const n = real.length;
  
  // Conjugate
  for (let i = 0; i < n; i++) {
    imag[i] = -imag[i];
  }
  
  fft(real, imag);
  
  // Conjugate and scale
  for (let i = 0; i < n; i++) {
    real[i] /= n;
    imag[i] = -imag[i] / n;
  }
}

/**
 * Compute STFT (Short-Time Fourier Transform)
 */
function computeSTFT(audio: Float32Array): { magnitude: Float32Array[], phase: Float32Array[] } {
  const numFrames = Math.floor((audio.length - CONFIG.FFT_SIZE) / CONFIG.HOP_SIZE) + 1;
  const magnitude: Float32Array[] = [];
  const phase: Float32Array[] = [];
  
  for (let frame = 0; frame < numFrames; frame++) {
    const start = frame * CONFIG.HOP_SIZE;
    const real = new Float32Array(CONFIG.FFT_SIZE);
    const imag = new Float32Array(CONFIG.FFT_SIZE);
    
    // Apply window
    for (let i = 0; i < CONFIG.FFT_SIZE; i++) {
      real[i] = (start + i < audio.length) ? audio[start + i] * hannWindow[i] : 0;
    }
    
    fft(real, imag);
    
    // Extract magnitude and phase (only positive frequencies)
    const halfSize = CONFIG.FFT_SIZE / 2 + 1;
    const mag = new Float32Array(halfSize);
    const ph = new Float32Array(halfSize);
    
    for (let i = 0; i < halfSize; i++) {
      mag[i] = Math.sqrt(real[i] * real[i] + imag[i] * imag[i]);
      ph[i] = Math.atan2(imag[i], real[i]);
    }
    
    magnitude.push(mag);
    phase.push(ph);
  }
  
  return { magnitude, phase };
}

/**
 * Compute inverse STFT
 */
function computeISTFT(magnitude: Float32Array[], phase: Float32Array[], length: number): Float32Array {
  const output = new Float32Array(length);
  const windowSum = new Float32Array(length);
  
  for (let frame = 0; frame < magnitude.length; frame++) {
    const start = frame * CONFIG.HOP_SIZE;
    const real = new Float32Array(CONFIG.FFT_SIZE);
    const imag = new Float32Array(CONFIG.FFT_SIZE);
    
    // Reconstruct complex spectrum
    const halfSize = CONFIG.FFT_SIZE / 2 + 1;
    for (let i = 0; i < halfSize; i++) {
      real[i] = magnitude[frame][i] * Math.cos(phase[frame][i]);
      imag[i] = magnitude[frame][i] * Math.sin(phase[frame][i]);
    }
    
    // Mirror for negative frequencies
    for (let i = 1; i < CONFIG.FFT_SIZE / 2; i++) {
      real[CONFIG.FFT_SIZE - i] = real[i];
      imag[CONFIG.FFT_SIZE - i] = -imag[i];
    }
    
    ifft(real, imag);
    
    // Overlap-add with window
    for (let i = 0; i < CONFIG.FFT_SIZE && start + i < length; i++) {
      output[start + i] += real[i] * hannWindow[i];
      windowSum[start + i] += hannWindow[i] * hannWindow[i];
    }
  }
  
  // Normalize by window sum
  for (let i = 0; i < length; i++) {
    if (windowSum[i] > 1e-8) {
      output[i] /= windowSum[i];
    }
  }
  
  return output;
}

/**
 * Non-negative Matrix Factorization for source separation
 * Decomposes magnitude spectrogram V ≈ W * H
 * W: basis vectors (spectral patterns for each source)
 * H: activation matrix (when each source is active)
 */
function nmfDecompose(
  magnitude: Float32Array[], 
  numSources: number
): { W: Float32Array[], H: Float32Array[] } {
  const numFrames = magnitude.length;
  const numBins = magnitude[0].length;
  
  // Initialize W and H with random positive values
  const W: Float32Array[] = [];
  const H: Float32Array[] = [];
  
  for (let s = 0; s < numSources; s++) {
    W.push(new Float32Array(numBins).map(() => Math.random() * 0.1 + 0.01));
    H.push(new Float32Array(numFrames).map(() => Math.random() * 0.1 + 0.01));
  }
  
  // Multiplicative update rules (Lee & Seung)
  for (let iter = 0; iter < CONFIG.NMF_ITERATIONS; iter++) {
    // Compute V_approx = W * H
    const V_approx: Float32Array[] = [];
    for (let f = 0; f < numFrames; f++) {
      V_approx.push(new Float32Array(numBins));
      for (let b = 0; b < numBins; b++) {
        for (let s = 0; s < numSources; s++) {
          V_approx[f][b] += W[s][b] * H[s][f];
        }
        V_approx[f][b] = Math.max(V_approx[f][b], 1e-10);
      }
    }
    
    // Update H
    for (let s = 0; s < numSources; s++) {
      for (let f = 0; f < numFrames; f++) {
        let numerator = 0;
        let denominator = 0;
        for (let b = 0; b < numBins; b++) {
          numerator += W[s][b] * magnitude[f][b] / V_approx[f][b];
          denominator += W[s][b];
        }
        H[s][f] *= numerator / (denominator + 1e-10);
      }
    }
    
    // Update W
    for (let s = 0; s < numSources; s++) {
      for (let b = 0; b < numBins; b++) {
        let numerator = 0;
        let denominator = 0;
        for (let f = 0; f < numFrames; f++) {
          numerator += H[s][f] * magnitude[f][b] / V_approx[f][b];
          denominator += H[s][f];
        }
        W[s][b] *= numerator / (denominator + 1e-10);
      }
    }
  }
  
  return { W, H };
}

/**
 * Apply soft mask to separate sources
 */
function applySoftMask(
  magnitude: Float32Array[],
  W: Float32Array[],
  H: Float32Array[],
  sourceIndex: number
): Float32Array[] {
  const numFrames = magnitude.length;
  const numBins = magnitude[0].length;
  const numSources = W.length;
  
  const separated: Float32Array[] = [];
  
  for (let f = 0; f < numFrames; f++) {
    const result = new Float32Array(numBins);
    
    for (let b = 0; b < numBins; b++) {
      // Compute total reconstruction
      let total = 0;
      for (let s = 0; s < numSources; s++) {
        total += W[s][b] * H[s][f];
      }
      
      // Compute soft mask for this source
      const sourceContrib = W[sourceIndex][b] * H[sourceIndex][f];
      const mask = total > 1e-10 ? sourceContrib / total : 0;
      
      // Apply mask to original magnitude
      result[b] = magnitude[f][b] * mask;
    }
    
    separated.push(result);
  }
  
  return separated;
}

/**
 * Detect number of sources based on spectral analysis
 */
function detectNumSources(magnitude: Float32Array[]): number {
  const numFrames = magnitude.length;
  const numBins = magnitude[0].length;
  
  // Compute average spectrum
  const avgSpectrum = new Float32Array(numBins);
  for (let f = 0; f < numFrames; f++) {
    for (let b = 0; b < numBins; b++) {
      avgSpectrum[b] += magnitude[f][b] / numFrames;
    }
  }
  
  // Find spectral peaks (potential sources)
  const peaks: number[] = [];
  const bandSize = Math.floor(numBins / CONFIG.FREQUENCY_BANDS);
  
  for (let band = 0; band < CONFIG.FREQUENCY_BANDS; band++) {
    let maxEnergy = 0;
    let maxBin = 0;
    
    for (let b = band * bandSize; b < (band + 1) * bandSize && b < numBins; b++) {
      if (avgSpectrum[b] > maxEnergy) {
        maxEnergy = avgSpectrum[b];
        maxBin = b;
      }
    }
    
    if (maxEnergy > CONFIG.ENERGY_THRESHOLD) {
      peaks.push(maxBin);
    }
  }
  
  // Estimate sources based on spectral diversity
  const numSources = Math.min(
    Math.max(CONFIG.MIN_SOURCES, Math.ceil(peaks.length / 2)),
    CONFIG.MAX_SOURCES
  );
  
  return numSources;
}

/**
 * Compute source characteristics
 */
function computeSourceStats(audio: Float32Array, sourceId: number): SeparatedSource {
  let energy = 0;
  for (let i = 0; i < audio.length; i++) {
    energy += audio[i] * audio[i];
  }
  energy = Math.sqrt(energy / audio.length);
  
  // Compute spectral centroid
  const { magnitude } = computeSTFT(audio);
  let weightedSum = 0;
  let totalMag = 0;
  
  const binFreq = sampleRate / CONFIG.FFT_SIZE;
  
  for (const frame of magnitude) {
    for (let b = 0; b < frame.length; b++) {
      const freq = b * binFreq;
      weightedSum += freq * frame[b];
      totalMag += frame[b];
    }
  }
  
  const spectralCentroid = totalMag > 0 ? weightedSum / totalMag : 0;
  
  // Find dominant frequency
  let maxMag = 0;
  let dominantBin = 0;
  for (const frame of magnitude) {
    for (let b = 0; b < frame.length; b++) {
      if (frame[b] > maxMag) {
        maxMag = frame[b];
        dominantBin = b;
      }
    }
  }
  const dominantFrequency = dominantBin * binFreq;
  
  return {
    sourceId,
    audioData: audio,
    dominantFrequency,
    energy,
    spectralCentroid
  };
}

/**
 * Main separation function
 */
function separateAudio(audio: Float32Array): SeparatedSource[] {
  // Compute STFT
  const { magnitude, phase } = computeSTFT(audio);
  
  // Detect number of sources
  const numSources = detectNumSources(magnitude);
  
  console.log(`[Separation] Detected ${numSources} sources`);
  
  if (numSources <= 1) {
    // Single source - return original
    return [computeSourceStats(audio, 0)];
  }
  
  // Run NMF decomposition
  const { W, H } = nmfDecompose(magnitude, numSources);
  
  // Separate each source
  const sources: SeparatedSource[] = [];
  
  for (let s = 0; s < numSources; s++) {
    // Apply soft mask
    const separatedMag = applySoftMask(magnitude, W, H, s);
    
    // Reconstruct audio via iSTFT
    const separatedAudio = computeISTFT(separatedMag, phase, audio.length);
    
    // Compute source statistics
    const source = computeSourceStats(separatedAudio, s);
    
    // Only include sources with significant energy
    if (source.energy > CONFIG.ENERGY_THRESHOLD * 0.5) {
      sources.push(source);
    }
  }
  
  // Sort by energy (loudest first)
  sources.sort((a, b) => b.energy - a.energy);
  
  return sources;
}

/**
 * Initialize worker
 */
function initialize(sr: number, maxSrc: number): void {
  sampleRate = sr;
  maxSources = maxSrc;
  
  // Initialize FFT buffers
  fftReal = new Float32Array(CONFIG.FFT_SIZE);
  fftImag = new Float32Array(CONFIG.FFT_SIZE);
  hannWindow = initWindow(CONFIG.FFT_SIZE);
  
  isInitialized = true;
  
  console.log('[SeparationWorker] Initialized');
  postMessage({ type: 'ready' });
}

/**
 * Handle messages from main thread
 */
self.onmessage = (event: MessageEvent<WorkerMessage>) => {
  const msg = event.data;
  
  switch (msg.type) {
    case 'init':
      initialize(msg.sampleRate, msg.maxSources);
      break;
      
    case 'process':
      if (!isInitialized) {
        console.warn('[SeparationWorker] Not initialized');
        return;
      }
      
      try {
        const sources = separateAudio(msg.audioData);
        
        // Send separated sources back
        postMessage({
          type: 'separated',
          sources: sources.map(s => ({
            sourceId: s.sourceId,
            audioData: s.audioData,
            dominantFrequency: s.dominantFrequency,
            energy: s.energy,
            spectralCentroid: s.spectralCentroid
          })),
          numSources: sources.length
        });
      } catch (e) {
        console.error('[SeparationWorker] Separation error:', e);
        postMessage({ type: 'error', message: String(e) });
      }
      break;
      
    case 'dispose':
      isInitialized = false;
      console.log('[SeparationWorker] Disposed');
      break;
  }
};

console.log('[SeparationWorker] Loaded');
