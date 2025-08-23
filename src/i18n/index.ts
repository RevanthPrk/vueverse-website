import { createI18n } from 'vue-i18n'
import en from './locales/en'
import hi from './locales/hi'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    hi
  }
})