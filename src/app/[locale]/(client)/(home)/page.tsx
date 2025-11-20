import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { AdvantagesSection } from './components/advantages'
import { CertificatesSection } from './components/certificates'
import { ContactUsSection } from './components/contact-us'
import { ContactsSection } from './components/contacts'
import { FaqSection } from './components/faq'
import { FeedbackSection } from './components/feedback'
import { HeroSection } from './components/hero'
import { PhotosSection } from './components/photos'
import { PricesSection } from './components/prices/prices'
import { ServicesSection } from './components/service'
import { StorySection } from './components/story'
import { TeachersSection } from './components/teachers/teachers'
import { TickerTape } from './components/ticker-tape'
import { VacancySection } from './components/vacancy'
import { WhyUsSection } from './components/why-us'
import type { Locale } from '@/i18n/routing'

export const metadata: Metadata = {
  alternates: {
    languages: {
      uk: 'https://www.rankovastudio.com',
      en: 'https://www.rankovastudio.com/en',
      'x-default': 'https://www.rankovastudio.com'
    }
  }
}

const HomePage = async ({ params }: PageProps<'/[locale]'>) => {
  const { locale } = await params

  setRequestLocale(locale as Locale)

  return (
    <>
      <HeroSection />
      <TickerTape />
      <WhyUsSection />
      <StorySection />
      <AdvantagesSection />
      <TeachersSection />
      <ServicesSection />
      <VacancySection />
      <PricesSection />
      <ContactUsSection />
      <CertificatesSection />
      <FaqSection />
      <FeedbackSection />
      <ContactsSection />
      <PhotosSection />
    </>
  )
}

export default HomePage
