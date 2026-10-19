# Frame OF Love website — working notes

Read this first. It records how the site is built, the decisions made, and what is still open,
so new changes can start without re-discovering everything. Keep it updated after each session.

Live site: https://frameoflove.co.in · Repo: github.com/Pavithran-P12/frameoflove (branch `main`)
Studio: Frame OF Love, wedding photography & films, Coimbatore. Founder: Arjun AS. Site built by P12 (pavithranm.in).

## Stack and publishing

- **Astro 7** static site (migrated from plain HTML/CSS/JS on 2026-10-19). Node **22.12+** required.
- `npm run dev` → http://localhost:4321 · `npm run build` → `dist/`.
- Hosted on **GitHub Pages via GitHub Actions** (`.github/workflows/deploy.yml`, `withastro/action@v6` +
  `actions/deploy-pages@v4`). Repo Settings → Pages → Source = **GitHub Actions** (already switched).
  Every push to `main` builds and publishes in ~1 min. Custom domain from `public/CNAME`.
- `compressHTML: true` in `astro.config.mjs` (Astro 7's default 'jsx' mode drops spaces between inline elements).
- `npm audit` flagged Astro ≤7.2.7, esbuild and sharp; fixed by moving to Astro ^7.4.1. Never run `npm audit fix --force`.
- Workflow shows harmless warnings: checkout@v4 / deploy-pages@v4 target Node 20 (bump versions when next touching the workflow).

## Where things live

| What | Where |
| --- | --- |
| Home page section order | `src/pages/index.astro` |
| Gallery page (`/gallery`) | `src/pages/gallery.astro` + `src/components/AlbumReel.astro`, `Lightbox.astro` |
| Legal page (`/legal`) | `src/pages/legal.astro` + `src/data/legal.ts` |
| Sections | `src/components/*.astro` (SiteHeader, Hero, Intro, Stories, Manifesto, Packages, FilmBreak, Films, About, Gallery, Contact, SiteFooter) |
| Packages, prices, payment terms, add-ons | `src/data/packages.ts` |
| YouTube films carousel | `src/data/films.ts` |
| Phone / WhatsApp / Instagram / YouTube / Maps links | `src/data/site.ts` (`whatsapp(text)` builds wa.me links) |
| Client albums | `src/assets/albums/<client-folder>/` (README inside explains) |
| Site photos | `src/assets/photos/` · logos `src/assets/logo/` |
| Styles | `src/styles/global.css` (one file; tokens in `:root`) |
| Interactions | `src/scripts/main.js` (menu, header on scroll, reveal, hero slideshow, carousels, video modal, lightbox) |
| Icons | `src/components/Icon.astro` (line arrows: up-right, down-right, down, up, left, right) |
| Full-size originals (not published) | `_originals/` (git-ignored) |

## Design system

- Warm paper palette (`--paper #f4f1eb`, `--ink #24211c`, `--ink-deep #191713`, `--accent #896541`, `--accent-light #cfb38d`).
- Fonts: Cormorant Garamond (headings, italic `<em>` accents) + Inter (body, small caps labels). Google Fonts.
- Section rhythm `--section-space: clamp(3.5rem, 6vw, 5.5rem)` (tightened 2026-10-20; was 4.75–8.5rem). Intro has its own tighter padding; Stories has no top padding.
- Breakpoints: 1100px (tablet), 800px (mobile nav + stacking), 480px (small phones).
- Buttons: `.contact-button` (cream `.whatsapp` variant = primary), `.text-link`, `.circle-link`, `.carousel-button`.
  All arrows are `<Icon>` SVGs inside a `<span>` (spans carry the size/hover-nudge); never type ↗ ↘ ↓ characters.
- Photos go through `src/components/Photo.astro` (astro:assets `<Image>`, WebP, multiple widths, never upscales; pass `sizes`).
- Accessibility kept throughout: skip link, focus styles, aria labels, reduced-motion support, `.visually-hidden`.

## Page-by-page state (2026-10-20)

- **Header**: transparent logo (`logo.png` dark on cream scrolled header; `logo-light.png` cream version over photos/dark).
  Menu: Stories, Packages, Films, Gallery, About, Contact, Legal (+ Enquire WhatsApp). Links use `/#section` so they work from any page.
  Mobile menu items are small (20–24px serif), list starts at top.
- **Hero**: 4-photo slideshow `hero-1..4` (garden tea, forehead kiss, horse at golden hour, ceremony). Per-slide focal points
  `pos` / `posMobile` in `Hero.astro` (tuned so couples stay in frame on phones: 75/24/62/50 %). Buttons: cream
  "Get a quote on WhatsApp" + "Explore stories".
- **Selected Stories**: `story-1..3` (Venkatesh & Sakthi album cover, "Stories Written in Light" page, B&W kiss).
- **Our Approach (Manifesto)**: `approach.jpg` (laughing couple), object-position 35% 42%.
- **Packages**: Essential / Signature (featured "Most loved") / Cinematic. Each card lists the FULL inclusions; items new
  in that package are bold with a gold "+" (`isNew`), carried-over items muted. Cards use CSS subgrid so title / list /
  gifts / CTA rows align and heights match. Prices under each name (shown since 2026-10-20):
  Essential ₹30,000 / ₹40,000 · Signature ₹45,000 / ₹65,000 · Cinematic ₹60,000 / ₹85,000
  (labelled "Reception" = Session 1 and "Reception + Wedding" = Session 2 — mapping assumed, user to confirm).
  Unlimited Photos Coverage is in all three.
- **Films**: two-row carousel of 6 long-form YouTube videos (no Shorts) + tall "More films on our channel" card; progress bar;
  plays in a modal (youtube-nocookie, referrer policy set to avoid Error 153; falls back to YouTube when opened as file://).
- **About**: founder photos `founder-1/2`.
- **Gallery (home)**: masonry of `gallery-01..09`, links to Instagram, "Open the gallery" → /gallery.
- **Contact**: 3 equal columns — heading · studio photo `office.jpg` with a map-pin button (opens `MAPS`) · message + WhatsApp/Call.
  Below: 3-column grid — Office location, Instagram, YouTube / phone, GSTIN 33CRKPA0778A1ZA, Terms & Privacy.
- **Gallery page**: dark page; one two-row carousel per album folder; full-screen lightbox (arrows, swipe, keys). Empty state
  ("Albums are on their way") until folders are added. Album title from folder name (`maria-and-nithin` → "Maria & Nithin");
  optional `album.json` (title, location, date YYYY-MM, cover, order, film).
- **Legal page**: Terms & Conditions (13 sections) + Privacy Policy (10 sections, effective 20 Oct 2026), copied word for word
  from the client's PDF (verified 1,518/1,518 words). Do not reword it; update `src/data/legal.ts` only from a new document.
- **Footer**: light logo, "Terms & Privacy" link, Back to top, floating WhatsApp button, "Made with love by P12".

## Photo rules

- Web copies: long edge ≤ 2400 px, JPEG ~85, ideally 0.3–1.5 MB. Resize anything bigger before committing; keep the
  original in `_originals/`.
- File names: lowercase, dashes, no spaces / em dashes / double extensions (`hero-2.jpeg`, `gallery-07.jpg`).
- Client albums: 15–30 selects per couple, sRGB, location metadata removed, numbered 01, 02… Get couples' consent to publish.
- Lightroom export for the studio: JPEG q80–85, sRGB, long edge 2400 px, sharpen for screen, copyright-only metadata.

## Open items / to confirm

1. **Payment terms conflict**: Legal page (from PDF) says **20% advance / 70% wedding day / 10% album delivery**; the home
   page Packages section (`paymentTerms` in `src/data/packages.ts`) still says 10% / 80% / 10%. Ask the user which is right.
2. **Map link**: `MAPS` in `src/data/site.ts` is a Google Maps *search* for "Frame OF Love, Coimbatore". Replace with the
   studio's exact share link when provided. (Legal address: 32, Kaliammal Colony, Kanuvai Road, Thudiyalur, Coimbatore 641034.)
3. Confirm Session 1 = Reception and Session 2 = Reception + Wedding for the price labels.
4. Client albums not added yet — `src/assets/albums/` is empty except its README.
5. All 2026-10-19/20 work is committed and pushed (latest: "Fix extra spaces and legal"). Check the live site and the
   Actions tab if anything looks off.

## Working notes for Claude

- The repo is on the user's Windows PC (OneDrive folder). The linked shell sees it at `~/mnt/frameoflove`.
  The folder is **case-insensitive** (rename `Hero-1.jpg` → `hero-1.jpg` via a temp name) and OneDrive can lag a moment
  after a rename before the new file is readable.
- npm registry is blocked from Claude's environments, so `astro build` can't run there. Verify layout instead by
  rendering a small HTML mock with the real `global.css` in Playwright (cloud workspace), and ask the user to run
  `npm run dev` / `npm run build` locally.
- `.github/workflows/*` can't be written with the file-copy tool; write it through the shell.
- User prefers short, direct updates; they test on their phone and send screenshots.
