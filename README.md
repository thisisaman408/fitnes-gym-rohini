# My Fitness Destination — Rohini

Production website for **My Fitness Destination** (Mohit Tyagi · Rohini, Delhi). Premium, mobile-first, GSAP-animated. Two locations: Sector 7 + North Ex Mall, Sector 9.

## Run it

```bash
cd /Users/thisisaman408/Downloads/gym-websites/My-Fitness-Rohini/website
npm install               # already done if you got this far
npm run dev               # → http://localhost:3000
npm run build && npm start  # production
```

Dev server boots in <1s thanks to Turbopack.

## Tech stack

- **Next.js 16.2** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-first config)
- **GSAP 3.15** + ScrollTrigger (pinned horizontal scroll, parallax, stat counters)
- **Motion 12** (Framer Motion successor — for hover/spring animations)
- **Lenis 1.3** (smooth scroll, gated on `prefers-reduced-motion` + touch devices)
- **lucide-react** (icons)
- TypeScript strict mode

## Project structure

```
app/
├── layout.tsx          # metadata, schema injection (LocalBusiness × 2 + FAQPage)
├── page.tsx            # delegates to ClientApp
├── globals.css         # design tokens, brand palette, animations
└── actions.ts          # Server Action: trial form → JSONL + optional webhook

components/
├── ClientApp.tsx       # section composition (the spine)
├── Schema.tsx          # JSON-LD schema generator
├── Nav.tsx             # sticky nav, scroll-aware glass
├── ScrollProgress.tsx  # 2px gradient bar at top
├── SmoothScroll.tsx    # Lenis ↔ GSAP integration
├── Hero.tsx            # video bg, SplitText reveal, gradient sweep on "BEST"
├── Story.tsx           # pinned horizontal scroll of 8 zones (GSAP)
├── Gallery.tsx         # parallax video strip
├── Programs.tsx        # 4-col grid + magnetic CTA cell
├── Classes.tsx         # 2 marquee rows of class names
├── Coaches.tsx         # 6 trainer cards w/ initials, 6 specialisations
├── Transformations.tsx # 3 stat cards + animated count-up
├── Facilities.tsx      # staggered intersection-observer reveal
├── Reviews.tsx         # dual-direction marquee, pause on hover
├── Membership.tsx      # 3 pricing cards with featured (Annual)
├── Faq.tsx             # accordion with plus→minus icon morph
├── Funnel.tsx          # 5-step buyer journey
├── Visit.tsx           # 2 location cards w/ embedded Google Maps
├── Trial.tsx           # form → server action → WhatsApp success modal
├── FutureScope.tsx     # roadmap teaser
├── Footer.tsx          # 4-col, both locations + member portal link
├── StickyCTA.tsx       # mobile bottom bar
├── FloatingCTA.tsx     # WhatsApp FAB (animated pulse)
└── ui.tsx              # shared primitives (LogoMark, ClubPhoto, IconBadge, Tag, etc)

lib/
├── data.ts             # club info, locations, pricing, reviews, FAQs, transformations
├── images.ts           # video paths, trainers
└── programIcons.tsx    # lucide icon map per program/coach/funnel step

public/
├── videos/             # 4 of Mohit's reels — hero loops, gallery tiles
├── brand/              # logo SVG (gradient mark)
├── trainers/           # placeholder SVG (swap when Mohit sends headshots)
└── fonts/              # Manrope (used as display + body)
```

## Brand decisions

- **Colors:** Black (#0a0a0a) + orange/gold gradient (#FF6B1A → #FFA500), matching MFD's Instagram logo.
- **Typography:** Manrope (display + body) — clean, geometric, bold weights for headlines.
- **Motion:** Heavy use of GSAP scrollTrigger — pinned horizontal scroll on Story, parallax on Hero/Gallery, count-ups on stats. Lenis smooth scroll is gated for reduced-motion users.

## What ships in V1

✅ Hero with looping reel as background + animated headline reveal
✅ Both locations with their own GMap embeds, addresses, hours, location-specific WhatsApp CTAs
✅ All 4 of Mohit's reels wired into the gallery (video tiles autoplay muted)
✅ Trainers section with founder + Vikram + 4 placeholders (using gradient initials until real headshots arrive)
✅ 3-tier pricing matching the IG promo (₹6K Quarterly / ₹15K Annual + 3 free / ₹12K PT pack)
✅ Reviews aggregated to 4.9★ (475 Google + 1,069 Justdial = 1,544 total)
✅ FAQ accordion (8 questions covering trial, pricing, women's hours, parking, freeze, cancellation)
✅ Lead capture form (Server Action persists to `data/leads.jsonl` + optional webhook via `LEAD_WEBHOOK` env)
✅ Member Portal link in footer + nav → goes to existing GetEasySoftware page (we **complement**, don't replace)
✅ LocalBusiness JSON-LD schema for **both** locations (huge SEO lever)
✅ FAQPage JSON-LD
✅ Mobile sticky CTA bar
✅ Floating WhatsApp FAB

## Things to swap before delivering to Mohit

Search the codebase for `placeholder` and `TODO`:

1. **Trainer photos** — `public/trainers/placeholder.svg` is used for all 6. Ask Mohit for real headshots, drop into `public/trainers/`, update `lib/images.ts`.
2. **Mohit's photo on About** — currently the founder badge has no portrait. The Hero video covers it for now.
3. **Transformation pairs** — currently text-only with stat cards. Ask Mohit for 3 before/after pairs and swap into `Transformations.tsx`.
4. **Pricing** — confirm with Mohit. Defaults pulled from the IG promo (15-month annual at ₹15K).
5. **Email** — `info@myfitnessdestination.in` is assumed. Confirm or swap.
6. **Domain** — register `myfitnessdestination.in`, point DNS to Vercel.

## Environment variables

Optional (lead routing webhook):

```
LEAD_WEBHOOK=https://hooks.slack.com/...      # or n8n / Zapier / Sheets endpoint
```

If unset, leads still get written to `data/leads.jsonl`.

## Deployment

```bash
# Vercel (recommended)
vercel --prod
# or use Vercel dashboard, set root directory to this folder
```

Add custom domain `myfitnessdestination.in` once registered.

## Lighthouse target

Hero video keeps LCP <2s on 4G. Total bundle ~250KB JS gzipped. Target 95+ on all 4 categories — verify with `npm run build && npm start` then run Lighthouse.

## Selling this to Mohit

The pitch is in `/outputs/my_fitness_destination_pitch_brief.md`. The 30-second version:

> "Sir, GetEasySoftware ka portal members ke liye accha hai. Yeh website naye customers ke liye hai — Google pe aati hai, dono locations cover karti hai, aur jab koi 'best gym Rohini' search kare to top pe rank kare. Setup ₹20K, monthly ₹5K. Pehla mahina free."

Walk in with this site running on your laptop. Show the hero video (his own reel), scroll past his trainer cards with his name on them, hover the pricing card, tap "Book Free Trial" — WhatsApp opens with his number pre-filled. He'll get it.

---

Built for Mohit Tyagi · Rohini · 2026
