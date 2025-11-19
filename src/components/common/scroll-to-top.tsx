'use client'

import { useEffect, useState } from 'react'

import { Button } from '../ui/button'

import { cn } from '@/lib/utils'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        'invisible fixed right-10 bottom-10 scale-50 opacity-0 transition-[opacity_transform] [&_svg]:size-8!',
        visible && 'visible scale-100 opacity-100'
      )}
      size='icon'
      variant='outline'
    >
      <svg
        width='34'
        height='42'
        viewBox='0 0 34 42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.75 40.75L16.75 0.749999M16.75 0.749999L0.75 15.75M16.75 0.749999L32.75 15.75'
          stroke='#231F20'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Button>
  )
}
