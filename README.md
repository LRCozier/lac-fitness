<h1 align="center">L.A.C. Fitness — Strength & Hybrid Coaching</h1>
<p align="center">Next.js 16 • React • TypeScript • App Router • Hygraph CMS • Vercel</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge&color=1d4ed8" />
  <img src="https://img.shields.io/badge/Framework-Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Styling-SCSS-cc6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/CMS-Hygraph-000000?style=for-the-badge&logo=graphql&logoColor=e10098" />
  <img src="https://img.shields.io/badge/Hosting-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

A server-rendered marketing site for a CIMSPA-registered personal training business in
Kingston Upon Thames. Migrated from a Vue 3 SPA to Next.js 16 with the App Router, taking
the opportunity to move data fetching and secret handling server-side, fold a separate
Express backend into Route Handlers, and rebuild the visual language around an editorial
cobalt/navy system.

**Live site:** https://lacfitness.com
**Previous version:** [LRCozier/fitnesssite](https://github.com/LRCozier/fitnesssite) (Vue 3 + Vite)

---

## Why the migration

The Vue SPA worked, but three problems were structural rather than cosmetic:

| Problem | Cause | Resolution |
|---|---|---|
| CMS token exposed in the client bundle | `VITE_`-prefixed vars are public by definition | Fetching moved to Server Components; `import 'server-only'` makes client import a build error |
| Crawlers received an empty `<div id="app">` | Client-side rendering with no SSR | Server Components emit real HTML with content already in it |
| Two deployables, CORS between them | Vite SPA on Pages + Express server elsewhere | Express folded into `app/api/*` Route Handlers — one repo, one deploy, same origin |

---

## Key features

| Feature | Summary |
|---|---|
| **Server Components** | Pages fetch CMS data on the server; no loading states, no client-side waterfall |
| **ISR** | `revalidate = 3600` — CMS edits appear within the hour without a redeploy |
| **Graceful CMS degradation** | Every query is wrapped; on failure the site serves local fallback content and logs a warning. Pages always render |
| **Secret isolation** | `server-only` on every module touching a token; the build fails if one is imported client-side |
| **No-flash theming** | A blocking inline script sets `data-theme` before first paint; light/dark with no FOUC |
| **Contact pipeline** | Zod validation → reCAPTCHA v2 verification → HTML-escaped email via nodemailer |
| **Structured data** | `LocalBusiness` JSON-LD with verifiable accreditation, address, and opening hours |
| **Generated SEO files** | `sitemap.xml` and `robots.txt` from typed exports, not static files |
| **Accessibility** | Working skip link, `aria-controls` targets that stay mounted, honest ARIA roles, reduced-motion support |

---

## Tech stack

- **Next.js 16** (App Router, Turbopack, React Server Components)
- **TypeScript** — discriminated unions for polymorphic components
- **SCSS** — global, token-driven; no CSS-in-JS, no utility framework
- **Hygraph** (GraphQL CMS) via `graphql-request`
- **Zod** — shared request validation
- **Nodemailer** — Gmail SMTP with app-password auth
- **react-google-recaptcha** — reCAPTCHA v2 checkbox
- **lucide-react** + **@icons-pack/react-simple-icons** — UI and brand icons
- **Vercel** — hosting, ISR, edge caching, firewall

---

## Project structure

```
lac-fitness/
├── app/
│   ├── layout.tsx              # Fonts, metadata, no-flash script, providers
│   ├── page.tsx                # Homepage (Server Component)
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # Generates /sitemap.xml
│   ├── robots.ts               # Generates /robots.txt
│   ├── about|services|testimonials|faq|contact|terms/
│   └── api/
│       ├── contact/route.ts    # Validate → verify captcha → send
│       ├── services/route.ts
│       └── testimonials/route.ts
├── components/
│   ├── ContactForm.tsx
│   ├── JsonLd.tsx              # LocalBusiness structured data
│   ├── layout/                 # AppNavbar, AppFooter
│   └── ui/                     # Buttons, forms, cards, sections
├── lib/
│   ├── constants.ts            # Site config, nav, contact details
│   ├── fallbacks.ts            # Content served when the CMS is unreachable
│   ├── faqs.ts
│   ├── types.ts
│   ├── theme-context.tsx
│   └── server/                 # 'server-only' — never reaches the browser
│       ├── hygraph.ts
│       ├── contact.schema.ts
│       ├── recaptcha.ts
│       └── email.ts
├── styles/                     # variables · base · layout · components · pages
├── public/images/
└── next.config.ts
```

---

## Architectural notes

### Server/client boundary

Every module under `lib/server/` opens with `import 'server-only'`. That package does
nothing at runtime — its purpose is to **fail the build** if a client component imports it,
even transitively. `HYGRAPH_TOKEN` and `RECAPTCHA_SECRET` are structurally incapable of
reaching a browser, rather than merely conventionally kept out of it.

### The theme, and why it needs a blocking script

The Vue SPA painted nothing until JS booted, so `data-theme` was always set before the
first pixel. Next sends HTML first, so without intervention every light-mode visitor sees a
dark flash. A small inline script in `<head>` reads `localStorage`, falls back to
`prefers-color-scheme`, and sets the attribute pre-paint. It cannot be `next/script` —
deferring is precisely the bug.

Theme-dependent imagery is selected in CSS off `[data-theme]` rather than inline styles,
which avoids a hydration mismatch and removes JavaScript from the path entirely.

### Surfaces that stay dark in both themes

The hero and the approach band are navy regardless of theme. Accent colours on those
surfaces use a locked `--color-accent-on-dark` token rather than `--color-accent`, which
would follow the theme and go illegible in light mode.

### Fallback content is a feature

`getServices()` and `getAllTestimonials()` catch failures and return `lib/fallbacks.ts`.
The CMS being misconfigured, rate-limited, or unreachable degrades to slightly stale
content rather than a broken page. The site runs fully with the Hygraph variables unset.

---

## Environment variables

Create `.env.local` in the project root:

```bash
# Public — inlined into the client bundle (site keys are designed to be public)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Server only
RECAPTCHA_SECRET=
EMAIL_USER=                  # Gmail address
EMAIL_PASS=                  # 16-char App Password, NOT the account password

# Optional — omit to run on lib/fallbacks.ts
HYGRAPH_URL=
HYGRAPH_TOKEN=
```

> **The `NEXT_PUBLIC_` prefix is not decoration.** Anything carrying it is inlined into the
> JavaScript bundle and readable in devtools. Only the reCAPTCHA *site* key belongs there.
> This is exactly how `VITE_HYGRAPH_TOKEN` leaked in the previous version.

`EMAIL_PASS` requires 2FA enabled and an App Password generated at
`myaccount.google.com/apppasswords`.

reCAPTCHA must be **v2 "I'm not a robot" checkbox** — v3 and Enterprise keys throw
*"Invalid key type"*. Register `localhost`, the `*.vercel.app` preview domain, and
`lacfitness.com` under Domains.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build — the real gate
```

> Environment variables are read at boot. After editing `.env.local`, stop and restart the
> dev server — Fast Refresh will keep serving the old values.

---

## Deployment

Vercel deploys automatically on push to `main`; other branches get preview URLs.

1. Import the repository at vercel.com — Next.js is detected, no build config needed
2. Add environment variables (Production, Preview, and Development)
3. Add the generated `*.vercel.app` domain to the reCAPTCHA allowlist
4. Add a Firewall rate-limit rule on `/api/contact`
5. Point DNS at Vercel, then retire the previous deployment

### On rate limiting

`app/api/contact/route.ts` includes an in-memory limiter, and its comments are explicit
that it is a stopgap: the map resets on cold start and cannot see sibling instances. It
stops a naive flood against a warm lambda and nothing more. The real controls are reCAPTCHA
and a platform-level rule. `express-rate-limit` had the same limitation in the previous
version — it merely looked more official.

---

## Case sensitivity

macOS is case-insensitive; Vercel's Linux builders are not. An import whose casing differs
from the file on disk resolves locally and fails in CI.

`forceConsistentCasingInFileNames` is enabled in `tsconfig.json` so TypeScript flags these
in the editor rather than in a deploy log. Note that `git mv` cannot perform a case-only
rename on macOS in one step — rename via a temporary filename, and set
`git config core.ignorecase false` first.

---

## Accessibility

- Skip link that is genuinely visible on focus (the Vue version applied `.sr-only`, hiding it permanently)
- Accordion and mobile-menu panels use `hidden` rather than conditional rendering, so `aria-controls` always resolves to a real element
- Testimonial filters are a `role="group"` of toggle buttons, not a mislabelled tablist
- Focus-visible outlines throughout; `prefers-reduced-motion` honoured at the token level
- FAQ answers are typed as `ReactNode`, removing `dangerouslySetInnerHTML` and its regex "sanitiser" entirely

---

## Content management

Services and testimonials are edited in Hygraph — no code changes, no redeploy. Field names
must match the queries in `lib/server/hygraph.ts` exactly:

**Service** — `title` · `price` · `description` · `features[]` · `ctaText` · `duration` · `intensity` · `recommendedFor[]`

**Testimonial** — `clientName` · `location` · `testimonialText` · `rating` (Int) · `category` · `featured` · `metric?`

`features` and `recommendedFor` must be **list** fields. Built as single-line text they
return a string, and mapping over a string iterates characters.

---

## Roadmap

- [ ] Photography for service cards and the approach mosaic (styles are in place and waiting)
- [ ] Blog via Hygraph
- [ ] Per-page OpenGraph images
- [ ] Lighthouse CI
- [ ] Booking integration

---

## License

Proprietary. Created for L.A.C. Fitness. Reproduction, redistribution, or resale prohibited
without permission.