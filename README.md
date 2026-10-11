# Web3 Portfolio

A modern, developer-first portfolio for **Yosef Tamer**, a Web3 & Smart Contract Engineer.

Built with Next.js (App Router) and Tailwind CSS v4, featuring a sleek dark theme with neon purple/blue accents, scroll-reveal animations, and pointer-tracked spotlight cards.

## Features

- **Hero** — name, title, short bio, social links, and primary CTAs.
- **Featured Projects** — responsive card grid with tech-stack badges and `Live DApp` / `GitHub Repo` buttons.
- **Tech Stack** — categorized into Smart Contracts, Frontend & Web3, and Tools & Environment.
- **Contact** — email CTA plus social profile links.
- **Design** — dark slate/zinc theme with neon accents, animated aurora background, gradient text, glassmorphism, and full responsiveness.
- **Animations** — subtle scroll-reveal layer (IntersectionObserver) and pointer-tracked spotlight glow on cards, both respecting `prefers-reduced-motion`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/turbopack`)
- **Language:** TypeScript
- **Fonts:** Geist / Geist Mono via `next/font`
- **Icons:** Inline SVG components (zero dependencies)

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Start the production app |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
app/
  layout.tsx        # Root layout: metadata, fonts, background layers
  page.tsx          # Composes the sections
  globals.css       # Theme tokens, animations, reveal/spotlight styles
components/
  navbar.tsx
  hero.tsx
  projects.tsx
  tech-stack.tsx
  contact.tsx
  footer.tsx
  section-heading.tsx
  social-links.tsx
  reveal.tsx        # Scroll-reveal wrapper (client)
  spotlight-card.tsx# Pointer-tracked glow card (client)
  icons.tsx         # Inline SVG icons
lib/
  data.ts           # Profile, projects and tech-stack content
```

## Customizing Content

All editable content lives in [`lib/data.ts`](lib/data.ts):

- `profile` — name, title, bio, email, location, and social links
- `projects` — project title, description, tech badges, and `liveUrl` / `repoUrl`
- `techStack` — categorized technology lists

Replace the placeholder values before publishing:

- `github.com/your-handle`
- `linkedin.com/in/your-handle`
- `x.com/your-handle`
- `you@example.com`
- each project's `liveUrl` and `repoUrl` (currently `#`)

## Deploy on Vercel

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new). Import the repository and deploy — no configuration required.

## License

This project is open source and available for reference.
