import { getTranslations } from 'next-intl/server'

import { H2 } from '@/components/common/typography'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

export const VacancySection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Vacancy')
  const t2 = await getTranslations('Common.Placeholders')

  return (
    <section
      className='relative flex h-130 items-center justify-center bg-cover bg-right bg-no-repeat'
      style={{ backgroundImage: `url('/home/vacancy.svg')` }}
      id='vacancy'
    >
      <div className='inset-x-0 container flex max-w-6xl gap-6 px-20 max-lg:flex-col lg:items-center lg:justify-between'>
        <div className='max-w-3xl'>
          <H2>{t('Title')}</H2>
          <p className='mt-4 md:text-lg'>{t('Text')}</p>
        </div>
        <Button
          className='mt-4 w-60'
          asChild
        >
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSdsMVH2E9Xu6gYGB1gmVqC-ZhJbdA6k417PlQ6V6B1owDSlTg/viewform'
            target='_blank'
          >
            {t2('FillForm')}
          </Link>
        </Button>
      </div>
    </section>
  )
}
