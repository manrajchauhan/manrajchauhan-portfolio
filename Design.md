# Design System & Aesthetic Specification (Design.md)

**Project:** Manraj Chauhan 3D Portfolio (`manrajchauhan.com`)  
**Design Reference:** [basement.studio](https://basement.studio/) + Extracted Editorial Palette  
**Visual Style:** Hybrid Editorial Cyber-Brutalism / Warm Linen Cream Base / Burnt Terracotta Rust Accents  

---

## 1. Extracted Color Palette Matrix

The color system has been updated by extracting exact color values from Manraj Chauhan's branding graphics, engineering log cards, and photography:

```
+-----------------------------------------------------------------------------------------+
|  Primary Background : Warm Linen Cream (#FAF4EC)                                        |
|  Surface Card Base  : Pure Off-White (#FFFDF9)                                          |
|  Secondary Surface  : Soft Sand (#F5EBE0)                                               |
|  High-Contrast Base : Deep Charcoal (#121214)                                           |
|                                                                                         |
|  Text Primary       : Rich Charcoal Espresso (#141210)                                 |
|  Text Muted         : Warm Taupe (#5C5248)                                              |
|  Text on Dark       : Warm Linen (#FAF4EC)                                              |
|                                                                                         |
|  Accent 1 (Primary) : Vibrant Burnt Terracotta / Rust (#E04B16)                         |
|  Accent 2 (Secondary): Warm Copper Bronze (#A65D28)                                     |
|  Accent 3 (Highlight): Soft Burnt Amber (#C86F28)                                       |
|  Border Color       : Subtle Sand Border (rgba(26, 23, 21, 0.12))                        |
+-----------------------------------------------------------------------------------------+
```

### CSS Variables (`variables.css`)
```css
:root {
  /* Color Tokens */
  --bg-obsidian: #faf4ec;       /* Warm Linen Cream Page Base */
  --bg-surface: #fffdf9;        /* Off-White Card Base */
  --bg-card: #f5ebe0;           /* Soft Sand Container */
  --bg-dark-card: #121214;      /* Deep Charcoal Ticker/Badge Base */

  --text-main: #141210;         /* Primary Headings - Charcoal Espresso */
  --text-secondary: #5c5248;    /* Body Text - Warm Taupe */
  --text-muted: #8c8278;        /* Subtitles & Captions */
  --text-on-dark: #faf4ec;      /* High-Contrast Light Text */

  --accent-orange: #e04b16;     /* Primary Accent - Vibrant Terracotta Rust */
  --accent-copper: #a65d28;     /* Secondary Accent - Warm Copper Bronze */
  --accent-amber: #c86f28;      /* Highlight Accent - Burnt Amber */

  --border-subtle: rgba(26, 23, 21, 0.12);
  --border-active: rgba(224, 75, 22, 0.6);

  /* Font Families */
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-body: 'Inter', -apple-system, sans-serif;
}
```

---

## 2. Typography System

- **Display Headers (`--font-display`):** `Space Grotesk 800` set in deep charcoal (`#141210`) with terracotta rust accent highlights (`#E04B16`).
- **Monospace Accents (`--font-mono`):** `JetBrains Mono` for engineering log tags (`[ENGINEERING LOG #001]`, `[01/05]`, `MANRAJ CHAUHAN`).
- **Body Text (`--font-body`):** Clean, high-legibility sans-serif (`Inter`) in warm taupe (`#5C5248`).

---

## 3. 3D Spatial Canvas Aesthetics

- **Hero Glass Mesh:** Transmission glass (`MeshTransmissionMaterial`) with index of refraction `ior: 1.52` and subtle chromatic dispersion over `#FFFDF9`.
- **Inner Core Geometry:** Wireframe octahedron rendered in bright burnt terracotta rust (`#E04B16`).
- **Drei Spatial HTML Cards:** Glassmorphic off-white cards (`rgba(255, 253, 249, 0.92)`) anchored into 3D world coordinates with smooth hover borders in terracotta orange (`#E04B16`).
