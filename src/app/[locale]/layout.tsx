import '@/app/globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { SanityLive } from '@/sanity/lib/live'
import Header from '../components/header'
import Footer from '../components/footer'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philotimo Supper Club",
  description: "A table for thoughtful food, generous hospitality, and meaningful conversation.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
           <main className="flex flex-col min-h-screen">
             <Header/>
              {children}
            <Footer/>
            <SanityLive />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
