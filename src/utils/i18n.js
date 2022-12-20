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
      heroHeading: 'Welcome to IQ OraQles',
      heroParagraph:
        'IQ.wiki OraQles formerly Everipedia OraQles is a service that allows verified first parties to bring real-world information on-chain.',
      updatesFooterHeading: 'Get updated with IQ.Wiki',
      footerHeading: 'Powered by',
      copyRight: '©️2022 IQ.Wiki. All Rights Reserved.',

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
