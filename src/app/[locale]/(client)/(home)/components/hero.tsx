import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { EnrollButton } from '@/components/common/enroll-button'

export const HeroSection = async () => {
  const t = await getTranslations('Pages.Home')

  const descriptionList: string[] = t.raw('Sections.Hero.DescriptionList')

  return (
    <section className='relative flex items-center justify-between gap-5 max-md:flex-col-reverse md:h-[calc(100vh-var(--header-height))]'>
      <div className='container flex flex-col md:relative md:z-10'>
        <h1 className='max-w-160 text-4xl leading-tight font-bold md:text-5xl'>{t('Title')}</h1>
        <ul className='mt-8 list-inside list-disc space-y-3'>
          {descriptionList.map((item) => (
            <li
              key={item}
              className='font-medium md:text-xl'
            >
              {item}
            </li>
          ))}
        </ul>

        <EnrollButton
          className='mt-8 w-50 max-md:mx-auto md:mt-13'
          variant='default'
        />
      </div>
      <div className='w-full md:absolute md:inset-0'>
        <Image
          priority
          className='size-full object-cover object-top mix-blend-multiply md:object-contain md:object-[95%]'
          src='/home/hero.png'
          alt='Hero'
          unoptimized
          quality={100}
          width={1200}
          height={630}
        />
      </div>
    </section>
  )
}
