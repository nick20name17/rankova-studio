import type { HtmlHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type SectionProps = HtmlHTMLAttributes<HTMLDivElement>

export const Section = ({ className, ...props }: SectionProps) => {
  return (
    <section
      className={cn('container mt-15 md:mt-30', className)}
      {...props}
    />
  )
}
