import Link from 'next/link'

import { SOCIAL_LINKS } from '@/constants/app'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
}

export const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn('flex items-center justify-between gap-6', className)}>
      {SOCIAL_LINKS.map((item) => (
        <Link
          className='group relative'
          key={item.name}
          target='_blank'
          aria-label={item.name}
          href={item.href}
        >
          <div className='relative h-6 w-6'>
            <div className='absolute inset-0 transition-opacity group-hover:opacity-0 [&_svg]:size-9'>
              <item.icon />
            </div>
            <div className='absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 [&_svg]:size-9'>
              <item.activeIcon />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
