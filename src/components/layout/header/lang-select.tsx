'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'use-intl'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname, useRouter } from '@/i18n/navigation'
import { type Locale, routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

interface LangSelectProps {
  className?: string
}

export const LangSelect = ({ className }: LangSelectProps) => {
  const t = useTranslations('Common.Placeholders')
  const router = useRouter()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale as Locale })
    })
  }

  return (
    <Select
      value={locale}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger
        aria-label={t('LangSelect')}
        className={cn('w-14 border-none px-0 text-base font-semibold', className)}
        disabled={isPending}
      >
        <SelectValue placeholder={t('LangSelect')} />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem
            key={locale}
            value={locale}
            disabled={isPending}
          >
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
