/**
 * App.tsx - Sonic Latent Manifold Explorer
 * Apple-style minimalist UI with Glassmorphism
 */
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Nebula from './Nebula';
import { AudioEngine } from './AudioEngine';
import { handleExport } from './Exporter';
import * as THREE from 'three';

type Status = 'idle' | 'initializing' | 'listening' | 'processing' | 'error';

export default function App() {
  const [status, setStatus] = useState<Status>('idle');
  const [confidence, setConfidence] = useState(0);
  const [pointCount, setPointCount] = useState(0);
  const [aiStatus, setAiStatus] = useState('Initializing...');
  const [isListening, setIsListening] = useState(false);
  
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const audioEngine = useMemo(() => new AudioEngine({
    onConfidence: setConfidence,
  }), []);

  // Handle worker messages for positions and status
  useEffect(() => {
    const handleWorkerMessage = (e: MessageEvent) => {
      const { type, count, message, position } = e.data;
      
      if (type === 'positions' && count !== undefined) {
        setPointCount(count);
        
        // Update Nebula points
        const updatePoints = (window as any).__nebulaUpdatePoints;
        if (updatePoints && e.data.sab) {
          const positions = new Float32Array(e.data.sab);
          updatePoints(positions, count);
        }
      }
      
      if (type === 'status') {
        setAiStatus(message);
        if (message === 'AI ready') {
          setStatus('listening');
        }
      }
      
      if (type === 'newCluster' && position) {
        // Fly camera to new cluster
        const flyTo = (window as any).__nebulaFlyToCluster;
        if (flyTo) {
          flyTo(new THREE.Vector3(position.x, position.y, position.z));
        }
      }
      
      if (type === 'error') {
        setStatus('error');
        setAiStatus(message);
      }
    };

    // Get worker reference from audio engine
    const worker = (audioEngine as any).worker as Worker | undefined;
    if (worker) {
      worker.addEventListener('message', handleWorkerMessage);
      return () => worker.removeEventListener('message', handleWorkerMessage);
    }
  }, [audioEngine]);

  // Initialize audio engine
  const startListening = useCallback(async () => {
    if (isListening) return;
    
    setStatus('initializing');
    setAiStatus('Requesting microphone access...');
    
    try {
      await audioEngine.init();
      audioEngine.setWaveformCanvas(waveformCanvasRef.current);
      setIsListening(true);
      setStatus('listening');
    } catch (err) {
      console.error('Failed to initialize:', err);
      setStatus('error');
      setAiStatus('Microphone access denied');
    }
  }, [audioEngine, isListening]);

  // Cleanup
  useEffect(() => {
    return () => {
      audioEngine.dispose();
    };
  }, [audioEngine]);

  const handleCameraRef = useCallback((camera: THREE.PerspectiveCamera) => {
    cameraRef.current = camera;
  }, []);

  return (
    <div className="relative w-full h-screen bg-deep overflow-hidden">
      {/* 3D Canvas */}
      <Nebula onCameraRef={handleCameraRef} />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
        <div>
          <h1 className="text-xl font-light tracking-wide text-white/90">
            Sonic Latent Manifold
          </h1>
          <p className="text-xs text-white/40 mt-1 tracking-widest uppercase">
            Bioacoustic Explorer
          </p>
        </div>
        
        <div className="text-right">
          <div className="text-xs text-white/40 uppercase tracking-wider">
            {aiStatus}
          </div>
          {pointCount > 0 && (
            <div className="text-xs text-cyan/60 mt-1">
              {pointCount.toLocaleString()} vectors
            </div>
          )}
        </div>
      </header>

      {/* Center Start Button */}
      {!isListening && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={startListening}
            disabled={status === 'initializing'}
            className="group relative px-8 py-4 rounded-2xl glass border border-cyan/20 
                       hover:border-cyan/40 transition-all duration-500
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 rounded-2xl bg-cyan/5 group-hover:bg-cyan/10 transition-colors" />
            <span className="relative text-cyan/90 font-light tracking-wide">
              {status === 'initializing' ? 'Initializing...' : 'Begin Listening'}
            </span>
          </button>
        </div>
      )}

      {/* Bottom HUD */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Waveform */}
        <div className="px-6 pb-2">
          <canvas 
            ref={waveformCanvasRef}
            className="w-full h-16 rounded-lg"
            style={{ 
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
            }}
          />
        </div>

        {/* Controls Bar */}
        <div className="glass border-t border-white/5">
          <div className="px-6 py-4 flex items-center justify-between">
            {/* Confidence Meter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">
                  AI Confidence
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan/50 to-cyan transition-all duration-300 ease-out"
                      style={{ width: `${confidence * 100}%` }}
                    />
                  </div>
                  <span className="text-cyan/80 text-sm font-light tabular-nums w-12">
                    {(confidence * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full transition-colors ${
                status === 'listening' ? 'bg-cyan animate-pulse' :
                status === 'error' ? 'bg-red-500' :
                'bg-white/20'
              }`} />
              <span className="text-xs text-white/50 capitalize">{status}</span>
            </div>

            {/* Export Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleExport('stl')}
                disabled={pointCount < 10}
                className="px-4 py-2 text-xs font-light tracking-wide
                           text-cyan/80 border border-cyan/30 rounded-lg
                           hover:bg-cyan/10 hover:border-cyan/50 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Export STL
              </button>
              <button
                onClick={() => handleExport('hull')}
                disabled={pointCount < 10}
                className="px-4 py-2 text-xs font-light tracking-wide
                           text-white/60 border border-white/20 rounded-lg
                           hover:bg-white/5 hover:border-white/30 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Export Hull
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-6 right-6 w-24 h-24 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-cyan" />
        </svg>
      </div>
    </div>
  );
}
