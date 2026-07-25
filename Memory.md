# Project Memory & Progress Log (Memory.md)

**Project Name:** Manraj Chauhan 3D Portfolio  
**Target Domain:** `manrajchauhan.com`  
**Current Date:** July 25, 2026  
**Status:** Initialization & Architecture Phase Completed  

---

## 1. Project Overview & Identity
- **Owner:** Manraj Chauhan (`manrajchauhan.com`)
- **Core Vision:** Interactive 3D personal portfolio inspired by **basement.studio**.
- **Key Tech Stack:** React, Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), `@react-three/postprocessing`, GSAP, Lenis, Vanilla CSS design system.
- **Repository Location:** `/Volumes/Personal Space/Cross Platform Apps/manrajchauhan-portfolio`

---

## 2. Completed Initial Documentation & Scaffolding
- [x] **PRD.md** – Defined goals, features, core spec, audience, and performance targets.
- [x] **Architecture.md** – Established hybrid spatial 3D + DOM architecture, directory layout, technology stack, and Drei `<Html>` strategy.
- [x] **Rules.md** – Documented strict AI guidelines, R3F performance rules (`useFrame` optimization, disposal), and tech stack constraints (Vanilla CSS, no Tailwind unless asked).
- [x] **Phases.md** – Created 6-phase implementation roadmap from setup to production deployment.
- [x] **Design.md** – Extracted design system from basement.studio (Obsidian `#050505`, Lime `#CCFF00`, Cyber Orange `#FF4D00`, Space Grotesk / JetBrains Mono typography, glassmorphism, chrome/transmission 3D materials).
- [x] **vibe.md** – Documented aesthetic vibe, motion manifesto, sound design direction, and digital brutalist identity.
- [x] **Design System Extraction** – Extracted brand colors from user images (Warm Linen Cream `#FAF4EC`, Burnt Terracotta Rust `#E04B16`, Copper Bronze `#A65D28`, Charcoal Espresso `#141210`).
- [x] **Code Base Update** – Updated `variables.css`, `global.css`, `Viewport.jsx`, `Scene.jsx`, `SpatialCard.jsx`, `projectsData.js`, and `Design.md` to reflect the extracted editorial warm cream and terracotta design system.
- [x] **Full Portfolio Expansion** – Built 5 major sections:
  1. **What I Do / Services** (`servicesData.js` & `Services3D.jsx` matching the Services banner image).
  2. **Expanded Projects** (5 projects in `projectsData.js` matching `01/05` tag style).
  3. **Tech Stack Matrix** (`techStackData.js` & `TechStack3D.jsx`).
  4. **My Music Taste** (`musicData.js` & `Music3D.jsx` spinning vinyl mesh + interactive audio player).
  5. **Interactive Resume View** (`resumeData.js`, `Header.jsx` trigger & `ResumeModal.jsx` timeline view).
- [x] **Scroll Architecture Fix** – Added `.scroll-spacer` (550vh scroll container) to `App.jsx`, created `useScrollProgress.js` hook, configured camera Y lerping in `Scene.jsx` (`state.camera.position.y = lerp(camera.y, -scrollProgress * 36)`), built right-side floating section navigation (`Navigation.jsx`), and adjusted canvas `pointer-events: none` so mouse wheel, drag, and touch gestures smoothly drive spatial 3D section scrolling.
- [x] **GitHub Repository Sync** – Pushed latest scroll resolution commit (`071c550`) to `https://github.com/manrajchauhan/manrajchauhan-portfolio.git`.

---

## 3. Tech Stack Decisions & Locks
- **Repository URL:** `https://github.com/manrajchauhan/manrajchauhan-portfolio.git` (Tracked on `main` branch).
- **Framework:** React 18 + Vite (Fast dev server, optimized static bundling).
- **Scroll Engine:** Lenis Smooth Scroll + `useScrollProgress` hook + camera lerp interpolation along Y-axis.
- **Design System Palette:**
  - Background Base: `#FAF4EC` (Warm Linen Cream)
  - Card & Surface: `#FFFDF9` (Off-White)
  - Text & Headings: `#141210` (Charcoal Espresso)
  - Primary Accent: `#E04B16` (Burnt Terracotta Rust)
  - Secondary Accent: `#A65D28` (Warm Copper Bronze)
- **3D Engine:** Three.js + `@react-three/fiber` + `@react-three/drei`.
- **Spatial UI:** `@react-three/drei` `<Html transform distanceFactor occlusion>`.
- **Post-Processing:** `@react-three/postprocessing` (Bloom, Vignette, ChromaticAberration, Noise).

---

## 4. Current State & Next Steps
- **Current Phase:** 3D Spatial Camera Scrolling Fully Functional & Deployed!
- **Status:** Ready for domain mapping to `manrajchauhan.com` via Vercel / Netlify / Cloudflare Pages.
