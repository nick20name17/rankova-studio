'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

import type { TeachersSection } from '../../../../../../../sanity.types'

import { EnrollButton } from '@/components/common/enroll-button'
import { urlFor } from '@/sanity/lib/image'

interface TeacherCardProps {
  teacher: TeachersSection
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
  const locale = useLocale()
  const t = useTranslations('Pages.Home.Sections.Teachers.Card')

  const description = locale == 'en' ? teacher.description_en : teacher.description
  const name = locale == 'en' ? (teacher.name_en ?? '-') : (teacher.name ?? '-')

  const music = locale == 'en' ? teacher.music_en : teacher.music
  const teaching = locale == 'en' ? teacher.teaching_en : teacher.teaching

  const image = teacher?.photo ? urlFor(teacher?.photo).url() : null

  return (
    <div className='flex items-center gap-4 max-sm:flex-col max-sm:justify-center sm:items-start'>
      <div className='w-74 shrink-0'>
        <div className='relative h-90 w-full'>
          <div className='absolute top-5 right-7'>
            <div className='absolute top-[40%] left-1/2 z-10 -translate-1/2 text-lg leading-tight'>
              {name}
            </div>
            <BlobIcon />
          </div>
          <EnrollButton className='absolute inset-x-7 bottom-4' />
          {image ? (
            <Image
              className='size-full rounded-[42px] object-cover'
              src={image}
              alt={name}
              title={name}
              width={296}
              height={357}
            />
          ) : null}
        </div>
        <div className='mx-auto mt-3 text-center'>
          <div>{description}</div>
          <div>{t('exp', { exp: teacher.expirience ?? 0 })}</div>
        </div>
      </div>
      <div className='md:max-w-[75%] xl:max-w-full'>
        <div className='text-lg font-bold'>{t('music')}</div>
        <p className='mt-2'>{music}</p>
        <div className='mt-4 text-lg font-bold'>{t('teaching')}</div>
        <p className='mt-2'>{teaching}</p>
      </div>
    </div>
  )
}

const BlobIcon = () => {
  return (
    <svg
      width='150'
      height='55'
      viewBox='0 0 125 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M124.022 23.1227C119.717 30.6861 93.8216 28.5717 79.0614 32.6422C64.9456 36.5349 59.2286 47.5755 42.1464 45.7017C25.0447 43.8258 24.8007 33.1485 17.8429 25.927C10.843 18.6618 -6.47927 10.8261 2.54805 4.60276C11.5342 -1.59226 34.2329 3.35271 51.3906 2.79945C67.2715 2.28736 82.6979 -2.36709 96.7508 1.56513C113.38 6.21808 128.543 15.1799 124.022 23.1227Z'
        fill='#FFDF18'
      />
    </svg>
  )
}
