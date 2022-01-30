import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishTrans from "./EN.json"
import ArabicTrans from "./AR.json"
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: EnglishTrans,
   
  },
  ar: {
    translation: ArabicTrans
  },
};
i18next
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng"),
    interpolation: {
      escapeValue: false,
    },
    react : {
        useSuspense : false
    }
  });
export default i18next;