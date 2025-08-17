import { SITE_CONFIG, type Language } from './config';

/**
 * Get translation text for a given key and language
 */
export function getTranslation(key: string, lang: Language = SITE_CONFIG.defaultLanguage): string {
  // This will be implemented when we add the translation files
  return key;
}

/**
 * Format date for display
 */
export function formatDate(date: Date, lang: Language = SITE_CONFIG.defaultLanguage): string {
  const locales = {
    en: 'en-US',
    fr: 'fr-FR',
    pt: 'pt-BR'
  };
  
  return new Intl.DateTimeFormat(locales[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Calculate reading time for content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get environment indicator color and text
 */
export function getEnvironmentIndicator(): { color: string; text: string; pulse: boolean } {
  const env = SITE_CONFIG.environment;
  
  switch (env) {
    case 'production':
      return { color: 'green', text: 'LIVE', pulse: false };
    case 'preview':
      return { color: 'amber', text: 'TEST', pulse: true };
    default:
      return { color: 'red', text: 'DEV', pulse: true };
  }
}

/**
 * Generate slug from title
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Check if animations should be disabled based on user preference
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get localized URL path
 */
export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === SITE_CONFIG.defaultLanguage) {
    return path;
  }
  return `/${lang}${path === '/' ? '' : path}`;
}

/**
 * Extract language from URL path
 */
export function getLanguageFromPath(path: string): Language {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (SITE_CONFIG.availableLanguages.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  
  return SITE_CONFIG.defaultLanguage;
}