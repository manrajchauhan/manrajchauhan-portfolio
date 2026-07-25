# Product Requirements Document (PRD)

**Project Name:** Manraj Chauhan 3D Portfolio  
**Target Domain:** `manrajchauhan.com`  
**Inspiration:** [basement.studio](https://basement.studio/)  
**Status:** In Conception & Planning  

---

## 1. Executive Summary & Vision
The goal of this project is to build an edge-cutting, high-octane 3D personal portfolio for **Manraj Chauhan** hosted at `manrajchauhan.com`. Drawing direct inspiration from the dark, brutalist, and hyper-interactive digital aesthetic of **basement.studio**, the portfolio will blend 3D WebGL scenes powered by Three.js and React Three Fiber / Drei with seamless HTML overlays (`drei/Html`). It will showcase technical expertise, featured projects, creative skills, and contact pathways in a visually captivating, studio-grade web experience.

---

## 2. Target Audience & Goals
- **Tech Recruiters & Engineering Hiring Managers:** Seeking top-tier frontend/full-stack/3D engineering talent.
- **Clients & Collaborators:** Looking for bespoke, high-end web experiences, interactive 3D web apps, and modern front-end development.
- **Designers & Web Creative Community:** Evaluating aesthetics, motion design, technical craft, and user experience.

### Key Objectives:
- Deliver a "WOW" factor within the first 3 seconds of load.
- Maintain buttery 60+ FPS performance on desktop and modern mobile devices.
- Showcase projects with interactive spatial 3D previews and embedded HTML cards using `@react-three/drei`.
- Ensure 100% functional accessibility and fast fallback for non-WebGL devices.

---

## 3. Key Feature Specifications

### 3.1 Hero Section (Spatial 3D Landing)
- **Interactive 3D Canvas:** Central 3D hero artifact (e.g., metallic/glass emblem, interactive physics mesh, or reactive geometric grid) with dynamic light reflections.
- **Drei HTML Integration:** Embedded floating 3D HTML text headers (`drei/Html` with transform, distance factor, and occlusion) that align perfectly with 3D world coordinates.
- **Interactive Cursor & Mouse Tracking:** Camera parallax, magnetic cursor, raycasted mesh displacement on hover.
- **Basement Ticker & Marquee:** High-contrast scrolling ticker band with status ("AVAILABLE FOR FREELANCE & FULL-TIME", "MANRAJ CHAUHAN // 2026").

### 3.2 Interactive Project Showcase
- **3D Spatial Gallery:** Projects rendered as 3D floating cards or interactive carousel.
- **HTML in Drei Viewports:** Live project previews, tech tags, and interactive links rendered inside 3D spatial cards via `drei/Html`.
- **Custom Shaders / Post-Processing:** Chromatic aberration, subtle noise/grain, bloom on neon highlights, and depth-of-field focus effect.

### 3.3 Experience & Skills Matrix
- **Brutalist Grid Layout:** High-density technical specs matrix inspired by basement.studio layout.
- **Interactive 3D Objects:** Floating 3D skill badges (Three.js logos, React icons, custom tech geometry) with physics collision/bounce when clicked or dragged.

### 3.4 Contact & Interactive Footer
- **Spatial Contact Panel:** Glassmorphic contact form embedded in 3D scene or overlay.
- **Live Time & Status:** Real-time clock display (IST timezone), interactive social links with magnetic cursor effect.
- **Sound FX Engine (Optional Toggle):** Subtle mechanical clicks, synth hums, and UI feedback audio.

---

## 4. Technical Requirements
- **Framework & Libraries:** React / Next.js (or Vite + React), Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP / Framer Motion, Lenis (smooth scroll).
- **3D Spatial HTML:** `@react-three/drei` `<Html>` component used extensively for 2D UI elements pinned to 3D transformations.
- **Styling:** Vanilla CSS / Modern CSS Modules with custom design tokens, dark theme tokens, glassmorphism, grid overlays.
- **SEO & Meta Tags:** Full Open Graph tags, Twitter cards, JSON-LD structured data for `manrajchauhan.com`, semantic HTML tags inside Drei HTML wrappers.

---

## 5. Non-Functional & Performance Targets
- **LCP (Largest Contentful Paint):** < 2.2 seconds.
- **Frame Rate:** Target steady 60 FPS (30 FPS minimum on low-tier mobile GPUs).
- **Asset Optimization:** GLTF models compressed via Draco/Meshopt; textures optimized to WebP/KTX2.
- **Graceful Fallback:** 2D canvas static fallback if WebGL context is lost or unsupported.
