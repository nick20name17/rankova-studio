import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'

import type { LessonsPage } from '../../../../../../../sanity.types'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { Button } from '@/components/ui/button'
import { nunito } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const QUERY = `
  *[_type == "lessonsPage"][0]{
    howItWorks
  }
`

export const HowItWorks = async () => {
  const t = await getTranslations('Pages.Lesson.Sections.HowItWorks')
  const locale = await getLocale()

  const { howItWorks } = (await client.fetch(QUERY, {}, { next: { revalidate: 60 } })) as {
    howItWorks: LessonsPage['howItWorks']
  }

  const image = howItWorks?.image ? urlFor(howItWorks?.image).url() : null

  const description1 = locale == 'en' ? howItWorks?.description1_en : howItWorks?.description1
  const description2 = locale == 'en' ? howItWorks?.description2_en : howItWorks?.description2

  return (
    // <div
    //   className='max-bg:bg-cover w-screen bg-no-repeat pt-10 max-md:bg-position-[10%_30%] max-md:pt-30'
    //   style={{ backgroundImage: "url('/home/vacancy.svg')" }}
    // >
    <Section className='relative mt-10 md:mt-15'>
      <H2 className='md:text-center'>{t('Title')}</H2>

      <div className='max-md:inset-x-0-0 absolute -inset-x-20 -top-5 -z-10 overflow-hidden max-md:-rotate-x-180 md:-top-27'>
        <svg
          className='h-120 max-md:scale-y-140 md:h-auto md:w-full'
          viewBox='0 0 1440 563'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-3.24121 562.109C-3.24121 562.109 86.4738 448.435 257.259 429.621C390.259 414.97 718.259 416.528 718.259 416.528C718.259 416.528 1090.01 416.528 1221.76 416.528C1456.01 416.528 1439.76 228.58 1439.76 228.58V0C1439.76 0 1258.26 112.159 718.259 112.159C475.005 112.159 304.499 112.159 190.561 112.159C83.418 112.159 -3.24121 199.015 -3.24121 306.159V381.882V562.109Z'
            fill='#FFDF18'
          />
        </svg>
      </div>

      <div
        className={cn(
          'mt-6 grid grid-cols-1 gap-5 md:mt-13 md:grid-cols-2 md:grid-rows-2 md:text-lg lg:grid-cols-3',
          nunito.className
        )}
      >
        <div className='relative row-span-2 h-55 w-full max-md:order-3 md:h-98'>
          {image ? (
            <Image
              className='size-full rounded-4xl object-cover object-center'
              alt='how it works'
              fetchPriority='high'
              src={image}
              fill
            />
          ) : null}
        </div>

        <p className='max-md:order-1'>{description1}</p>

        <div className='flex flex-col gap-4 max-md:order-2 md:h-full md:justify-between'>
          <p>{description2}</p>
          <Button className='w-full'>{t('TrialLesson')}</Button>
        </div>

        <ul className='col-span-1 col-start-1 mt-4 grid gap-5 max-md:order-4 sm:grid-cols-2 md:col-span-2 md:col-start-1 lg:col-span-2 lg:col-start-2'>
          {howItWorks?.list?.map((listItem) => {
            const title = locale == 'en' ? listItem.title_en : listItem.title
            return (
              <li
                className='relative'
                key={listItem._key}
              >
                <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
                <div className='relative z-10 pl-4'>{title}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
    // </div>
  )
}
