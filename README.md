# فرص خضراء — Foras Khadra

An Arabic, right-to-left (RTL) landing page for **Foras Khadra**, a platform that aggregates green opportunities (grants, trainings, and competitions) for Arab youth pursuing a more sustainable future.

The project was rebuilt from a static Claude-designed HTML mockup (`Foras Khadra - Opportunities.html`) into a modular **React + TypeScript + Tailwind CSS** application powered by **Vite**.

---

## ✨ Features

- **Fully RTL Arabic UI** using the Tajawal font (loaded from Google Fonts).
- **Scroll-aware navbar** that swaps between a green logo (on light hero) and a white logo (on dark scroll state).
- **Responsive navbar** with a hamburger drawer on tablets and phones.
- **Hero section** with:
  - Animated "rise/fade" entry effects.
  - Floating leaf decorations.
  - Animated stat counters that fire when the section scrolls into view.
  - A search input that filters the opportunities below in real time.
- **Sticky filter bar** with type (`منحة` / `تدريب` / `مسابقة`) and funding (`ممول` / `غير ممول`) pills.
- **Opportunity card grid** with type/funding badges, urgent-deadline highlight, country flag, and apply CTA.
- **Empty state** when no opportunities match the active filters.
- **Dark forest-green footer** with quick links and contact info.

---

## 🧱 Tech Stack

| Layer        | Choice                              |
| ------------ | ----------------------------------- |
| Framework    | React 18                            |
| Language     | TypeScript 5                        |
| Build tool   | Vite 5                              |
| Styling      | Tailwind CSS 3 + custom theme       |
| Fonts        | juman-arabic-normal,ExpoArabic-Book            |
| Package mgr  | npm                                 |

---

## 📁 Project Structure

```
Foras-Task/
├── index.html                  # RTL/ar entrypoint, loads juman-arabic-normal,ExpoArabic-Book
├── package.json
├── vite.config.ts
├── tailwind.config.js          # Extended palette + custom keyframes
├── postcss.config.js
├── tsconfig.*.json
└── src/
    ├── main.tsx                # React entry
    ├── App.tsx                 # Composition + state (query/type/funding)
    ├── index.css               # Tailwind base
    ├── assets/                 # Logos + leaf icon (extracted from the HTML bundle)
    │   ├── logo-green.png
    │   ├── logo-white.png
    │   └── leaf.png
    ├── components/
    │   ├── Navbar.tsx          # Scroll-aware + mobile drawer
    │   ├── Hero.tsx            # Headline, stats, search, floating leaves
    │   ├── FilterBar.tsx       # Sticky type/funding pills
    │   ├── OpportunityCard.tsx # Card with badges + deadline logic
    │   ├── EmptyState.tsx
    │   └── Footer.tsx
    ├── data/
    │   └── opportunities.ts    # Opportunity[] data + TypeScript types
    ├── hooks/
    │   ├── useScrolled.ts      # window.scrollY > threshold
    │   └── useCountUp.ts       # IntersectionObserver-triggered counter
    └── lib/
        └── format.ts           # arNum, fmtDate, daysLeft helpers
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open <http://localhost:5173/>.

### Production build

```bash
npm run build
```

Output is emitted to `dist/`.

### Preview the production build

```bash
npm run preview
```

---

## 🎨 Design System

Custom theme tokens live in `tailwind.config.js`:

- **Forest greens** — `forest` (#2B6B3A), `forest-deep` (#143820), `forest-dark` (#16271C), `forest-ink` (#1B2A20).
- **Amber accents** — `amber-brand` (#E8921A), `amber-dark` (#B96D0C), `amber-soft` (#FCEEDA).
- **Sage neutrals** — `sage-50…700` for backgrounds, dividers, and muted text.
- **Custom keyframes** — `gradShift`, `riseIn`, `floaty`, `fadeUp`.

---

## 📝 Data Model

Opportunities are typed in `src/data/opportunities.ts`:

```ts
type OpportunityType = 'منحة' | 'تدريب' | 'مسابقة';
type FundingStatus = 'ممول' | 'غير ممول';

interface Opportunity {
  id: number;
  title: string;
  type: OpportunityType;
  funding: FundingStatus;
  country: string;
  flag: string;     // emoji flag
  deadline: string; // ISO date, e.g. '2026-06-28'
  desc: string;
}
```

Filtering happens client-side in `App.tsx` via `useMemo`.

---

## 🔧 Scripts

| Script            | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the Vite dev server                  |
| `npm run build`   | Type-check (`tsc -b`) and build for prod   |
| `npm run preview` | Serve the production build locally         |

---

## 📦 Asset Provenance

The logo and leaf PNGs in `src/assets/` were extracted from the original bundled HTML file (`Foras Khadra - Opportunities.html`), which embeds them as base64 in a `__bundler/manifest` script tag.

---

## 📜 License

Internal project — no license specified.
