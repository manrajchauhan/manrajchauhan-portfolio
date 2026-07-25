# Architecture Document

**Project:** Manraj Chauhan 3D Portfolio (`manrajchauhan.com`)  
**Architecture Type:** Spatial 3D Web Application (R3F + Drei + Modern Frontend Stack)  

---

## 1. High-Level System Architecture

The application is built on a hybrid **Spatial 3D + Layered DOM Architecture**. The core rendering canvas is managed by React Three Fiber (`@react-three/fiber`), leveraging `@react-three/drei` for spatial HTML elements, environment lighting, model controls, and post-processing.

```
+-------------------------------------------------------------------+
|                        Browser Viewport                           |
+-------------------------------------------------------------------+
|  [ Lenis Smooth Scroll Engine ]   [ Audio Controller (Howler) ]   |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  |                 React Three Fiber Canvas                    |  |
|  |                                                             |  |
|  |  +-------------------------------------------------------+  |  |
|  |  |  3D Scene (Three.js Engine)                           |  |  |
|  |  |  - Camera, Lights, Environment (Drei)                 |  |  |
|  |  |  - Hero Mesh / Chrome Geometry / Shaders              |  |  |
|  |  |  - Project Carousel & Physics Objects                 |  |  |
|  |  |                                                       |  |  |
|  |  |  +-------------------------------------------------+  |  |  |
|  |  |  |  drei <Html> Spatial Layer                     |  |  |  |
|  |  |  |  - Transform = true, Occlusion = blend          |  |  |  |
|  |  |  |  - Spatial Headings, Project Cards, Badges       |  |  |  |
|  |  |  +-------------------------------------------------+  |  |  |
|  |  +-------------------------------------------------------+  |  |
|  |                                                             |  |
|  |  +-------------------------------------------------------+  |  |
|  |  |  Post-Processing Pipeline (@react-three/postprocessing) |  |  |
|  |  |  - Bloom, Noise, Chromatic Aberration, Vignette       |  |  |
|  |  +-------------------------------------------------------+  |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  |                 Fixed DOM Overlay Layer                     |  |
|  |  - Navigation Header, Ticker Bar, Sound Toggle, Cursor FX   |  |
|  +-------------------------------------------------------------+  |
+-------------------------------------------------------------------+
```

---

## 2. Recommended Directory & File Structure

```
manrajchauhan-portfolio/
├── PRD.md
├── Architecture.md
├── Rules.md
├── Phases.md
├── Design.md
├── Memory.md
├── vibe.md
├── index.html
├── package.json
├── vite.config.js (or next.config.mjs)
├── public/
│   ├── assets/
│   │   ├── models/            # Compressed GLTF/GLB 3D assets
│   │   │   ├── hero_emblem.glb
│   │   │   └── project_card_frame.glb
│   │   ├── hdri/              # Studio HDR environment maps
│   │   │   └── studio_dark.hdr
│   │   ├── textures/          # Matcaps, noise maps, roughness maps
│   │   └── audio/             # UI sound effects (click, hover, ambient)
│   ├── favicon.ico
│   └── site.webmanifest
└── src/
    ├── main.jsx (or index.tsx)
    ├── App.jsx
    ├── styles/
    │   ├── variables.css      # Basement design tokens (colors, typography)
    │   ├── global.css         # Reset, grain overlay, Lenis smooth scroll
    │   ├── components/        # Component-specific styles
    │   └── utilities.css      # Glassmorphism, grid overlays, animations
    ├── context/
    │   ├── StateContext.jsx   # Global UI state (active section, sound muted, theme)
    │   └── AudioContext.jsx   # Audio player state
    ├── hooks/
    │   ├── useMousePosition.js# Normalized pointer tracking [-1, 1]
    │   ├── useScrollProgress.js# Section scroll tracking
    │   └── useWebGLSupport.js # WebGL detection & performance tiering
    ├── components/
    │   ├── dom/               # Standard 2D DOM Overlays
    │   │   ├── Header.jsx     # Navigation bar & status indicator
    │   │   ├── Ticker.jsx     # Basement-style scrolling text banner
    │   │   ├── Cursor.jsx     # Custom magnetic cursor
    │   │   └── SoundToggle.jsx# Audio volume button
    │   ├── canvas/            # 3D Scene Components (R3F)
    │   │   ├── Viewport.jsx   # Main R3F Canvas container
    │   │   ├── Scene.jsx      # Root 3D scene setup
    │   │   ├── Lights.jsx     # Directional, spot, and environment lighting
    │   │   ├── Effects.jsx    # Post-processing stack (Bloom, Grain)
    │   │   ├── HeroScene.jsx  # Floating 3D mesh + Drei Html headline
    │   │   ├── Projects3D.jsx # Spatial 3D project gallery cards
    │   │   └── Skills3D.jsx   # Physics-enabled 3D badge meshes
    │   └── spatial/           # Drei <Html> Spatial Wrappers
    │       ├── SpatialCard.jsx# Html wrapper with transform & occlusion
    │       └── SpatialBadge.jsx
    └── shaders/               # Custom GLSL Shaders
        ├── noiseMaterial.js   # Perlin noise background shader
        └── chromeMaterial.js  # Custom reflection / matcap shader
```

---

## 3. Technology Stack & Dependencies

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 18+ / Vite or Next.js | Modern component architecture, fast build pipeline |
| **3D Rendering** | Three.js | Core WebGL graphics rendering engine |
| **R3F Ecosystem** | `@react-three/fiber` | Declarative Three.js wrapper for React |
| **Drei Helpers** | `@react-three/drei` | `<Html>`, `<Float>`, `<OrbitControls>`, `<Environment>`, `<MeshTransmissionMaterial>` |
| **Post-Processing**| `@react-three/postprocessing` | Bloom, Noise, Chromatic Aberration, Vignette |
| **Animation Engine**| GSAP + Framer Motion | Timeline animations, scroll triggers, UI transitions |
| **Smooth Scroll** | `@studio-freight/lenis` | Inertia scrolling matching basement.studio feel |
| **Styling** | Vanilla CSS + CSS Variables | Maximum styling performance, zero runtime CSS-in-JS overhead |

---

## 4. Key Architectural Patterns

### 4.1 HTML in Drei (`drei/Html`) Strategy
We use `@react-three/drei`'s `<Html>` component to render HTML DOM elements directly inside 3D world space:
- **`transform` mode:** Maps CSS 3D transforms directly to 3D matrix math of parent meshes.
- **`occlusion` blending:** Hides DOM elements when obscured by 3D geometry in front of them.
- **`distanceFactor` tuning:** Scales HTML font rendering smoothly across camera zoom levels.

### 4.2 Performance Tiering & Mobile Fallback
- **GPU Benchmark Check:** On mount, check WebGL renderer info. If low-end GPU or mobile detected:
  - Disable heavy post-processing (Bloom, Chromatic Aberration).
  - Reduce pixel ratio (`dpr={Math.min(window.devicePixelRatio, 1.5)}`).
  - Use fallback low-poly geometry or simplified material shaders.

### 4.3 Clean Resource Disposal
- Custom hook `useUnmountDisposal` to dispose Three.js geometries, materials, textures, and render targets when switching sections to eliminate memory leaks.
