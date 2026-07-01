# Aksana 29 - Buku Tahunan MAN Kapuas

Website Buku Tahunan (Yearbook) Angkatan 29 MAN Kapuas. Dibangun dengan Next.js 16 App Router dan Firebase.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 18
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS 3
- **Database & Auth:** Firebase (Firestore + Authentication)
- **Icons:** React Feather
- **Font:** Inter + Bebas Neue (Google Fonts)

## Struktur Folder

```
src/
  app/           # Next.js App Router pages
    components/  # Shared UI components
    galeri/      # Galeri page
    guru/        # Teachers directory page
    pesdik/      # Students directory page
lib/             # Utility functions & Firebase config
public/
  data/          # Static data files
  img/           # Public images
```

## Cara Menjalankan di Local

```bash
# Clone
git clone git@github.com:kemal-faza/aksana-29-modern.git
cd aksana-29-modern

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.local` dari template:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Deployment

Deployed di Digital Ocean App Platform.

- **Production:** [aksana.crunchy.my.id](https://aksana.crunchy.my.id) [aksana29.crunchy.my.id](https://aksana29.crunchy.my.id)
- **Auto-deploy:** Setiap push ke `main` otomatis redeploy
