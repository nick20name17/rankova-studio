import { getTranslations } from 'next-intl/server'

import { PriceCard } from '../../../(home)/components/prices/price-card'
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

const PRICES_QUERY = `
  *[_type == "lessonsPage"][0]{
    prices[]{
      ...,
      _key,
      _type
    }
  }
`
const options = {}

export const PricesSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Prices')
  const t2 = await getTranslations('Pages.Lesson.Sections.Prices')

  const { prices } = (await client.fetch(
    PRICES_QUERY,
    {},
    {
      cache: 'no-cache'
    }
  )) as { prices: LessonsPage['prices'] }

  return (
    <Section
      className='overflow-x-hidden'
      id='price'
    >
      <Carousel
        opts={{
          align: 'start'
        }}
      >
        <div className='flex items-center max-sm:justify-between'>
          <div className='max-sm:hidden sm:basis-1/3'></div>
          <div className='flex flex-col items-center justify-center gap-1 sm:basis-1/3'>
            <H2 className='text-center'>{t('Title')}</H2>
            <p className='text-muted text-sm'>{t2('Description')}</p>
          </div>
          <div className='flex items-center justify-end gap-4 sm:basis-1/3'>
            <CarouselPrevious className='static translate-0' />
            <CarouselNext className='static translate-0' />
          </div>
        </div>

        <CarouselContent className='mt-13 -ml-8'>
          {prices?.map((price) => {
            return (
              <CarouselItem
                className='pl-8 md:basis-1/2 lg:basis-1/3'
                key={price._key}
              >
                <PriceCard price={price} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </Section>
  )
}
