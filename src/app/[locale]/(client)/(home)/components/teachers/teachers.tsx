import { getTranslations } from 'next-intl/server'

import type { TeachersSection as TeachersSectionType } from '../../../../../../../sanity.types'

import { TeacherCard } from './teacher-card'
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

const TEACHERS_QUERY = `*[_type == "teachersSection"] | order(orderRank)`
const options = {}

export const TeachersSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Teachers')

  const teachers = (await client.fetch(TEACHERS_QUERY, {}, options)) as TeachersSectionType[]

  return (
    <Section
      className='overflow-x-hidden'
      id='teachers'
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
          {teachers?.map((teacher) => {
            return (
              <CarouselItem
                className='pl-8 xl:basis-1/2'
                key={teacher._id}
              >
                <TeacherCard teacher={teacher} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </Section>
  )
}
