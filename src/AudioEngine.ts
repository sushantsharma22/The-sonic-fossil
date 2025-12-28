/**
 * AudioEngine: Captures microphone audio, writes PCM into a SharedArrayBuffer
 * ring buffer for the worker. Also renders a thin waveform HUD.
 */

export type AudioEngineOptions = {
  onConfidence?: (c: number) => void;
};

class RingBuffer {
  sab: SharedArrayBuffer;
  writeIndex: Int32Array;
  readIndex: Int32Array;
  buffer: Float32Array;
  capacity: number;

  constructor(capacity: number) {
    // Layout: [writeIndex(int32), readIndex(int32), data(float32 * capacity)]
    const headerBytes = 8; // two int32
    const dataBytes = capacity * 4;
    this.sab = new SharedArrayBuffer(headerBytes + dataBytes);
    this.writeIndex = new Int32Array(this.sab, 0, 1);
    this.readIndex = new Int32Array(this.sab, 4, 1);
    this.buffer = new Float32Array(this.sab, headerBytes, capacity);
    this.capacity = capacity;
  }

  write(data: Float32Array) {
    let wi = Atomics.load(this.writeIndex, 0);
    for (let i = 0; i < data.length; i++) {
      this.buffer[wi] = data[i];
      wi = (wi + 1) % this.capacity;
    }
    Atomics.store(this.writeIndex, 0, wi);
    Atomics.notify(this.writeIndex, 0);
  }
}

export class AudioEngine {
  private ctx?: AudioContext;
  private processor?: ScriptProcessorNode;
  private stream?: MediaStream;
  private waveformCanvas?: HTMLCanvasElement;
  private waveformCtx?: CanvasRenderingContext2D | null;
  public worker?: Worker;
  private ring: RingBuffer;
  private onConfidence?: (c: number) => void;
  private isInitialized = false;

  constructor(opts: AudioEngineOptions = {}) {
    this.onConfidence = opts.onConfidence;
    // 10 seconds @ 48kHz ~ 480k samples, choose 1M for headroom
    this.ring = new RingBuffer(1_000_000);
  }

  async init() {
    if (this.isInitialized) return;
    
    // Check for SharedArrayBuffer support
    if (typeof SharedArrayBuffer === 'undefined') {
      throw new Error('SharedArrayBuffer not available. Ensure COOP/COEP headers are set.');
    }

    this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)({ 
      sampleRate: 48000,
      latencyHint: 'interactive'
    });
    
    this.stream = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      }, 
      video: false 
    });
    
    const src = this.ctx.createMediaStreamSource(this.stream);

    // Use ScriptProcessor for simplicity (deprecated but widely supported)
    // Buffer size of 4096 for better performance
    this.processor = this.ctx.createScriptProcessor(4096, 1, 1);
    this.processor.onaudioprocess = (e) => {
      const input = e.inputBuffer.getChannelData(0);
      this.ring.write(input);
      this.drawWaveform(input);
    };
    src.connect(this.processor);
    this.processor.connect(this.ctx.destination);

    // Start worker
    this.worker = new Worker(
      new URL('./workers/ManifoldWorker.ts', import.meta.url), 
      { type: 'module' }
    );
    
    // Handle worker messages
    this.worker.onmessage = (ev) => {
      const msg = ev.data;
      if (msg.type === 'confidence' && this.onConfidence) {
        this.onConfidence(msg.value);
      }
    };
    
    // Initialize worker with SharedArrayBuffer
    this.worker.postMessage({
      type: 'init',
      sab: this.ring.sab,
      sampleRate: this.ctx.sampleRate
    });

    this.isInitialized = true;
  }

  setWaveformCanvas(canvas?: HTMLCanvasElement | null) {
    this.waveformCanvas = canvas ?? undefined;
    this.waveformCtx = this.waveformCanvas ? this.waveformCanvas.getContext('2d') : null;
  }

  private drawWaveform(samples: Float32Array) {
    if (!this.waveformCtx || !this.waveformCanvas) return;
    const ctx = this.waveformCtx;
    const w = this.waveformCanvas.width = this.waveformCanvas.clientWidth * 2;
    const h = this.waveformCanvas.height = this.waveformCanvas.clientHeight * 2;

    ctx.clearRect(0, 0, w, h);
    
    // Draw thin glowing line
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Add glow effect
    ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
    ctx.shadowBlur = 8;
    
    ctx.beginPath();
    const step = Math.max(1, Math.floor(samples.length / w));
    for (let x = 0; x < w; x++) {
      const i = x * step;
      const sample = samples[Math.min(i, samples.length - 1)] || 0;
      const y = (0.5 - sample * 0.4) * h;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Reset shadow
    ctx.shadowBlur = 0;
  }

  dispose() {
    try {
      this.processor?.disconnect();
      this.stream?.getTracks().forEach(t => t.stop());
      this.ctx?.close();
      this.worker?.postMessage({ type: 'dispose' });
      this.worker?.terminate();
      this.waveformCtx = null;
      this.isInitialized = false;
      this.worker = undefined;
      this.ctx = undefined;
      this.processor = undefined;
      this.stream = undefined;
      // Create new ring buffer for next init
      this.ring = new RingBuffer(1_000_000);
    } catch (e) {
      console.warn('Dispose error:', e);
    }
  }
}
