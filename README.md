# Aksana 29 — Buku Tahunan MAN Kapuas

Website Buku Tahunan (Yearbook) Angkatan 29 MAN Kapuas. Monorepo pnpm dengan Next.js 16 App Router (frontend) dan Express REST API (backend).

## Tech Stack

| Layer               | Technology                                    |
| ------------------- | --------------------------------------------- |
| **Frontend**        | Next.js 16 (App Router), React 18, TypeScript |
| **Backend**         | Express + TypeScript (ESM, pure Node)         |
| **Styling**         | Tailwind CSS 3                                |
| **Database**        | Firebase Firestore (via firebase-admin)       |
| **Package Manager** | pnpm (workspaces)                             |
| **Icons**           | React Feather                                 |
| **Carousel**        | Swiper                                        |
| **Fonts**           | Inter + Bebas Neue (Google Fonts)             |

## Architecture

```
aksana-29-modern/
  apps/
    frontend/       # Next.js 16 App Router (server components by default)
      src/
        app/        # Pages & layout (/, /guru, /pesdik/[kelas], /galeri)
        lib/        # API client, types, utilities
        assets/     # Static assets
      public/
        data/       # Static data files (sambutan.json)
        img/        # Public images (guru/, pesdik/)
    backend/        # Express + TypeScript REST API
      src/
        routes/     # API routes (/api/teachers, /api/students, /health)
        config/     # Firebase admin init, env loading
  packages/
    shared/         # TypeScript types (shared between FE & BE)
```

## Prerequisites

- Node.js >= 18
- pnpm >= 10

## Getting Started

```bash
# Clone
git clone git@github.com:kemal-faza/aksana-29-modern.git
cd aksana-29-modern

# Install dependencies (all workspaces)
pnpm install

# Run both frontend + backend concurrently
pnpm dev

# Or run individually
pnpm dev:fe   # Frontend only (localhost:3000)
pnpm dev:be   # Backend only (localhost:4000)
```

Buka [http://localhost:3000](http://localhost:3000).

## Build

```bash
# Build all workspaces
pnpm build

# Build individually
pnpm build:fe   # Frontend (next build)
pnpm build:be   # Backend (tsc)
```

## Environment Variables

### Frontend (`apps/frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Backend (`apps/backend/.env`)

```env
PORT=4000
CORS_ORIGIN=http://localhost:3000
FIREBASE_SERVICE_ACCOUNT_KEY=<base64-encoded-service-account-key>
```

> **Note:** `FIREBASE_SERVICE_ACCOUNT_KEY` is a base64-encoded Firebase service account JSON. Generate with: `base64 -w0 sa.json`. Get `sa.json` from Firebase Console > Project Settings > Service Accounts > Generate new key.

## Scripts

| Command                          | Description                          |
| -------------------------------- | ------------------------------------ |
| `pnpm dev`                       | Run FE + BE concurrently             |
| `pnpm dev:fe`                    | Frontend dev server (next dev)       |
| `pnpm dev:be`                    | Backend dev server (tsx watch)       |
| `pnpm build`                     | Build all workspaces recursively     |
| `pnpm build:fe`                  | Frontend build (next build)          |
| `pnpm build:be`                  | Backend build (tsc)                  |
| `pnpm lint`                      | Lint all workspaces                  |
| `pnpm --filter <name> add <pkg>` | Add dependency to specific workspace |

## Deployment

Deployed on VPS with PM2 + Nginx + Certbot.

### PM2 Processes

| Process             | App                   | Port |
| ------------------- | --------------------- | ---- |
| `aksana-fe`         | Frontend (production) | 3000 |
| `aksana-fe-staging` | Frontend (staging)    | 3001 |
| `aksana-be`         | Backend (production)  | 4000 |
| `aksana-be-staging` | Backend (staging)     | 4001 |

### Domains

| Environment | Frontend                                                 | Backend                                                          |
| ----------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| Production  | [aksana29.crunchy.my.id](https://aksana29.crunchy.my.id) | [api.aksana29.crunchy.my.id](https://api.aksana29.crunchy.my.id) |
| Staging     | [staging.crunchy.my.id](https://staging.crunchy.my.id)   | [api-staging.crunchy.my.id](https://api-staging.crunchy.my.id)   |

### Deploy Flow

```bash
git pull
pnpm install
pnpm build
pm2 restart aksana-fe aksana-be --update-env
```
