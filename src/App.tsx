/**
 * App.tsx - Sonic Latent Manifold Explorer
 * Apple-style minimalist UI with Glassmorphism
 * 
 * ENHANCED: Source separation, real-time spectrogram, silhouette score
 */
import { useEffect, useRef, useState, useCallback } from 'react';
import Nebula from './Nebula';
import { AudioEngine, SeparatedSource } from './AudioEngine';
import { handleExport, exportAsJSON, captureScreenshot, exportAsGLB, getCurrentPositions } from './Exporter';
import Spectrogram from './Spectrogram';
import * as THREE from 'three';

type Status = 'idle' | 'initializing' | 'listening' | 'processing' | 'error';

// Cluster size type
interface ClusterSize {
  id: number;
  size: number;
}

export default function App() {
  const [status, setStatus] = useState<Status>('idle');
  const [confidence, setConfidence] = useState(0);
  const [pointCount, setPointCount] = useState(0);
  const [aiStatus, setAiStatus] = useState('Click to start');
  const [isListening, setIsListening] = useState(false);
  const [workerReady, setWorkerReady] = useState(false);
  const [exportData, setExportData] = useState<any>(null);
  
  // Cluster state
  const [numDistinctSounds, setNumDistinctSounds] = useState(0);
  const [clusterSizes, setClusterSizes] = useState<ClusterSize[]>([]);
  const [showCentroids, setShowCentroids] = useState(true);
  const [silhouetteScore, setSilhouetteScore] = useState(0);
  
  // Source separation state
  const [enableSeparation, setEnableSeparation] = useState(false); // Default OFF for M3 8GB
  const [separatedSources, setSeparatedSources] = useState<SeparatedSource[]>([]);
  const [showSpectrogram, setShowSpectrogram] = useState(true);
  const [analyserNode, setAnalyserNode] = useState<AnalyserNode | null>(null);
  const [showPerformanceWarning, setShowPerformanceWarning] = useState(false);
  
  // Recording tracking
  const [recordingStartTime, setRecordingStartTime] = useState<number>(0);
  const [recordingDuration, setRecordingDuration] = useState<string>('00:00');
  const durationIntervalRef = useRef<number | null>(null);
  
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Create audio engine once
  if (!audioEngineRef.current) {
    audioEngineRef.current = new AudioEngine({
      onConfidence: setConfidence,
      onSeparatedSources: (sources) => {
        setSeparatedSources(sources);
        console.log(`[App] ${sources.length} sources separated`);
      },
      enableSeparation: false, // Start disabled, user can enable
    });
  }

  // Handle worker messages - this effect re-runs when workerReady changes
  useEffect(() => {
    if (!workerReady) return;
    
    const currentAudioEngine = audioEngineRef.current;
    const worker = currentAudioEngine?.worker;
    if (!worker) return;

    const handleWorkerMessage = (e: MessageEvent) => {
      const { type, count, message, position } = e.data;
      
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
      
      if (type === 'clusters_updated') {
        // Handle DBSCAN cluster updates
        const { numDistinctSounds: nds, clusterLabels, clusterSizes: sizes, clusterCentroids, silhouetteScore: score } = e.data;
        
        setNumDistinctSounds(nds);
        setClusterSizes(sizes || []);
        if (score !== undefined) {
          setSilhouetteScore(score);
        }
        
        // Update visualization colors
        const updateClusterColors = (window as any).__nebulaUpdateClusterColors;
        if (updateClusterColors && clusterLabels) {
          const maxCluster = Math.max(0, ...sizes.map((s: ClusterSize) => s.id));
          updateClusterColors(clusterLabels, clusterCentroids || [], maxCluster);
        }
      }
      
      if (type === 'confidence') {
        setConfidence(e.data.value || 0);
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
      
      // Get AnalyserNode for spectrogram
      const analyser = currentAudioEngine.getAnalyserNode();
      if (analyser) {
        setAnalyserNode(analyser);
      }
      
      // Start recording duration timer
      setRecordingStartTime(Date.now());
      durationIntervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - Date.now(); // Will be updated in effect
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        setRecordingDuration(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }, 1000);
    } catch (err) {
      console.error('Failed to initialize:', err);
      setStatus('error');
      setAiStatus(err instanceof Error ? err.message : 'Microphone access denied');
    }
  }, [isListening]);
  
  // Update recording duration
  useEffect(() => {
    if (isListening && recordingStartTime > 0) {
      const interval = setInterval(() => {
        const elapsed = Date.now() - recordingStartTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        setRecordingDuration(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isListening, recordingStartTime]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (!isListening) return;
    
    const currentAudioEngine = audioEngineRef.current;
    if (currentAudioEngine) {
      currentAudioEngine.dispose();
    }
    
    // Clear duration timer
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
      durationIntervalRef.current = null;
    }
    
    setIsListening(false);
    setWorkerReady(false);
    setStatus('idle');
    setAiStatus('Stopped - Click to restart');
    setPointCount(0);
    setConfidence(0);
    setRecordingStartTime(0);
    setRecordingDuration('00:00');
    setNumDistinctSounds(0);
    setClusterSizes([]);
    setSilhouetteScore(0);
    setSeparatedSources([]);
    setAnalyserNode(null);
    
    // Reset Nebula points
    const updatePoints = (window as any).__nebulaUpdatePoints;
    if (updatePoints) {
      updatePoints(new Float32Array(0), 0);
    }
    
    // Create new AudioEngine instance for fresh start
    audioEngineRef.current = new AudioEngine({
      onConfidence: setConfidence,
      onSeparatedSources: (sources) => {
        setSeparatedSources(sources);
      },
      enableSeparation: enableSeparation,
    });
  }, [isListening, enableSeparation]);
  
  // Toggle source separation
  useEffect(() => {
    if (audioEngineRef.current && isListening) {
      audioEngineRef.current.setEnableSeparation(enableSeparation);
    }
  }, [enableSeparation, isListening]);
  
  // Show performance warning when enabling separation
  const handleSeparationToggle = () => {
    if (!enableSeparation) {
      // Warn user about performance impact
      const memory = (performance as any).memory;
      const totalMemory = memory?.jsHeapSizeLimit || 0;
      
      if (totalMemory > 0 && totalMemory < 4 * 1024 * 1024 * 1024) {
        setShowPerformanceWarning(true);
        setTimeout(() => setShowPerformanceWarning(false), 5000);
      }
    }
    setEnableSeparation(!enableSeparation);
  };

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
      
      {/* Performance Warning Banner */}
      {showPerformanceWarning && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 
                        glass rounded-xl px-4 py-3 border border-orange-500/30 max-w-md">
          <div className="flex items-start gap-3">
            <span className="text-orange-400 text-xl">⚠️</span>
            <div className="flex-1">
              <div className="text-orange-400 font-medium text-sm mb-1">Performance Warning</div>
              <div className="text-white/70 text-xs leading-relaxed">
                Source separation is compute-intensive. On M3 8GB systems, this may cause:
                <ul className="mt-1 ml-4 list-disc text-white/50">
                  <li>Slower processing (3-5 seconds per chunk)</li>
                  <li>Memory pressure (~1-2GB)</li>
                  <li>Reduced frame rate</li>
                </ul>
                <div className="mt-2 text-orange-400/80">Recommended: Keep OFF unless needed</div>
              </div>
            </div>
          </div>
        </div>
      )}

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
          {pointCount > 0 && isListening && (
            <div className="flex items-center justify-end gap-2 mt-1">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/60 font-light">LIVE</span>
              </div>
              <span className="text-xs text-cyan/60">|</span>
              <span className="text-xs text-cyan/60">
                {pointCount.toLocaleString()} vectors
              </span>
              {numDistinctSounds > 0 && (
                <>
                  <span className="text-xs text-white/30">|</span>
                  <span className="text-xs text-purple-400/80 font-medium">
                    {numDistinctSounds} clusters
                  </span>
                </>
              )}
              {enableSeparation && separatedSources.length > 0 && (
                <>
                  <span className="text-xs text-white/30">|</span>
                  <span className="text-xs text-orange-400/80 font-medium">
                    {separatedSources.length} sources
                  </span>
                </>
              )}
              <span className="text-xs text-white/30">|</span>
              <span className="text-xs text-white/50 font-mono">
                {recordingDuration}
              </span>
            </div>
          )}
          {pointCount > 0 && !isListening && (
            <div className="text-xs text-cyan/60 mt-1">
              {pointCount.toLocaleString()} vectors (stopped)
            </div>
          )}
        </div>
      </header>

      {/* Distinct Sounds Counter - Enhanced Display */}
      {isListening && numDistinctSounds > 0 && (
        <div className="absolute top-24 right-6 z-10 glass rounded-xl p-4 min-w-[240px]">
          <div className="text-center mb-3">
            <div className="text-5xl font-extralight text-white/90 tracking-tight">
              {numDistinctSounds}
            </div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-1">
              Distinct Sound{numDistinctSounds !== 1 ? 's' : ''} Detected
            </div>
          </div>
          
          {/* Cluster Quality Metrics */}
          <div className="mb-3 pb-3 border-b border-white/10 space-y-1.5">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-white/40">Total Vectors:</span>
              <span className="text-white/70 font-mono">{pointCount.toLocaleString()}</span>
            </div>
            {clusterSizes.length > 0 && (
              <>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white/40">Largest Cluster:</span>
                  <span className="text-white/70 font-mono">{clusterSizes[0].size} pts</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white/40">Noise Points:</span>
                  <span className="text-white/70 font-mono">
                    {(() => {
                      const noiseCount = pointCount - clusterSizes.reduce((sum, c) => sum + c.size, 0);
                      const noisePercent = ((noiseCount / pointCount) * 100).toFixed(1);
                      return `${noiseCount} (${noisePercent}%)`;
                    })()}
                  </span>
                </div>
              </>
            )}
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-white/40">Silhouette Score:</span>
              <span className={`font-mono ${silhouetteScore > 0.5 ? 'text-green-400/80' : silhouetteScore > 0.25 ? 'text-yellow-400/80' : 'text-red-400/80'}`}>
                {silhouetteScore.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-white/40">Recording:</span>
              <span className="text-green-400/80 font-mono">{recordingDuration}</span>
            </div>
          </div>
          
          {/* Source Separation Info */}
          {enableSeparation && separatedSources.length > 0 && (
            <div className="mb-3 pb-3 border-b border-white/10">
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Separated Sources</div>
              <div className="space-y-1.5">
                {separatedSources.map((source) => (
                  <div key={source.sourceId} className="flex items-center gap-2 text-[10px]">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: `hsl(${source.sourceId * 120}, 80%, 60%)` }}
                    />
                    <span className="text-white/50">Source {source.sourceId + 1}:</span>
                    <span className="text-white/70 font-mono">{(source.dominantFrequency).toFixed(0)}Hz</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Cluster Size Bar Chart */}
          {clusterSizes.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] text-white/40 uppercase tracking-wider">Cluster Distribution</div>
              {clusterSizes.slice(0, 8).map((cluster, index) => {
                const maxSize = Math.max(...clusterSizes.map(c => c.size));
                const percentage = (cluster.size / maxSize) * 100;
                const hue = (cluster.id / Math.max(1, clusterSizes.length)) * 360;
                return (
                  <div key={cluster.id} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `hsl(${hue}, 90%, 60%)` }}
                    />
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: `hsl(${hue}, 90%, 60%)`
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-white/40 w-8 text-right">{cluster.size}</span>
                  </div>
                );
              })}
            </div>
          )}
          
          {/* Toggle Centroids */}
          <button
            onClick={() => {
              setShowCentroids(!showCentroids);
              const toggleCentroids = (window as any).__nebulaToggleCentroids;
              if (toggleCentroids) {
                toggleCentroids(!showCentroids);
              }
            }}
            className="mt-3 w-full px-2 py-1.5 text-[10px] rounded-lg border border-white/10
                       hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <span className={`w-2 h-2 rounded-full ${showCentroids ? 'bg-green-400' : 'bg-white/20'}`} />
            <span className="text-white/50">Show Cluster Centers</span>
          </button>
          
          {/* Source Separation Toggle */}
          <button
            onClick={handleSeparationToggle}
            className="mt-2 w-full px-2 py-1.5 text-[10px] rounded-lg border border-orange-500/20
                       hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2"
          >
            <span className={`w-2 h-2 rounded-full ${enableSeparation ? 'bg-orange-400 animate-pulse' : 'bg-white/20'}`} />
            <span className="text-white/50">Source Separation {enableSeparation ? 'ON' : 'OFF'}</span>
            <span className="text-[8px] text-orange-400/60 ml-1">β</span>
          </button>
          
          {/* Spectrogram Toggle */}
          <button
            onClick={() => setShowSpectrogram(!showSpectrogram)}
            className="mt-2 w-full px-2 py-1.5 text-[10px] rounded-lg border border-white/10
                       hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <span className={`w-2 h-2 rounded-full ${showSpectrogram ? 'bg-cyan-400' : 'bg-white/20'}`} />
            <span className="text-white/50">Show Spectrogram</span>
          </button>
        </div>
      )}

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
          <div className="text-white/60 font-medium mb-2 uppercase tracking-wider text-[10px]">UMAP Projection Space</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-red-500"></div>
              <span className="text-white/50">X: UMAP-1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-green-500"></div>
              <span className="text-white/50">Y: UMAP-2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-blue-500"></div>
              <span className="text-white/50">Z: UMAP-3</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-white/30">
            <div className="font-medium text-white/40 mb-1">Unsupervised Clustering:</div>
            <div>📊 20D acoustic features</div>
            <div>🔄 UMAP projects to 3D</div>
            <div>🎯 DBSCAN finds clusters</div>
            <div>🎨 Each color = distinct sound</div>
            {enableSeparation && (
              <div className="text-orange-400/60">🔊 Source separation active</div>
            )}
          </div>
        </div>
      )}
      
      {/* Real-time Spectrogram */}
      {isListening && showSpectrogram && (
        <Spectrogram
          isListening={isListening}
          analyserNode={analyserNode}
          dominantCluster={clusterSizes.length > 0 ? clusterSizes[0].id : -1}
        />
      )}
    </div>
  );
}
