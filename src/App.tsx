/**
 * App.tsx - Sonic Latent Manifold Explorer
 * Apple-style minimalist UI with Glassmorphism
 */
import { useEffect, useRef, useState, useCallback } from 'react';
import Nebula from './Nebula';
import { AudioEngine } from './AudioEngine';
import { handleExport, exportAsJSON, captureScreenshot, exportAsGLB, getCurrentPositions } from './Exporter';
import * as THREE from 'three';

type Status = 'idle' | 'initializing' | 'listening' | 'processing' | 'error';

export default function App() {
  const [status, setStatus] = useState<Status>('idle');
  const [confidence, setConfidence] = useState(0);
  const [pointCount, setPointCount] = useState(0);
  const [aiStatus, setAiStatus] = useState('Click to start');
  const [isListening, setIsListening] = useState(false);
  const [workerReady, setWorkerReady] = useState(false);
  const [currentClass, setCurrentClass] = useState('');
  const [currentPitch, setCurrentPitch] = useState(0);
  const [exportData, setExportData] = useState<any>(null);
  
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Create audio engine once
  if (!audioEngineRef.current) {
    audioEngineRef.current = new AudioEngine({
      onConfidence: setConfidence,
    });
  }

  // Handle worker messages - this effect re-runs when workerReady changes
  useEffect(() => {
    if (!workerReady) return;
    
    const currentAudioEngine = audioEngineRef.current;
    const worker = currentAudioEngine?.worker;
    if (!worker) return;

    const handleWorkerMessage = (e: MessageEvent) => {
      const { type, count, message, position, classification, pitch, centroid } = e.data;
      
      console.log('[App] Worker message:', type, { count, message });
      
      if (type === 'positions' && count !== undefined) {
        setPointCount(count);
        
        // Update Nebula points
        const updatePoints = (window as any).__nebulaUpdatePoints;
        if (updatePoints && e.data.sab) {
          const positions = new Float32Array(e.data.sab);
          updatePoints(positions, count);
        }
      }
      
      if (type === 'confidence') {
        setConfidence(e.data.value || 0);
        if (classification) {
          setCurrentClass(classification);
        }
        if (pitch) {
          setCurrentPitch(pitch);
        }
      }
      
      if (type === 'status') {
        setAiStatus(message);
        if (message === 'AI ready' || message === 'Simple mode (no AI)') {
          setStatus('listening');
        }
      }
      
      if (type === 'exportData') {
        // Received export data from worker
        setExportData(e.data.data);
        exportAsJSON(e.data.data);
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

    worker.addEventListener('message', handleWorkerMessage);
    return () => worker.removeEventListener('message', handleWorkerMessage);
  }, [workerReady]);

  // Initialize audio engine
  const startListening = useCallback(async () => {
    if (isListening) return;
    
    const currentAudioEngine = audioEngineRef.current;
    if (!currentAudioEngine) return;
    
    setStatus('initializing');
    setAiStatus('Requesting microphone access...');
    
    try {
      await currentAudioEngine.init();
      currentAudioEngine.setWaveformCanvas(waveformCanvasRef.current);
      setIsListening(true);
      setWorkerReady(true); // Trigger worker message listener setup
      setStatus('listening');
    } catch (err) {
      console.error('Failed to initialize:', err);
      setStatus('error');
      setAiStatus(err instanceof Error ? err.message : 'Microphone access denied');
    }
  }, [isListening]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (!isListening) return;
    
    const currentAudioEngine = audioEngineRef.current;
    if (currentAudioEngine) {
      currentAudioEngine.dispose();
    }
    
    setIsListening(false);
    setWorkerReady(false);
    setStatus('idle');
    setAiStatus('Stopped - Click to restart');
    setPointCount(0);
    setConfidence(0);
    
    // Reset Nebula points
    const updatePoints = (window as any).__nebulaUpdatePoints;
    if (updatePoints) {
      updatePoints(new Float32Array(0), 0);
    }
    
    // Create new AudioEngine instance for fresh start
    audioEngineRef.current = new AudioEngine({
      onConfidence: setConfidence,
    });
  }, [isListening]);

  // Cleanup
  useEffect(() => {
    return () => {
      audioEngineRef.current?.dispose();
    };
  }, []);

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
          {currentClass && isListening && (
            <div className="text-xs text-orange-400/80 mt-1 capitalize">
              {currentClass.replace(/_/g, ' ')} {currentPitch > 0 && `(${currentPitch.toFixed(0)}Hz)`}
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

      {/* Stop Listening Button - shown when listening */}
      {isListening && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={stopListening}
            className="group relative px-6 py-2 rounded-xl glass border border-red-500/30 
                       hover:border-red-500/60 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-xl bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
            <span className="relative text-red-400/90 font-light tracking-wide text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Stop Listening
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
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // Request export data from worker
                  const worker = audioEngineRef.current?.worker;
                  if (worker) {
                    worker.postMessage({ type: 'export' });
                  }
                }}
                disabled={pointCount < 10}
                className="px-3 py-1.5 text-xs font-light tracking-wide
                           text-green-400/80 border border-green-400/30 rounded-lg
                           hover:bg-green-400/10 hover:border-green-400/50 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed"
                title="Export session data as JSON for analysis"
              >
                JSON
              </button>
              <button
                onClick={() => {
                  const data = getCurrentPositions();
                  if (data) {
                    exportAsGLB(data.positions, data.count);
                  }
                }}
                disabled={pointCount < 10}
                className="px-3 py-1.5 text-xs font-light tracking-wide
                           text-purple-400/80 border border-purple-400/30 rounded-lg
                           hover:bg-purple-400/10 hover:border-purple-400/50 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed"
                title="Export as GLB with colors (for 3D viewers)"
              >
                GLB
              </button>
              <button
                onClick={() => handleExport('stl')}
                disabled={pointCount < 10}
                className="px-3 py-1.5 text-xs font-light tracking-wide
                           text-cyan/80 border border-cyan/30 rounded-lg
                           hover:bg-cyan/10 hover:border-cyan/50 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed"
                title="Export as STL for 3D printing"
              >
                STL
              </button>
              <button
                onClick={() => handleExport('hull')}
                disabled={pointCount < 10}
                className="px-3 py-1.5 text-xs font-light tracking-wide
                           text-white/60 border border-white/20 rounded-lg
                           hover:bg-white/5 hover:border-white/30 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed"
                title="Export convex hull as STL"
              >
                Hull
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

      {/* Axis Legend - bottom left */}
      {isListening && (
        <div className="absolute bottom-32 left-6 z-10 glass rounded-lg p-3 text-xs">
          <div className="text-white/60 font-medium mb-2 uppercase tracking-wider text-[10px]">Axis Guide</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-red-500"></div>
              <span className="text-white/50">X: Pitch</span>
              <span className="text-white/30 text-[10px]">Low ← → High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-green-500"></div>
              <span className="text-white/50">Y: Complexity</span>
              <span className="text-white/30 text-[10px]">Simple ↓ ↑ Rich</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-blue-500"></div>
              <span className="text-white/50">Z: Texture</span>
              <span className="text-white/30 text-[10px]">Sustained ← → Noisy</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-white/30">
            <div>🐦 Songbirds: +X, +Y</div>
            <div>🦉 Owls: -X, -Y, -Z</div>
            <div>👤 Human: center X, +Y</div>
            <div>🦗 Insects: +X, -Y, +Z</div>
          </div>
        </div>
      )}
    </div>
  );
}
