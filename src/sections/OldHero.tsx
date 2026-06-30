import { useEffect, useRef } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import * as THREE from 'three';

// SimplexNoise implementation
class SimplexNoise {
  private grad3: number[][];
  private perm: Uint8Array;

  constructor() {
    this.grad3 = [
      [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
      [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
      [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
    ];
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  private dot3(hash: number, x: number, y: number, z: number): number {
    const g = this.grad3[hash % 12];
    return g[0] * x + g[1] * y + g[2] * z;
  }

  noise3D(x: number, y: number, z: number): number {
    const F3 = 1.0 / 3.0;
    const G3 = 1.0 / 6.0;
    const s = (x + y + z) * F3;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const k = Math.floor(z + s);
    const t = (i + j + k) * G3;
    const x0 = x - (i - t);
    const y0 = y - (j - t);
    const z0 = z - (k - t);
    let i1: number, j1: number, k1: number, i2: number, j2: number, k2: number;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
      else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
      else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
    } else {
      if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
      else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
      else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
    }
    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3;
    const y2 = y0 - j2 + 2 * G3;
    const z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3;
    const y3 = y0 - 1 + 3 * G3;
    const z3 = z0 - 1 + 3 * G3;
    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;
    let n0: number, n1: number, n2: number, n3: number;
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    n0 = t0 < 0 ? 0 : (t0 *= t0, t0 * t0 * this.dot3(this.perm[ii + this.perm[jj + this.perm[kk]]], x0, y0, z0));
    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    n1 = t1 < 0 ? 0 : (t1 *= t1, t1 * t1 * this.dot3(this.perm[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]], x1, y1, z1));
    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    n2 = t2 < 0 ? 0 : (t2 *= t2, t2 * t2 * this.dot3(this.perm[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]], x2, y2, z2));
    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    n3 = t3 < 0 ? 0 : (t3 *= t3, t3 * t3 * this.dot3(this.perm[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]], x3, y3, z3));
    return 32.0 * (n0 + n1 + n2 + n3);
  }
}

const CUBE = 0, BAR = 1, PARTICLE = 2, LINE = 3;
const GRID_W = 40, GRID_D = 40;
const CHANCE = 0.6;

function mkCube(w: number, h: number, d: number): number[][] {
  const x = [-w/2, w/2], y = [0, h], z = [-d/2, d/2];
  return [
    [x[1],y[0],z[0]],[x[1],y[1],z[0]],[x[0],y[1],z[0]],[x[0],y[1],z[0]],[x[0],y[0],z[0]],[x[1],y[0],z[0]],
    [x[1],y[0],z[1]],[x[0],y[0],z[1]],[x[0],y[1],z[1]],[x[0],y[1],z[1]],[x[1],y[1],z[1]],[x[1],y[0],z[1]],
    [x[1],y[0],z[0]],[x[1],y[0],z[1]],[x[1],y[1],z[1]],[x[1],y[1],z[1]],[x[1],y[1],z[0]],[x[1],y[0],z[0]],
    [x[0],y[0],z[1]],[x[0],y[0],z[0]],[x[0],y[1],z[0]],[x[0],y[1],z[0]],[x[0],y[1],z[1]],[x[0],y[0],z[1]],
    [x[1],y[1],z[0]],[x[0],y[1],z[0]],[x[0],y[1],z[1]],[x[0],y[1],z[1]],[x[1],y[1],z[1]],[x[1],y[1],z[0]],
    [x[0],y[0],z[1]],[x[1],y[0],z[1]],[x[1],y[0],z[0]],[x[1],y[0],z[0]],[x[0],y[0],z[0]],[x[0],y[0],z[1]],
  ];
}

function cellBuilder(col: number, row: number, noise: number, rnd: () => number) {
  if (rnd() > CHANCE) return null;
  const builders = [
    () => ({ type: CUBE, hueShift: 0.33, scale: 1.2 }),
    () => ({ type: BAR, hueShift: 0.17, scale: 0.8 }),
    () => ({ type: PARTICLE, hueShift: 0.50, scale: 0.3 }),
    () => ({ type: LINE, hueShift: 0.00, scale: 0.4 }),
  ];
  const idx = (Math.abs(Math.round(noise * 1000)) + row * GRID_W + col) % builders.length;
  const result = builders[idx]();
  return { type: idx, hueShift: result.hueShift, scale: result.scale, height: 1 + noise * 6 };
}

function initIsometricCity(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  const dpr = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0a1f1a);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
  camera.position.set(50, 55, 50);
  camera.lookAt(0, 0, 0);

  const noise = new SimplexNoise();
  const cubeVerts = mkCube(1, 1, 1);
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(cubeVerts.length * 3);
  for (let i = 0; i < cubeVerts.length; i++) {
    positions[i * 3] = cubeVerts[i][0];
    positions[i * 3 + 1] = cubeVerts[i][1];
    positions[i * 3 + 2] = cubeVerts[i][2];
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const instanceCount = GRID_W * GRID_D;
  const mesh = new THREE.InstancedMesh(geometry, new THREE.ShaderMaterial({
    vertexShader: `
      attribute vec3 instanceType;
      varying vec3 vColor;
      varying float vType;
      vec3 hue2rgb(float h) {
        h = fract(h);
        return clamp(abs(fract(h + vec3(0.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
      }
      void main() {
        vType = instanceType.x;
        vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
        float hue = instanceType.y;
        float shading = position.y * 0.08 + 0.92;
        vColor = hue2rgb(hue) * shading;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vType;
      void main() {
        if (vType < 0.0) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,
    side: THREE.DoubleSide,
  }), instanceCount);

  const dummy = new THREE.Object3D();
  const typeArray = new Float32Array(instanceCount * 3);
  let idx = 0;

  for (let row = 0; row < GRID_D; row++) {
    for (let col = 0; col < GRID_W; col++) {
      const n = noise.noise3D(col * 0.08, row * 0.08, 0);
      const cell = cellBuilder(col, row, n, Math.random);
      if (cell) {
        dummy.position.set(col * 2 - GRID_W, 0, row * 2 - GRID_D);
        dummy.scale.set(cell.scale, cell.height * cell.scale, cell.scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(idx, dummy.matrix);
        typeArray[idx * 3] = cell.type;
        typeArray[idx * 3 + 1] = cell.hueShift;
        typeArray[idx * 3 + 2] = cell.scale;
      } else {
        dummy.position.set(0, -1000, 0);
        dummy.scale.set(0, 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(idx, dummy.matrix);
        typeArray[idx * 3] = -1;
        typeArray[idx * 3 + 1] = 0;
        typeArray[idx * 3 + 2] = 0;
      }
      idx++;
    }
  }

  geometry.setAttribute('instanceType', new THREE.InstancedBufferAttribute(typeArray, 3));
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);

  let time = 0;
  let running = true;

  const animate = () => {
    if (!running) return;
    time += 0.003;
    const offsetX = -time * 6;
    const offsetZ = -time * 6;

    idx = 0;
    for (let row = 0; row < GRID_D; row++) {
      for (let col = 0; col < GRID_W; col++) {
        const wrappedCol = ((col + Math.floor(offsetX)) % GRID_W + GRID_W) % GRID_W;
        const wrappedRow = ((row + Math.floor(offsetZ)) % GRID_D + GRID_D) % GRID_D;
        const n = noise.noise3D(wrappedCol * 0.08, wrappedRow * 0.08, Math.floor(time * 100) * 0.01);
        const cell = cellBuilder(wrappedCol, wrappedRow, n, () => ((wrappedCol * 7 + wrappedRow * 13) % 100) / 100);
        if (cell) {
          dummy.position.set(col * 2 - GRID_W, 0, row * 2 - GRID_D);
          dummy.scale.set(cell.scale, cell.height * cell.scale, cell.scale);
          dummy.updateMatrix();
          mesh.setMatrixAt(idx, dummy.matrix);
        }
        idx++;
      }
    }
    mesh.instanceMatrix.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  const handleResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
  window.addEventListener('resize', handleResize);

  return () => {
    running = false;
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    geometry.dispose();
    mesh.material.dispose();
  };
}

const stats = [
  { value: 128345, label: 'Total Mentions Tracked', suffix: '', decimals: 0 },
  { value: 72.4, label: 'Positive Sentiment', suffix: '%', decimals: 1 },
  { value: 458234, label: 'Engagement Analyzed', suffix: '', decimals: 0 },
  { value: 23.6, label: 'Potential Reach', suffix: 'M', decimals: 1 },
];

function StatItem({ value, label, suffix, decimals }: { value: number; label: string; suffix: string; decimals: number }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp(value, 2000, isVisible, decimals);

  return (
    <div ref={ref} className="text-center px-4 md:px-8 relative">
      <div className="font-inter font-bold text-2xl md:text-4xl text-white tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-inter text-xs md:text-sm text-white/50 mt-1 tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      cleanupRef.current = initIsometricCity(canvas);
    } catch (e) {
      console.warn('WebGL not available, using fallback');
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return (
    <section
      id="home"
      data-bg="dark"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(11,61,46,0.3) 0%, rgba(17,24,39,0.5) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-32 pb-24 flex-1 flex flex-col justify-center">
        <div className="max-w-[700px]">
          <h1 className="font-inter font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            TURNING DATA INTO DIRECTION.
          </h1>
          <p className="font-inter text-white/75 text-lg mt-6 max-w-[500px] leading-relaxed">
            Youth-driven intelligence. Evidence-based engagement. Strategic impact.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center px-8 py-3.5 bg-gold text-charcoal font-inter font-semibold text-sm rounded-md hover:bg-gold-light transition-colors duration-300"
            >
              Join DAGFA
            </a>
            <a
              href="#insights"
              onClick={(e) => { e.preventDefault(); document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white font-inter font-semibold text-sm rounded-md hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Explore Insights
            </a>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, i) => (
              <div key={i} className={`${i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
                <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-scroll-indicator">
        <div className="w-px h-10 bg-white/40 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
        </div>
        <span className="font-inter text-[10px] text-white/40 uppercase tracking-[0.1em]">Scroll</span>
      </div>
    </section>
  );
}
