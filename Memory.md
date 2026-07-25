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
- [x] **Next.js App Router & Monad Editorial Design System Overhaul**:
  - **Framework**: Migrated from Vite SPA to Next.js 16 App Router (`app/layout.jsx`, `app/page.jsx`, `app/globals.css`).
  - **Design System**: Monad editorial tech journal style guide on warm Parchment canvas (`#f6f3f1`).
  - **Typography**: Editorial Serif (Cormorant Garamond) locked at weight 400 for display headings, and Monospace (JetBrains Mono) for all body text, navigation, badges, tags, and UI elements.
  - **Color Tokens**: Lake Blue (`#2b59d1`), Off-Black (`#242424`), Ink (`#000000`), Periwinkle Mist (`#cfdaf5`), Ash hairline borders (`#cecac8`).
  - **Hero Section**: Typographic editorial hero with massive typography behind an AI-cutout transparent portrait (`/hero.png`), Monad pipeline node badge, and Off-Black action pill buttons.
  - **Featured Project**: Single focused showcase featuring the **MarkMe Workspace** screenshot (`/markme.png`).
  - **Responsiveness**: 100% mobile-to-desktop responsive with a glassmorphic header and mobile navigation drawer.
- [x] **GitHub Repository Sync** – Pushed latest transformation commit to `https://github.com/manrajchauhan/manrajchauhan-portfolio.git`.

---

## 3. Tech Stack Decisions & Locks
- **Design Reference:** [Vivid+Co (vividand.co)](https://vividand.co/) Prismatic Obsidian Theme.
- **Repository URL:** `https://github.com/manrajchauhan/manrajchauhan-portfolio.git` (Tracked on `main` branch).
- **Framework:** React 18 + Vite + `react-router-dom`.
- **Routes:** `/`, `/services`, `/projects`, `/music`, `/resume`.
- **Design System Palette:**
  - Canvas: `#101010` (Obsidian Void)
  - Dominant Surface: `#495764` (Graphite Veil)
  - Primary Text & UI: `#fffdf9` (Bone White)
  - Secondary Metadata: `#6f879c` (Fog Blue)
  - Hairline Outline: `#403f3f` (Ash Border, 1px)
  - 3D Artifact Accents: `#ff2a2a` (Prism Red), `#2a7fff` (Prism Cyan), `#2aff2a` (Prism Lime)
- **3D Engine:** Three.js + `@react-three/fiber` + `@react-three/drei`.
- **Spatial UI:** `@react-three/drei` `<Html transform distanceFactor occlusion>`.
- **Post-Processing:** `@react-three/postprocessing` (Bloom, Vignette, ChromaticAberration, Noise).

---

## 4. Current State & Next Steps
- **Current Phase:** Vivid+Co Prismatic Dark Portfolio Fully Built & Deployed!
- **Status:** Ready for domain mapping to `manrajchauhan.com`.
