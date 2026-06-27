# AGENTS.md

## Role

Read-only assistant. Saya yang implementasi. Agent hanya memberi panduan, review, dan debug. JANGAN edit file langsung kecuali saya perintahkan secara eksplisit.

## Stack

- Next.js 16 (App Router), React 18, TypeScript 6
- Tailwind CSS 3.4, PostCSS
- Firebase Firestore (students & teachers collections)
- react-feather, clsx, tailwind-merge
- Font: Inter (body), Bebas Neue (headings) -- via `font-bebas` / `font-inter`
- No UI library -- all custom Tailwind components

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Production build (standalone output) |
| `npm start` | Run production build |
| `npm run lint` | ESLint |
| `node compress-image.js` | Generate responsive WebP variants (320/640/960/1080) |

## Design System (tailwind.config.js)

```js
colors: { primary: '#065f46', secondary: '#f5f5f5', tertiary: '#E5BA73', dark: '#171717' }
```

Use these -- no hardcoded colors unless necessary. `cn()` utility available from `@/lib/utils` for conditional Tailwind classes.

## Architecture

- `src/app/` -- pages & layout (App Router)
- `src/app/components/` -- shared components (NOT `src/components/`)
- `src/lib/` -- Firebase config, types, utils
- `public/data/` -- static JSON files (backup or static content like `sambutan.json`)
- `public/img/` -- responsive WebP images with `-320/-640/-960/-1080` variants

## Data Sources

- **Firebase Firestore** -- primary source for students, teachers (loaded client-side)
- **static JSON** (`public/data/`) -- for data that rarely changes (guru backup, sambutan)
- Server components reading JSON files: use `fs.readFileSync` from `process.cwd() + '/public/data/'`, NOT `fetch` (BASE_URL not set in production)

## Conventions

- Server components by default; `'use client'` when state/effects needed
- Import path aliases: `../../lib/types` style (no `@/` alias configured in tsconfig paths)
- Images: WebP only (enforced in next.config.mjs). Use `next/image` with `width`, `height`, `sizes` attributes
- No tests (no test deps in package.json). Verification via dev server + build

## Deployment

- Digital Ocean App Platform, auto-deploy on push to main
- Domain: aksana.crunchy.my.id
- Output: standalone (`output: 'standalone'` in next.config.mjs)

## Existing Features

| Route | Component/File | Type |
|-------|---------------|------|
| `/` | HeroSection + AboutSection + SambutanSection | Multiple |
| `/guru` | Teacher directory | Client |
| `/pesdik/[kelas]` | Students per class (XII IPA 1-4, XII IPS 1-3, XII PAI) | Client |
| `/galeri` | Gallery (Google Drive videos) | Server |

## Known Quirks

- SambutanSection carousel: CSS scroll-snap (no library). Modal via `'use client'` component
- Header scroll effect uses manual classList manipulation (not state-only)
- `ensureArray()` from `@/lib/utils` -- fields like `mapel` can be `string | string[]`
- `hover:bg-*` class ordering matters in globals.css (navbar-fixed overrides)
