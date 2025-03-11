import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./local/en.json";
import es from "./local/es.json";
import ar from "./local/ar.json";
import de from "./local/de.json";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ar: { translation: ar },
      de: { translation: de },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the current one is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;