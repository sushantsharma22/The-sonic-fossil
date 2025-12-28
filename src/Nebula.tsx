/**
 * Nebula.tsx - High-performance 3D point cloud renderer
 * Uses InstancedMesh with custom shaders for 50,000+ glowing points at 60FPS
 * Supports cluster-based coloring via DBSCAN labels
 */
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const MAX_POINTS = 50000;
const POINT_SIZE = 0.015; // Small precise points

// Custom neon glow shader with per-point color support
const vertexShader = `
  attribute vec3 instancePosition;
  attribute float instanceIntensity;
  attribute float instanceAge;
  attribute vec3 instanceColor;
  
  varying float vIntensity;
  varying float vAge;
  varying vec3 vWorldPosition;
  varying vec3 vColor;
  
  void main() {
    vIntensity = instanceIntensity;
    vAge = instanceAge;
    vColor = instanceColor;
    
    vec3 pos = position * ${POINT_SIZE.toFixed(4)} + instancePosition;
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPos.xyz;
    
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uCameraPosition;
  
  varying float vIntensity;
  varying float vAge;
  varying vec3 vWorldPosition;
  varying vec3 vColor;
  
  void main() {
    // Distance-based glow - softer edge
    float dist = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.1, dist);
    
    // Pulsing based on time and intensity
    float pulse = 0.8 + 0.2 * sin(uTime * 2.0 + vIntensity * 10.0);
    
    // Age-based fade (newer points are brighter) - slower fade
    float ageFade = exp(-vAge * 0.2);
    
    // Distance fog - less aggressive
    float cameraDist = length(vWorldPosition - uCameraPosition);
    float fog = exp(-cameraDist * 0.02);
    
    // Use per-instance color with intensity variation
    vec3 color = vColor * (0.7 + vIntensity * 0.3) * pulse;
    
    // Add bloom halo - stronger
    float halo = smoothstep(0.5, 0.1, dist) * 0.5;
    color += vColor * halo;
    
    // Higher minimum alpha for visibility
    float finalAlpha = alpha * ageFade * fog * (0.8 + vIntensity * 0.2);
    finalAlpha = max(finalAlpha, 0.3); // Minimum visibility
    
    gl_FragColor = vec4(color, finalAlpha);
  }
`;

// Cluster centroid sphere interface
interface ClusterCentroid {
  x: number;
  y: number;
  z: number;
}

interface NebulaProps {
  onSceneReady?: (scene: THREE.Scene) => void;
  onCameraRef?: (camera: THREE.PerspectiveCamera) => void;
}

export default function Nebula({ onSceneReady, onCameraRef }: NebulaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const instancedMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const frameIdRef = useRef<number>(0);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  
  // Cluster centroid spheres
  const centroidSpheresRef = useRef<THREE.Mesh[]>([]);
  const showCentroidsRef = useRef<boolean>(true);

  // Buffers for instanced attributes
  const positionsRef = useRef<Float32Array>(new Float32Array(MAX_POINTS * 3));
  const intensitiesRef = useRef<Float32Array>(new Float32Array(MAX_POINTS));
  const agesRef = useRef<Float32Array>(new Float32Array(MAX_POINTS));
  const colorsRef = useRef<Float32Array>(new Float32Array(MAX_POINTS * 3));
  const pointCountRef = useRef<number>(0);
  
  // Cluster state
  const clusterLabelsRef = useRef<Int32Array>(new Int32Array(MAX_POINTS));
  const maxClusterIdRef = useRef<number>(0);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#050505');
    scene.fog = new THREE.FogExp2('#050505', 0.015);
    sceneRef.current = scene;

    // Camera - positioned for optimal view of bounded space (-4 to +4)
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(8, 6, 12);
    cameraRef.current = camera;
    onCameraRef?.(camera);

    // Renderer with WebGL2 fallback
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch {
      renderer = new THREE.WebGLRenderer({ antialias: false });
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor('#050505', 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 50;
    controls.minDistance = 2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controlsRef.current = controls;

    // Create instanced mesh for points
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uCameraPosition: { value: camera.position },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, MAX_POINTS);
    instancedMesh.count = 0;
    instancedMesh.frustumCulled = false;

    // Initialize colors to cyan
    for (let i = 0; i < MAX_POINTS; i++) {
      colorsRef.current[i * 3] = 0;     // R
      colorsRef.current[i * 3 + 1] = 1; // G
      colorsRef.current[i * 3 + 2] = 1; // B
    }

    // Setup instanced attributes
    const positionAttr = new THREE.InstancedBufferAttribute(positionsRef.current, 3);
    const intensityAttr = new THREE.InstancedBufferAttribute(intensitiesRef.current, 1);
    const ageAttr = new THREE.InstancedBufferAttribute(agesRef.current, 1);
    const colorAttr = new THREE.InstancedBufferAttribute(colorsRef.current, 3);

    geometry.setAttribute('instancePosition', positionAttr);
    geometry.setAttribute('instanceIntensity', intensityAttr);
    geometry.setAttribute('instanceAge', ageAttr);
    geometry.setAttribute('instanceColor', colorAttr);

    scene.add(instancedMesh);
    instancedMeshRef.current = instancedMesh;

    // Add ambient particles for atmosphere
    addAmbientParticles(scene);

    // Add 3D axes with labels for understanding the data
    add3DAxes(scene);

    // Grid helper (subtle) - sized to match bounds
    const gridHelper = new THREE.GridHelper(10, 10, '#1a1a1a', '#111111');
    gridHelper.position.y = -4;
    scene.add(gridHelper);

    // Notify parent
    onSceneReady?.(scene);

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      const elapsed = clockRef.current.getElapsedTime();
      
      // Update uniforms
      if (instancedMeshRef.current) {
        const mat = instancedMeshRef.current.material as THREE.ShaderMaterial;
        mat.uniforms.uTime.value = elapsed;
        mat.uniforms.uCameraPosition.value.copy(camera.position);
      }

      // Update ages
      const dt = clockRef.current.getDelta();
      for (let i = 0; i < pointCountRef.current; i++) {
        agesRef.current[i] += dt * 0.1;
      }
      if (instancedMeshRef.current) {
        const ageAttr = instancedMeshRef.current.geometry.getAttribute('instanceAge') as THREE.BufferAttribute;
        ageAttr.needsUpdate = true;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
      
      controls.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Clear buffers
      positionsRef.current.fill(0);
      intensitiesRef.current.fill(0);
      agesRef.current.fill(0);
    };
  }, [onSceneReady, onCameraRef]);

  // Update points from external data
  const updatePoints = useCallback((positions: Float32Array, count: number) => {
    if (!instancedMeshRef.current) return;

    const mesh = instancedMeshRef.current;
    const geometry = mesh.geometry;

    // Copy new positions
    const maxCount = Math.min(count, MAX_POINTS);
    for (let i = 0; i < maxCount * 3; i++) {
      positionsRef.current[i] = positions[i] || 0;
    }
    
    // Generate intensities based on position density
    for (let i = 0; i < maxCount; i++) {
      const x = positionsRef.current[i * 3];
      const y = positionsRef.current[i * 3 + 1];
      const z = positionsRef.current[i * 3 + 2];
      const dist = Math.sqrt(x * x + y * y + z * z);
      intensitiesRef.current[i] = Math.max(0.2, 1.0 - dist * 0.1);
      
      // Reset age for new points
      if (i >= pointCountRef.current) {
        agesRef.current[i] = 0;
      }
    }

    // Update buffer attributes
    const posAttr = geometry.getAttribute('instancePosition') as THREE.BufferAttribute;
    const intAttr = geometry.getAttribute('instanceIntensity') as THREE.BufferAttribute;
    const ageAttr = geometry.getAttribute('instanceAge') as THREE.BufferAttribute;
    
    posAttr.needsUpdate = true;
    intAttr.needsUpdate = true;
    ageAttr.needsUpdate = true;

    mesh.count = maxCount;
    pointCountRef.current = maxCount;
  }, []);

  // Update cluster colors based on DBSCAN labels
  const updateClusterColors = useCallback((
    labels: Int32Array, 
    centroids: ClusterCentroid[], 
    maxCluster: number
  ) => {
    if (!instancedMeshRef.current) return;

    const mesh = instancedMeshRef.current;
    const geometry = mesh.geometry;
    
    // Store labels and max cluster
    for (let i = 0; i < labels.length; i++) {
      clusterLabelsRef.current[i] = labels[i];
    }
    maxClusterIdRef.current = maxCluster;
    
    // Generate colors for each point based on cluster
    for (let i = 0; i < pointCountRef.current; i++) {
      const clusterId = clusterLabelsRef.current[i];
      
      if (clusterId === -1) {
        // Noise points: dark gray
        colorsRef.current[i * 3] = 0.3;
        colorsRef.current[i * 3 + 1] = 0.3;
        colorsRef.current[i * 3 + 2] = 0.3;
      } else {
        // Cluster points: HSL color based on cluster ID
        const hue = (clusterId / Math.max(1, maxCluster + 1)) * 360;
        const color = new THREE.Color();
        color.setHSL(hue / 360, 0.9, 0.6);
        colorsRef.current[i * 3] = color.r;
        colorsRef.current[i * 3 + 1] = color.g;
        colorsRef.current[i * 3 + 2] = color.b;
      }
    }
    
    // Update color buffer
    const colorAttr = geometry.getAttribute('instanceColor') as THREE.BufferAttribute;
    colorAttr.needsUpdate = true;
    
    // Update centroid spheres
    updateCentroidSpheres(centroids, maxCluster);
  }, []);
  
  // Update centroid visualization spheres
  const updateCentroidSpheres = useCallback((centroids: ClusterCentroid[], maxCluster: number) => {
    if (!sceneRef.current) return;
    
    const scene = sceneRef.current;
    
    // Remove old spheres
    for (const sphere of centroidSpheresRef.current) {
      scene.remove(sphere);
      sphere.geometry.dispose();
      (sphere.material as THREE.Material).dispose();
    }
    centroidSpheresRef.current = [];
    
    if (!showCentroidsRef.current) return;
    
    // Create new centroid spheres
    for (let i = 0; i < centroids.length; i++) {
      const centroid = centroids[i];
      const hue = (i / Math.max(1, maxCluster + 1)) * 360;
      const color = new THREE.Color();
      color.setHSL(hue / 360, 0.9, 0.6);
      
      const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.7 
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(centroid.x, centroid.y, centroid.z);
      
      // Add glow ring
      const ringGeometry = new THREE.RingGeometry(0.2, 0.25, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.4,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.lookAt(cameraRef.current?.position || new THREE.Vector3(0, 0, 1));
      sphere.add(ring);
      
      scene.add(sphere);
      centroidSpheresRef.current.push(sphere);
    }
  }, []);
  
  // Toggle centroid visibility
  const toggleCentroids = useCallback((show: boolean) => {
    showCentroidsRef.current = show;
    for (const sphere of centroidSpheresRef.current) {
      sphere.visible = show;
    }
  }, []);

  // Animate camera to cluster
  const flyToCluster = useCallback((target: THREE.Vector3) => {
    if (!cameraRef.current || !controlsRef.current) return;

    const camera = cameraRef.current;
    const controls = controlsRef.current;

    // Calculate optimal camera position
    const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
    const newPosition = target.clone().add(direction.multiplyScalar(5));

    gsap.to(camera.position, {
      x: newPosition.x,
      y: newPosition.y,
      z: newPosition.z,
      duration: 2,
      ease: 'power2.inOut',
    });

    gsap.to(controls.target, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 2,
      ease: 'power2.inOut',
    });
  }, []);

  // Expose methods via ref or context
  useEffect(() => {
    (window as any).__nebulaUpdatePoints = updatePoints;
    (window as any).__nebulaFlyToCluster = flyToCluster;
    (window as any).__nebulaGetScene = () => sceneRef.current;
    (window as any).__nebulaUpdateClusterColors = updateClusterColors;
    (window as any).__nebulaToggleCentroids = toggleCentroids;
    
    return () => {
      delete (window as any).__nebulaUpdatePoints;
      delete (window as any).__nebulaFlyToCluster;
      delete (window as any).__nebulaGetScene;
      delete (window as any).__nebulaUpdateClusterColors;
      delete (window as any).__nebulaToggleCentroids;
    };
  }, [updatePoints, flyToCluster, updateClusterColors, toggleCentroids]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0"
      style={{ background: '#050505' }}
    />
  );
}

// Helper: Add ambient floating particles
function addAmbientParticles(scene: THREE.Scene) {
  const count = 500; // Fewer particles
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Keep particles within visible bounds
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 16;

    // Subtle cyan tint
    colors[i * 3] = 0.0;
    colors[i * 3 + 1] = 0.2 + Math.random() * 0.1;
    colors[i * 3 + 2] = 0.3 + Math.random() * 0.1;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.015,
    vertexColors: true,
    transparent: true,
    opacity: 0.2,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Slow rotation
  const animate = () => {
    points.rotation.y += 0.0001;
    points.rotation.x += 0.00005;
    requestAnimationFrame(animate);
  };
  animate();
}

// Helper: Add 3D axes with labels
function add3DAxes(scene: THREE.Scene) {
  const axisLength = 5; // Match the -4 to +4 bounds
  const axisOpacity = 0.8;
  
  // Create a bounding box to show the data space
  const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
  const boxEdges = new THREE.EdgesGeometry(boxGeometry);
  const boxMaterial = new THREE.LineBasicMaterial({ color: '#1a1a1a', transparent: true, opacity: 0.3 });
  const boundingBox = new THREE.LineSegments(boxEdges, boxMaterial);
  scene.add(boundingBox);
  
  // X Axis (Red) - Spectral Centroid / Frequency
  const xGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-axisLength, 0, 0),
    new THREE.Vector3(axisLength, 0, 0)
  ]);
  const xMaterial = new THREE.LineBasicMaterial({ color: '#ff4444', transparent: true, opacity: axisOpacity });
  const xAxis = new THREE.Line(xGeometry, xMaterial);
  scene.add(xAxis);
  
  // X axis arrow
  const xArrow = new THREE.ConeGeometry(0.1, 0.3, 8);
  const xArrowMesh = new THREE.Mesh(xArrow, new THREE.MeshBasicMaterial({ color: '#ff4444' }));
  xArrowMesh.position.set(axisLength, 0, 0);
  xArrowMesh.rotation.z = -Math.PI / 2;
  scene.add(xArrowMesh);
  
  // Y Axis (Green) - Tonality / Harmonic Content
  const yGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -axisLength, 0),
    new THREE.Vector3(0, axisLength, 0)
  ]);
  const yMaterial = new THREE.LineBasicMaterial({ color: '#44ff44', transparent: true, opacity: axisOpacity });
  const yAxis = new THREE.Line(yGeometry, yMaterial);
  scene.add(yAxis);
  
  // Y axis arrow
  const yArrow = new THREE.ConeGeometry(0.1, 0.3, 8);
  const yArrowMesh = new THREE.Mesh(yArrow, new THREE.MeshBasicMaterial({ color: '#44ff44' }));
  yArrowMesh.position.set(0, axisLength, 0);
  scene.add(yArrowMesh);
  
  // Z Axis (Blue) - Temporal Variation
  const zGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, -axisLength),
    new THREE.Vector3(0, 0, axisLength)
  ]);
  const zMaterial = new THREE.LineBasicMaterial({ color: '#4444ff', transparent: true, opacity: axisOpacity });
  const zAxis = new THREE.Line(zGeometry, zMaterial);
  scene.add(zAxis);
  
  // Z axis arrow
  const zArrow = new THREE.ConeGeometry(0.1, 0.3, 8);
  const zArrowMesh = new THREE.Mesh(zArrow, new THREE.MeshBasicMaterial({ color: '#4444ff' }));
  zArrowMesh.position.set(0, 0, axisLength);
  zArrowMesh.rotation.x = Math.PI / 2;
  scene.add(zArrowMesh);
  
  // Add tick marks every 2 units
  const tickMaterial = new THREE.LineBasicMaterial({ color: '#333333' });
  
  for (let i = -4; i <= 4; i += 2) {
    if (i === 0) continue;
    
    // X ticks
    const xTick = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(i, -0.1, 0),
      new THREE.Vector3(i, 0.1, 0)
    ]);
    scene.add(new THREE.Line(xTick, tickMaterial));
    
    // Y ticks
    const yTick = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.1, i, 0),
      new THREE.Vector3(0.1, i, 0)
    ]);
    scene.add(new THREE.Line(yTick, tickMaterial));
    
    // Z ticks
    const zTick = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -0.1, i),
      new THREE.Vector3(0, 0.1, i)
    ]);
    scene.add(new THREE.Line(zTick, tickMaterial));
  }
  
  // Add small spheres at axis endpoints to show labels
  const labelSphereGeo = new THREE.SphereGeometry(0.08, 8, 8);
  
  // X+ label (High Frequency)
  const xPlusSphere = new THREE.Mesh(labelSphereGeo, new THREE.MeshBasicMaterial({ color: '#ff6666' }));
  xPlusSphere.position.set(axisLength + 0.3, 0, 0);
  scene.add(xPlusSphere);
  
  // X- label (Low Frequency)
  const xMinusSphere = new THREE.Mesh(labelSphereGeo, new THREE.MeshBasicMaterial({ color: '#ff6666', opacity: 0.5, transparent: true }));
  xMinusSphere.position.set(-axisLength - 0.3, 0, 0);
  scene.add(xMinusSphere);
  
  // Y+ label (Tonal)
  const yPlusSphere = new THREE.Mesh(labelSphereGeo, new THREE.MeshBasicMaterial({ color: '#66ff66' }));
  yPlusSphere.position.set(0, axisLength + 0.3, 0);
  scene.add(yPlusSphere);
  
  // Y- label (Noisy)
  const yMinusSphere = new THREE.Mesh(labelSphereGeo, new THREE.MeshBasicMaterial({ color: '#66ff66', opacity: 0.5, transparent: true }));
  yMinusSphere.position.set(0, -axisLength - 0.3, 0);
  scene.add(yMinusSphere);
  
  // Z+ label (Varying)
  const zPlusSphere = new THREE.Mesh(labelSphereGeo, new THREE.MeshBasicMaterial({ color: '#6666ff' }));
  zPlusSphere.position.set(0, 0, axisLength + 0.3);
  scene.add(zPlusSphere);
  
  // Z- label (Steady)
  const zMinusSphere = new THREE.Mesh(labelSphereGeo, new THREE.MeshBasicMaterial({ color: '#6666ff', opacity: 0.5, transparent: true }));
  zMinusSphere.position.set(0, 0, -axisLength - 0.3);
  scene.add(zMinusSphere);
}
