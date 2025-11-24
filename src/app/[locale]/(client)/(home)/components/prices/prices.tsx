import { getTranslations } from 'next-intl/server'

import type { PriceSection } from '../../../../../../../sanity.types'

import { PriceCard } from './price-card'
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

const PRICES_QUERY = `*[_type == "priceSection"] | order(orderRank)`
const options = { next: { revalidate: 60 } }

export const PricesSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Prices')

  const prices = (await client.fetch(PRICES_QUERY, {}, options)) as PriceSection[]

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
          <H2 className='text-center sm:basis-1/3'>{t('Title')}</H2>
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
                key={price._id}
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
