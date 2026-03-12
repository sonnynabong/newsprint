# Newsprint Design System Reference

Complete design tokens and specifications for the Newsprint aesthetic.

## Table of Contents
1. [Colors](#colors)
2. [Typography](#typography)
3. [Border & Radius](#border--radius)
4. [Shadows & Effects](#shadows--effects)
5. [Textures & Patterns](#textures--patterns)
6. [Spacing System](#spacing-system)
7. [Component Specifications](#component-specifications)
8. [Layout Patterns](#layout-patterns)

---

## Colors

**Mode:** Light only (permanent - no dark mode)

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#F9F9F7` | Newsprint Off-White - page background |
| `foreground` | `#111111` | Ink Black - text, borders, primary content |
| `muted` | `#E5E5E0` | Divider Grey - secondary borders, subtle backgrounds |
| `accent` | `#CC0000` | Editorial Red - CTAs, badges, hover states (use sparingly) |
| `border` | `#111111` | Ink Black - structural borders |

**Neutral Scale:**
| Token | Value | Usage |
|-------|-------|-------|
| `neutral-100` | `#F5F5F5` | Hover backgrounds |
| `neutral-200` | `#E5E5E5` | Image placeholders |
| `neutral-400` | `#A3A3A3` | Muted text in dark sections |
| `neutral-500` | `#737373` | Metadata, captions |
| `neutral-600` | `#525252` | Body text variations |
| `neutral-700` | `#404040` | Secondary headings |

---

## Typography

### Font Stack

```css
/* Headlines & Display */
font-family: 'Playfair Display', 'Times New Roman', serif;

/* Body Text */
font-family: 'Lora', Georgia, serif;

/* UI Elements */
font-family: 'Inter', 'Helvetica Neue', sans-serif;

/* Data & Metadata */
font-family: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Transform |
|---------|------|--------|-------------|----------------|-----------|
| H1 Hero | `text-5xl sm:text-6xl lg:text-9xl` | `font-black` | `leading-[0.9]` | `tracking-tighter` | sentence |
| H2 Section | `text-4xl lg:text-5xl` | `font-black` | `leading-tight` | `tracking-tight` | uppercase |
| H3 Card | `text-2xl lg:text-3xl` | `font-bold` | `leading-snug` | normal | sentence |
| Body | `text-sm` to `text-lg` | `font-normal` | `leading-relaxed` | normal | sentence |
| Metadata | `text-xs` | `font-medium` | `leading-normal` | `tracking-widest` | uppercase |
| Label | `text-xs` | `font-semibold` | `leading-normal` | `tracking-widest` | uppercase |

---

## Border & Radius

**Critical Rule:** Zero border radius everywhere.

```css
.sharp-corners {
  border-radius: 0px !important;
}
```

### Border Widths

| Style | Class | Usage |
|-------|-------|-------|
| Standard | `border` (1px) | Cards, containers, inputs |
| Heavy | `border-b-4` or `border-4` (4px) | Major section dividers |
| Directional | `border-r`, `border-b` | Grid cell separators |

### Border Collapse Logic

To avoid double borders in grids:

```css
/* Container */
.grid-container {
  border-left: 1px solid #111111;
  border-top: 1px solid #111111;
}

/* Children */
.grid-cell {
  border-right: 1px solid #111111;
  border-bottom: 1px solid #111111;
}

/* Remove right border on last column */
.grid-cell:last-child {
  border-right: none;
}

/* Responsive: remove vertical borders on mobile */
@media (max-width: 767px) {
  .grid-cell {
    border-right: none;
  }
}
```

---

## Shadows & Effects

**Philosophy:** Flat design. No soft drop shadows.

### Hard Offset Shadow (Hover)

```css
.hard-shadow-hover {
  transition: all 200ms ease-out;
}

.hard-shadow-hover:hover {
  box-shadow: 4px 4px 0px 0px #111111;
  transform: translate(-2px, -2px);
}
```

**No Effects:**
- No blur/backdrop-filter
- No gradient overlays
- No inner shadows (rare exceptions for decoration)

---

## Textures & Patterns

### 1. Dot Grid Pattern (Body Background)

```css
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23111111' fill-opacity='0.04' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
```

### 2. Line Grid Overlay (Section Texture)

```css
.newsprint-texture {
  position: relative;
}

.newsprint-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(0deg, transparent 98%, rgba(0,0,0,0.02) 100%),
    linear-gradient(90deg, transparent 98%, rgba(0,0,0,0.02) 100%);
  background-size: 3px 3px;
  pointer-events: none;
  opacity: 0.5;
}
```

### 3. Halftone Placeholder

```html
<div class="bg-[radial-gradient(#000_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
```

### 4. Ornamental Dividers

```html
<div class="py-8 text-center font-serif text-2xl text-neutral-400 tracking-[1em]">
  &#x2727; &#x2727; &#x2727;
</div>
```

---

## Spacing System

**Base Unit:** 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Minimal gaps |
| `space-2` | 8px | Tight spacing |
| `space-4` | 16px | Standard gaps |
| `space-6` | 24px | Comfortable gaps |
| `space-8` | 32px | Generous gaps |
| `space-16` | 64px | Section spacing |

**Section Padding:**
- Desktop: `py-16` (64px)
- Mobile: `py-12` (48px) or `py-8` (32px)

**Card Padding:**
- Standard: `p-6` (24px)
- Dense: `p-4` (16px)
- Spacious: `p-8` (32px)

---

## Component Specifications

### Buttons

**Primary:**
```tsx
<button className="
  bg-[#111111] text-[#F9F9F7] 
  border border-transparent 
  hover:bg-white hover:text-[#111111] hover:border-[#111111]
  uppercase tracking-widest text-sm font-semibold
  px-6 py-3
  transition-all duration-200
  min-h-[44px]
">
  Read More
</button>
```

**Secondary (Outline):**
```tsx
<button className="
  border border-[#111111] bg-transparent text-[#111111]
  hover:bg-[#111111] hover:text-[#F9F9F7]
  uppercase tracking-widest text-sm font-semibold
  px-6 py-3
  transition-all duration-200
  min-h-[44px]
">
  Subscribe
</button>
```

**Ghost:**
```tsx
<button className="
  hover:bg-[#E5E5E0] hover:text-[#111111]
  px-4 py-2
  transition-colors duration-200
  min-h-[44px]
">
  Cancel
</button>
```

**Link:**
```tsx
<button className="
  text-[#111111] underline-offset-4 decoration-2 decoration-[#CC0000]
  hover:underline
  transition-all duration-200
">
  Learn More
</button>
```

### Cards

**Standard Card:**
```tsx
<div className="
  border border-[#111111] 
  bg-[#F9F9F7] 
  p-6
  hard-shadow-hover
">
  {/* Content */}
</div>
```

**Grid Cell Card:**
```tsx
<div className="
  border-r border-b border-[#111111]
  bg-[#F9F9F7]
  p-6
  last:border-r-0
  md:last:border-r
">
  {/* Content */}
</div>
```

### Inputs

**Bottom Border Style:**
```tsx
<input 
  className="
    border-b-2 border-[#111111] 
    bg-transparent 
    px-3 py-2 
    font-mono text-sm
    focus-visible:bg-[#F0F0F0] 
    focus-visible:outline-none
    placeholder:text-neutral-500
  "
  placeholder="Enter your email"
/>
```

### Icons

**Standard Icon:**
```tsx
import { ArrowRight } from 'lucide-react';

<ArrowRight className="h-6 w-6 stroke-1" strokeWidth={1.5} />
```

**Icon in Bordered Box:**
```tsx
<div className="
  border border-black 
  h-12 w-12 
  flex items-center justify-center
  hover:bg-black hover:text-white
  transition-all duration-200
">
  <ArrowRight className="h-6 w-6 stroke-1" />
</div>
```

### Drop Caps

```tsx
<p className="text-body leading-relaxed">
  <span className="
    float-left 
    text-7xl 
    font-serif 
    font-black 
    leading-none 
    mr-3 mt-1
    text-[#CC0000]
  ">
    T
  </span>
  he quick brown fox jumps over the lazy dog...
</p>
```

### Marquee Ticker

```tsx
import Marquee from 'react-fast-marquee';

<div className="bg-[#111111] text-white py-3 overflow-hidden">
  <Marquee speed={40} gradient={false}>
    <span className="mx-8 font-mono text-sm uppercase tracking-widest">
      Breaking News
    </span>
    <span className="mx-8 text-[#CC0000]">&#x25A0;</span>
    <span className="mx-8 font-mono text-sm">
      Market Update: S&P 500 +1.2%
    </span>
    <span className="mx-8 text-[#CC0000]">&#x25A0;</span>
  </Marquee>
</div>
```

---

## Layout Patterns

### Container

```tsx
<div className="max-w-screen-xl mx-auto px-4">
  {/* Content */}
</div>
```

### 12-Column Grid

**Hero Split (8/4):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
  <div className="lg:col-span-8 border-r border-[#111111] p-8">
    {/* Main content */}
  </div>
  <div className="lg:col-span-4 p-8">
    {/* Sidebar */}
  </div>
</div>
```

**Asymmetric (5/7):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
  <div className="lg:col-span-5 border-r border-[#111111] p-8">
    {/* Left content */}
  </div>
  <div className="lg:col-span-7 p-8">
    {/* Right content */}
  </div>
</div>
```

**4-Column Feature Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {[1, 2, 3, 4].map((item, i) => (
    <div 
      key={i}
      className="
        border-r border-b border-[#111111] 
        p-6
        last:border-r-0
        md:[&:nth-child(2)]:border-r-0
        md:[&:nth-child(4)]:border-r-0
        lg:[&:nth-child(2)]:border-r
      "
    >
      {/* Feature content */}
    </div>
  ))}
</div>
```

### Inverted Section

```tsx
<section className="bg-[#111111] text-white py-16">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-4xl font-serif font-black uppercase tracking-tight">
      How It Works
    </h2>
    {/* Content with red (#CC0000) accents for numbers/highlights */}
  </div>
</section>
```

### Edition Metadata

**Header:**
```tsx
<div className="border-b border-[#111111] py-2">
  <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
    <span className="font-mono text-xs uppercase tracking-widest">
      Vol. 1 | March 13, 2026 | New York Edition
    </span>
    <span className="font-mono text-xs uppercase tracking-widest">
      Price: Free
    </span>
  </div>
</div>
```

**Footer:**
```tsx
<div className="border-t border-[#111111] py-4 text-center">
  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
    Edition: Vol 1.0 | Printed in NYC | All Rights Reserved
  </span>
</div>
```

---

## Accessibility Checklist

- [ ] Contrast ratios meet WCAG 2.1 AA (black on off-white is AAA)
- [ ] Focus visible states on all interactive elements
- [ ] Keyboard navigation support
- [ ] Semantic HTML (proper heading hierarchy)
- [ ] ARIA labels on icon-only buttons
- [ ] Alt text on all images
- [ ] Touch targets minimum 44x44px
- [ ] Reduced motion support (respect `prefers-reduced-motion`)
