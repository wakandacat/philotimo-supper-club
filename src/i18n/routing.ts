//define locales for the application

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fr', 'el'],
  defaultLocale: 'en',
})