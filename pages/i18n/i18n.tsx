import { initReactI18next } from 'react-i18next';
import i18n, { InitOptions } from 'i18next';

const i18nConfig: InitOptions = {
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: require('../locales/en.json'),
    },
    es: {
        translation: require('../locales/es.json'),
      },
    // Add more languages as needed
  },
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
