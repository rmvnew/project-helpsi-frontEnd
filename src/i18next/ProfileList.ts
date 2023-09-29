import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      ADMIN: "ADMIN",
      PATIENT: "PATIENT",
      PSYCHOLOGIST: "PSYCHOLOGIST",
      ATTENDANT: "ATTENDANT",
    },
  },
  pt: {
    translation: {
      ADMIN: "ADMINISTRADOR",
      PATIENT: "PACIENTE",
      PSYCHOLOGIST: "PSICÓLOGO",
      ATTENDANT: "ATENDENTE",
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
