import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kn from './locales/kn.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: { kn: { translation: kn }, en: { translation: en } },
    lng: 'kn',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

function setHtmlLang(lang) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang);
  }
}
setHtmlLang('kn');
i18n.on('languageChanged', setHtmlLang);

export default i18n;
