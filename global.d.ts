import messages from './messages/en.json'
import { formats } from '@/i18n/request'
import { Locale } from '@/i18n/routing'

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof messages
    Formats: typeof formats
  }
}
