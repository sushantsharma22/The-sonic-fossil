/**
 * Spectrogram.tsx - Real-Time Audio Spectrogram Visualization
 * 
 * Displays a scrolling spectrogram of the last 5 seconds of audio.
 * Overlays cluster colors to show what sounds are being detected.
 */

import React, { useRef, useEffect, useCallback } from 'react';

interface SpectrogramProps {
  isListening: boolean;
  analyserNode: AnalyserNode | null;
  clusterColors?: Map<number, [number, number, number]>;
  dominantCluster?: number;
}

const SPECTROGRAM_CONFIG = {
  WIDTH: 400,
  HEIGHT: 150,
  FFT_SIZE: 2048,
  HISTORY_SECONDS: 5,
  UPDATE_INTERVAL: 50, // ms
  MIN_DB: -100,
  MAX_DB: -30,
};

export const Spectrogram: React.FC<SpectrogramProps> = ({
  isListening,
  analyserNode,
  clusterColors = new Map(),
  dominantCluster = -1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const historyRef = useRef<Float32Array[]>([]);
  const animationRef = useRef<number>(0);
  
  // Color map for spectrogram (viridis-like)
  const getSpectrogramColor = useCallback((value: number, cluster: number): [number, number, number] => {
    // Normalize value to 0-1
    const norm = Math.max(0, Math.min(1, value));
    
    // If we have cluster colors and this is the dominant cluster, tint the color
    if (cluster >= 0 && clusterColors.has(cluster)) {
      const [r, g, b] = clusterColors.get(cluster)!;
      // Blend with cluster color based on intensity
      return [
        Math.floor(r * norm * 255),
        Math.floor(g * norm * 255),
        Math.floor(b * norm * 255)
      ];
    }
    
    // Default viridis-like colormap
    if (norm < 0.25) {
      const t = norm / 0.25;
      return [
        Math.floor(68 + t * (59 - 68)),
        Math.floor(1 + t * (82 - 1)),
        Math.floor(84 + t * (139 - 84))
      ];
    } else if (norm < 0.5) {
      const t = (norm - 0.25) / 0.25;
      return [
        Math.floor(59 + t * (33 - 59)),
        Math.floor(82 + t * (145 - 82)),
        Math.floor(139 + t * (140 - 139))
      ];
    } else if (norm < 0.75) {
      const t = (norm - 0.5) / 0.25;
      return [
        Math.floor(33 + t * (94 - 33)),
        Math.floor(145 + t * (201 - 145)),
        Math.floor(140 + t * (98 - 140))
      ];
    } else {
      const t = (norm - 0.75) / 0.25;
      return [
        Math.floor(94 + t * (253 - 94)),
        Math.floor(201 + t * (231 - 201)),
        Math.floor(98 + t * (37 - 98))
      ];
    }
  }, [clusterColors]);
  
  // Draw spectrogram
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const history = historyRef.current;
    if (history.length === 0) {
      // Draw empty state
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#4a4a6a';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Waiting for audio...', canvas.width / 2, canvas.height / 2);
      return;
    }
    
    // Create image data
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    // Map history to pixels
    const numBins = history[0].length;
    const binHeight = canvas.height / numBins;
    
    for (let x = 0; x < canvas.width; x++) {
      // Map x to history index
      const historyIndex = Math.floor(x / canvas.width * history.length);
      const spectrum = history[historyIndex] || history[history.length - 1];
      
      for (let y = 0; y < canvas.height; y++) {
        // Map y to frequency bin (flip so low freq at bottom)
        const binIndex = Math.floor((canvas.height - y - 1) / canvas.height * numBins);
        
        // Get dB value and normalize
        const db = spectrum[binIndex] || SPECTROGRAM_CONFIG.MIN_DB;
        const normalized = (db - SPECTROGRAM_CONFIG.MIN_DB) / 
                          (SPECTROGRAM_CONFIG.MAX_DB - SPECTROGRAM_CONFIG.MIN_DB);
        
        // Get color
        const [r, g, b] = getSpectrogramColor(normalized, dominantCluster);
        
        // Set pixel
        const pixelIndex = (y * canvas.width + x) * 4;
        data[pixelIndex] = r;
        data[pixelIndex + 1] = g;
        data[pixelIndex + 2] = b;
        data[pixelIndex + 3] = 255;
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Draw frequency labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    
    const sampleRate = 48000;
    const nyquist = sampleRate / 2;
    const freqLabels = [100, 500, 1000, 2000, 4000, 8000, 16000];
    
    for (const freq of freqLabels) {
      if (freq < nyquist) {
        const y = canvas.height - (freq / nyquist) * canvas.height;
        ctx.fillText(`${freq >= 1000 ? freq/1000 + 'k' : freq}`, 4, y + 3);
      }
    }
    
    // Draw time labels
    ctx.textAlign = 'center';
    for (let t = 0; t <= SPECTROGRAM_CONFIG.HISTORY_SECONDS; t++) {
      const x = (t / SPECTROGRAM_CONFIG.HISTORY_SECONDS) * canvas.width;
      ctx.fillText(`-${SPECTROGRAM_CONFIG.HISTORY_SECONDS - t}s`, x, canvas.height - 4);
    }
    
  }, [getSpectrogramColor, dominantCluster]);
  
  // Update spectrogram data
  const updateSpectrogram = useCallback(() => {
    if (!isListening || !analyserNode) return;
    
    // Get frequency data
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);
    analyserNode.getFloatFrequencyData(dataArray);
    
    // Add to history
    historyRef.current.push(dataArray);
    
    // Limit history length
    const maxHistory = Math.floor(
      SPECTROGRAM_CONFIG.HISTORY_SECONDS * 1000 / SPECTROGRAM_CONFIG.UPDATE_INTERVAL
    );
    while (historyRef.current.length > maxHistory) {
      historyRef.current.shift();
    }
    
    // Redraw
    draw();
    
  }, [isListening, analyserNode, draw]);
  
  // Animation loop
  useEffect(() => {
    if (!isListening) {
      historyRef.current = [];
      draw();
      return;
    }
    
    const interval = setInterval(updateSpectrogram, SPECTROGRAM_CONFIG.UPDATE_INTERVAL);
    
    return () => {
      clearInterval(interval);
    };
  }, [isListening, updateSpectrogram, draw]);
  
  // Initial draw
  useEffect(() => {
    draw();
  }, [draw]);
  
  return (
    <div className="spectrogram-container" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(10, 10, 20, 0.9)',
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      zIndex: 1000,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        gap: '8px'
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: isListening ? '#10b981' : '#6b7280',
          boxShadow: isListening ? '0 0 8px #10b981' : 'none'
        }} />
        <span style={{
          color: '#e5e7eb',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}>
          SPECTROGRAM
        </span>
        <span style={{
          color: '#9ca3af',
          fontSize: '10px',
          marginLeft: 'auto'
        }}>
          Last {SPECTROGRAM_CONFIG.HISTORY_SECONDS}s
        </span>
      </div>
      
      <canvas
        ref={canvasRef}
        width={SPECTROGRAM_CONFIG.WIDTH}
        height={SPECTROGRAM_CONFIG.HEIGHT}
        style={{
          borderRadius: '8px',
          display: 'block'
        }}
      />
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px',
        color: '#9ca3af',
        fontSize: '10px'
      }}>
        <span>Low Freq</span>
        <span>↑ Frequency</span>
        <span>High Freq</span>
      </div>
    </div>
  );
};

export default Spectrogram;
