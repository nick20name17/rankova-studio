'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

import type { PriceSection } from '../../../../../../../sanity.types'

import { EnrollButton } from '@/components/common/enroll-button'
import { nunito } from '@/lib/fonts'
import { urlFor } from '@/sanity/lib/image'

interface PriceCardProps {
  price: PriceSection
}

export const PriceCard = ({ price }: PriceCardProps) => {
  const locale = useLocale()
  const t = useTranslations('Pages.Home.Sections.Prices.Card')

  const title = locale == 'en' ? (price.title_en ?? '-') : (price.title ?? '-')

  const image = price?.icon ? urlFor(price?.icon).url() : null

  return (
    <div className='w-full space-y-8 rounded-3xl border p-7'>
      <div className='flex w-full items-center justify-center gap-3'>
        {image ? (
          <Image
            className='size-20'
            src={image}
            alt={title}
            title={title}
            width={80}
            height={80}
          />
        ) : null}
        <h3 className='text-3xl font-bold'>{title}</h3>
      </div>

      <div className='space-y-3'>
        {price.priceGroups?.map((group) => {
          const label = locale == 'en' ? group.label_en : group.label
          const description = locale == 'en' ? group.description_en : group.description
          return (
            <div
              key={group._key}
              className={nunito.className}
            >
              <div className='flex items-center justify-between gap-4'>
                <div className='flex flex-col gap-0.5'>
                  <div className='flex items-center gap-1'>
                    <span className='text-lg font-bold'>
                      {label}
                      {group.duration ? '' : label && group.items?.length ? ':' : ''}
                    </span>
                    {group.duration && (
                      <span className='text-muted text-sm'>
                        ({group.duration}
                        {t('minutes')})
                      </span>
                    )}
                  </div>
                  <span className='text-muted text-sm leading-none'>{description}</span>
                </div>
                {group.price ? (
                  <div className='text-lg font-bold whitespace-nowrap'>{group.price} ₴</div>
                ) : null}
              </div>
              <ul className='mt-1 list-inside list-disc'>
                {group.items?.map((item) => {
                  const label = locale == 'en' ? item.label_en : item.label
                  return (
                    <li
                      className='flex items-center gap-2'
                      key={item._key}
                    >
                      <span className='text-xl'>•</span>
                      <div className='flex w-full items-center justify-between'>
                        <span>
                          <span className='text-lg'>{label}</span>{' '}
                          {item.duration && (
                            <span className='text-muted text-sm'>
                              ({item.duration}
                              {t('minutes')})
                            </span>
                          )}
                        </span>
                        <span className='text-lg font-bold'>{item.price} ₴</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      <div className='flex justify-center'>
        <EnrollButton className='w-55' />
      </div>
    </div>
  )
}

// const BlobIcon = () => {
//   return (
//     <svg
//       width='59'
//       height='55'
//       viewBox='0 0 59 55'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//     >
//       <path
//         fillRule='evenodd'
//         clipRule='evenodd'
//         d='M10.3479 1.0866C18.4918 -3.24718 25.2716 6.67076 33.813 8.33623C41.9816 9.929 53.6799 3.42052 57.7277 10.3251C61.7801 17.2376 52.3961 25.3866 48.3194 33.0806C44.2181 40.8211 43.0608 52.3092 34.5267 54.113C26.0316 55.9085 22.8294 44.878 16.6047 39.7837C10.8432 35.0685 1.56146 33.6304 0.350875 26.1432C-1.0816 17.2836 1.7955 5.63778 10.3479 1.0866Z'
//         fill='#FFDF18'
//       />
//     </svg>
//   )
// }
