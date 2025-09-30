import { routing } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { Comfortaa } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ScrollToTop } from './elements/scroll-to-top/ScrollToTop'
import './globals.css'
import { Footer } from './sections/footer/Footer'
import { Nav } from './sections/nav/Nav'

const comfortaa = Comfortaa({
    variable: '--comfortaa',
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
})

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string }
}) {
    const t = await getTranslations({ locale, namespace: 'Metadata' })

    return {
        title: t('title'),
        description: t('description'),
        icons: {
            shortcut: '/favicon.svg',
            icon: '/favicon.svg',
        },
    }
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    if (!routing.locales.includes(locale as 'en' | 'ua')) {
        notFound()
    }

    const t = await getTranslations('Nav')

    return (
        <html lang={locale}>
            <body className={`${comfortaa.className}`}>
                <Nav
                    description={t('description')}
                    about={t('about')}
                    btn={t('btn')}
                    teachers={t('teachers')}
                    career={t('career')}
                    prices={t('prices')}
                    gift={t('gift')}
                    qa={t('qa')}
                    reviews={t('reviews')}
                    contact={t('contact')}
                />
                <ScrollToTop />
                {children}
                <Footer />
            </body>
        </html>
    )
}
