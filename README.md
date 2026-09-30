# Muguduza Thatchers — Modernised Website

A modern, single-page marketing website for **Muguduza Thatchers cc** — master
thatchers based in Midrand, Gauteng, South Africa, celebrating 23 years of
craftsmanship.

Built with [Next.js 16](https://nextjs.org), TypeScript, Tailwind CSS 4 and
Framer Motion. All photography is from the company's own project gallery.

## Features

- Full-screen hero with cross-fading project slideshow and animated stats
- About section telling the company's story (est. April 2006, 30-strong team)
- Four service cards: timber roof structures, new thatch roofs, repairs &
  maintenance, professional roof assessments
- 4-step process timeline
- Filterable project gallery (24 photos) with a keyboard-friendly lightbox
  (arrow keys to navigate, Escape to close)
- Trade references with tap-to-call phone links
- Quote-request form with validation (opens the visitor's email client
  pre-filled — no backend required, works on any static host)
- Contact details, Facebook link and local-business structured data (JSON-LD)
- Fully responsive, mobile menu included

## Getting started

```bash
bun install        # or npm install / pnpm install
bun run dev        # development server on http://localhost:3000
```

## Deployment

### Vercel (recommended)

Import the repository at [vercel.com/new](https://vercel.com/new) — zero
configuration needed.

### GitHub Pages (static export)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy-pages.yml`)
that builds a static export and publishes it to GitHub Pages.

1. Push the code to GitHub.
2. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Trigger the workflow (push to `main` or run it manually from the Actions
   tab).

The workflow builds with `NEXT_EXPORT=true`, which switches Next.js to
`output: "export"` and adds the `basePath` for project pages
(`/muguduzathatchers`).

## Project structure

```
src/
  app/            layout (fonts, SEO, JSON-LD) + single-page composition
  components/
    site/         hero, navbar, about, services, process, gallery,
                  references, cta, contact, footer, reveal helpers
    ui/           shadcn/ui primitives
  lib/
    site.ts       business info, services, gallery data, categories
public/
  images/
    gallery/      project photography
    brand/        company logo
```

## Contact

- Phone: 082 713 6435
- Email: info@muguduzathatchers.co.za
- Address: 2161 Lehapu Street, Klipfontein View Ext 2, Midrand, Gauteng, 1683
- Facebook: https://www.facebook.com/muguduzathatchers

---

© Muguduza Thatchers cc. Thatching and General Trading in all Aspects.
