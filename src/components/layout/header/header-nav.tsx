'use client'

import { useTranslations } from 'next-intl'

import { LangSelect } from './lang-select'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

interface HeaderNavProps {
  className?: string
}

export const HeaderNav = ({ className }: HeaderNavProps) => {
  const t = useTranslations('Common')

  return (
    <nav className={cn('border-muted-foreground flex h-15 items-center rounded-full border px-5', className)}>
      <ul className='flex w-full items-center xl:gap-6 max-xl:[&_a]:py-3 max-xl:[&_li]:w-full'>
        <li>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#about'
          >
            {t('HeaderNav.About')}
          </Link>
        </li>
        <li>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#teachers'
          >
            {t('HeaderNav.Teachers')}
          </Link>
        </li>
        <li>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#price'
          >
            {t('HeaderNav.Prices')}
          </Link>
        </li>
        <li>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#certificates'
          >
            {t('HeaderNav.GiftCertificates')}
          </Link>
        </li>
        <li className='xl:hidden'>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#feedback'
          >
            {t('HeaderNav.Feedback')}
          </Link>
        </li>
        <li className='xl:hidden'>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#faq'
          >
            {t('HeaderNav.Faq')}
          </Link>
        </li>
        <li>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#contacts'
          >
            {t('HeaderNav.Contacts')}
          </Link>
        </li>
        <li className='xl:hidden'>
          <Link
            className='hover:text-accent block text-lg font-semibold transition-colors'
            href='/#vacancy'
          >
            {t('HeaderNav.Vacancy')}
          </Link>
        </li>
        <li>
          <LangSelect className='max-xl:w-full' />
        </li>
      </ul>
    </nav>
  )
}
