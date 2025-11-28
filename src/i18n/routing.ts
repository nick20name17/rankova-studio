import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'uk'],
  defaultLocale: 'uk',
  localeCookie: false
  // localePrefix: 'as-needed'
})

export type Locale = (typeof routing.locales)[number]
