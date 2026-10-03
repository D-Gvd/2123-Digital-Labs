# Nexus Digital — Next.js Website Template

A modern IT & Digital Marketing website template built with Next.js 14 (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel

1. Push your project to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No additional configuration needed.

## Project structure

```
nexus-digital/
├── app/
│   ├── layout.tsx        # Root layout, font loading, metadata
│   ├── page.tsx          # Home page — composes all sections
│   └── globals.css       # CSS variables, reset, shared utilities
└── components/
    ├── Navbar.tsx / .module.css
    ├── Hero.tsx / .module.css
    ├── Services.tsx / .module.css
    ├── WhyUs.tsx / .module.css
    ├── Process.tsx / .module.css
    ├── Testimonials.tsx / .module.css
    ├── CTA.tsx / .module.css
    └── Footer.tsx / .module.css
```

## Customising

- **Brand name & colors** → `app/globals.css` (CSS custom properties at `:root`)
- **Copy & data** → each component file exports a plain data array at the top
- **Metadata** → `app/layout.tsx`

## Tech stack

- [Next.js 14](https://nextjs.org) — App Router
- TypeScript
- CSS Modules + CSS custom properties
- `next/font` for zero-layout-shift font loading
