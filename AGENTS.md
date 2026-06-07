# AGENTS.md — CV

Personal CV/portfolio site for Hesvin Dario Molina Rios. Static HTML+CSS+JS (legacy) + React+Vite (v2026), both deployed via GitHub Pages.

## Branches & deploy

- **`dev`** (default) — development. **`prod`** — deployed to GitHub Pages at `https://daromr.github.io/cv/`.
- GitHub Pages builds from `prod` branch. CI: no workflows in repo — Pages builds are triggered externally.

## Legacy site (`/cv/`)

| Path | Purpose |
|---|---|
| `index.html` | Main CV page |
| `portafolio.html` | Portfolio gallery (JS app with carousel, masonry, lightbox) |
| `mantenimiento.html` | Maintenance placeholder — portfolio hidden from index |
| `js/index.js` | Button handlers (PDF, Telegram, LinkedIn) |
| `css/index.css` | CV styles |
| `css/portafolio.css` | Portfolio dark-theme styles |
| `galeria/` | Gallery assets (images, PDFs) |
| `galeria/generate_gallery_index.py` | **Run after adding assets**: generates `gallery_index.json` |
| `visor/` | WebGL Unity Viewer build |
| `reel/` | WebGL Unity Showreel build |
| `descargas/` | Downloadable CV PDF + Reel.zip |

After adding gallery files:
```bash
python galeria/generate_gallery_index.py
```

## New site v2026 (`/cv/2026/`)

React + Vite + TypeScript SPA with two routes:
- `/cv/2026/` — CV page (printable via `@media print` + PDF download via `html2pdf.js`)
- `/cv/2026/portafolio` — Portfolio with case studies, carousel, lightbox, masonry wall

### Tech stack
React 19, Vite 8, TypeScript 6, TailwindCSS v4, React Three Fiber, Three.js, framer-motion, react-router-dom v7, html2pdf.js

### Theme system
3 color palettes (Zen Ocean default, Shadow Pine dark, Paper & Ink classic). ThemeToggle component in header. Stored in `localStorage` under `cv2026-theme`. CSS custom properties on `[data-theme]`.

### 3D
Subtle torus knot via `@react-three/fiber` + `drei`. Wireframe, opacity 0.15, rotates slowly. Hidden on mobile (<1024px) and during print. Color reacts to theme changes via MutationObserver.

### PDF download
Lazy-loaded `html2pdf.js` (jsPDF + html2canvas). Captures `#cv-content` at 2x scale. Separate chunk (~935KB, loaded on click only).

### Dev commands
```bash
cd 2026/
npm install         # Already done
npm run dev         # Dev server at localhost:5173
npm run build       # Type-check + build to dist/
npm run preview     # Preview production build
```

### Build output
- `dist/` contains the static site for `/cv/2026/`
- `dist/404.html` copies `index.html` (SPA fallback for GH Pages)
- Base path: `/cv/2026/`

## Obsidian vault
Located at `~/Documents/Obsidian Vault/QORE/`. Project notes under `01-proyectos/cv-2026/`:
- `index.md` — project overview, goals, diagram
- `design/spec-visual.md` — color palettes, typography, layout spec
- `design/moodboard.md` — visual references
- `implementation/estructura.md` — component tree, data flow diagram
- `implementation/devlog.md` — session log
- `decisions/ADR-002-stack-cv-2026.md` — tech stack decisions

## Gallery loading (portafolio.html legacy)

Three fallback strategies:
1. `galeria/gallery_index.json` (preferred)
2. `galeria/gallery_grid.html`
3. Directory listing fallback
