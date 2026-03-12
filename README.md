# The Daily Chronicle

A newspaper-inspired news website built with Astro, React, and Tailwind CSS. Features a classic print journalism aesthetic with modern web technologies.

**[🌐 View Live Demo](https://newsprint.vercel.app/)**

![The Daily Chronicle](newsprint-homepage.png)

## 📰 About

The Daily Chronicle is a modern news portal that embraces the timeless design principles of traditional print newspapers. With stark geometry, high-contrast typography, and editorial layouts, it delivers an authoritative and immersive reading experience.

### Design Philosophy

- **High-contrast typography**: Massive serif headlines with sharp, authoritative presence
- **Grid-based layouts**: Structured, newspaper-style content organization
- **Zero border-radius**: Sharp corners for a classic print feel
- **High information density**: Content-rich pages that maximize readability
- **Monochromatic imagery**: Grayscale images with subtle hover effects

## 🚀 Tech Stack

- **[Astro](https://astro.build/)** v6 - Static site generator for blazing fast performance
- **[Tailwind CSS](https://tailwindcss.com/)** v4 - Utility-first CSS framework
- **[React](https://react.dev/)** v19 - Component library for interactive elements
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable components
│   │   ├── sections/    # Page sections (Header, Hero, Footer, etc.)
│   │   └── ui/          # UI components (Button, Card, etc.)
│   ├── data/            # Content data (articles)
│   ├── icons/           # Custom icon components
│   ├── pages/           # Astro pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js >= 22.12.0

### Getting Started

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:4321`.

## 🎨 Features

### Sections

- **Header** - Masthead with navigation, search, and breaking news ticker
- **Hero** - Featured story with large imagery
- **Article Grid** - Category-based news grids (World, Technology, Culture)
- **Politics & Business** - Two-column editorial layout
- **Featured Story** - Full-width trending article showcase
- **Science & Health** - Inverted dark section for visual contrast
- **Sports** - Grid layout with main story and side articles
- **Newsletter** - Email subscription signup
- **Footer** - Site navigation and social links

### Content Categories

- World
- Politics
- Business
- Technology
- Science
- Health
- Culture
- Sports
- Climate

## 📝 Content

Articles are stored in `src/data/articles.ts` with TypeScript typing. Each article includes:

- Headline and excerpt
- Category and tags
- Author information
- Publication date and read time
- Featured image with caption
- Breaking/Trending flags

## 🚢 Deployment

This project is configured for easy deployment on Vercel:

```sh
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 License

MIT License - feel free to use this template for your own projects!

---

Built with ❤️ using [Astro](https://astro.build/)
