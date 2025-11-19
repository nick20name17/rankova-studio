import { useTranslations } from 'next-intl'

import { Button, type ButtonProps } from '../ui/button'

import { Link } from '@/i18n/navigation'

export const EnrollButton = (props: ButtonProps) => {
  const t = useTranslations('Common')
  return (
    <Button
      variant='accent'
      {...props}
      asChild
    >
      <Link
        href='https://n814279.alteg.io/company/764262/record-type?o='
        target='_blank'
      >
        {t('Enroll')}
      </Link>
    </Button>
  )
}
