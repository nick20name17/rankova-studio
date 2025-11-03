import { routing } from '@/i18n/routing'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Comfortaa } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { ScrollToTop } from './elements/scroll-to-top/ScrollToTop'
import './globals.css'
import { Footer } from './sections/footer/Footer'
import { Nav } from './sections/nav/Nav'

const comfortaa = Comfortaa({
    variable: '--comfortaa',
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
})

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string }
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Metadata' })

    return {
        title: t('title'),
        description: t('description'),
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

    setRequestLocale(locale)

    const t = await getTranslations('Nav')

    return (
        <html lang={locale}>
            <head>
                <link
                    rel="shortcut icon"
                    href="/apple-touch-icon.png"
                    sizes="any"
                    type="image/x-icon"
                />
                <link
                    rel="mask-icon"
                    href="/apple-touch-icon.png"
                    color="#ffffff"
                />
                <Script
                    id="gtm-head"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WP4MT8NM');`,
                    }}
                />

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17648212179"
                    strategy="afterInteractive"
                />

                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17648212179');
            `,
                    }}
                />
                <Script
                    id="meta-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '682862281271145');
              fbq('track', 'PageView');
            `,
                    }}
                />
            </head>
            <body className={`${comfortaa.className}`}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WP4MT8NM"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
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
