import { getTranslations } from 'next-intl/server'

import { SocialLinks } from '../common/social-links'
import { Logo } from '../logo'

import { PHONE_NUMBER } from '@/constants/app'
import { Link } from '@/i18n/navigation'
import { formatPhone } from '@/utils/format'

export const Footer = async () => {
  const t = await getTranslations('Pages.Home')
  const t2 = await getTranslations('Common')

  return (
    <footer className='bg-background mt-15 border-t py-11 md:mt-30'>
      <div className='container flex items-start justify-between gap-6 max-md:flex-col max-sm:items-center sm:gap-10'>
        <div className='flex flex-col gap-6 sm:gap-10'>
          <Logo className='max-sm:mx-auto sm:-ml-6' />

          <p className='max-w-53 text-lg font-bold max-sm:text-center'>{t('Title')}</p>

          <Link
            className='text-muted hover:text-primary text-sm underline transition-colors max-sm:hidden'
            href='/'
          >
            {t2('Footer.PrivacyPolicy')}
          </Link>
        </div>

        <div>
          <h2 className='text-2xl font-medium max-sm:hidden'>{t2('Footer.Nav')}</h2>
          <ul className='mt-10 grid grid-cols-2 grid-rows-4 gap-10 gap-y-6.5 sm:gap-x-24'>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#about'
              >
                {t2('HeaderNav.About')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#teachers'
              >
                {t2('HeaderNav.Teachers')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent whitespace-nowrap transition-colors'
                href='/#certificates'
              >
                {t2('HeaderNav.GiftCertificates')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#prices'
              >
                {t2('HeaderNav.Prices')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#faq'
              >
                {t2('HeaderNav.Faq')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#feedback'
              >
                {t2('HeaderNav.Feedback')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#contacts'
              >
                {t2('HeaderNav.Contacts')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-accent transition-colors'
                href='/#vacancy'
              >
                {t2('HeaderNav.Vacancy')}
              </Link>
            </li>
          </ul>
        </div>

        <div className='pr-2 max-sm:w-full'>
          <h2 className='text-2xl font-medium max-sm:hidden'>{t2('Footer.Contacts')}</h2>
          <div className='mt-10 flex flex-col gap-y-6 max-sm:items-center md:gap-y-10'>
            <Link
              className='hover:text-accent transition-colors max-sm:hidden'
              href={`tel:${PHONE_NUMBER}`}
            >
              {formatPhone(PHONE_NUMBER)}
            </Link>

            <SocialLinks className='gap-10игт к mb-6 w-full max-sm:justify-center' />

            <Link
              className='text-muted hover:text-primary text-sm underline transition-colors sm:hidden'
              href='/'
            >
              {t2('Footer.PrivacyPolicy')}
            </Link>
            <Link
              className='hover:text-accent block underline transition-colors md:mt-4'
              href='https://www.instagram.com/design_with_anastasiia/?igsh=cGlqMHE1NGw1dHp3#'
              target='_blank'
            >
              {t2('Footer.Design')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
