# Design System & UI Direction

**Project:** Manraj Chauhan Portfolio  
**Reference Direction:** Dark cinematic studio hero, white editorial content, thin-grid sectioning, lime micro-interactions  
**Current Implementation:** Next.js App Router, custom CSS tokens in `app/globals.css`

---

## 1. Visual Language

The portfolio uses a precise agency-style landing page system:

- Full-screen black hero with atmospheric green/teal light wash.
- Oversized display wordmark as the first visual signal.
- Thin 1px grid dividers with centered plus markers between sections.
- Small uppercase monospace labels with lime square indicators.
- White editorial content sections with compact spacing and asymmetrical project placement.
- Neutral imagery, grayscale portrait treatment, and black hover badges.
- Large pale footer wordmark that acts as a background graphic.

This direction should feel sharp, minimal, high-end, technical, and confident.

---

## 2. Color Tokens

```css
:root {
  --color-ink: #050505;
  --color-graphite: #171717;
  --color-charcoal: #222222;
  --color-muted: #676767;
  --color-fog: #8d8d8d;
  --color-line: #e4e4e4;
  --color-paper: #ffffff;
  --color-soft: #f5f5f5;
  --color-lime: #19ff3c;
  --color-lime-soft: #c7ffd0;
}
```

Usage:

- `ink`: primary dark hero, black buttons, hover badges.
- `paper`: main page background and light button surfaces.
- `soft`: service cards, article thumbnails, footer surface.
- `line`: thin separators and card dividers.
- `lime`: active dots, action orbs, navigation accents.
- `muted`: secondary metadata, years, captions.

---

## 3. Typography

```css
:root {
  --font-display: "Inter Tight", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-code: "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace;
}
```

Rules:

- Display typography uses a heavy grotesque, not serif.
- Hero name is extra-large, heavy, and tightly stacked through line height only.
- Body copy is restrained and readable.
- Micro labels, project metadata, nav, and buttons use monospace.
- Letter spacing stays at `0` across the system.

Type scale:

- Hero: `78px / 116px / 168px / 218px` by breakpoint.
- Section headline: `24px / 28px / 36px`.
- Service titles: `22px / 23px / 27px`, uppercase.
- Testimonial quote: `22px / 25px / 31px`.
- Metadata: `11px - 13px`, monospace.

---

## 4. Layout System

- Page padding: `14px` mobile, `20px` tablet, `28px` laptop, `40px` desktop.
- Max content width: `1440px`.
- Section bottom padding: `72px` mobile, `92px` desktop.
- Service grid: 3 columns on desktop, 1 column on mobile.
- Project grid: 12-column desktop masonry; stacked cards on mobile.
- Footer grid: intro plus 3 link columns, collapsing to 2 columns and then 1 column.

Divider pattern:

- Every major white section starts with an 80px horizontal divider.
- Divider includes a centered plus icon on a white background.

---

## 5. Components

### Action Button

Pill button with black or white base and a lime circular arrow control. Used for contact CTAs only.

### Section Marker

Uppercase monospace label with a lime square. Used for `What I Do`, `Services`, `Project`, `Testimonials`, and `Latest Article`.

### Service Card

Soft gray tile, 8px radius, numbered top label, uppercase title, divider line, short description, and small `Read more` link.

### Project Card

Image or abstract visual block with hover `View` badge. Metadata row has index, title/year, and project category.

### Footer

Soft gray band with email capture, page links, social links, contact CTA, and oversized pale `MANRAJ` wordmark.

---

## 6. UX Rules

- Keep the first viewport focused on identity, specialty, and contact action.
- Use motion only for subtle hover feedback and smooth scrolling.
- Keep section labels consistent so the page scans like an editorial index.
- Avoid decorative clutter; the grid, whitespace, typography, and images carry the brand.
- Keep all claims grounded in actual portfolio content unless new verified copy is added.
