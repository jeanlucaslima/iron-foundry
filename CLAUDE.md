# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Project Architecture

Iron Foundry is an Astro-based static site template with an industrial design theme. The project is in early development phase with basic Astro structure in place.

### Technology Stack
- **Astro 5.13.2** - Static site generator with component islands architecture
- **Tailwind CSS 4.1.12** - Utility-first CSS framework with `@theme` directive support
- **TypeScript** - Type safety throughout the codebase
- **Vite** - Build tool and development server

### Current Project Structure
```
src/
├── pages/           # Route pages (currently basic index.astro)
└── styles/          # Global CSS with Tailwind imports
```

### Planned Architecture (from TODO.md and README.md)

The project aims to implement a comprehensive industrial-themed template with:

**Multi-language Support**
- English, French, and Portuguese
- Dynamic routing with `/en/`, `/fr/`, `/pt/` prefixes
- Localized content in `src/content/[lang]/` structure

**Theme System**
- Blueprint, Dark, and Light themes
- Industrial color palette with steels, irons, rust, and blueprint colors
- Theme persistence and system preference detection

**Content Management**
- Blog system with categories, tags, pagination
- Release notes for product changelogs  
- Markdown/MDX support with Shiki code highlighting
- Auto-generated table of contents

**Component Library Structure**
- `src/components/layout/` - Header, Footer, Navigation
- `src/components/sections/` - Hero, Features, About sections
- `src/components/ui/` - Cards, Buttons, Badges, Tables, Toasts
- `src/components/industrial/` - Rivets, Steel Panels, Gears, Blueprint elements
- `src/components/icons/` - Icon components

**Configuration**
- Centralized site config in `src/config.ts`
- Multi-environment settings (dev/test/prod)
- Theme and language preferences

### Styling Approach

Uses Tailwind CSS 4+ with the new `@theme` directive for defining custom design tokens:

```css
@theme {
  --color-steel-*: /* Industrial steel colors */
  --color-iron-*: /* Iron color variants */
  --color-rust-*: /* Rust accent colors */
  --color-blueprint-*: /* Blueprint theme colors */
  --font-industrial: "JetBrains Mono", monospace;
  --font-technical: "Inter", system-ui, sans-serif;
}
```

### Key Features to Implement

1. **Accessibility First** - WCAG 2.1 AA compliance with keyboard navigation, screen reader support, and reduced motion preferences
2. **Performance Optimized** - Core Web Vitals optimization, lazy loading, critical CSS
3. **Industrial Animations** - Exaggerated page transitions, gear rotations, hydraulic menu effects
4. **PWA Capabilities** - Service worker, offline support, desktop installation
5. **SEO & Social** - Auto-generated OG images, structured data, XML sitemaps, RSS feeds

### Development Workflow

**Git Commit Guidelines:**
- ALWAYS commit after completing each TODO task
- Create atomic commits for logical feature completions
- Use descriptive commit messages with the format: `feat/fix/docs: description`
- Include the Claude Code footer in all commits
- Never leave completed work uncommitted

**Development Process:**
1. Mark TODO as in_progress when starting
2. Implement the feature completely
3. Test the implementation
4. Mark TODO as completed
5. **IMMEDIATELY commit the work**
6. Move to next TODO task

### Development Notes

- The project is currently minimal with just basic Astro structure
- Most features described in README.md and TODO.md are planned but not yet implemented
- When implementing new features, follow the industrial design aesthetic
- Prioritize accessibility and performance from the start
- Use TypeScript throughout for type safety