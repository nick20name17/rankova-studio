import { getTranslations } from 'next-intl/server'

import type { LessonsPage } from '../../../../../../../sanity.types'

import { EnrollButton } from '@/components/common/enroll-button'
import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { client } from '@/sanity/lib/client'

const PRICES_QUERY = `
  *[_type == "lessonsPage"][0]
`
const options = {}

export const PricesSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Prices')
  const t2 = await getTranslations('Pages.Lesson.Sections.Prices')

  const { price = -1 } = (await client.fetch(PRICES_QUERY, {}, options)) as LessonsPage

  return (
    <Section
      className='flex flex-col items-center justify-center gap-y-6 overflow-x-hidden sm:gap-y-11'
      id='price'
    >
      <div className='flex flex-col items-center justify-center gap-1 sm:basis-1/3'>
        <H2 className='text-center'>{t('Title')}</H2>
        <p className='text-muted text-sm'>{t2('Description')}</p>
      </div>

      <div className='flex items-center justify-center gap-3 leading-none max-[420px]:flex-col'>
        <div>
          <span className='text-2xl font-bold md:text-4xl'> {t2('SingleLesson.Title')} </span>
          <span className='text-muted leading-none'>(50{t2('SingleLesson.Duration')})</span>
        </div>
        <div className='text-2xl font-bold md:text-4xl'>{price} ₴</div>
      </div>

      <EnrollButton />
    </Section>
  )
}
