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
    <Section className='mt-10 md:mt-15'>
      <H2 className='text-center'>{t('Title')}</H2>

      <div
        className={cn(
          'mt-6 grid grid-cols-1 gap-5 text-lg md:mt-13 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3',
          nunito.className
        )}
      >
        <div className='relative row-span-2 h-55 w-full max-md:order-3 md:h-98'>
          {image ? (
            <Image
              className='size-full rounded-4xl object-cover object-center'
              alt='how it works'
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
          <li className='relative'>
            <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
            <div className='relative z-10 pl-4'>Не потрібно витрачати час, щоб дістатися до школи</div>
          </li>
          <li className='relative'>
            <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
            <div className='relative z-10 pl-4'>Не потрібно витрачати час, щоб дістатися до школи</div>
          </li>
          <li className='relative'>
            <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
            <div className='relative z-10 pl-4'>Не потрібно витрачати час, щоб дістатися до школи</div>
          </li>
          <li className='relative'>
            <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
            <div className='relative z-10 pl-4'>Не потрібно витрачати час, щоб дістатися до школи</div>
          </li>
          <li className='relative'>
            <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
            <div className='relative z-10 pl-4'>Не потрібно витрачати час, щоб дістатися до школи</div>
          </li>
          <li className='relative'>
            <div className='bg-accent absolute -top-1 left-0.5 size-9.5 rounded-full' />
            <div className='relative z-10 pl-4'>Не потрібно витрачати час, щоб дістатися до школи</div>
          </li>
        </ul>
      </div>
    </Section>
  )
}
