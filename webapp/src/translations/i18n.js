import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationHu from './hu.json'
import translationEn from "./en.json"

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
}

i18n
  .use(initReactI18next)
  .init({
    
    resources: {
      en: {
        translation: translationEn
        
      },
      hu: {
        translation: translationHu
      },
    },
    detection: DETECTION_OPTIONS,
    lng: "hu" ,
    fallbackLng: "hu",
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    } 
  });
 

export default i18n;

