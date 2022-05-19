import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationHu from './hu.json'
import translationEn from "./en.json"
import instance from "../services/axios";

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
    lng: "hu" ,
    fallbackLng: "hu",
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    } 
  });
 

export default i18n;

