# CLAUDE.md - Project Guide for AI Developers

This file provides context and instructions for Claude Code when working on this project.

## Project Purpose & Context

This is the official campaign website for **Mayor Diezel DePew's 2026 re-election campaign** as Mayor of Edgewater, Florida.

### About Diezel DePew
- Youngest elected official in Florida history
- Lifelong Edgewater resident and small business owner
- Current Mayor focused on flood protection, infrastructure, and smart growth
- Key achievements: $30M+ in grants, 100-year storm plan, $40M canal restoration

### Site Purpose
The site communicates Diezel's accomplishments and vision with emphasis on:
- **Flood protection and infrastructure** (the primary campaign message)
- **Smart, controlled growth**
- **Small business support**
- **Community safety improvements**

### Target Aesthetic
> **"Working River, Future City."**
> Grounded. Civic. Forward.

The site should feel like a well-designed city report, not a SaaS landing page. It's civic, local, and results-focused.

## Design Principles

### Visual Guidelines

1. **Banded layouts** - Use horizontal bands of river-navy and egret-white backgrounds stacked vertically
2. **Deep navy + egret** - Primary background colors; avoid gradients or flashy effects
3. **River motifs** - Use the WaveDivider component between sections to represent Edgewater's waterways
4. **Typography** - Cormorant Garamond for headings (civic, authoritative), Inter for body (clean, readable)
5. **Left-aligned headings** - Do not center section titles
6. **Ample whitespace** - Keep layouts calm and readable
7. **Subtle accents only** - Use dock-wood and signal-amber sparingly

### What to Avoid

- Gradients (except very subtle ones on the Get Involved section)
- "AI slop" patterns - overly generic stock imagery, rounded blobs, etc.
- Corporate/SaaS aesthetic - this is civic, not tech startup
- Centered everything - prefer left-aligned content
- Overcrowded layouts - maintain strong visual hierarchy
- Overuse of accent colors - heritage-red is for primary CTAs only

## Coding Conventions

### React
- Use functional components with TypeScript
- Use hooks for state (useState, useEffect)
- Props should be typed with interfaces
- Keep components focused and single-purpose

### Styling
- Use Tailwind CSS for all styling
- Custom colors are defined in `src/index.css` using `@theme`
- Use semantic class groupings (layout → spacing → colors → typography)
- Prefer responsive utilities (sm:, md:, lg:) over custom breakpoints

### File Structure
```
src/components/
├── Header.tsx          # Navigation
├── Hero.tsx            # Landing section
├── Accomplishments.tsx # Achievement grid
├── Infrastructure.tsx  # Flood protection focus
├── Community.tsx       # Business & safety
├── Vision.tsx          # Future priorities
├── GetInvolved.tsx     # CTAs and signup
├── Footer.tsx          # Contact info
└── WaveDivider.tsx     # Reusable river divider
```

### Accessibility
- Include proper ARIA labels on interactive elements
- Maintain good color contrast (WCAG AA)
- Ensure keyboard navigation works
- Use semantic HTML elements

## How to Modify / Extend

### Adding a New Section

1. Create a new component in `src/components/`:
   ```tsx
   export default function NewSection() {
     return (
       <section id="new-section" className="bg-egret-white py-16 lg:py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Section content */}
         </div>
       </section>
     )
   }
   ```

2. Import and add to `App.tsx` in the appropriate order

3. Add navigation link in `Header.tsx` if needed

### Adding an Endorsements Section

Good placement: Between Community and Vision sections.

Pattern to follow:
```tsx
const endorsements = [
  { name: 'Name', title: 'Title', quote: 'Quote text' },
  // ...
]
```

Use a card-based layout similar to Accomplishments section.

### Updating Content for Future Elections

1. Update year references in:
   - `index.html` (title and meta)
   - `Footer.tsx` (legal disclaimer)
   - `README.md`

2. Update accomplishments in:
   - `Hero.tsx` (stats)
   - `Accomplishments.tsx` (achievement list)
   - `Infrastructure.tsx` (timeline)

3. Update vision in:
   - `Vision.tsx` (priorities list)

### Swapping Images

Images are in `public/images/`. Reference them with absolute paths:
```tsx
<img src="/images/photo.jpg" alt="Description" />
```

The hero image placeholder is in `Hero.tsx`.

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Check code quality
npm run preview  # Preview production build
```

## Updating Documentation

When making significant changes:
1. Update this CLAUDE.md with new patterns or components
2. Update README.md with new features or structure changes
3. Keep the design principles section current

## Interaction Guidelines

When Claude is asked to modify this project:

1. **Preserve the aesthetic** - Keep the "Working River, Future City" civic design
2. **Extend, don't replace** - Build on existing patterns rather than reimplementing
3. **Maintain accessibility** - All new interactive elements need proper ARIA and focus states
4. **Follow component patterns** - New sections should match existing section structure
5. **Keep it simple** - Avoid over-engineering; this is a simple campaign site

### Example Good Requests

- "Add an Endorsements section between Community and Vision using the existing card pattern"
- "Update the timeline in Infrastructure with new 2025 milestones"
- "Add a press/news section with links to articles about the campaign"
- "Refactor GetInvolved to use a reusable Card component"

### Example Requests to Clarify

- "Make it more modern" - Ask: What specifically? Colors? Layout? Typography?
- "Add animations" - Ask: What kind? Subtle scroll effects or major transitions?
- "Update the design" - Ask: What aspects? This could change the entire aesthetic.
