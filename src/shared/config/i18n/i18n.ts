import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import XHR from 'i18next-xhr-backend'
import Backend from 'i18next-browser-languagedetector'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false, //not need for react as it escapes byt default
    },

    backend: {
      // "i18n-ally.localesPaths":"./public/locales"
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // loadPath: './public/locales',
    }
  })

  export default i18n