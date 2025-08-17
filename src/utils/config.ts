export const SITE_CONFIG = {
  title: "Iron Foundry",
  description: "Industrial-strength Astro template for static websites",
  author: "Iron Foundry Team",
  url: "https://iron-foundry.dev",
  defaultTheme: "blueprint" as const,
  defaultLanguage: "en" as const,
  availableThemes: ["blueprint", "dark", "light"] as const,
  availableLanguages: ["en", "fr", "pt"] as const,
  environment: import.meta.env.MODE || "development",
  
  // Navigation structure
  navigation: [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" }
  ],
  
  // Social links
  social: {
    github: "https://github.com/yourusername/iron-foundry",
    twitter: "https://twitter.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourprofile"
  },
  
  // Industrial theme settings
  industrial: {
    enableAnimations: true,
    enableParticles: false,
    gearRotationSpeed: 10, // seconds
    transitionDuration: 300 // milliseconds
  }
} as const;

export type Theme = typeof SITE_CONFIG.availableThemes[number];
export type Language = typeof SITE_CONFIG.availableLanguages[number];
export type Environment = "development" | "production" | "preview";

// Theme color configurations
export const THEME_COLORS = {
  blueprint: {
    primary: "var(--color-blueprint-500)",
    secondary: "var(--color-steel-500)",
    accent: "var(--color-blueprint-600)",
    background: "var(--color-blueprint-50)"
  },
  dark: {
    primary: "var(--color-rust-500)",
    secondary: "var(--color-steel-400)",
    accent: "var(--color-rust-400)",
    background: "var(--color-steel-900)"
  },
  light: {
    primary: "var(--color-steel-600)",
    secondary: "var(--color-steel-400)",
    accent: "var(--color-blueprint-500)",
    background: "var(--color-white)"
  }
} as const;