import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es";
import en from "./en";

const resources = {
  en: {
    translation: en,
  },

  es: {
    translation: es,
  },
};

// buscamos en el local storage el lenguaje por defecto:
const defaultLang = localStorage.getItem("lang") || "es";
//const defaultLang = navigator.language || navigator.userLanguage;

// inicializamos la libreria
i18n.use(initReactI18next).init({
  resources,
  lang: defaultLang,
  interpolation: {
    escapeValue: false,
  },
});

// funcion para actualizar el lenguaje, luego guarda en nuevo lenguaje en el local storage
export const updateLang = async (language) => {
  await i18n.changeLanguage(language);
  localStorage.setItem("lang", language);
};

const defaultLangSetter = () => {
  updateLang(defaultLang);
};

defaultLangSetter();

export default i18n;
