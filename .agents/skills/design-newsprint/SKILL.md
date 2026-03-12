---
name: design-newsprint
description: Apply the Newsprint design system - a newspaper-inspired aesthetic with stark geometry, high-contrast typography, sharp corners, and editorial layouts. Use when implementing or refactoring UI to have a classic print journalism look with massive serif headlines, grid-based layouts, zero border-radius, and high information density. Ideal for blogs, editorial sites, portfolios, and content-heavy applications seeking an authoritative, timeless feel.
---

# Newsprint Design System

A newspaper-inspired design system that embodies absolute clarity, hierarchy, and structure. Rejects soft shadows and rounded corners in favor of sharp geometry, high-contrast typography, and visible grid structures.

## When to Use

- Redesigning existing pages/components with newspaper aesthetic
- Creating new editorial-style features (blogs, article layouts, portfolios)
- Building content-heavy applications needing authoritative, timeless feel
- Implementing high information density layouts with dramatic typography

## Quick Start

### 1. Install Dependencies

```bash
npm install lucide-react class-variance-authority tailwind-merge
```

### 2. Copy Base CSS

Copy `assets/newsprint-base.css` to your project's styles directory and import it:

```tsx
import './styles/newsprint-base.css';
```

Or paste the CSS content directly into your global CSS file.

### 3. Apply Design Tokens

Update your Tailwind config (if using Tailwind):

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#F9F9F7',
        foreground: '#111111',
        muted: '#E5E5E0',
        accent: '#CC0000',
        border: '#111111',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Times New Roman', 'serif'],
        body: ["'Lora'", 'Georgia', 'serif'],
        sans: ["'Inter'", 'Helvetica Neue', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'Courier New', 'monospace'],
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
}
```

### 4. Reference Component Patterns

See `assets/component-patterns.tsx` for working examples of:
- Buttons (Primary, Secondary, Ghost, Link)
- Cards with hard-shadow hover
- Inputs with bottom-border style
- Newspaper grid layouts
- Drop caps typography
- Marquee tickers

## Implementation Workflow

### Step 1: Audit Current System

Before applying Newsprint:
1. Identify current tech stack (React, Vue, vanilla, etc.)
2. Check for Tailwind or other CSS framework
3. Note existing design tokens that need override
4. Review component architecture and naming conventions

### Step 2: Establish Base Styles

Apply these foundational styles first:

**Colors** (single light palette, no dark mode):
- Background: `#F9F9F7` (Newsprint Off-White)
- Foreground: `#111111` (Ink Black)
- Muted: `#E5E5E0` (Divider Grey)
- Accent: `#CC0000` (Editorial Red - use sparingly)

**Typography**:
- Headlines: `'Playfair Display'` - massive sizes (5xl to 9xl)
- Body: `'Lora'` - highly readable serif
- UI/Labels: `'Inter'` - clean sans-serif, uppercase with tracking
- Data/Metadata: `'JetBrains Mono'` - monospace

**Critical Constraint**: `border-radius: 0px` everywhere. No exceptions.

### Step 3: Implement Components

Apply Newsprint patterns to existing components:

| Component | Key Pattern |
|-----------|-------------|
| Buttons | Color inversion on hover (black ↔ white), uppercase, tracking-widest |
| Cards | Sharp borders, optional hard-shadow hover, tight padding |
| Inputs | Bottom border only, transparent bg, monospace font |
| Images | Grayscale by default, sepia on hover |
| Navigation | Uppercase, tracking-widest, red accent on hover |

### Step 4: Build Editorial Layouts

Newsprint requires specific layout patterns:

**Grid System**: Use 12-column with asymmetric splits (8/4, 5/7, not 50/50)

**Vertical Dividers**: Use `border-r` between columns to create newspaper grid feel

**Collapsed Borders**: Adjacent grid cells share borders (use `border-l` and `border-t` on container, `border-r` and `border-b` on children)

**Mandatory Bold Elements** (pick at least 3):
1. Drop caps on hero paragraphs
2. Marquee ticker for stats/breaking news
3. Edition metadata ("Vol. 1 | [Date] | New York Edition")
4. Justified text in multi-column layouts
5. Grayscale images with sepia hover
6. Ornamental dividers (✧ ✧ ✧)

### Step 5: Add Textures

Apply subtle depth through textures:

```css
/* Dot grid pattern - body background */
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23111111' fill-opacity='0.04' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

/* Halftone placeholder */
bg-[radial-gradient(#000_1px,transparent_1px)] opacity-10 [background-size:16px_16px]
```

## Responsive Strategy

**Breakpoints**:
- Mobile: `< 768px` - single column, full-width buttons
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

**Mobile Adaptations**:
1. Remove `border-r`, keep `border-b` for separators
2. Shrink headlines: `text-5xl` → `text-6xl` → `text-9xl`
3. Reduce padding: `p-16` → `p-8` → `p-6`
4. Ensure `min-h-[44px] min-w-[44px]` touch targets
5. Show hamburger menu, hide main nav

## Animation Guidelines

**Motion Philosophy**: Fast, snappy, mechanical. No bouncy easing.

```css
transition-all duration-200 ease-out
transition-colors duration-200
```

**Hover Patterns**:
- Color inversion on buttons/icons
- Hard shadow offset: `box-shadow: 4px 4px 0px 0px #111111`
- Red underline on links: `decoration-2 decoration-[#CC0000]`
- FAQ icons rotate 45° when open

## Accessibility Requirements

- Contrast ratios: Black on off-white is AAA compliant
- Focus states: `focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2`
- Semantic HTML: proper heading hierarchy, button vs div usage
- ARIA labels on icon-only buttons
- Keyboard navigation support

## Detailed Reference

See `references/design-system.md` for complete design tokens, typography scale, spacing system, and comprehensive component specifications.
