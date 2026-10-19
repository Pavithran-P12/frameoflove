# Frame OF Love

Website for Frame OF Love — wedding photography and cinematic films, Coimbatore.
Live at **https://frameoflove.co.in**. Built with [Astro](https://astro.build) and published to GitHub Pages.

## Work on it locally

Needs [Node.js](https://nodejs.org) 22.12 or newer.

```sh
npm install      # first time only
npm run dev      # preview at http://localhost:4321, refreshes as you edit
npm run build    # production build into dist/ (optional check before pushing)
```

## Publishing

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds the site and publishes it
(takes about a minute; progress shows under the repo's **Actions** tab).

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`.

## Where things live

| What | Where |
| --- | --- |
| Page layout (order of sections) | `src/pages/index.astro` |
| Each section | `src/components/*.astro` |
| Packages, payment terms, add-ons | `src/data/packages.ts` |
| YouTube films carousel | `src/data/films.ts` |
| Phone, WhatsApp, Instagram, YouTube links | `src/data/site.ts` |
| Photos | `src/assets/photos/` |
| Logos | `src/assets/logo/` |
| Styles | `src/styles/global.css` |
| Interactions (menu, slideshow, carousel, video player) | `src/scripts/main.js` |
| Files served as-is (CNAME) | `public/` |

Photos in `src/assets` are resized into several WebP sizes automatically when the site is built,
so add them at full quality.
