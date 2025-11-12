import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kn from './locales/kn.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: { kn: { translation: kn }, en: { translation: en } },
    lng: 'kn',
    fallbackLng: 'kn',
    interpolation: { escapeValue: false }
  });

export default i18n;
