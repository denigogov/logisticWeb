import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translate/en/translation.json";
import de from "./translate/de/translation.json";
import { getLocalStorageItem } from "./utils/localstorage";

const localStorageLang = getLocalStorageItem("lng");

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "de",
  lng: localStorageLang || "de",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    de: {
      translation: de,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
