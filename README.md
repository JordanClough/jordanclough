# Jordan Clough — Portfolio

Personal portfolio for Jordan Clough, software developer. React + TypeScript + Vite + Tailwind v4, deployed to GitHub Pages.

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite 6** with `@vitejs/plugin-react` and `vite-plugin-svgr` (`?react` SVG imports)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **react-router-dom** with `HashRouter` (deep links work on GitHub Pages)
- No backend — contact uses `mailto:` / `tel:` plus copy-to-clipboard

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check then production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (typescript-eslint + react-hooks) |
| `node scripts/screenshots.mjs` | Capture every page at 12 viewport sizes into `reviewshots/` |

## Structure

```
src/
  components/   Seo, Sidebar, BentoCard, ProjectCard, SkillHex
  data/         projects.ts, skills.ts   (content lives here, not in JSX)
  pages/        Home, Projects, Skills, Contact, NotFound
  assets/       optimized .webp project photos + SVG skill icons
  App.tsx       app shell: sidebar + scrollable content + footer
  index.css     Tailwind import, design tokens, focus + motion rules
```

## Content

Add a project by editing `src/data/projects.ts`; add a skill in `src/data/skills.ts`
(import the SVG with `?react`). No component changes required.

## Deploy

Pushing to `main` builds and publishes `dist/` via `.github/workflows/deploy.yml`.
Enable it once under **Settings → Pages → Source: GitHub Actions**.

Project photos are pre-optimized to WebP (`postactiv`, `tessTelescopeSQ`). Keep new
images under ~250 KB and at most ~1200 px wide, and always pass `loading="lazy"`.
