//middleware layer for the application, used to handle internationalization and routing
//excludes studio, so the admin tool stays outside the language routing

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: '/((?!api|trpc|studio|_next|_vercel|.*\\..*).*)',
}