import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from '/public/locales/en/common.json';
import common_nl from '/public/locales/nl/common.json';
import common_fr from '/public/locales/fr/common.json';

const resources = {
  en: {
    translation: common_en
  },
  nl: {
    translation: common_nl
  },
  fr: {
    translation: common_fr
  }
};

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;