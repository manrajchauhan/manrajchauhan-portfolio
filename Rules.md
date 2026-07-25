# Project Rules & AI Guidelines (Rules.md)

**Project:** Manraj Chauhan 3D Portfolio (`manrajchauhan.com`)  
**Purpose:** Establish strict development boundaries, code standards, performance requirements, and AI interaction rules.

---

## 1. Core Tech Stack Constraints
- **APPROVED LIBRARIES:**
  - Three.js (`three`)
  - React Three Fiber (`@react-three/fiber`)
  - React Three Drei (`@react-three/drei`)
  - React Three Postprocessing (`@react-three/postprocessing`)
  - GSAP (`gsap`) & Framer Motion (`framer-motion`)
  - Lenis (`@studio-freight/lenis`)
  - Lucide Icons (`lucide-react`)
- **FORBIDDEN:**
  - DO NOT use Tailwind CSS unless explicitly requested by the user later (use Vanilla CSS with custom properties).
  - DO NOT use jQuery, Bootstrap, or obsolete UI libraries.
  - DO NOT introduce heavy uncompressed 3D models (> 3MB per file without Draco compression).
  - DO NOT use blocking synchronous operations inside `useFrame` or animation loops.

---

## 2. 3D & WebGL Best Practices

### 2.1 React Three Fiber & Drei Rules
- **State in `useFrame`:** NEVER call React `setState` inside a `useFrame` loop! Mutate Three.js object refs directly (`ref.current.rotation.y += delta`).
- **Resource Disposal:** ALWAYS dispose of geometry, materials, and textures when components unmount to prevent memory leaks (`geometry.dispose()`, `material.dispose()`).
- **Use `drei/Html` Efficiently:**
  - Always set `transform` property on `<Html>` when anchoring UI elements in 3D space.
  - Use `occlusion` judiciously to avoid performance penalties.
  - Wrap HTML content in `pointer-events-auto` or `pointer-events-none` deliberately to avoid capturing unintended canvas raycasts.
- **Pixel Ratio:** Set `dpr` dynamically on Canvas: `dpr={[1, 2]}`. Never hardcode `dpr={3}` or higher.

### 2.2 Material & Lighting Rules
- Limit active dynamic lights per scene (prefer 1 Directional Light + 1 Environment map over multiple point lights).
- Use `MeshPhysicalMaterial` or `MeshTransmissionMaterial` (from `drei`) for glass/chrome effects, but set reasonable roughness and transmission samples.

---

## 3. Code Quality & Styling Standards

### 3.1 CSS & Design Tokens
- All colors, fonts, spacings, and z-indexes MUST use CSS Variables defined in `variables.css`.
- Use class naming conventions following BEM or clean functional naming (e.g., `.bs-hero`, `.bs-ticker`, `.bs-card`).
- Prefix custom components or design tokens with `.bs-` (Basement Style) or `.mc-` (Manraj Chauhan).

### 3.2 Error Handling & Resiliency
- Wrap R3F `<Canvas>` in a React `<ErrorBoundary>` with a graceful 2D fallback component.
- Handle WebGL context loss gracefully (`canvas.addEventListener('webglcontextlost', ...)`).
- Preload assets using Drei's `useGLTF.preload()` and `useTexture.preload()`. Wrap scenes in `<Suspense fallback={<CanvasLoader />}>`.

---

## 4. AI Assistant Rules (DOs & DON'Ts)

### DOs:
- **DO** write clean, modern ES6+ React code with functional components and hooks.
- **DO** create modular, reusable 3D mesh components (e.g., `<ChromeObject />`, `<SpatialCard />`).
- **DO** prioritize aesthetic excellence inspired by basement.studio (dark background, bold text, neon accents, chrome shaders).
- **DO** update `Memory.md` whenever significant progress is achieved or architectural changes occur.
- **DO** verify build and run commands after writing or updating code.

### DON'Ts:
- **DON'T** rewrite entire files if only modifying a single section (use localized replacement).
- **DON'T** invent dummy API calls or broken dependencies.
- **DON'T** hardcode static pixel values for responsive layouts; use `vh`, `vw`, `clamp()`, and flex/grid.
- **DON'T** leave placeholder images or unstyled browser defaults.
