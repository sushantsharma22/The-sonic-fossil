/**
 * Nebula.tsx - High-performance 3D point cloud renderer
 * Uses InstancedMesh with custom shaders for 50,000+ glowing points at 60FPS
 */
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const MAX_POINTS = 50000;
const POINT_SIZE = 0.015; // Small precise points

// Custom neon glow shader
const vertexShader = `
  attribute vec3 instancePosition;
  attribute float instanceIntensity;
  attribute float instanceAge;
  
  varying float vIntensity;
  varying float vAge;
  varying vec3 vWorldPosition;
  
  void main() {
    vIntensity = instanceIntensity;
    vAge = instanceAge;
    
    vec3 pos = position * ${POINT_SIZE.toFixed(4)} + instancePosition;
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPos.xyz;
    
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uTime;
  uniform vec3 uCameraPosition;
  
  varying float vIntensity;
  varying float vAge;
  varying vec3 vWorldPosition;
  
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
    
    // Electric cyan with intensity variation - brighter base
    vec3 color = uColor * (0.7 + vIntensity * 0.3) * pulse;
    
    // Add bloom halo - stronger
    float halo = smoothstep(0.5, 0.1, dist) * 0.5;
    color += uColor * halo;
    
    // Higher minimum alpha for visibility
    float finalAlpha = alpha * ageFade * fog * (0.8 + vIntensity * 0.2);
    finalAlpha = max(finalAlpha, 0.3); // Minimum visibility
    
    gl_FragColor = vec4(color, finalAlpha);
  }
`;

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

  // Buffers for instanced attributes
  const positionsRef = useRef<Float32Array>(new Float32Array(MAX_POINTS * 3));
  const intensitiesRef = useRef<Float32Array>(new Float32Array(MAX_POINTS));
  const agesRef = useRef<Float32Array>(new Float32Array(MAX_POINTS));
  const pointCountRef = useRef<number>(0);

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

    // Camera - positioned further back for expanded space
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 25);
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
        uColor: { value: new THREE.Color('#00ffff') },
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

    // Setup instanced attributes
    const positionAttr = new THREE.InstancedBufferAttribute(positionsRef.current, 3);
    const intensityAttr = new THREE.InstancedBufferAttribute(intensitiesRef.current, 1);
    const ageAttr = new THREE.InstancedBufferAttribute(agesRef.current, 1);

    geometry.setAttribute('instancePosition', positionAttr);
    geometry.setAttribute('instanceIntensity', intensityAttr);
    geometry.setAttribute('instanceAge', ageAttr);

    scene.add(instancedMesh);
    instancedMeshRef.current = instancedMesh;

    // Add ambient particles for atmosphere
    addAmbientParticles(scene);

    // Add 3D axes with labels for understanding the data
    add3DAxes(scene);

    // Grid helper (subtle) - expanded for larger space
    const gridHelper = new THREE.GridHelper(30, 30, '#111111', '#0a0a0a');
    gridHelper.position.y = -10;
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
    
    return () => {
      delete (window as any).__nebulaUpdatePoints;
      delete (window as any).__nebulaFlyToCluster;
      delete (window as any).__nebulaGetScene;
    };
  }, [updatePoints, flyToCluster]);

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
  const count = 2000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

    // Subtle cyan tint
    colors[i * 3] = 0.0;
    colors[i * 3 + 1] = 0.3 + Math.random() * 0.2;
    colors[i * 3 + 2] = 0.4 + Math.random() * 0.2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Animate ambient particles
  const animate = () => {
    points.rotation.y += 0.0002;
    points.rotation.x += 0.0001;
    requestAnimationFrame(animate);
  };
  animate();
}

// Helper: Add 3D axes with labels
function add3DAxes(scene: THREE.Scene) {
  const axisLength = 12;
  const axisOpacity = 0.6;
  
  // X Axis (Red) - Pitch/Frequency
  const xGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-axisLength, 0, 0),
    new THREE.Vector3(axisLength, 0, 0)
  ]);
  const xMaterial = new THREE.LineBasicMaterial({ color: '#ff4444', transparent: true, opacity: axisOpacity });
  const xAxis = new THREE.Line(xGeometry, xMaterial);
  scene.add(xAxis);
  
  // X axis arrow
  const xArrow = new THREE.ConeGeometry(0.15, 0.5, 8);
  const xArrowMesh = new THREE.Mesh(xArrow, new THREE.MeshBasicMaterial({ color: '#ff4444' }));
  xArrowMesh.position.set(axisLength, 0, 0);
  xArrowMesh.rotation.z = -Math.PI / 2;
  scene.add(xArrowMesh);
  
  // Y Axis (Green) - Harmonic Complexity
  const yGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -axisLength, 0),
    new THREE.Vector3(0, axisLength, 0)
  ]);
  const yMaterial = new THREE.LineBasicMaterial({ color: '#44ff44', transparent: true, opacity: axisOpacity });
  const yAxis = new THREE.Line(yGeometry, yMaterial);
  scene.add(yAxis);
  
  // Y axis arrow
  const yArrow = new THREE.ConeGeometry(0.15, 0.5, 8);
  const yArrowMesh = new THREE.Mesh(yArrow, new THREE.MeshBasicMaterial({ color: '#44ff44' }));
  yArrowMesh.position.set(0, axisLength, 0);
  scene.add(yArrowMesh);
  
  // Z Axis (Blue) - Temporal Texture
  const zGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, -axisLength),
    new THREE.Vector3(0, 0, axisLength)
  ]);
  const zMaterial = new THREE.LineBasicMaterial({ color: '#4444ff', transparent: true, opacity: axisOpacity });
  const zAxis = new THREE.Line(zGeometry, zMaterial);
  scene.add(zAxis);
  
  // Z axis arrow
  const zArrow = new THREE.ConeGeometry(0.15, 0.5, 8);
  const zArrowMesh = new THREE.Mesh(zArrow, new THREE.MeshBasicMaterial({ color: '#4444ff' }));
  zArrowMesh.position.set(0, 0, axisLength);
  zArrowMesh.rotation.x = Math.PI / 2;
  scene.add(zArrowMesh);
  
  // Add tick marks and region labels
  const tickMaterial = new THREE.LineBasicMaterial({ color: '#333333' });
  
  for (let i = -10; i <= 10; i += 2) {
    if (i === 0) continue;
    
    // X ticks
    const xTick = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(i, -0.2, 0),
      new THREE.Vector3(i, 0.2, 0)
    ]);
    scene.add(new THREE.Line(xTick, tickMaterial));
    
    // Y ticks
    const yTick = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.2, i, 0),
      new THREE.Vector3(0.2, i, 0)
    ]);
    scene.add(new THREE.Line(yTick, tickMaterial));
    
    // Z ticks
    const zTick = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -0.2, i),
      new THREE.Vector3(0, 0.2, i)
    ]);
    scene.add(new THREE.Line(zTick, tickMaterial));
  }
  
  // Add region indicator spheres (to show where different species cluster)
  const regionMaterial = new THREE.MeshBasicMaterial({ 
    color: '#00ffff', 
    transparent: true, 
    opacity: 0.05,
    side: THREE.DoubleSide
  });
  
  // Songbird region (upper right)
  const songbirdRegion = new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff6600', transparent: true, opacity: 0.03 })
  );
  songbirdRegion.position.set(5, 3, 0);
  scene.add(songbirdRegion);
  
  // Owl region (lower left back)
  const owlRegion = new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#6600ff', transparent: true, opacity: 0.03 })
  );
  owlRegion.position.set(-5, -3, -3);
  scene.add(owlRegion);
  
  // Human speech region (center top)
  const humanRegion = new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#00ff66', transparent: true, opacity: 0.03 })
  );
  humanRegion.position.set(0, 5, 0);
  scene.add(humanRegion);
}
