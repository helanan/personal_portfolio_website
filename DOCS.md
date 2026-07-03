# helanan.com — Codebase Documentation

A complete technical reference for the personal portfolio and data engineering site. Use this to understand how the codebase is structured, where to find things, and how to troubleshoot common issues.

---

## Tech Stack

| Layer | What's Used | Notes |
|---|---|---|
| Framework | `next@16.2.6` | App Router. **This version may have breaking changes** vs. older Next.js — read `node_modules/next/dist/docs/` before making changes. |
| React | `react@19.2.4` | React 19 is required by this Next.js version. |
| Language | TypeScript 5, strict mode | Path alias `@/*` → `./src/*` |
| Styling | Tailwind CSS v4 | No `tailwind.config.ts` — all config lives inside `globals.css` in the `@theme {}` block. Do not create a config file. |
| PostCSS | `@tailwindcss/postcss@^4` | In `postcss.config.mjs`. Single plugin, no further config. |
| Icons | `lucide-react@^1.16` | Used throughout: `ArrowRight`, `ExternalLink`, `Menu`, `X`, `Download`, `CheckCircle` |
| Fonts | Google Fonts via `next/font/google` | Loaded in `app/layout.tsx`: **Cormorant Garamond** (serif, display/headings) + **DM Sans** (sans, body/UI) |
| Forms | Formspree | Endpoint: `https://formspree.io/f/xdajwbjd`. Contact form POSTs JSON here. |
| Images | `next/image` | Only local public paths used. No `remotePatterns` configured in `next.config.ts`. |

> **No UI library, no animation library.** Everything is custom Tailwind utilities. All transitions are pure CSS (`transition-colors`, `transition-transform`, `backdrop-blur-sm`). No framer-motion, no shadcn, no MUI.

---

## File Map

```
src/
├── app/                       # Next.js App Router — one folder per route
│   ├── layout.tsx             # Root shell: Navbar, Footer, fonts, metadata
│   ├── page.tsx               # Home page (7 sections, all inline)
│   ├── globals.css            # Tailwind @theme tokens + global rules
│   ├── about/
│   │   └── page.tsx           # Timeline, DISC radar, collaboration styles, value prop
│   ├── blog/
│   │   ├── page.tsx           # Async server component — local + Medium posts
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic blog post detail
│   ├── contact/
│   │   └── page.tsx           # Client component — Formspree contact form
│   ├── portfolio/
│   │   ├── page.tsx           # Case study index
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic case study detail
│   ├── resume/
│   │   └── page.tsx           # Print-ready résumé with PrintButton
│   └── services/
│       └── page.tsx           # 6 service offerings + engagement process
│
├── components/                # Reusable UI components
│   ├── ClientCarousel.tsx     # Scrollable logo strip (server component)
│   ├── Footer.tsx             # Site footer (server component)
│   ├── HeadshotImage.tsx      # "use client" — headshot with initials fallback
│   ├── LogoSVG.tsx            # Inline SVG brand mark (server component)
│   ├── Navbar.tsx             # "use client" — fixed nav with scroll + mobile drawer
│   └── PrintButton.tsx        # "use client" — triggers window.print()
│
├── data/                      # All site content as TypeScript data files
│   ├── blogPosts.ts           # 3 local blog posts (id, slug, body[], tags[]…)
│   ├── caseStudies.ts         # 3 portfolio case studies
│   ├── services.ts            # 6 service offerings
│   └── techStack.ts           # 30 technologies grouped by category
│
└── lib/
    └── medium.ts              # Server-side Medium RSS fetch + parser

public/
├── images/
│   ├── headshot.jpg
│   ├── logo.png               # Uploaded but not in use — needs transparent background
│   └── logos/                 # 20 client logos used in ClientCarousel
│       └── *.png / *.jpg / *.svg
```

---

## Routes & Pages

| Route | Description |
|---|---|
| `/` | **Home page.** Seven sections defined inline in `src/app/page.tsx`: Hero, ClientCarousel, About stats, Services preview, Tech stack, Case studies preview, Blog preview, Contact CTA. |
| `/about` | **About page.** Career timeline (5 milestones), DISC radar chart (inline SVG, no library), collaboration dynamics grid, value proposition on dark background. All content is hardcoded inline — no separate data file. |
| `/blog` | **Async server component.** Shows local posts from `blogPosts.ts` first, then fetches Medium posts. Medium section hidden if fetch returns empty. |
| `/blog/[slug]` | **Dynamic blog post.** Uses `generateStaticParams` to pre-render at build time. Body is a `string[]` — lines starting with `## ` become `<h2>`, others become `<p>`. |
| `/contact` | **Client component — form.** POSTs JSON to Formspree. Status: `idle → sending → sent | error`. On success, form replaced with confirmation. |
| `/portfolio` | **Case study index.** Lists all entries from `caseStudies.ts` with hover-to-mist row animation. All client names are anonymized. |
| `/portfolio/[slug]` | **Dynamic case study.** Pre-rendered via `generateStaticParams`. 12-column layout: content col-span-8, sticky metadata sidebar col-span-4. |
| `/resume` | **Print-ready résumé.** "Download PDF" button calls `window.print()`. Print CSS in `globals.css` hides nav, footer, and the button itself. |
| `/services` | **Services page.** 6 services in a gap-px grid. Each has an inline SVG icon keyed from `iconMap` in the page file. Engagement process (4 steps), charcoal CTA at bottom. |

---

## Components

### `Navbar.tsx` — `"use client"`
Fixed top nav. `scrolled` state (true when `window.scrollY > 24`) switches background from transparent to `bg-cream/95 backdrop-blur-sm`. `mobileOpen` resets on route change via `usePathname()`. Active link detection via `pathname === link.href`. Nav links defined at the top of the file in the `navLinks` array.

### `ClientCarousel.tsx` — server component
Horizontally scrollable logo strip. 20 companies hardcoded. **Section background is `bg-white`** — intentional so logos with white backgrounds are invisible (no blend-mode tricks). `grayscale opacity-50` filters are on the track container, not individual images, to avoid 20 separate GPU compositing layers. Edge fade via inline `maskImage` gradient. Scrollable via `.logo-strip-outer` / `.logo-strip-track` CSS classes from `globals.css`.

### `HeadshotImage.tsx` — `"use client"`
Wraps `next/image` with an `onError` handler. If the headshot fails to load, shows centered "HN" initials + a message pointing to `public/images/headshot.jpg`. Uses `fill`, `object-cover object-top`, and `priority` (above-the-fold).

### `LogoSVG.tsx` — server component
Inline SVG brand mark. Props: `size` (default 40), `className`. ViewBox `0 0 80 100`. Left vertical stem is charcoal (`#3c3f52`), right stem is rose (`#c9a49b`), connected by a wavy crossbar path. Used in Navbar and Footer.

### `PrintButton.tsx` — `"use client"`
Calls `window.print()` on click. Has `no-print` class so it hides itself during printing. Only used on `/resume`.

### `Footer.tsx` — server component
Dark background (`bg-charcoal-dark`). 3-column grid: brand block (col-span-5), nav links (col-span-3), connect/social links (col-span-4). Copyright year: `new Date().getFullYear()`.

---

## Data Files

All site content lives in static TypeScript files in `src/data/`. There is no database and no CMS. To add or edit content, edit these files and redeploy.

| File | Exports | Entries | Used In |
|---|---|---|---|
| `blogPosts.ts` | `BlogPost`, `blogPosts` | 3 posts | `/blog`, `/blog/[slug]`, home BlogPreview |
| `caseStudies.ts` | `CaseStudy`, `caseStudies` | 3 studies | `/portfolio`, `/portfolio/[slug]`, home CaseStudiesPreview |
| `services.ts` | `Service`, `services` | 6 services | `/services`, home ServicesPreview |
| `techStack.ts` | `Tech`, `techStack` | 30 technologies | Home TechStackSection |

### `BlogPost` shape
```ts
interface BlogPost {
  id:       string
  slug:     string        // used in URL: /blog/[slug]
  title:    string
  excerpt:  string
  body:     string[]      // lines starting with "## " → <h2>, others → <p>
  date:     string        // ISO date string, e.g. "2025-04-15"
  readTime: string        // display string, e.g. "8 min read"
  category: string
  tags:     string[]
}
```

### `CaseStudy` shape
```ts
interface CaseStudy {
  id:                 string
  slug:               string
  title:              string
  category:           string
  client:             string        // anonymized, e.g. "Fortune 500 E-Commerce"
  overview:           string
  problem:            string
  architectureIntro:  string
  architecturePoints: string[]
  results:            string[]
  technologies:       string[]
  duration:           string
  year:               number
}
```

### `Tech` shape
```ts
interface Tech {
  name:     string
  category: string   // home page groups by unique categories dynamically
}
```

### `Service` shape
```ts
interface Service {
  id:          string
  title:       string
  description: string
  features:    string[]
  icon: "pipeline" | "warehouse" | "ml" | "analytics" | "strategy" | "lead"
  // icon string is looked up in iconMap in /services/page.tsx to render inline SVG
}
```

---

## Utilities (`src/lib/`)

### `medium.ts` — Medium RSS integration

Fetches and parses the Medium RSS feed for `@HelanaBakhsh`. Called server-side from the blog page. Returns `[]` silently on any failure — the UI gracefully hides the Medium section.

```ts
export interface MediumPost {
  id:         string    // = post URL (unique)
  title:      string
  url:        string
  pubDate:    string
  categories: string[]
  excerpt:    string    // first 200 chars of stripped description
  readTime:   string
}

export async function getMediumPosts(): Promise<MediumPost[]>
```

**No XML library** — the parser uses plain regex on the raw RSS XML. This keeps the bundle light but means if Medium significantly changes their feed format, parsing could break. The fetch uses `next: { revalidate: 3600 }` for 1-hour ISR caching.

---

## Design System

All design tokens are defined in `src/app/globals.css` inside the `@theme {}` block. They become Tailwind utilities automatically — e.g. `--color-rose: #c9a49b` becomes `bg-rose`, `text-rose`, `border-rose`.

> **There is no `tailwind.config.ts`.** This is intentional for Tailwind v4. Do not create one.

### Color Palette

| Token | Hex | Used For |
|---|---|---|
| `charcoal` | `#3c3f52` | Primary text, headings, buttons |
| `charcoal-dark` | `#24273a` | Footer background, dark CTAs |
| `charcoal-light` | `#565a70` | Subtle text variants |
| `rose` | `#c9a49b` | Accent — dividers, hover states, active links |
| `rose-light` | `#dfc5be` | Soft rose accents, selection highlight |
| `rose-dark` | `#a88070` | Darker rose hover states |
| `cream` | `#f5f3ef` | Page background |
| `smoke` | `#e8e4de` | Borders, dividers |
| `mist` | `#f0ede8` | Hover backgrounds on list rows |
| `gray-mid` | `#9b9896` | Muted labels, metadata |
| `gray-warm` | `#6b6661` | Body text, secondary copy |
| `ink` | `#1e2028` | Near-black for very dark text |

### Typography

| Token | Maps To | Used For |
|---|---|---|
| `--font-sans` | DM Sans (via `--font-dm-sans`) | Body text, UI, labels, navigation |
| `--font-serif` | Cormorant Garamond (via `--font-cormorant`) | Display headings, editorial text |
| `--font-mono` | System monospace | Code snippets |

Fonts are loaded in `app/layout.tsx` via `next/font/google` and injected as CSS variables (`--font-cormorant`, `--font-dm-sans`) on `<html>`.

### Recurring Pattern: Section Eyebrow

This appears on nearly every section of the site:

```tsx
<div className="flex items-center gap-3 mb-5">
  <div className="w-8 h-px bg-rose shrink-0" />
  <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
    Section Label
  </span>
</div>
```

### Recurring Pattern: List Row Hover

```tsx
<Link className="group block border-b border-smoke py-12 hover:bg-mist -mx-6 px-6 transition-colors duration-300">
```

---

## CSS Patterns (`globals.css`)

### Logo carousel classes

The `ClientCarousel` component depends on two classes defined in `globals.css` (not Tailwind utilities):

```css
.logo-strip-outer {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.logo-strip-outer::-webkit-scrollbar { display: none; }

.logo-strip-track {
  display: flex;
  width: max-content;
  align-items: center;
  padding: 0 2rem;
}
```

### Print styles

```css
@media print {
  .no-print, header, footer { display: none !important; }
  main { padding-top: 0 !important; }
  body { background: white; font-size: 10.5pt; color: black; }
  a { color: inherit; text-decoration: none; }
  .print-break { page-break-before: always; }
}
```

---

## Key Patterns

### Server vs. Client components

Only 4 components use `"use client"`:
- **Navbar** — scroll state + mobile drawer state
- **HeadshotImage** — error/fallback state
- **PrintButton** — `window.print()` call
- **ContactPage** — form state machine

Everything else, including `ClientCarousel`, is a server component by default.

### Static generation for dynamic routes

Both `/blog/[slug]` and `/portfolio/[slug]` use `generateStaticParams()` to pre-render all pages at build time. No runtime DB calls. The only runtime data fetching is the Medium RSS feed (1-hour ISR revalidation).

### Tech stack rendering

The home page derives unique categories from `techStack` dynamically:

```ts
[...new Set(techStack.map(t => t.category))]
```

Adding a new `category` to `techStack.ts` automatically creates a new row on the home page — no template changes needed.

### Next.js 16 async params

In Next.js 15+, route params are typed as `Promise<{ slug: string }>` and must be awaited:

```ts
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // ...
}
```

Don't destructure `params` without awaiting — it'll be a Promise, not an object.

### All content is data, not code

Pages don't hard-code post titles or case study names. They import from `src/data/*.ts` and render the array. To add a blog post, add an object to `blogPosts.ts`. To add a case study, add to `caseStudies.ts`. The page templates handle rendering automatically.

---

## Blog Integration

The blog page has two data sources rendered in sequence:

| Source | How | Order | Fallback |
|---|---|---|---|
| Local posts | Import from `src/data/blogPosts.ts` | Always first | Always present |
| Medium posts | RSS fetch in `src/lib/medium.ts` | Below "From Medium" divider | Entire section hidden if fetch returns `[]` |

The fetch is server-side (the blog page is an `async` server component). It uses Next.js `fetch` with `next: { revalidate: 3600 }` — the page is cached and rebuilt every hour via ISR.

---

## Deployment

| What | Where | Details |
|---|---|---|
| Hosting | Vercel | Hobby plan. Connected to `helanan/personal_portfolio_website`. Deploys automatically on push to `main`. |
| Domain | helanan.com | Purchased on Cloudflare Registrar. DNS points to Vercel via CNAME. |
| DNS | Cloudflare | CNAME record: `@` → Vercel's assigned DNS target. **Proxy must be DNS only (grey cloud)** — not proxied (orange cloud). Proxying breaks Vercel's SSL. |
| Production branch | `main` | Merging to main triggers a production deploy and updates helanan.com. |
| Dev branch | `claude/data-engineer-portfolio-site-U59iz` | All new work goes here. PR → merge to main to go live. |

> **Cloudflare proxy reminder:** When adding or editing DNS records, make sure the CNAME for `@` has the orange cloud turned OFF (grey = "DNS only"). If the proxy is on, Vercel can't issue SSL certificates.

---

## Troubleshooting

### Build fails after pulling fresh
Run `npm install` first — `node_modules` isn't committed. Then `npm run build` to verify, `npm run dev` to preview.

### Logo backgrounds look white
The `ClientCarousel` section background is intentionally `bg-white`. This makes white logo backgrounds invisible without CSS blend modes. If you change the section to `bg-cream`, logos with white backgrounds will look wrong. Fix: keep the section white, or use logos with transparent backgrounds.

### Carousel causes input delay
The `grayscale opacity-50` CSS filters must be on the parent `.logo-strip-track` container div, not on individual `<Image>` elements. Putting filters on each image creates 20 separate GPU compositing layers (~500ms input delay). The filter on the parent creates just one compositing layer.

### Medium posts not showing on the blog page
`getMediumPosts()` returns `[]` silently on failure. Possible causes: Medium's RSS feed URL changed, the feed is temporarily unavailable, or the 1-hour ISR cache hasn't refreshed. Force a re-fetch by triggering a redeploy on Vercel, or wait for the cache to expire.

### Git push fails with "Updates were rejected"
Main branch got new commits. On the dev branch: `git fetch origin main`, then `git merge origin/main`. Resolve any conflicts (our branch's versions of component files are almost always correct — use `git checkout --ours <file>`). Run `npm run build` to confirm, then push again.

### New Tailwind color or font not working
There is no `tailwind.config.ts`. All tokens live in the `@theme {}` block in `src/app/globals.css`. Add a new color as `--color-mycolor: #hexval;` and it automatically becomes `bg-mycolor`, `text-mycolor`, etc. Do not create a `tailwind.config.ts`.

### Adding a new blog post or case study
Add an object to the relevant array in `src/data/blogPosts.ts` or `src/data/caseStudies.ts`. Give it a unique `id`, a URL-safe `slug`, and fill all required fields. For blog `body`, lines starting with `## ` render as headings, everything else as paragraphs. Run `npm run build` to confirm no TypeScript errors, then push and merge.

### The personal logo (logo.png) isn't showing in the navbar
`public/images/logo.png` exists but the navbar uses `LogoSVG`. The PNG was uploaded but its background isn't transparent, so it was reverted. Once you have a version with a transparent background (PNG with alpha channel), swap the `<LogoSVG size={30}>` in `src/components/Navbar.tsx` with a `next/image` pointing to `/images/logo.png`.

### helanan.com shows "Invalid Configuration" on Vercel
Usually a DNS propagation delay (up to 48 hours). Check Cloudflare: confirm the CNAME for `@` points to the Vercel DNS target and the proxy is DNS only (grey cloud). Also confirm there's no trailing period on the CNAME target value.
