# AutoShorts

AutoShorts is a responsive Next.js marketing-site prototype for an open-source, AI-assisted short-form video creation product.

## Core features

- Responsive landing page with desktop and mobile navigation.
- Product sections describing script, voiceover, image, and video-generation concepts.
- Four-step workflow presentation for creating short-form videos.
- Three-tier pricing presentation.
- GitHub calls to action and a feedback mail action.
- Tailwind-based responsive styling.

## Technology stack

- Next.js 15 and React 19
- JavaScript
- Tailwind CSS 3 and PostCSS

## Prerequisites

- Node.js and npm

## Local setup

```bash
git clone https://github.com/varunisrani/autosh.git
cd autosh
npm ci
npm run dev
```

The development script runs Next.js with Turbopack at `http://localhost:3000` by default.

Production commands:

```bash
npm run build
npm run start
```

The repository also defines `npm run lint`.

## Configuration

No environment variables are referenced by the application source.

## Project structure

- `app/page.js` — the complete AutoShorts landing page and interactions.
- `app/layout.js` — root layout and page metadata.
- `app/globals.css` — global Tailwind styles.
- `public/` — default static assets.
- `tailwind.config.mjs` and `postcss.config.mjs` — styling configuration.

## Status and limitations

This repository implements only a marketing page. The advertised AI generation, voiceover, rendering, accounts, usage limits, and billing workflows are not implemented in this codebase. The pricing buttons link to `/create`, but no matching route exists. Several GitHub calls to action point to a differently named repository. No automated test script is defined, and the lint script uses `next lint`, which may not work with this Next.js version.