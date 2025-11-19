import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export const StorySection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Story')
  const t2 = await getTranslations('Common.Placeholders')

  return (
    <Section
      className='container ml-0 flex gap-8 pl-0 max-lg:flex-col-reverse lg:items-start'
      id='about'
    >
      <div className='relative shrink-0'>
        <div className='absolute top-[12%] left-[10%] flex items-center justify-center'>
          <span className='absolute top-[55%] left-1/2 z-10 -translate-1/2 font-bold md:text-2xl lg:text-3xl'>
            {t('Names.Oleksiy')}
          </span>
        </div>
        <div className='absolute top-[16%] right-[21%] flex items-center justify-center md:top-[21%] md:right-[28%]'>
          <span className='absolute top-[55%] left-1/2 z-10 -translate-1/2 font-bold md:text-2xl lg:text-3xl'>
            {t('Names.Max')}
          </span>
          <BlobIcon1 className='max-lg:w-30 max-md:w-22 max-sm:w-17' />
        </div>
        <div className='absolute right-[23%] bottom-[20%] flex items-center justify-center md:bottom-[25%]'>
          <span className='absolute top-[55%] left-1/2 z-10 -translate-1/2 font-bold md:text-2xl lg:text-3xl'>
            {t('Names.Yana')}
          </span>
          <BlobIcon2 className='max-lg:w-25 max-md:w-17 max-sm:w-14' />
        </div>
        <Image
          src='/home/story.png'
          alt='Story'
          width={711}
          height={589}
          unoptimized
          className='object-cover object-top'
        />
      </div>
      <div className='mt-20 space-y-10 max-lg:px-4'>
        <H2>{t('Title')}</H2>
        <div className='space-y-3'>
          <p className='text-2xl font-medium'>{t('Founder')}</p>
          <p className='text-muted-foreground mt-3 text-sm'>{t('Description')}</p>
        </div>
        <Collapsible>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down mb-4 flex flex-col gap-1.5 space-y-3 overflow-hidden text-sm transition-all'>
            <p>{t('FullStory.Paragraph1')}</p>
            <p>{t('FullStory.Paragraph2')}</p>
            <p>{t('FullStory.Paragraph3')}</p>
          </CollapsibleContent>
          <CollapsibleTrigger className='group text-lg underline'>
            <span className='group-data-[state=open]:hidden'>{t2('ReadMore')}</span>
            <span className='group-data-[state=closed]:hidden'>{t2('ReadLess')}</span>
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </Section>
  )
}

const BlobIcon1 = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='131'
      height='85'
      viewBox='0 0 131 85'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M127.644 73.8053C118.764 84.6274 91.7083 72.2497 73.3655 73.7794C55.8235 75.2424 43.4785 91.2356 25.8962 82.291C8.29364 73.3362 13.9399 55.8769 10.3544 41.7242C6.74719 27.4858 -7.79566 8.75654 5.49027 1.74479C18.7157 -5.23501 40.7196 10.6457 59.7282 15.6668C77.3223 20.3143 96.7145 18.0641 109.855 29.313C125.404 42.6236 136.971 62.4404 127.644 73.8053Z'
        fill='#FFDF18'
      />
    </svg>
  )
}

const BlobIcon2 = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='110'
      height='68'
      viewBox='0 0 110 68'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.70333 21.2391C7.53752 11.2198 30.323 17.8335 44.6744 14.1921C58.3993 10.7096 66.4044 -3.99585 81.3113 1.03983C96.2354 6.08129 93.6951 21.1151 98.0975 32.2388C102.526 43.4298 116.109 56.8746 106.366 64.3471C96.668 71.7855 77.4943 61.6452 61.8919 60.0083C47.4505 58.4933 32.3479 62.8615 20.7024 55.3603C6.92247 46.4842 -4.42352 31.7611 1.70333 21.2391Z'
        fill='#FFDF18'
      />
    </svg>
  )
}
