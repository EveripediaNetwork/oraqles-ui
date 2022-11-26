import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const resources = {
  en: {
    translation: {
      // |||||||||||||||||||| SECTIONS ||||||||||||||||||||
      // init
      //--Copies for Oraqles--

      //Home page
      heroHeading: 'Welcome to IQ Oraqle',
      heroParagraph:
        'The Oraqle Service That Feeds Information To The Blockchain.',

      //---End of Copies for Oraqles--

      // ---------------------------------------------------------------

      en: 'EN',
      ko: '한국어',
      zh: '中文',
    },
  },
}

const languageDetector = new LanguageDetector(null, {
  order: ['querystring', 'localStorage', 'navigator'],
  lookupLocalStorage: 'storeLang',
  caches: ['localStorage'],
})

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ko', 'zh'],
  })

export default i18n
