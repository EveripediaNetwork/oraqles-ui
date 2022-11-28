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
      updatesFooterHeading: 'Get updated with IQ.Wiki',
      updatesFooterText:
        'Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating IQ.Wiki',
      subScribeFooterBttn: 'Suscribe Now',

      communityFooterHeading: 'Community Hub',

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
