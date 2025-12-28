# Sonic Latent Manifold Explorer

A high-performance web application that visualizes the **latent space of bioacoustic sounds** in real-time 3D using AI embeddings. Optimized for Apple M3 (8GB RAM).

![Preview](preview.png)

## ✨ Features

- **Real-time Audio Processing** - Web Audio API with SharedArrayBuffer for zero-copy transfer
- **CLAP AI Embeddings** - Xenova/clap-htsat-unfused with 4-bit quantization (WebGPU/WASM fallback)
- **UMAP 3D Projection** - Manifold learning in a dedicated Web Worker
- **50,000+ Glowing Points** - Three.js InstancedMesh with custom neon shaders at 60 FPS
- **Spring-Force Physics** - Smooth animation as sounds cluster in semantic space
- **GSAP Camera Transitions** - Cinematic fly-to when new clusters form
- **STL Export** - 3D print your "Sonic Fossil" point cloud sculpture
- **Apple Minimalist Design** - Glassmorphism UI with Electric Cyan accents

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** and click **"Begin Listening"** to start.

---

## 📐 Architecture

| Thread | Responsibility |
|--------|----------------|
| **Main (UI)** | React UI, Three.js rendering, waveform HUD, GSAP animations |
| **Worker** | Transformers.js inference, UMAP projection, spring-force physics |

**Data Flow:**
```
Microphone → SharedArrayBuffer Ring Buffer → Worker (CLAP → UMAP) → SharedArrayBuffer Positions → Main Thread (Three.js)
```

---

## 📁 Project Structure

```
src/
├── main.tsx              # React entry point
├── App.tsx               # Main UI shell with Glassmorphism
├── AudioEngine.ts        # Web Audio capture, SharedArrayBuffer ring buffer
├── Nebula.tsx            # Three.js 3D renderer (InstancedMesh + custom shaders)
├── Exporter.ts           # STL export utilities
├── workers/
│   └── ManifoldWorker.ts # AI inference + UMAP + spring physics
└── styles/
    └── index.css         # Tailwind + custom styles
```

---

## 🎨 Visual Design

- **Background:** Deep #050505
- **Primary Accent:** Electric Cyan (#00ffff)
- **UI Style:** Glassmorphism with blur effects
- **Typography:** SF Pro Display / system fonts

---

## ⚙️ Configuration

| Setting | File | Description |
|---------|------|-------------|
| Max Points | `Nebula.tsx` → `MAX_POINTS` | Default: 50,000 |
| Point Size | `Nebula.tsx` → `POINT_SIZE` | Default: 0.015 |
| Spring Stiffness | `ManifoldWorker.ts` → `SPRING_K` | Default: 0.08 |
| UMAP Neighbors | `ManifoldWorker.ts` → `nNeighbors` | Default: 15 |
| Ring Buffer Size | `AudioEngine.ts` | Default: 1M samples (~20s @ 48kHz) |

---

## 🔧 Build for Production

```bash
npm run build
npm run preview
```

### Required HTTP Headers (for SharedArrayBuffer)

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

These are set automatically in Vite dev server (`vite.config.ts`).

---

## 🧠 AI Model

Uses **Xenova/clap-htsat-unfused** (CLAP: Contrastive Language-Audio Pretraining):
- Produces 512-dimensional embeddings for audio
- 4-bit quantization (`dtype: 'q4'`) for memory efficiency
- WebGPU acceleration with WASM fallback

---

## 📊 Performance Tips

1. **Apple Silicon:** WebGPU provides best performance on M1/M2/M3
2. **Memory:** 4-bit quantization keeps model under 1GB RAM
3. **Frame Rate:** Reduce `MAX_POINTS` if FPS drops below 30
4. **Audio Latency:** Increase buffer size in `AudioEngine.ts` if audio stutters

---

## 🖨️ STL Export

Click **"Export STL"** to download a 3D-printable file:
- **Point Cloud:** Sphere at each vector position
- **Convex Hull:** Sculptural mesh connecting outer points

Recommended print settings:
- Scale: 100mm
- Layer height: 0.1mm
- Supports: Yes (for hull export)

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `three` | 3D rendering |
| `@xenova/transformers` | AI inference (CLAP model) |
| `umap-js` | Dimensionality reduction |
| `gsap` | Animations |
| `tailwindcss` | Styling |

---

## 🛡️ Browser Requirements

- **Chrome 94+** / **Safari 15.4+** / **Firefox 89+**
- SharedArrayBuffer support (requires secure context)
- WebGPU (optional, falls back to WebGL2 + WASM)
- Microphone permission

---

## 📜 License

MIT
