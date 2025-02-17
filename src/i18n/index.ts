
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationFR from './locales/fr.json';
import translationDE from './locales/de.json';

export const currencyMap: Record<string, { symbol: string; rate: number }> = {
  'en': { symbol: '$', rate: 1 }, // USD (base currency)
  'es': { symbol: '€', rate: 0.91 }, // EUR
  'fr': { symbol: '€', rate: 0.91 }, // EUR
  'de': { symbol: '€', rate: 0.91 }, // EUR
  'default': { symbol: '$', rate: 1 }
};

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 10,
      cookieDomain: 'myDomain'
    },
    load: 'languageOnly',
    debug: true // This will help us see what's happening with language detection
  });

// Force language detection on init
const detectLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'es', 'fr', 'de'].includes(browserLang)) {
    i18n.changeLanguage(browserLang);
  }
};

// Run language detection immediately
detectLanguage();

export default i18n;
