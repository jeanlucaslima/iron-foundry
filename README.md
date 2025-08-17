# Iron Foundry 🏭

A powerful, industrial-themed Astro template for static websites. Built with performance, accessibility, and developer experience in mind.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

## ✨ Features

### 🎨 **Industrial Design System**
- **Blueprint Theme** - Technical drawing aesthetics with industrial blues
- **Dark Theme** - Deep grays and steels with orange rust accents
- **Light Theme** - Clean whites with industrial gray borders
- Custom industrial components (rivets, steel panels, gears, blueprints)
- Comprehensive icon library with custom foundry iconography

### 🌍 **Multi-language Support**
- English (default), French, and Portuguese
- Dynamic routing for localized URLs
- Language switcher with flag icons
- Translated content files and UI strings

### 📝 **Content Management**
- Full blog system with categories, tags, and pagination
- Release notes for product changelogs
- Markdown/MDX support with rich content features
- Auto-generated table of contents
- Reading time estimation
- **Shiki code highlighting** with industrial themes
- **Notion-style TOC** with hover-expandable navigation

### 🧩 **UI Components**
- **Cards** - Steel panel styling with riveted corners
- **Badges** - Industrial label designs
- **Avatars** - Circular with industrial border treatments
- **Tooltips** - Factory callout box styling
- **Tables** - Blueprint-style with technical drawing borders
- **Toasts** - Industrial alert notifications
- **Tabs** - Machinery panel aesthetic
- **Progress Bars** - Foundry loading with molten metal effects
- **Hover Cards** - Expandable panels with blueprint details

### ⚡ **Performance & Technical**
- **Core Web Vitals Optimized** - Lazy loading, critical CSS, resource optimization
- **PWA Ready** - Service worker, offline support, desktop installation
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Auto-generated social media previews** with industrial theming
- XML sitemaps and RSS feeds
- WebP/AVIF image format support

### ♿ **Accessibility First**
- **WCAG 2.1 AA compliant** - Full keyboard navigation and screen reader support
- **Reduced motion support** - Respects `prefers-reduced-motion` preferences
- **High contrast mode** - Enhanced industrial styling for accessibility
- **Color-blind friendly** - Sufficient contrast ratios throughout
- **Motion controls** - User preference settings for animation intensity

### 🎬 **Animations & Interactions**
- **Exaggerated page transitions** - Industrial machinery-inspired effects
- **Animated menu** - Hydraulic-inspired open/close with gear rotations
- **Micro-animations** - Button presses, hover states, loading spinners
- **Environment indicator** - Footer badge showing live/test/dev status
- **Smart TOC navigation** - Desktop hover sidebar, mobile top bar

### 🔧 **Developer Experience**
- **TypeScript support** throughout
- **Component playground** and style guide generation
- **Icon documentation** with visual library
- **Site configuration tool** for easy setup
- **Environment detection** and multi-environment configs
- **Automated testing** and code linting setup

### 📊 **Analytics & Monitoring**
- Google Analytics 4 integration
- Custom event tracking for CTAs
- Performance monitoring
- Privacy-compliant cookie consent
- Real User Monitoring (RUM) support

### 🔗 **Integrations**
- Social media feed embedding
- Headless CMS support
- Webhook integration for content updates
- External API consumption examples

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/iron-foundry.git
   cd iron-foundry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Configure your site**
   Edit `src/config.ts` to customize:
   - Site metadata (title, description, author)
   - Available themes and languages
   - Social media links
   - Environment settings

## 📁 Project Structure

```
iron-foundry/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Hero, Features, About, etc.
│   │   ├── ui/             # Cards, Buttons, Badges, etc.
│   │   ├── industrial/     # Rivets, Steel Panels, Gears
│   │   └── icons/          # Icon components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   ├── styles/             # Global CSS and components
│   └── utils/              # Helper functions and constants
├── public/                 # Static assets
└── src/styles/globals.css  # Tailwind configuration with @theme
```

## 🎨 Themes

Iron Foundry comes with three built-in themes:

- **Blueprint** - Industrial blue tones with technical drawing aesthetics
- **Dark** - Deep grays and steels with orange rust accents
- **Light** - Clean whites with industrial gray borders

Switch themes using the theme toggle or configure your preferred default in the site configuration.

## 🌍 Internationalization

Supports three languages out of the box:
- **English** (default)
- **French**
- **Portuguese**

Add your content in `src/content/[lang]/` and the site will automatically generate localized routes.

## ♿ Accessibility

Iron Foundry prioritizes accessibility with:
- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader optimization
- High contrast mode
- Reduced motion preferences
- Color-blind friendly palette

## 🏗️ Customization

### Adding Custom Industrial Elements

```astro
---
// components/industrial/CustomGear.astro
---
<div class="gear-container">
  <svg class="rotating-gear">
    <!-- Your custom gear SVG -->
  </svg>
</div>
```

### Theme Customization

Modify `src/styles/globals.css` to customize the industrial color palette using the new `@theme` directive:

```css
@import "tailwindcss";

@theme {
  /* Industrial color palette */
  --color-steel-50: #f8fafc;
  --color-steel-500: #64748b;
  --color-steel-900: #0f172a;

  --color-iron-50: #f1f5f9;
  --color-iron-500: #475569;
  --color-iron-900: #1e293b;

  --color-rust-50: #fff7ed;
  --color-rust-500: #f97316;
  --color-rust-900: #9a3412;

  --color-blueprint-50: #eff6ff;
  --color-blueprint-500: #3b82f6;
  --color-blueprint-900: #1e3a8a;

  /* Industrial fonts */
  --font-industrial: "JetBrains Mono", monospace;
  --font-technical: "Inter", system-ui, sans-serif;

  /* Custom animations */
  --animate-gear-rotate: spin 10s linear infinite;
}

/* Theme variants */
.dark {
  --color-steel-50: #0f172a;
  --color-steel-900: #f8fafc;
}

[data-theme="blueprint"] {
  --color-primary: var(--color-blueprint-500);
}
```

## 🔧 Configuration

Create or modify `src/config.ts`:

```typescript
export const SITE_CONFIG = {
  title: "Your Site Title",
  description: "Your site description",
  author: "Your Name",
  defaultTheme: "blueprint",
  defaultLanguage: "en",
  availableLanguages: ["en", "fr", "pt"],
  availableThemes: ["blueprint", "dark", "light"],
  environment: process.env.NODE_ENV || "development"
};
```

## 📝 Adding Content

### Blog Posts

Create Markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
publishDate: "2024-01-01"
tags: ["astro", "industrial", "web-development"]
---

Your content here...
```

### Release Notes

Add changelog entries in `src/content/releases/`:

```markdown
---
version: "1.0.0"
releaseDate: "2024-01-01"
type: "major"
---

## New Features
- Feature 1
- Feature 2

## Bug Fixes
- Fix 1
- Fix 2
```

## 🚀 Deployment

Iron Foundry works with all major static site hosting platforms:

- **Vercel** - Zero-config deployment
- **Netlify** - Drag and drop or Git integration
- **GitHub Pages** - Free hosting for open source
- **Cloudflare Pages** - Global edge deployment

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏭 About Iron Foundry

Iron Foundry combines the raw power of industrial design with modern web development practices. Whether you're building a developer portfolio, product landing page, or technical blog, Iron Foundry provides the tools and aesthetic to create something truly distinctive.

Built with ❤️ using [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and industrial-strength engineering principles.

---

**[View Demo](https://iron-foundry-demo.vercel.app)** • **[Documentation](https://iron-foundry.dev)** • **[Report Bug](https://github.com/yourusername/iron-foundry/issues)**