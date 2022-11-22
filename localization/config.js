import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from  './sources/en'
import ar from './sources/ar'
import tkm from './sources/tkm'
import sw from './sources/sw'
const resources = {
  en,
  ar,
  tkm,
  sw
};

export const getTranslatedText = (key,language)=>{
  let currentTranslaction = resources[language] ? resources[language]:en;
  let translatedText = currentTranslaction[key]
  ? currentTranslaction[key]
  :en[key]
  ?en[key]
  :key;
  return translatedText
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
