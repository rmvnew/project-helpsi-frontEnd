import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      MALE: "MALE",
      FEMALE: "FEMALE",
      NON_BINARY: "NO_BINARY",
      OTHER: "OTHER",
    },
  },
  pt: {
    translation: {
        MALE: "MASCULINO",
        FEMALE: "FEMININO",
        NON_BINARY: "NÃO-BINÁRIO",
        OTHER: "OUTRO",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
