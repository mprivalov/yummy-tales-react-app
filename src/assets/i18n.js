import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translation.json'; 
import translationLV from './locales/lv/translation.json'; 
import translationRU from './locales/ru/translation.json'; 

const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationLV,
    },
    es: {
      translation: translationRU,
    },
  };
  
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
