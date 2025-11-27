'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

import { HeaderNav } from './header-nav'
import { SocialLinks } from '@/components/common/social-links'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { PHONE_NUMBER } from '@/constants/app'
import { cn } from '@/lib/utils'
import { formatPhone } from '@/utils/format'

interface MobileHeaderNavProps {
  className?: string
}

export const MobileHeaderNav = ({ className }: MobileHeaderNavProps) => {
  const [open, setOpen] = useState(false)
  const t = useTranslations('Pages.Home')

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button
          title='Mobile menu'
          className={cn('cursor-pointer rounded-full transition-transform hover:scale-95', className)}
          variant='outline'
          size='icon'
        >
          {open ? (
            <svg
              className='size-8 cursor-pointer'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M32.9999 11.0001L11 33M10.9999 11L32.9998 32.9999'
                stroke='#3E3E3E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              className='size-8 cursor-pointer'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M26.75 25.0978V0.75C26.75 0.75 32.75 3.06884 32.75 10.0254M18.75 3.06884H0.75M18.75 12.3442H0.75M8.75 21.6196H0.75M26.75 27.1848C26.75 30.2596 24.064 32.75 20.75 32.75C17.436 32.75 14.75 30.2572 14.75 27.1848C14.75 24.1123 17.436 21.6196 20.75 21.6196C24.064 21.6196 26.75 24.1123 26.75 27.1848Z'
                stroke='#3E3E3E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        className='top-(--header-height) flex h-[calc(100vh-var(--header-height))] w-[100.5%] sm:w-80 [&_.close-btn]:hidden'
        overlayClassName='z-10!'
      >
        <SheetHeader className='mt-10'>
          <SheetTitle className='text-center text-xl font-bold'>{t('Title')}</SheetTitle>
        </SheetHeader>

        <div className='flex-1 overflow-y-auto px-9 py-10'>
          <HeaderNav
            onLinkClick={() => setOpen(false)}
            className='h-auto border-none p-0 [&_ul]:flex-col [&_ul]:items-start'
          />
          <Link
            className='mt-10 block text-lg font-bold hover:underline'
            href={`tel:${PHONE_NUMBER}`}
          >
            {formatPhone(PHONE_NUMBER)}
          </Link>

          <SocialLinks className='mt-6 gap-4' />
        </div>
      </SheetContent>
    </Sheet>
  )
}
