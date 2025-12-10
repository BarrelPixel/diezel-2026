# Mayor Diezel DePew for Edgewater 2026

A clean, production-quality political campaign website for Mayor Diezel DePew's re-election campaign as Mayor of Edgewater, Florida (2026).

## Project Overview

This site is designed to communicate Mayor DePew's accomplishments and vision for Edgewater with a **civic, results-focused aesthetic**. The design theme is:

> **"Working River, Future City."**
> Grounded. Civic. Forward.

The site emphasizes Edgewater-specific elements (river town, working waterways, small city civic vibe) and highlights concrete accomplishments, especially flood protection and infrastructure improvements.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 4
- **Fonts:** Cormorant Garamond (headings) + Inter (body) via Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd diezel-2026

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
diezel-2026/
├── public/
│   ├── favicon.svg
│   └── images/           # Campaign photos and assets
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Sticky navigation with CTAs
│   │   ├── Hero.tsx          # Main hero section with stats
│   │   ├── Accomplishments.tsx # Four-category achievement grid
│   │   ├── Infrastructure.tsx # Flood protection spotlight
│   │   ├── Community.tsx     # Small business & safety
│   │   ├── Vision.tsx        # Future priorities
│   │   ├── GetInvolved.tsx   # Donate/Volunteer/Subscribe
│   │   ├── Footer.tsx        # Contact and legal
│   │   └── WaveDivider.tsx   # River-themed section divider
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind imports and theme
├── index.html            # HTML template with fonts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind theme (if extended)
└── tsconfig.json         # TypeScript configuration
```

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| `river-navy` | `#0B2340` | Primary background, header, footer |
| `heritage-red` | `#B3212D` | Primary CTAs (Donate), emphasis |
| `egret-white` | `#F7F4EF` | Main content background |
| `dock-wood` | `#C6A47A` | Accents, borders, subtle backgrounds |
| `lagoon-blue` | `#3B6FA6` | Secondary CTAs (Volunteer), info |
| `signal-amber` | `#F5A623` | Micro accents, icons |
| `slate-asphalt` | `#31343A` | Body text, dividers |

### Typography

- **Headings:** Cormorant Garamond (serif) - H1-H3, section titles
- **Body:** Inter (sans-serif) - Paragraphs, buttons, labels
- **Scale:** H1: 2.75-3rem, H2: 2-2.25rem, Body: 1rem

### Layout

- Max width: `max-w-7xl` (1280px)
- Horizontal bands of content (navy/egret alternating)
- 12-column grid with generous spacing
- Mobile-first responsive design

## Customization

### Updating Content

Content is stored directly in React components. To update:

- **Stats & accomplishments:** Edit `src/components/Hero.tsx` and `src/components/Accomplishments.tsx`
- **Timeline:** Edit `src/components/Infrastructure.tsx`
- **Vision priorities:** Edit `src/components/Vision.tsx`
- **Contact info:** Edit `src/components/Footer.tsx`

### Adding Images

1. Add images to `public/images/`
2. Reference them with paths like `/images/your-image.jpg`
3. Update the hero image in `src/components/Hero.tsx`

### Integrating Forms & Donations

The email signup form in `GetInvolved.tsx` currently logs to console. To integrate:

1. **Email service:** Replace the form handler with your email provider (Mailchimp, ConvertKit, etc.)
2. **Donations:** The Donate button links to the campaign's donation page. Update the `href` in `GetInvolved.tsx`

## Deployment

The site builds to static files, deployable anywhere:

```bash
npm run build
```

Output is in the `dist/` folder. Deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## License & Usage

This website is created specifically for Mayor Diezel DePew's 2026 re-election campaign for Mayor of Edgewater, Florida. It is not intended as a generic template.

---

**Paid for and approved by Mayor Diezel DePew for Mayor of Edgewater, 2026.**
