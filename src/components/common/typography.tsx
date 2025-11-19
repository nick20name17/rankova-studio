import type { HtmlHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type HedingProps = HtmlHTMLAttributes<HTMLHeadingElement>

export const H2 = ({ className, ...props }: HedingProps) => {
  return (
    <h2
      className={cn('text-2xl font-bold md:text-4xl', className)}
      {...props}
    >
      {props.children}
    </h2>
  )
}
