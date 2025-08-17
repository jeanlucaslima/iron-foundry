import { SITE_CONFIG, type Language } from './config';

// Translation data store
const translations: Record<Language, Record<string, any>> = {
  en: {},
  fr: {},
  pt: {}
};

// Load translation files dynamically
async function loadTranslations() {
  try {
    const [en, fr, pt] = await Promise.all([
      import('../locales/en.json'),
      import('../locales/fr.json'),
      import('../locales/pt.json')
    ]);
    
    translations.en = en.default;
    translations.fr = fr.default;
    translations.pt = pt.default;
  } catch (error) {
    console.error('Failed to load translations:', error);
  }
}

// Initialize translations
await loadTranslations();

/**
 * Get translation text for a given key and language
 */
export function t(key: string, lang: Language = SITE_CONFIG.defaultLanguage): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation is missing
      value = translations[SITE_CONFIG.defaultLanguage];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if no translation found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

/**
 * Get all available translations for a key
 */
export function getAllTranslations(key: string): Record<Language, string> {
  return {
    en: t(key, 'en'),
    fr: t(key, 'fr'),
    pt: t(key, 'pt')
  };
}