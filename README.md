```text
  _____ _            ____        _ _          ____ _                     _ 
 |_   _| |__   ___  |  _ \  __ _(_) |_   _   / ___| |__  _ __ ___  _ __ (_)
   | | | '_ \ / _ \ | | | |/ _` | | | | | | | |   | '_ \| '__/ _ \| '_ \| |
   | | | | | |  __/ | |_| | (_| | | | |_| | | |___| | | | | | (_) | | | | |
   |_| |_| |_|\___| |____/ \__,_|_|_|\__, |  \____|_| |_|_|  \___/|_| |_|_|
   ___| | ___  ___                   |___/
  / __| |/ _ \/ __|
 | (__| |  __/\__ \
  \___|_|\___||___/
```

# The Daily Chronicle

> A newspaper-inspired news website with classic print journalism aesthetics

**[🌐 View Live Demo](https://newsprint.vercel.app/)**

---

## 📰 About

The Daily Chronicle is a modern news portal that embraces the timeless design principles of traditional print newspapers. With stark geometry, high-contrast typography, and editorial layouts, it delivers an authoritative and immersive reading experience.

### Design Philosophy

```
┌─────────────────────────────────────────────────────────────────┐
│  • High-contrast typography  │  Massive serif headlines          │
│  • Grid-based layouts        │  Structured content organization  │
│  • Zero border-radius        │  Sharp, classic print feel        │
│  • High info density         │  Content-rich, readable pages     │
│  • Monochromatic imagery     │  Grayscale with subtle effects    │
└─────────────────────────────────────────────────────────────────┘
```

## 🚀 Tech Stack

```
    ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
    │    Astro    │      │   Tailwind  │      │    React    │
    │    v6.0     │  +   │    CSS v4   │  +   │    v19      │
    │             │      │             │      │             │
    │  ████████   │      │   ██████    │      │   ⚛  ⚛      │
    │  ██    ██   │      │  ██    ██   │      │    ⚛⚛       │
    │  ████████   │      │  █████████  │      │   ⚛  ⚛      │
    └─────────────┘      └─────────────┘      └─────────────┘
```

- **[Astro](https://astro.build/)** v6 - Static site generator for blazing fast performance
- **[Tailwind CSS](https://tailwindcss.com/)** v4 - Utility-first CSS framework
- **[React](https://react.dev/)** v19 - Component library for interactive elements
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
newsprint/
├── 📂 public/              # Static assets (images, fonts)
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 sections/    # Header, Hero, Footer, etc.
│   │   └── 📂 ui/          # Button, Card, etc.
│   ├── 📂 data/            # Content data
│   ├── 📂 icons/           # Custom icons
│   ├── 📂 pages/           # Astro pages
│   └── 📂 styles/          # Global styles
├── ⚙️ astro.config.mjs     # Astro configuration
└── 📦 package.json
```

## 🛠️ Development

### Prerequisites

```
┌────────────────────────────────────┐
│  Node.js >= 22.12.0  ✓            │
│  npm or yarn or pnpm  ✓           │
└────────────────────────────────────┘
```

### Getting Started

```sh
# 📥 Install dependencies
npm install

# 🚀 Start development server
npm run dev

# 📦 Build for production
npm run build

# 👀 Preview production build
npm run preview
```

The development server starts at `http://localhost:4321`

## 🎨 Features

```
┌─────────────────────────────────────────────────────────────┐
│                        PAGE SECTIONS                        │
├─────────────────────────────────────────────────────────────┤
│  📰 Header          │  Masthead, nav, breaking news ticker   │
│  ⭐ Hero            │  Featured story with large imagery     │
│  🌍 Article Grid    │  Category-based news grids             │
│  🏛️ Politics        │  Two-column editorial layout           │
│  💼 Business        │  Side-by-side with Politics            │
│  ✨ Featured Story  │  Full-width trending article           │
│  🔬 Science/Health  │  Inverted dark section                 │
│  ⚽ Sports          │  Grid layout with main + side stories  │
│  📧 Newsletter      │  Email subscription signup             │
│  🦶 Footer          │  Site navigation & social links        │
└─────────────────────────────────────────────────────────────┘
```

### Content Categories

```
    ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
    │  WORLD   │  │ POLITICS │  │ BUSINESS │  │TECHNOLOGY│
    └──────────┘  └──────────┘  └──────────┘  └──────────┘
    
    ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
    │ SCIENCE  │  │  HEALTH  │  │ CULTURE  │  │  SPORTS  │
    └──────────┘  └──────────┘  └──────────┘  └──────────┘
    
    ┌──────────┐
    │ CLIMATE  │
    └──────────┘
```

## 📝 Content

Articles are stored in `src/data/articles.ts` with TypeScript typing:

```typescript
interface Article {
  id: number;
  headline: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  breaking?: boolean;
  trending?: boolean;
}
```

## 🚢 Deployment

Deploy to Vercel in seconds:

```sh
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

```
---

*Made with chaos and caffeine.*

---

## 📬 Contact

```text
   _____                      _   _       _                     
  / ____|                    | \ | |     | |                    
 | (___   ___  _ __  _ __  _ |  \| | __ _| |__   ___  _ __   __ _ 
  \___ \ / _ \| '_ \| '_ \| | | . ` |/ _` | '_ \ / _ \| '_ \ / _` |
  ____) | (_) | | | | | | | | | |\  | (_| | |_) | (_) | | | | (_| |
 |_____/ \___/|_| |_|_| |_|_| |_| \_|\__,_|_.__/ \___/|_| |_|\__, |
                                                              __/ |
                                                             |___/ 
```

**Site:** [sonnynabong.dev](https://sonnynabong.dev)  
**Email:** [info@sonnynabong.dev](mailto:info@sonnynabong.dev)
```

## 📄 License

MIT License - feel free to use this template for your own projects!
