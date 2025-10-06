import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import es from "./es.json";

i18n
  .use(LanguageDetector)       // ⬅️ Add this line
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "es",          // If no match found, default to Spanish
    detection: {
      // How language will be detected
      order: ["navigator", "htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["localStorage", "cookie"], // store user choice
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
