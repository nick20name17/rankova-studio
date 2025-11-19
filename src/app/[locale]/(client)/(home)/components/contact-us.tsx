import { getTranslations } from 'next-intl/server'

import { ContactUsForm } from './contact-us-form'
import { H2 } from '@/components/common/typography'

export const ContactUsSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.ContactUs')

  return (
    <section
      className='relative mt-30 flex h-188 flex-col items-center justify-center bg-cover bg-left bg-no-repeat'
      style={{ backgroundImage: `url('/home/contact-us.svg')` }}
    >
      <div className='container'>
        <H2 className='text-center'>{t('Title')}</H2>

        <ContactUsForm />
      </div>
    </section>
  )
}
