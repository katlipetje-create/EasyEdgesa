# [COMPANY NAME] — Pools & Outdoor Living Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3. No UI libraries; the only runtime dependencies are Next and React.

---

## 1. Install & run

```bash
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL and (optionally) FORM_WEBHOOK_URL
npm run dev                    # http://localhost:3000
npm run build && npm start     # production build
```

Requires Node 18.18+ (Node 20 LTS recommended).

## 2. Replace before launch

| What | Where |
|---|---|
| Company name, phone, WhatsApp number, email, address, hours, initials | `src/data/site.ts` (one file drives the whole site) |
| Logo | `src/components/layout/Logo.tsx` (swap the text mark for `<Image src="/logo.svg" …/>`), `public/favicon.svg` |
| Photos | Drop files into `public/images/`, then update paths and alt text in `src/lib/images.ts`. Keep ~16:10 for cards, 4:3 or wider for galleries. Current images are generated plan-view placeholders. |
| Project case studies | `src/data/projects.ts` — every `[REPLACE]` challenge/solution, materials, before/after photos. **Do not publish the samples as real work.** |
| Services you don't offer | `src/data/services.ts` and `src/app/pool-renovations/page.tsx` — search for `[EDIT IF OFFERED]` and `CONFIRM` |
| Finish options | `src/components/sections/FinishExplorer.tsx` |
| About page story | `src/app/about/page.tsx` — `[REPLACE]` paragraphs |
| Legal pages | `src/app/legal/[slug]/page.tsx` — have Privacy, Terms and POPIA reviewed; add Information Officer |
| Social links | `src/data/site.ts` → `social` |
| Domain | `NEXT_PUBLIC_SITE_URL` in `.env.local` / hosting env vars (drives canonicals, sitemap, OpenGraph) |

Quick check for leftovers: `grep -rn "\[REPLACE\|\[EDIT IF\|\[COMPANY\|\[PHONE\|\[EMAIL\|\[WHATSAPP\|CONFIRM" src`

## 3. Site-visit form

`src/app/api/site-visit/route.ts` validates submissions (required fields, email, POPIA consent, honeypot).

- Set `FORM_WEBHOOK_URL` to forward submissions as JSON to Zapier, Make, a CRM or your own endpoint.
- To receive **photos** by email, plug in an email API (Resend, Postmark, SendGrid) in the route and attach the files.
- Upload limit is 4 MB total because Vercel caps request bodies at ~4.5 MB. For larger uploads, upload directly to storage (e.g. S3/Cloudinary signed uploads).

## 4. Deploy

**Important:** `package.json` must sit at the top level of your GitHub repository (next to `src` and `public`), not inside another folder.

**Vercel (recommended):** push to GitHub → import in Vercel → add `NEXT_PUBLIC_SITE_URL` and `FORM_WEBHOOK_URL` → deploy → add your domain.
**Netlify / other Node hosts:** `npm run build`, run `npm start` (Node 20). Netlify's Next.js runtime handles this automatically.

After launch: submit `https://your-domain/sitemap.xml` in Google Search Console and create/verify your Google Business Profile with the same name, phone and address as `site.ts`.

## 5. Structure

```
src/
  app/
    layout.tsx               root layout, fonts, header/footer, LocalBusiness schema
    page.tsx                 home
    pools/                   new pools
    pool-renovations/        renovations (conversion page)
    outdoor-living/          outdoor living
    services/[slug]/         resurfacing, paving & coping, repairs, braai & boma, lighting
    projects/ + [slug]/      project grid + reusable case-study template
    areas/[area]/            9 local SEO landing pages (unique copy in data/areas.ts)
    insights/ + [slug]/      editorial articles
    about/  contact/  legal/[slug]/
    api/site-visit/route.ts  form handler
    sitemap.ts  robots.ts  not-found.tsx
  components/
    layout/    Header (sticky, mobile menu), Footer, Logo, ContactActions (WhatsApp FAB + mobile CTA bar)
    ui/        Button, ArrowLink, Heading/Eyebrow, Tag, Icons, Reveal, JsonLd
    cards/     FeaturedCard, ServiceCard, ProjectCard, ArticleCard
    sections/  HomeHero, PageHero, Pillars, ProcessSteps, QuickServices, FAQAccordion, CTA (Mid/Final),
               BookSection, SiteVisitForm, DeliverTabs, FinishExplorer, BeforeAfter, Gallery, AreaLinks
  data/        site, services, projects, areas, articles, faqs
  lib/         images (photo registry), seo (metadata helper), schema (JSON-LD)
```

## 6. Design system (adapted from the reference)

- **Type:** Montserrat (via `next/font`, self-hosted, swap). H1 `clamp(44px → 80px)`, H2 `clamp(34px → 56px)`, body 16–18px / 1.75. Signature heading: bold first line + light *italic* accent line in pool blue (`<Heading title accent />`).
- **Eyebrows:** 11–12px, bold, uppercase, 0.32em tracking, pool blue.
- **Colour:** ink `#111315`, paper `#F7F7F4`, white, pool `#0F4C68` (accent only), stone `#CFC6B6`, olive `#6B775C`, line `#E3E0D7`.
- **Cards:** 20px radius, 1px warm border, white; hover = 4px lift, deeper border, soft shadow, 3% image zoom.
- **Buttons:** pill, 48px min height, uppercase tracked labels. Primary pool blue; outline; dark; light.
- **Rhythm:** sections 80 / 96 / 128px vertical padding; container max 1280px; faint 88px architectural grid behind heroes.
- **Motion:** 150–350ms, `cubic-bezier(.22,1,.36,1)`; disabled under `prefers-reduced-motion`.
- **Mobile:** full-screen menu with large centred links and hairline dividers; sticky bottom bar (Book · WhatsApp · Call) replaces the floating button so nothing covers content; 44px+ touch targets.

## 7. Performance & accessibility notes

- Static generation for every page (`generateStaticParams`, `dynamicParams = false`).
- `next/image` everywhere with `sizes`, AVIF/WebP, lazy loading below the fold, `priority` on heroes.
- FAQ uses native `<details>` (zero JS). Client JS only for header, form, tabs, finish explorer, before/after slider and reveal.
- Skip link, visible focus rings, ARIA on tabs/menu, labelled form fields, WCAG-conscious contrast.
