/**
 * Exporter.ts - Export utilities for Sonic Fossil
 * Supports: STL (3D print), JSON (data), Screenshot (image), GLB (3D with color)
 */
import * as THREE from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

export interface ExportOptions {
  filename?: string;
  scale?: number;
  sphereRadius?: number;
  sphereDetail?: number;
  binary?: boolean;
}

const defaultOptions: Required<ExportOptions> = {
  filename: 'sonic_fossil',
  scale: 10,
  sphereRadius: 0.02, // Small spheres for fine "dust" look
  sphereDetail: 1,
  binary: true,
};

/**
 * Export the current point cloud as an STL file
 */
export function exportPointCloudAsSTL(
  positions: Float32Array,
  count: number,
  options: ExportOptions = {}
): void {
  const opts = { ...defaultOptions, ...options };
  
  // Create a temporary scene with spheres at each point
  const exportScene = new THREE.Scene();
  const sphereGeometry = new THREE.IcosahedronGeometry(opts.sphereRadius, opts.sphereDetail);
  const material = new THREE.MeshBasicMaterial();

  // For large point clouds, use merged geometry for better performance
  const mergedGeometry = new THREE.BufferGeometry();
  const positionsArray: number[] = [];
  const indicesArray: number[] = [];
  
  const basePositions = sphereGeometry.getAttribute('position').array;
  const baseIndices = sphereGeometry.index?.array || [];
  const vertexCount = basePositions.length / 3;

  for (let i = 0; i < count; i++) {
    const px = positions[i * 3] * opts.scale;
    const py = positions[i * 3 + 1] * opts.scale;
    const pz = positions[i * 3 + 2] * opts.scale;

    // Add sphere vertices offset by point position
    for (let j = 0; j < basePositions.length; j += 3) {
      positionsArray.push(
        basePositions[j] * opts.scale + px,
        basePositions[j + 1] * opts.scale + py,
        basePositions[j + 2] * opts.scale + pz
      );
    }

    // Add indices offset by current vertex count
    const indexOffset = i * vertexCount;
    for (let j = 0; j < baseIndices.length; j++) {
      indicesArray.push(baseIndices[j] + indexOffset);
    }
  }

  mergedGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positionsArray, 3)
  );
  mergedGeometry.setIndex(indicesArray);
  mergedGeometry.computeVertexNormals();

  const mesh = new THREE.Mesh(mergedGeometry, material);
  exportScene.add(mesh);

  // Export using STLExporter
  const exporter = new STLExporter();
  let result: string | DataView;

  if (opts.binary) {
    result = exporter.parse(exportScene, { binary: true }) as DataView;
    downloadBlob(
      new Blob([new Uint8Array(result.buffer as ArrayBuffer)], { type: 'application/octet-stream' }),
      `${opts.filename}.stl`
    );
  } else {
    result = exporter.parse(exportScene, { binary: false }) as string;
    downloadBlob(
      new Blob([result], { type: 'text/plain' }),
      `${opts.filename}.stl`
    );
  }

  // Cleanup
  mergedGeometry.dispose();
  sphereGeometry.dispose();
  material.dispose();
}

/**
 * Export the entire Three.js scene as STL
 */
export function exportSceneAsSTL(
  scene: THREE.Scene,
  options: ExportOptions = {}
): void {
  const opts = { ...defaultOptions, ...options };
  const exporter = new STLExporter();

  if (opts.binary) {
    const result = exporter.parse(scene, { binary: true }) as DataView;
    downloadBlob(
      new Blob([new Uint8Array(result.buffer as ArrayBuffer)], { type: 'application/octet-stream' }),
      `${opts.filename}.stl`
    );
  } else {
    const result = exporter.parse(scene, { binary: false }) as string;
    downloadBlob(
      new Blob([result], { type: 'text/plain' }),
      `${opts.filename}.stl`
    );
  }
}

/**
 * Create a convex hull mesh from points for a more sculptural export
 */
export function exportConvexHullAsSTL(
  positions: Float32Array,
  count: number,
  options: ExportOptions = {}
): void {
  const opts = { ...defaultOptions, ...options };
  
  // Create points for ConvexGeometry
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    points.push(new THREE.Vector3(
      positions[i * 3] * opts.scale,
      positions[i * 3 + 1] * opts.scale,
      positions[i * 3 + 2] * opts.scale
    ));
  }

  // Use BufferGeometryUtils to create convex hull
  // For simplicity, we'll create a basic mesh connecting nearby points
  const geometry = createSimpleMesh(points);
  const material = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  
  const scene = new THREE.Scene();
  scene.add(mesh);

  const exporter = new STLExporter();
  const result = exporter.parse(scene, { binary: true }) as DataView;
  downloadBlob(
    new Blob([new Uint8Array(result.buffer as ArrayBuffer)], { type: 'application/octet-stream' }),
    `${opts.filename}_hull.stl`
  );

  geometry.dispose();
  material.dispose();
}

/**
 * Create a simple mesh from points using Delaunay-like triangulation
 */
function createSimpleMesh(points: THREE.Vector3[]): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const vertices: number[] = [];
  
  // Sort points by distance from center for better triangulation
  const center = new THREE.Vector3();
  points.forEach(p => center.add(p));
  center.divideScalar(points.length);
  
  const sorted = [...points].sort((a, b) => 
    a.distanceTo(center) - b.distanceTo(center)
  );

  // Create triangles connecting nearby points
  for (let i = 0; i < sorted.length - 2; i++) {
    const p1 = sorted[i];
    const p2 = sorted[i + 1];
    const p3 = sorted[i + 2];
    
    vertices.push(
      p1.x, p1.y, p1.z,
      p2.x, p2.y, p2.z,
      p3.x, p3.y, p3.z
    );
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  
  return geometry;
}

/**
 * Helper to download a blob as a file
 */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Get current positions from the Nebula component
 */
export function getCurrentPositions(): { positions: Float32Array; count: number } | null {
  const scene = (window as any).__nebulaGetScene?.() as THREE.Scene | undefined;
  if (!scene) return null;

  // Find the instanced mesh
  let positions: Float32Array | null = null;
  let count = 0;

  scene.traverse((obj) => {
    if (obj instanceof THREE.InstancedMesh && obj.count > 0) {
      const posAttr = obj.geometry.getAttribute('instancePosition');
      if (posAttr) {
        positions = posAttr.array as Float32Array;
        count = obj.count;
      }
    }
  });

  if (!positions) return null;
  return { positions, count };
}

/**
 * Export handler that can be called from UI
 */
export function handleExport(format: 'stl' | 'hull' = 'stl'): void {
  const data = getCurrentPositions();
  if (!data) {
    console.warn('No point cloud data available for export');
    return;
  }

  const timestamp = new Date().toISOString().slice(0, 10);
  const filename = `sonic_fossil_${timestamp}`;

  if (format === 'hull') {
    exportConvexHullAsSTL(data.positions, data.count, { filename });
  } else {
    exportPointCloudAsSTL(data.positions, data.count, { filename });
  }
}

/**
 * Export session data as JSON for analysis
 */
export function exportAsJSON(data: any): void {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '');
  const filename = `sonic_fossil_data_${timestamp}.json`;
  
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  downloadBlob(blob, filename);
  
  console.log(`[Exporter] JSON exported: ${filename} (${(jsonStr.length / 1024).toFixed(1)} KB)`);
}

/**
 * Capture screenshot of the canvas
 */
export function captureScreenshot(renderer: THREE.WebGLRenderer): void {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '');
  const filename = `sonic_fossil_${timestamp}.png`;
  
  // Get canvas data URL
  const dataURL = renderer.domElement.toDataURL('image/png');
  
  // Convert to blob and download
  fetch(dataURL)
    .then(res => res.blob())
    .then(blob => {
      downloadBlob(blob, filename);
      console.log(`[Exporter] Screenshot saved: ${filename}`);
    });
}

/**
 * Export as GLB (GLTF binary) with colors preserved
 */
export function exportAsGLB(
  positions: Float32Array,
  count: number,
  options: ExportOptions = {}
): void {
  const opts = { ...defaultOptions, ...options };
  
  // Create scene with colored spheres
  const exportScene = new THREE.Scene();
  
  // Group points by approximate position for coloring
  const sphereGeometry = new THREE.IcosahedronGeometry(opts.sphereRadius * opts.scale, opts.sphereDetail);
  
  for (let i = 0; i < count; i++) {
    const x = positions[i * 3] * opts.scale;
    const y = positions[i * 3 + 1] * opts.scale;
    const z = positions[i * 3 + 2] * opts.scale;
    
    // Color based on position (for visual clustering)
    const hue = (Math.atan2(z, x) + Math.PI) / (2 * Math.PI); // 0-1 based on XZ angle
    const saturation = 0.7;
    const lightness = 0.5 + y / (opts.scale * 20); // Brighter at top
    
    const color = new THREE.Color().setHSL(hue, saturation, Math.max(0.2, Math.min(0.8, lightness)));
    
    const material = new THREE.MeshStandardMaterial({ 
      color,
      metalness: 0.3,
      roughness: 0.7,
      emissive: color,
      emissiveIntensity: 0.2
    });
    
    const sphere = new THREE.Mesh(sphereGeometry.clone(), material);
    sphere.position.set(x, y, z);
    exportScene.add(sphere);
  }
  
  // Add lights for better GLB viewing
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  exportScene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, 10, 10);
  exportScene.add(directionalLight);
  
  // Export
  const exporter = new GLTFExporter();
  exporter.parse(
    exportScene,
    (result) => {
      const blob = new Blob([result as ArrayBuffer], { type: 'application/octet-stream' });
      const timestamp = new Date().toISOString().slice(0, 10);
      downloadBlob(blob, `${opts.filename}_${timestamp}.glb`);
      console.log(`[Exporter] GLB exported with ${count} colored points`);
    },
    (error) => {
      console.error('[Exporter] GLB export failed:', error);
    },
    { binary: true }
  );
  
  // Cleanup
  sphereGeometry.dispose();
}

/**
 * Get renderer from Nebula component
 */
export function getRenderer(): THREE.WebGLRenderer | null {
  // Try to get renderer from the Nebula component's canvas
  const canvas = document.querySelector('canvas');
  if (!canvas) return null;
  
  // The renderer is attached to the canvas in Nebula
  // We need to access it through the window global
  return (window as any).__nebulaRenderer || null;
}
