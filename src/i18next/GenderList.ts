import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
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
      MALE: "Masculino",
      FEMALE: "Feminino",
      NON_BINARY: "Não-binário",
      OTHER: "Outro",
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

