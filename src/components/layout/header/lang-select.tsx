'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useLocale, useTranslations } from 'use-intl'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
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
  const params = useParams()

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: newLocale }
      )
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
