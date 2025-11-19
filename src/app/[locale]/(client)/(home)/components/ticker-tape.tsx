import { getTranslations } from 'next-intl/server'
import Marquee from 'react-fast-marquee'

export const TickerTape = async () => {
  const t = await getTranslations('Pages.Home.Sections.TickerTape')

  return (
    <div className='bg-accent mt-8 h-7 overflow-hidden'>
      <Marquee
        autoFill
        speed={80}
        className='h-7'
      >
        <span className='px-5 font-medium'>{t('Text')}</span>
      </Marquee>
    </div>
  )
}
