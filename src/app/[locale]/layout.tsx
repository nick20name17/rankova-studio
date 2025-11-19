import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Comfortaa } from 'next/font/google'
import { notFound } from 'next/navigation'

import '../globals.css'

import { SeoScripts } from '@/components/common/seo-scripts'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'
import { ReactQueryProvider } from '@/providers/react-query'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Pages.Home')

  return {
    title: 'Rankova Studio',
    description: t('Description'),
    openGraph: {
      type: 'website',
      title: 'Rankova Studio',
      description: t('Description'),
      url: 'https://www.rankovastudio.com',
      images: [
        {
          url: 'https://www.rankovastudio.com/og-image.png',
          alt: 'Rankova Studio',
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Rankova Studio',
      description: t('Description'),
      images: ['https://www.rankovastudio.com/og-image.png']
    }
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const comfortaa = Comfortaa({
  variable: '--comfortaa',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin']
})

const RootLayout = async ({ children, params }: LayoutProps<'/[locale]'>) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <NextIntlClientProvider>
      <ReactQueryProvider>
        <html lang={locale}>
          <head>
            <link
              rel='shortcut icon'
              href='/apple-touch-icon.png'
              sizes='any'
              type='image/x-icon'
            />
            <link
              rel='mask-icon'
              href='/apple-touch-icon.png'
              color='#ffffff'
            />
            <SeoScripts />
          </head>
          <body className={`flex min-h-screen flex-col justify-between antialiased ${comfortaa.className}`}>
            {children}
            <Toaster
              richColors
              duration={7000}
            />
          </body>
        </html>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )
}

export default RootLayout
