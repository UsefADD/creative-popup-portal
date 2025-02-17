
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
      order: ['querystring'],
      lookupQuerystring: 'lng',
    },
    load: 'languageOnly',
    debug: true // This will help us see what's happening with language detection
  });

// Force language detection on init
const detectLanguage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lng');
  
  if (langParam && ['en', 'es', 'fr', 'de'].includes(langParam)) {
    i18n.changeLanguage(langParam);
    console.log('Language changed to:', langParam);
  }
};

// Run language detection immediately
detectLanguage();

export default i18n;
