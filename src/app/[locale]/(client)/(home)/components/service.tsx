import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'

import type { LessonsPage } from '../../../../../../sanity.types'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { nunito } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const BlobIcon = () => {
  return (
    <svg
      width='59'
      height='55'
      viewBox='0 0 59 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.3479 1.0866C18.4918 -3.24718 25.2716 6.67076 33.813 8.33623C41.9816 9.929 53.6799 3.42052 57.7277 10.3251C61.7801 17.2376 52.3961 25.3866 48.3194 33.0806C44.2181 40.8211 43.0608 52.3092 34.5267 54.113C26.0316 55.9085 22.8294 44.878 16.6047 39.7837C10.8432 35.0685 1.56146 33.6304 0.350875 26.1432C-1.0816 17.2836 1.7955 5.63778 10.3479 1.0866Z'
        fill='#FFDF18'
      />
    </svg>
  )
}

const TEACHERS_QUERY = `*[_type == "lessonsPage"]`
const options = { next: { revalidate: 60 } }

export const ServicesSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Services')
  const locale = await getLocale()

  const services = (await client.fetch(TEACHERS_QUERY, {}, options)) as LessonsPage[]

  return (
    <Section>
      <H2 className='text-center'>{t('Title')}</H2>
      <ul className='mt-13 grid grid-cols-2 gap-8 md:grid-cols-3'>
        {services.map((service) => {
          const title = locale == 'en' ? service.hero?.title_en : service.hero?.title
          const text = locale == 'en' ? service.hero?.description_en : service.hero?.description

          const image = service?.icon ? urlFor(service?.icon).url() : null

          return (
            <li
              key={service._id}
              className='flex flex-col items-center gap-3 text-center'
            >
              <div className='relative'>
                <BlobIcon />
                <div className='absolute -top-1 left-1/2 z-10 size-11 -translate-x-1/2'>
                  {image ? (
                    <Image
                      className='size-full'
                      unoptimized
                      src={image}
                      alt={title!}
                      width={44}
                      height={44}
                    />
                  ) : null}
                </div>
              </div>
              <h3 className={cn('font-extrabold md:text-lg', nunito.className)}>{title}</h3>
              <p className='mx-auto max-w-73 text-sm'>{text}</p>
              <Button asChild>
                <Link href={`/lesson/${service.slug?.current}`}>{t('Enroll')}</Link>
              </Button>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
