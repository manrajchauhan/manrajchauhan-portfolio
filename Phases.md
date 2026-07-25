# Project Implementation Phases (Phases.md)

**Project:** Manraj Chauhan 3D Portfolio (`manrajchauhan.com`)  
**Strategy:** Incremental build methodology from foundational setup to hyper-polished 3D experience.

---

## Phase 1: Project Initialization & Foundation Setup
- **Objective:** Scaffold project repository, configure Vite/React, establish basement.studio design system & CSS variables.
- **Tasks:**
  1. Initialize React project with Vite (`npm create vite@latest`).
  2. Install core dependencies: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `gsap`, `framer-motion`, `@studio-freight/lenis`, `lucide-react`.
  3. Set up CSS design tokens (`variables.css`) for basement color palette (Obsidian `#050505`, Lime `#CCFF00`, Cyber Orange `#FF4D00`, Silver `#E0E0E0`).
  4. Implement baseline global styles: custom noise texture overlay, custom cursor markup, typography imports (Space Grotesk, JetBrains Mono).
- **Deliverables:** Working React app with design tokens, Lenis smooth scroll, and dark aesthetic base.

---

## Phase 2: Base 3D Viewport & Scene Infrastructure
- **Objective:** Build robust React Three Fiber Canvas with environment lighting, camera controls, post-processing, and fallback handling.
- **Tasks:**
  1. Create `<Viewport />` component wrapping R3F `<Canvas>` with dynamic DPR scaling and WebGL Error Boundary.
  2. Add studio lighting (`<Lights />`) with Drei `<Environment preset="city" />` and directional shadows.
  3. Set up post-processing stack (`<Effects />`): Bloom, Vignette, Chromatic Aberration, Noise filter.
  4. Implement loading fallback with Drei `<Html center>` spinner.
- **Deliverables:** Interactive empty 3D scene with post-processing and camera orbit control.

---

## Phase 3: Hero Section & Basement Ticker
- **Objective:** Build the hero scene featuring central 3D mesh object, Drei `<Html>` spatial headline, and marquee ticker.
- **Tasks:**
  1. Create `<HeroScene />` with procedural chrome/glass 3D emblem mesh (`MeshTransmissionMaterial`).
  2. Integrate Drei `<Html transform occlusion>` spatial header ("MANRAJ CHAUHAN // CREATIVE DEVELOPER").
  3. Implement mouse tracking parallax (camera shifts slightly on pointer movement).
  4. Build fixed DOM header & basement-style continuous scrolling ticker banner (`<Ticker />`).
- **Deliverables:** Visually stunning Hero section with 3D central object, spatial text, and header overlay.

---

## Phase 4: Interactive 3D Projects Showcase
- **Objective:** Create spatial 3D gallery featuring project cards embedded inside 3D space with Drei `<Html>`.
- **Tasks:**
  1. Build `<Projects3D />` container rendering spatial project cards arranged in 3D carousel or grid layout.
  2. Create `<SpatialCard />` utilizing Drei `<Html transform distanceFactor={1.5} occlusion>` for live project previews, tech stack badges, and action buttons.
  3. Add GSAP/Framer Motion animations triggered by scrolling into project viewports.
  4. Add hover effects: mesh tilt, bloom intensity spike, and sound triggers on card focus.
- **Deliverables:** Interactive 3D project gallery with live spatial HTML overlays.

---

## Phase 5: About Section, Physics Skills Matrix & Audio Engine
- **Objective:** Develop About bio panel and physics-driven 3D skill badges.
- **Tasks:**
  1. Create About section with brutalist technical grid overlay.
  2. Build 3D Skill Badges using Three.js meshes that react to mouse hover/click with spring physics animations.
  3. Implement global Web Audio UI sounds (button click, hover hum, section switch) with mute toggle in top header.
- **Deliverables:** Functional About section, interactive 3D skill matrix, and UI audio engine.

---

## Phase 6: Contact Section, Performance Tuning & Deployment
- **Objective:** Complete spatial contact form, optimize performance across devices, and deploy to `manrajchauhan.com`.
- **Tasks:**
  1. Build glassmorphic contact form embedded in spatial scene.
  2. Optimize asset loading (compress models with Draco, convert textures to KTX2/WebP).
  3. Implement low-power GPU fallback (disable post-processing on mobile if FPS drops below 30).
  4. Verify SEO meta tags, Open Graph preview image, and ARIA accessibility labels.
  5. Deploy static build to production hosting (Vercel / Netlify / Cloudflare Pages) mapped to domain `manrajchauhan.com`.
- **Deliverables:** Production-ready live 3D portfolio at `manrajchauhan.com`.
