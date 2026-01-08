import { getTranslations } from 'next-intl/server'

import { AboutUsVideo } from './video'
import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'

export const AboutUs = async () => {
  const t = await getTranslations('Pages.Home.Sections.AboutUs')
  return (
    <Section>
      <H2 className='text-center'>{t('Title')}</H2>
      <AboutUsVideo />
    </Section>
  )
}
