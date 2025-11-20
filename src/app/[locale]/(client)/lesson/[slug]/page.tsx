import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ContactUsSection } from '../../(home)/components/contact-us'
import { WhyUsSection } from '../../(home)/components/why-us'
import type { LessonsPage } from '../../../../../../sanity.types'

import { FeedbackSection } from './components/feedback'
import { HeroSection } from './components/hero'
import { HowItWorks } from './components/how-it-works'
import { HowToEnroll } from './components/how-to-enroll'
import { PricesSection } from './components/prices'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const LESSON_QUERY = `*[_type == "lessonsPage" && slug.current == $slug][0]`

const options = { next: { revalidate: 60 } }

export async function generateMetadata({ params }: PageProps<'/[locale]/lesson/[slug]'>): Promise<Metadata> {
  const { slug, locale } = await params

  const data = (await client.fetch(LESSON_QUERY, { slug }, options)) as LessonsPage

  const title = locale == 'en' ? data?.meta_title_en : data?.meta_title
  const description = locale == 'en' ? data?.meta_description_en : data?.meta_description

  const heroImageUrl = data?.hero?.image
    ? urlFor(data.hero.image).url()
    : 'https://www.rankovastudio.com/og-image.png'

  return {
    title,
    description,
    alternates: {
      languages: {
        uk: `https://www.rankovastudio.com/lesson/${data.slug}`,
        en: `https://www.rankovastudio.com/en/lesson/${data.slug}`,
        'x-default': `https://www.rankovastudio.com/lesson/${data.slug}`
      }
    },
    openGraph: {
      type: 'website',
      title,
      description: description,
      url: `https://www.rankovastudio.com/lesson/${data.slug}`,
      images: [
        {
          url: heroImageUrl,
          alt: title,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description,
      images: [heroImageUrl]
    }
  }
}

export default async function LessonPage({ params }: PageProps<'/[locale]/lesson/[slug]'>) {
  const { slug, locale } = await params

  const data = await client.fetch(LESSON_QUERY, { slug }, options)

  if (!data) {
    return notFound()
  }

  const title = locale == 'en' ? data.hero.title_en : data.hero.title
  const description = locale == 'en' ? data.hero.description_en : data.hero.description

  const heroImageUrl = data.hero.image ? urlFor(data.hero.image).url() : null

  return (
    <>
      <HeroSection
        description={description}
        title={title}
        image={heroImageUrl || ''}
      />
      <FeedbackSection />
      <HowItWorks />
      <WhyUsSection />
      <HowToEnroll />
      <PricesSection />
      <ContactUsSection />
    </>
  )
}
