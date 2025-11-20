import { getLocale } from 'next-intl/server'
import Image from 'next/image'

import type { LessonsPage } from '../../../../../../../sanity.types'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { client } from '@/sanity/lib/client'

const QUERY = `
  *[_type == "lessonsPage"][0]{
    lessonFeedbackSection
  }
`

export const FeedbackSection = async () => {
  const locale = await getLocale()

  const { lessonFeedbackSection } = (await client.fetch(QUERY, {}, { next: { revalidate: 60 } })) as {
    lessonFeedbackSection: LessonsPage['lessonFeedbackSection']
  }

  const title = locale === 'en' ? lessonFeedbackSection?.title_en : lessonFeedbackSection?.title

  return (
    <Section
      className='overflow-x-hidden'
      id='feedback'
    >
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <div className='flex items-center gap-4 max-sm:justify-between'>
          <div className='max-sm:hidden sm:basis-1/3'></div>
          <H2 className='sm:basis-1/3 sm:text-center'>{title}</H2>
          <div className='flex items-center justify-end gap-4 sm:basis-1/3'>
            <CarouselPrevious className='static translate-0' />
            <CarouselNext className='static translate-0' />
          </div>
        </div>

        <CarouselContent className='mt-13 -ml-8'>
          {Array.from({ length: 9 }).map((_, index) => {
            return (
              <CarouselItem
                className='h-85 pl-8 sm:basis-1/2 lg:basis-1/3'
                key={index}
              >
                <Image
                  className='size-full object-contain object-top'
                  width={300}
                  height={300}
                  src={`/home/reviews/${index + 1}.png`}
                  alt='Feedback'
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </Section>
  )
}
