'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { 
  RotateCw, 
  Sparkles, 
  Flame, 
  Droplets, 
  Layers, 
  ShieldCheck, 
  Maximize2, 
  Minimize2, 
  ArrowRight, 
  Check, 
  Camera,
  Compass,
  RefreshCw
} from 'lucide-react';

export interface PPFColourOption {
  id: string;
  name: string;
  category: 'gloss' | 'matte' | 'pearl';
  hex: string;
  threeColor: number;
  roughness: number;
  metalness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  tag: string;
  description: string;
}

export const PPF_COLOURS: PPFColourOption[] = [
  // 1. Ultra Gloss Series
  {
    id: 'english-white',
    name: 'English White (Factory)',
    category: 'gloss',
    hex: '#F0F3F6',
    threeColor: 0xF0F3F6,
    roughness: 0.08,
    metalness: 0.08,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Original Bespoke',
    description: 'Pristine Rolls-Royce English White with ultra-gloss optical TPU clearcoat protection.',
  },
  {
    id: 'nardo-grigio',
    name: 'Nardo Grigio Gloss',
    category: 'gloss',
    hex: '#787C82',
    threeColor: 0x787C82,
    roughness: 0.09,
    metalness: 0.12,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Trending Hypercar',
    description: 'High-gloss contemporary stealth grey with liquid mirror reflections.',
  },
  {
    id: 'royal-sapphire',
    name: 'Royal Sapphire Blue',
    category: 'gloss',
    hex: '#0C1F45',
    threeColor: 0x0C1F45,
    roughness: 0.08,
    metalness: 0.42,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Imperial Elegance',
    description: 'Deep British royal navy blue with metallic depth and intense specular highlights.',
  },
  {
    id: 'british-racing-green',
    name: 'British Racing Green',
    category: 'gloss',
    hex: '#0B2A1C',
    threeColor: 0x0B2A1C,
    roughness: 0.08,
    metalness: 0.35,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Heritage Luxury',
    description: 'Timeless deep British emerald gloss with rich metallic undertones.',
  },
  {
    id: 'crimson-ruby',
    name: 'Crimson Royal Wine',
    category: 'gloss',
    hex: '#5E0A16',
    threeColor: 0x5E0A16,
    roughness: 0.07,
    metalness: 0.38,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Lustrous Candy',
    description: 'Lustrous deep ruby red with multi-dimensional depth under studio softboxes.',
  },
  {
    id: 'diamond-black',
    name: 'Obsidian High-Gloss Black',
    category: 'gloss',
    hex: '#0A0A0C',
    threeColor: 0x0A0A0C,
    roughness: 0.05,
    metalness: 0.22,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Liquid Mirror',
    description: 'Flawless piano black with zero orange peel and ultra-deep reflections.',
  },

  // 2. Velvet Satin / Matte Series
  {
    id: 'satin-stealth-charcoal',
    name: 'Satin Stealth Charcoal',
    category: 'matte',
    hex: '#2C2E33',
    threeColor: 0x2C2E33,
    roughness: 0.45,
    metalness: 0.25,
    clearcoat: 0.25,
    clearcoatRoughness: 0.45,
    tag: 'Stealth Edition',
    description: 'Silky velvet matte charcoal grey that diffuses highlights with aggressive elegance.',
  },
  {
    id: 'frozen-white',
    name: 'Frozen Arctic White',
    category: 'matte',
    hex: '#E5E8EC',
    threeColor: 0xE5E8EC,
    roughness: 0.48,
    metalness: 0.05,
    clearcoat: 0.2,
    clearcoatRoughness: 0.5,
    tag: 'Frosted Luxury',
    description: 'Satin matte white with frosted optical diffusion, converting factory paint to frozen velvet.',
  },
  {
    id: 'satin-olive-drab',
    name: 'Satin Army Olive Green',
    category: 'matte',
    hex: '#323D2E',
    threeColor: 0x323D2E,
    roughness: 0.44,
    metalness: 0.2,
    clearcoat: 0.25,
    clearcoatRoughness: 0.45,
    tag: 'Military Chic',
    description: 'Sophisticated matte military olive giving hyper-luxury silhouettes a tactical presence.',
  },
  {
    id: 'matte-titanium',
    name: 'Satin Brushed Titanium',
    category: 'matte',
    hex: '#55585E',
    threeColor: 0x55585E,
    roughness: 0.40,
    metalness: 0.58,
    clearcoat: 0.3,
    clearcoatRoughness: 0.4,
    tag: 'Brushed Metal',
    description: 'Satin metallic titanium with horizontal sheen and subtle metallic flakes.',
  },

  // 3. Metallic Pearl Series
  {
    id: 'liquid-silver-pearl',
    name: 'Liquid Starlight Silver',
    category: 'pearl',
    hex: '#C4C9D2',
    threeColor: 0xC4C9D2,
    roughness: 0.09,
    metalness: 0.72,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    tag: 'Liquid Metal',
    description: 'High-specular liquid aluminum reflection resembling bare polished metal.',
  },
  {
    id: 'northern-lights',
    name: 'Northern Lights Shift',
    category: 'pearl',
    hex: '#2E164D',
    threeColor: 0x2E164D,
    roughness: 0.12,
    metalness: 0.55,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    tag: 'Chameleon Pearl',
    description: 'Dynamic color shift between deep midnight violet and teal cyan highlights.',
  },
];

interface CameraAngle {
  id: string;
  label: string;
  azimuth: number;
  elevation: number;
  distance: number;
}

const CAMERA_ANGLES: CameraAngle[] = [
  { id: 'hero-34', label: 'Front 3/4', azimuth: 38, elevation: 14, distance: 7.6 },
  { id: 'profile', label: 'Side Profile', azimuth: 90, elevation: 10, distance: 8.2 },
  { id: 'grille', label: 'Pantheon Grille', azimuth: 0, elevation: 8, distance: 5.6 },
  { id: 'rear-34', label: 'Rear 3/4', azimuth: 145, elevation: 16, distance: 7.8 },
  { id: 'birds-eye', label: 'Aerial Roof', azimuth: 45, elevation: 48, distance: 8.6 },
];

export default function RollsRoycePPFStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasHostRef = useRef<HTMLDivElement>(null);

  // Studio UI states
  const [selectedColour, setSelectedColour] = useState<PPFColourOption>(PPF_COLOURS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'gloss' | 'matte' | 'pearl'>('all');
  const [activeAngle, setActiveAngle] = useState<string>('hero-34');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [dualTone, setDualTone] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isScratchSimActive, setIsScratchSimActive] = useState<boolean>(false);
  const [isHealingInProgress, setIsHealingInProgress] = useState<boolean>(false);
  const [scratchSeverity, setScratchSeverity] = useState<number>(0);
  const [showWaterBeading, setShowWaterBeading] = useState<boolean>(false);
  
  // Model loading states
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(15);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Mutable refs to prevent unnecessary scene re-creation
  const autoRotateRef = useRef<boolean>(true);
  const isScratchSimActiveRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const selectedColourRef = useRef<PPFColourOption>(PPF_COLOURS[0]);
  const dualToneRef = useRef<boolean>(false);

  // Camera damping targets
  const targetAzimuthRef = useRef<number>(38 * (Math.PI / 180));
  const currentAzimuthRef = useRef<number>(38 * (Math.PI / 180));
  const targetElevationRef = useRef<number>(14 * (Math.PI / 180));
  const currentElevationRef = useRef<number>(14 * (Math.PI / 180));
  const targetDistanceRef = useRef<number>(7.6);
  const currentDistanceRef = useRef<number>(7.6);

  // Three.js internal objects
  const bodyMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const secondaryMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const scratchMeshRef = useRef<THREE.Mesh | null>(null);
  const waterDropletsGroupRef = useRef<THREE.Group | null>(null);
  const requestRef = useRef<number | null>(null);

  // Sync React state to refs
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    isScratchSimActiveRef.current = isScratchSimActive;
  }, [isScratchSimActive]);

  useEffect(() => {
    selectedColourRef.current = selectedColour;
  }, [selectedColour]);

  useEffect(() => {
    dualToneRef.current = dualTone;
  }, [dualTone]);

  const filteredColours = useMemo(() => {
    return activeCategory === 'all' 
      ? PPF_COLOURS 
      : PPF_COLOURS.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  // ==========================================
  // 1. DYNAMIC COLOUR & PPF FINISH APPLICATION
  // ==========================================
  const applyColourToMaterials = useCallback((colour: PPFColourOption, isTwoTone: boolean) => {
    // 1. Primary Body Paint Panels
    bodyMaterialsRef.current.forEach((mat) => {
      mat.color.setHex(colour.threeColor);
      mat.roughness = colour.roughness;
      mat.metalness = colour.metalness;
      mat.clearcoat = colour.clearcoat;
      mat.clearcoatRoughness = colour.clearcoatRoughness;
      mat.needsUpdate = true;
    });

    // 2. Secondary Bonnet/Roof Paint Panels (Two-Tone Contrast)
    secondaryMaterialsRef.current.forEach((mat) => {
      if (isTwoTone && colour.id !== 'liquid-silver-pearl') {
        mat.color.setHex(0xC2C6CE); // Starlight Bespoke Silver
        mat.metalness = 0.72;
        mat.roughness = 0.10;
        mat.clearcoat = 1.0;
        mat.clearcoatRoughness = 0.02;
      } else {
        mat.color.setHex(colour.threeColor);
        mat.roughness = colour.roughness;
        mat.metalness = colour.metalness;
        mat.clearcoat = colour.clearcoat;
        mat.clearcoatRoughness = colour.clearcoatRoughness;
      }
      mat.needsUpdate = true;
    });
  }, []);

  useEffect(() => {
    applyColourToMaterials(selectedColour, dualTone);
  }, [selectedColour, dualTone, applyColourToMaterials]);

  // ==========================================
  // 2. THREE.JS INITIALIZATION WITH ROBUST LIFECYCLE
  // ==========================================
  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host) return;

    // Remove any leftover canvas children to ensure fresh WebGL context
    while (host.firstChild) {
      host.removeChild(host.firstChild);
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let pmremGenerator: THREE.PMREMGenerator | null = null;
    let roomEnvScene: RoomEnvironment | null = null;
    let envRenderTarget: THREE.WebGLRenderTarget | null = null;
    let isDisposed = false;

    try {
      const width = host.clientWidth || 800;
      const height = host.clientHeight || 550;

      // 1. Scene with dark showroom atmosphere
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x08080A);
      scene.fog = new THREE.FogExp2(0x08080A, 0.025);

      // 2. Camera setup
      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);

      // 3. WebGLRenderer (brand new DOM element dynamically attached)
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
        alpha: false,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const canvas = renderer.domElement;
      canvas.className = 'w-full h-full cursor-grab active:cursor-grabbing touch-none block';
      canvas.setAttribute('aria-label', 'Interactive 3D model of Rolls Royce with Coloured PPF');
      host.appendChild(canvas);

      // 4. Studio Environment Reflections (RoomEnvironment)
      try {
        pmremGenerator = new THREE.PMREMGenerator(renderer);
        roomEnvScene = new RoomEnvironment();
        envRenderTarget = pmremGenerator.fromScene(roomEnvScene, 0.04);
        scene.environment = envRenderTarget.texture;
      } catch (envErr) {
        console.warn('RoomEnvironment fallback to standard studio lights:', envErr);
      }

      // 5. Studio Lighting Rig (Simulating high-end detailing bay)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      // Key light: warm luxury illumination
      const keyLight = new THREE.DirectionalLight(0xfffaf0, 1.8);
      keyLight.position.set(6, 7, 6);
      scene.add(keyLight);

      // Fill light: cool soft illumination
      const fillLight = new THREE.DirectionalLight(0xebf2ff, 1.0);
      fillLight.position.set(-6, 5, 4);
      scene.add(fillLight);

      // Rim light: edge separation on shoulders and roofline
      const rimLight = new THREE.DirectionalLight(0xffeedd, 1.4);
      rimLight.position.set(0, 5, -7);
      scene.add(rimLight);

      // Detailing ground glow
      const redGlow = new THREE.PointLight(0xff1e1e, 1.2, 10);
      redGlow.position.set(0, 0.15, 0);
      scene.add(redGlow);

      // 6. Turntable Platform & Stage
      const stageRadius = 4.8;
      const stage = new THREE.Mesh(
        new THREE.CylinderGeometry(stageRadius, stageRadius, 0.12, 64),
        new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.35, metalness: 0.65 })
      );
      stage.position.y = -0.06;
      scene.add(stage);

      // Perimeter glowing LED ring
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(stageRadius - 0.06, stageRadius + 0.04, 64),
        new THREE.MeshBasicMaterial({ color: 0xff1e1e, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.005;
      scene.add(ring);

      // Soft ambient occlusion contact shadow under chassis
      const shadowCanvas = document.createElement('canvas');
      shadowCanvas.width = 512;
      shadowCanvas.height = 512;
      const sCtx = shadowCanvas.getContext('2d');
      if (sCtx) {
        const grad = sCtx.createRadialGradient(256, 256, 40, 256, 256, 240);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0.92)');
        grad.addColorStop(0.45, 'rgba(0, 0, 0, 0.55)');
        grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.15)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        sCtx.fillStyle = grad;
        sCtx.fillRect(0, 0, 512, 512);
      }
      const shadowTex = new THREE.CanvasTexture(shadowCanvas);
      const shadowDisc = new THREE.Mesh(
        new THREE.PlaneGeometry(3.6, 6.6),
        new THREE.MeshBasicMaterial({ 
          map: shadowTex, 
          transparent: true, 
          opacity: 0.88,
          depthWrite: false,
        })
      );
      shadowDisc.rotation.x = -Math.PI / 2;
      shadowDisc.position.y = 0.01;
      scene.add(shadowDisc);

      // 7. Car Container Group
      const carGroup = new THREE.Group();
      scene.add(carGroup);

      // ==========================================
      // LOAD REAL 3D ROLLS-ROYCE GHOST GLB MODEL
      // ==========================================
      const loader = new GLTFLoader();
      setLoadingProgress(25);

      loader.load(
        '/models/rolls-royce.glb',
        (gltf) => {
          if (isDisposed) return;
          const model = gltf.scene;

          // Compute exact bounding box and center
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());

          // Place wheels flush on turntable surface (y = 0) and center horizontally
          model.position.set(-center.x, -box.min.y, -center.z);

          bodyMaterialsRef.current = [];
          secondaryMaterialsRef.current = [];

          const currentColour = selectedColourRef.current;
          const currentDualTone = dualToneRef.current;

          // Traverse and assign authentic physically-based automotive materials
          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;

              const mat = mesh.material as THREE.Material;
              const matName = (mat?.name || '').toLowerCase();
              const meshName = (mesh.name || '').toLowerCase();

              // 1. Main Body Paint Panels
              if (
                matName === 'rrghost_paint' || 
                (matName.includes('paint') && !matName.includes('_b')) ||
                (meshName.includes('door') && matName.includes('paint'))
              ) {
                const paintMat = new THREE.MeshPhysicalMaterial({
                  color: new THREE.Color(currentColour.threeColor),
                  metalness: currentColour.metalness,
                  roughness: currentColour.roughness,
                  clearcoat: currentColour.clearcoat,
                  clearcoatRoughness: currentColour.clearcoatRoughness,
                  envMapIntensity: 1.4,
                });
                mesh.material = paintMat;
                bodyMaterialsRef.current.push(paintMat);
              } 
              // 2. Secondary Bonnet, Roof & Coachline Panels (Two-Tone Contrast)
              else if (
                matName === 'rrghost_paint_b' || 
                (meshName.includes('hood') && matName.includes('paint'))
              ) {
                const isTwoTone = currentDualTone && currentColour.id !== 'liquid-silver-pearl';
                const bonnetMat = new THREE.MeshPhysicalMaterial({
                  color: new THREE.Color(isTwoTone ? 0xC2C6CE : currentColour.threeColor),
                  metalness: isTwoTone ? 0.72 : currentColour.metalness,
                  roughness: isTwoTone ? 0.10 : currentColour.roughness,
                  clearcoat: 1.0,
                  clearcoatRoughness: 0.02,
                  envMapIntensity: 1.4,
                });
                mesh.material = bonnetMat;
                secondaryMaterialsRef.current.push(bonnetMat);
              } 
              // 3. Rolls-Royce Pantheon Chrome Radiator Grille & Badges
              else if (
                matName.includes('radiator') || 
                matName.includes('chrome') || 
                meshName.includes('grille') || 
                matName.includes('mirror')
              ) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0xffffff,
                  metalness: 0.98,
                  roughness: 0.04,
                  envMapIntensity: 2.2,
                });
              } 
              // 4. Spirit of Ecstasy & Goodwood Badges
              else if (
                matName.includes('logo') || 
                matName.includes('badges') || 
                matName.includes('goodwood')
              ) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0xffffff,
                  metalness: 0.99,
                  roughness: 0.03,
                  envMapIntensity: 2.4,
                });
              }
              // 5. Luxury Tinted Automotive Glass & Windshield
              else if (
                matName.includes('glass') || 
                matName.includes('windows') || 
                meshName.includes('windshield') || 
                meshName.includes('doorglass')
              ) {
                mesh.material = new THREE.MeshPhysicalMaterial({
                  color: 0x080d16,
                  metalness: 0.2,
                  roughness: 0.04,
                  transmission: 0.72,
                  transparent: true,
                  opacity: 0.82,
                  envMapIntensity: 1.8,
                });
              } 
              // 6. Jewel LED Headlights & DRL Crystals
              else if (
                matName.includes('headlight') || 
                matName.includes('lowbeam') || 
                matName.includes('highbeam') ||
                matName.includes('runninglight')
              ) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0xffffff,
                  emissive: new THREE.Color(0xffffff),
                  emissiveIntensity: 0.85,
                  roughness: 0.1,
                  metalness: 0.9,
                });
              } 
              // 7. Deep Ruby LED Tail Lamps
              else if (matName.includes('taillight')) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0xb00707,
                  emissive: new THREE.Color(0x880000),
                  emissiveIntensity: 0.7,
                  roughness: 0.12,
                  metalness: 0.2,
                });
              } 
              // 8. Diamond-Cut Alloy Wheels & Calipers
              else if (matName.includes('wheel') || matName.includes('rim') || matName.includes('brake')) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0xd2d6dc,
                  metalness: 0.92,
                  roughness: 0.14,
                  envMapIntensity: 1.8,
                });
              }
              // 9. Luxury Bespoke Interior Cabin
              else if (
                matName.includes('interior') || 
                matName.includes('leather') || 
                matName.includes('seat') || 
                matName.includes('wood') || 
                matName.includes('carpet') ||
                matName.includes('dash')
              ) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0x1b1a1f,
                  roughness: 0.72,
                  metalness: 0.08,
                });
              }
              // 10. Chassis, Rubber & Underbody Plastics
              else if (
                matName.includes('tire') || 
                matName.includes('rubber') || 
                matName.includes('black') || 
                matName.includes('off') ||
                matName.includes('main')
              ) {
                mesh.material = new THREE.MeshStandardMaterial({
                  color: 0x121214,
                  roughness: 0.85,
                  metalness: 0.05,
                });
              }
            }
          });

          carGroup.add(model);

          // 8. SELF-HEALING SCRATCH SIMULATION DECAL (Hood placement)
          const scratchCanvas = document.createElement('canvas');
          scratchCanvas.width = 256;
          scratchCanvas.height = 256;
          const scratchCtx = scratchCanvas.getContext('2d');
          if (scratchCtx) {
            scratchCtx.fillStyle = 'rgba(0,0,0,0)';
            scratchCtx.fillRect(0, 0, 256, 256);
            scratchCtx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
            scratchCtx.lineWidth = 3.0;
            scratchCtx.beginPath();
            scratchCtx.moveTo(25, 95);
            scratchCtx.lineTo(235, 135);
            scratchCtx.moveTo(45, 125);
            scratchCtx.lineTo(215, 185);
            scratchCtx.moveTo(55, 65);
            scratchCtx.lineTo(195, 105);
            scratchCtx.stroke();
          }
          const scratchTexture = new THREE.CanvasTexture(scratchCanvas);
          const scratchMat = new THREE.MeshBasicMaterial({
            map: scratchTexture,
            transparent: true,
            opacity: 0,
            depthWrite: false,
          });
          const scratchPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.1), scratchMat);
          scratchPlane.rotation.x = -Math.PI / 2.05;
          scratchPlane.position.set(0, 0.96, 1.2);
          scratchMeshRef.current = scratchPlane;
          carGroup.add(scratchPlane);

          // 9. WATER DROPLETS LOTUS EFFECT (Hood placement)
          const waterGroup = new THREE.Group();
          waterDropletsGroupRef.current = waterGroup;
          const dropletMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transmission: 0.95,
            roughness: 0.02,
            transparent: true,
            opacity: 0.9,
            envMapIntensity: 1.8,
          });
          const dropGeom = new THREE.SphereGeometry(0.025, 8, 8);
          for (let d = 0; d < 40; d++) {
            const drop = new THREE.Mesh(dropGeom, dropletMat);
            const randX = (Math.random() - 0.5) * 1.1;
            const randZ = 0.8 + Math.random() * 0.9;
            drop.position.set(randX, 0.97, randZ);
            drop.scale.y = 0.45;
            waterGroup.add(drop);
          }
          waterGroup.visible = false;
          carGroup.add(waterGroup);

          setLoadingProgress(100);
          setIsModelLoaded(true);
          setLoadError(null);
        },
        (xhr) => {
          if (xhr.lengthComputable && xhr.total > 0) {
            const pct = Math.min(98, Math.round((xhr.loaded / xhr.total) * 100));
            setLoadingProgress(pct);
          } else {
            setLoadingProgress((prev) => Math.min(95, prev + 12));
          }
        },
        (error) => {
          console.error('Error loading Rolls-Royce 3D model:', error);
          if (!isDisposed) {
            setLoadError('Model download interrupted. Tap retry or view procedural preview.');
            setIsModelLoaded(true);
          }
        }
      );

      // ==========================================
      // SMOOTH 60 FPS ANIMATION LOOP
      // ==========================================
      let lastTime = performance.now();

      const animate = () => {
        if (isDisposed) return;
        const now = performance.now();
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        // Auto-rotate turntable when active and not dragging
        if (autoRotateRef.current && !isDraggingRef.current && !isScratchSimActiveRef.current) {
          targetAzimuthRef.current += delta * 0.22;
        }

        // Camera damping (Lerp)
        const lerpSpeed = 0.08;
        currentAzimuthRef.current += (targetAzimuthRef.current - currentAzimuthRef.current) * lerpSpeed;
        currentElevationRef.current += (targetElevationRef.current - currentElevationRef.current) * lerpSpeed;
        currentDistanceRef.current += (targetDistanceRef.current - currentDistanceRef.current) * lerpSpeed;

        const phi = Math.PI / 2 - currentElevationRef.current;
        const theta = currentAzimuthRef.current;
        const dist = currentDistanceRef.current;

        const camX = dist * Math.sin(phi) * Math.sin(theta);
        const camY = Math.max(0.4, dist * Math.cos(phi)) + 0.65;
        const camZ = dist * Math.sin(phi) * Math.cos(theta);

        camera.position.set(camX, camY, camZ);
        camera.lookAt(0, 0.72, 0);

        if (renderer) {
          renderer.render(scene, camera);
        }

        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);

      // Responsive window resize handler
      const handleResize = () => {
        if (!host || !renderer || !camera || isDisposed) return;
        const w = host.clientWidth || 800;
        const h = host.clientHeight || 550;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      // ==========================================
      // CLEANUP FUNCTION (Graceful Resource Disposal)
      // ==========================================
      return () => {
        isDisposed = true;
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        window.removeEventListener('resize', handleResize);
        
        if (envRenderTarget) envRenderTarget.dispose();
        if (roomEnvScene) roomEnvScene.clear();
        if (pmremGenerator) pmremGenerator.dispose();

        if (renderer) {
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
          renderer.dispose();
          // Never forceContextLoss() on remounts
        }
      };
    } catch (err) {
      console.error('Failed to initialize Three.js studio:', err);
      setLoadError('WebGL is not available in this environment.');
      setIsModelLoaded(true);
    }
  }, []);

  // Camera presets
  const setCameraToAngle = (angle: CameraAngle) => {
    setActiveAngle(angle.id);
    setAutoRotate(false);
    targetAzimuthRef.current = angle.azimuth * (Math.PI / 180);
    targetElevationRef.current = Math.max(0.08, Math.min(1.2, angle.elevation * (Math.PI / 180)));
    targetDistanceRef.current = angle.distance;
  };

  // Pointer drag event handlers for 360° rotation
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };

    const rotSpeed = 0.006;
    targetAzimuthRef.current -= deltaX * rotSpeed;
    targetElevationRef.current += deltaY * rotSpeed;

    const minElev = 0.06;
    const maxElev = 1.35;
    targetElevationRef.current = Math.max(minElev, Math.min(maxElev, targetElevationRef.current));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomSpeed = 0.003;
    targetDistanceRef.current += e.deltaY * zoomSpeed;
    targetDistanceRef.current = Math.max(4.2, Math.min(11.0, targetDistanceRef.current));
  };

  // Self-Healing Demo Trigger
  const triggerScratchSim = () => {
    setIsScratchSimActive(true);
    setAutoRotate(false);
    setCameraToAngle(CAMERA_ANGLES[2]); // Pantheon Grille / Hood angle
    setScratchSeverity(100);

    if (scratchMeshRef.current) {
      (scratchMeshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.95;
    }
  };

  const triggerHeatHealing = () => {
    setIsHealingInProgress(true);

    let progress = 100;
    const healInterval = setInterval(() => {
      progress -= 4;
      setScratchSeverity(Math.max(0, progress));

      if (scratchMeshRef.current) {
        (scratchMeshRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, progress / 100);
      }

      if (progress <= 0) {
        clearInterval(healInterval);
        setIsHealingInProgress(false);
        setTimeout(() => {
          setIsScratchSimActive(false);
        }, 1200);
      }
    }, 40);
  };

  // Water Beading Toggle
  const toggleWaterBeading = () => {
    const nextState = !showWaterBeading;
    setShowWaterBeading(nextState);
    if (waterDropletsGroupRef.current) {
      waterDropletsGroupRef.current.visible = nextState;
    }
  };

  return (
    <section 
      id="coloured-ppf-studio" 
      className="relative w-full py-16 sm:py-20 bg-[#070708] border-y border-white/10 overflow-hidden text-white select-none"
      aria-label="3D Coloured PPF Studio"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-goc-red/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
            <Sparkles size={14} className="text-goc-red animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-200">
              Interactive 360° Luxury Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Coloured <span className="text-goc-red">PPF</span> Visualizer
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Experience our bespoke 10mil TPU film on the authentic Rolls-Royce Ghost. Rotate 360° with touch, test instant self-healing technology, and select from ultra-gloss, velvet satin, and metallic pearl finishes.
          </p>
        </div>

        {/* 3D STUDIO MAIN CONTAINER */}
        <div 
          ref={containerRef} 
          className={`relative w-full ${isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-black' : 'h-[460px] sm:h-[540px] lg:h-[620px] rounded-sm'} bg-[#08080A] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}
        >
          {/* HOST ELEMENT FOR THREE.JS CANVAS */}
          <div
            ref={canvasHostRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onWheel={handleWheel}
            className="w-full h-full cursor-grab active:cursor-grabbing touch-none block select-none"
          />

          {/* LUXURY MODEL LOADING SCREEN OVERLAY */}
          {!isModelLoaded && (
            <div className="absolute inset-0 z-40 bg-[#08080A]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-goc-red animate-spin" />
                <Sparkles size={24} className="text-goc-red animate-pulse" />
              </div>

              <p className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-1">
                Rolls-Royce Ghost &bull; Bespoke Studio
              </p>
              <p className="text-gray-400 text-xs tracking-wider mb-4">
                Loading High-Definition 3D Model &amp; Studio Lighting ({loadingProgress}%)
              </p>

              {/* Progress Bar */}
              <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-goc-red to-red-400 transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* LOAD ERROR RECOVERY NOTICE */}
          {loadError && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 bg-black/80 border border-goc-red/40 rounded-sm text-xs text-gray-300 flex items-center gap-2 backdrop-blur-md">
              <span>{loadError}</span>
              <button 
                onClick={() => window.location.reload()} 
                className="text-goc-red font-bold hover:underline flex items-center gap-1"
              >
                <RefreshCw size={11} /> Reload
              </button>
            </div>
          )}

          {/* TOP HUD: Live Finish Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none z-20">
            <div className="p-2.5 sm:p-3.5 bg-black/70 border border-white/15 backdrop-blur-md rounded-sm pointer-events-auto shadow-lg">
              <div className="flex items-center gap-2 mb-0.5">
                <span 
                  className="w-2.5 h-2.5 rounded-full border border-white/30" 
                  style={{ backgroundColor: selectedColour.hex }} 
                />
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  Rolls-Royce Ghost &bull; {selectedColour.name}
                </h3>
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-400">
                Finish: <span className="text-goc-red font-semibold uppercase">{selectedColour.tag}</span> &bull; 10mil Self-Healing TPU
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 sm:px-3 sm:py-2 rounded-sm text-xs font-bold uppercase tracking-wider backdrop-blur-md border transition-all flex items-center gap-1.5 ${
                  autoRotate
                    ? 'bg-goc-red text-white border-goc-red shadow-[0_0_15px_rgba(255,30,30,0.4)]'
                    : 'bg-black/70 text-gray-300 border-white/15 hover:border-white/30'
                }`}
                title="Toggle Turntable 360° Auto-Rotation"
              >
                <RotateCw size={13} className={autoRotate ? 'animate-spin' : ''} />
                <span className="hidden sm:inline">{autoRotate ? 'Turntable Active' : 'Turntable Paused'}</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 sm:p-2.5 bg-black/70 border border-white/15 hover:border-white/30 rounded-sm text-gray-300 hover:text-white transition-colors backdrop-blur-md"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
            </div>
          </div>

          {/* TOUCH ROTATION HELPER HINT */}
          <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-80 z-20">
            <span className="px-3 py-1 bg-black/70 border border-white/15 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-gray-300 flex items-center gap-1.5 shadow-md">
              <Compass size={11} className="text-goc-red" /> Touch &amp; Drag 360° &bull; Pinch to Zoom
            </span>
          </div>

          {/* SELF-HEALING THERMAL SIMULATION BANNER */}
          {isScratchSimActive && (
            <div className="absolute top-24 left-4 right-4 max-w-md mx-auto p-4 bg-black/95 border border-goc-red/60 backdrop-blur-md rounded-sm z-30 shadow-[0_0_30px_rgba(255,30,30,0.3)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Flame size={15} className="text-goc-red animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    Self-Healing Technology Simulator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-goc-red">
                  {scratchSeverity > 0 ? `${scratchSeverity}% Abrasion` : 'Healed (100% Mirror)'}
                </span>
              </div>

              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-3">
                <div 
                  className="h-full bg-goc-red transition-all duration-100" 
                  style={{ width: `${scratchSeverity}%` }}
                />
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed mb-3">
                {scratchSeverity > 0 
                  ? 'Micro-scratches simulated on the bonnet. Tap below to trigger heat-activated memory polymer recovery.'
                  : 'Scratches completely erased! The elastomeric top-coat has restored optical showroom clarity.'}
              </p>

              <div className="flex items-center gap-2">
                <button
                  disabled={isHealingInProgress || scratchSeverity === 0}
                  onClick={triggerHeatHealing}
                  className="flex-1 py-2 px-3 bg-goc-button text-white text-xs font-bold uppercase tracking-wider rounded-sm disabled:opacity-50 hover:scale-[1.02] transition-transform flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,30,30,0.4)]"
                >
                  <Flame size={13} />
                  {isHealingInProgress ? 'Applying Heat (60°C)...' : 'Apply Heat to Heal'}
                </button>
                <button
                  onClick={() => {
                    setIsScratchSimActive(false);
                    if (scratchMeshRef.current) {
                      (scratchMeshRef.current.material as THREE.MeshBasicMaterial).opacity = 0;
                    }
                  }}
                  className="py-2 px-3 bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider rounded-sm hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* CAMERA PRESETS (Bottom-Left) */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-wrap gap-1.5 max-w-xs z-20">
            {CAMERA_ANGLES.map((angle) => (
              <button
                key={angle.id}
                onClick={() => setCameraToAngle(angle)}
                className={`px-2.5 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border transition-all flex items-center gap-1 ${
                  activeAngle === angle.id
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-black/75 text-gray-400 border-white/15 hover:text-white hover:border-white/30'
                }`}
              >
                <Camera size={11} /> {angle.label}
              </button>
            ))}
          </div>

          {/* INTERACTIVE FEATURE TOGGLES (Bottom-Right) */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-1.5 sm:gap-2 z-20">
            {/* Two-Tone Toggle */}
            <button
              onClick={() => setDualTone(!dualTone)}
              className={`px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border transition-all flex items-center gap-1.5 ${
                dualTone
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                  : 'bg-black/75 text-gray-300 border-white/15 hover:border-white/30'
              }`}
              title="Toggle Bespoke Two-Tone Coachline Accent"
            >
              <Layers size={13} className={dualTone ? 'text-black' : 'text-goc-red'} />
              <span>{dualTone ? 'Two-Tone Active' : 'Two-Tone Off'}</span>
            </button>

            {/* Self-Healing Trigger */}
            <button
              onClick={triggerScratchSim}
              className="px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-goc-red/40 bg-goc-red/20 text-white hover:bg-goc-red hover:border-goc-red transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,30,30,0.25)]"
              title="Simulate bonnet scratch and heat self-healing"
            >
              <Flame size={13} className="text-goc-red group-hover:text-white" />
              <span>Self-Healing Demo</span>
            </button>

            {/* Hydrophobic Lotus Effect */}
            <button
              onClick={toggleWaterBeading}
              className={`px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border transition-all flex items-center gap-1.5 ${
                showWaterBeading
                  ? 'bg-blue-600/90 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-black/75 text-gray-300 border-white/15 hover:border-white/30'
              }`}
              title="Toggle Hydrophobic Lotus Water Droplets"
            >
              <Droplets size={13} className={showWaterBeading ? 'text-white' : 'text-blue-400'} />
              <span className="hidden sm:inline">Lotus Effect</span>
            </button>
          </div>
        </div>

        {/* ==========================================
            STUDIO CONTROLS & COLOUR PALETTE
            ========================================== */}
        <div className="mt-8 bg-[#0D0D10] border border-white/10 rounded-sm p-4 sm:p-6 lg:p-8">
          
          {/* Finish Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-goc-red mb-1">
                Coloured Paint Protection Film Palette
              </p>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                Select Your Finish &amp; Specification
              </h3>
            </div>

            <div className="flex items-center gap-1 bg-black/60 p-1 rounded-sm border border-white/10">
              {(['all', 'gloss', 'matte', 'pearl'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? 'bg-goc-red text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All (12)' : cat === 'gloss' ? 'Ultra Gloss' : cat === 'matte' ? 'Velvet Satin' : 'Metallic Pearl'}
                </button>
              ))}
            </div>
          </div>

          {/* Colour Swatch Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6">
            {filteredColours.map((col) => {
              const isSelected = selectedColour.id === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => setSelectedColour(col)}
                  className={`group relative text-left p-3 rounded-sm border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/10 border-goc-red shadow-[0_0_20px_rgba(255,30,30,0.25)]'
                      : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {/* Swatch Pill & Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="w-7 h-7 rounded-full border border-white/20 shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: col.hex }}
                    />
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-goc-red flex items-center justify-center text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-goc-red block mb-0.5">
                      {col.tag}
                    </span>
                    <h4 className="text-xs font-bold uppercase tracking-tight text-white leading-tight">
                      {col.name}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Finish Breakdown & CTA Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-3 max-w-2xl">
              <ShieldCheck size={22} className="text-goc-red shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                  {selectedColour.name} &bull; 10mil High-Gloss Self-Healing TPU
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {selectedColour.description} Installed inside our certified positive-pressure clean room with precision computer-cut templates to guarantee zero razor blade contact with your vehicle paint.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/book"
                className="px-6 py-3.5 bg-goc-button hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs rounded-sm transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,30,30,0.35)] active:scale-95"
              >
                <span>Book {selectedColour.name}</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/919925566886?text=Hi!%20I'm%20interested%20in%20Coloured%20PPF%20for%20my%20vehicle."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold uppercase tracking-wider text-xs rounded-sm transition-all text-center"
              >
                Consult a PPF Specialist
              </a>
            </div>
          </div>
        </div>

        {/* STUDIO SPECS BADGES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm text-center">
            <p className="text-goc-red font-bold text-lg sm:text-xl font-mono">10 MIL</p>
            <p className="text-gray-400 uppercase text-[10px] tracking-wider mt-0.5">TPU Film Thickness</p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm text-center">
            <p className="text-white font-bold text-lg sm:text-xl font-mono">10 YEARS</p>
            <p className="text-gray-400 uppercase text-[10px] tracking-wider mt-0.5">Written Studio Warranty</p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm text-center">
            <p className="text-goc-red font-bold text-lg sm:text-xl font-mono">100%</p>
            <p className="text-gray-400 uppercase text-[10px] tracking-wider mt-0.5">Self-Healing Elastomer</p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm text-center">
            <p className="text-white font-bold text-lg sm:text-xl font-mono">0.0%</p>
            <p className="text-gray-400 uppercase text-[10px] tracking-wider mt-0.5">Blade Contact Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
}
