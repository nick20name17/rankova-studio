import Image from 'next/image'

import { EnrollButton } from '@/components/common/enroll-button'

interface HeroSectionProps {
  title: string
  description: string
  image: string
}

export const HeroSection = ({ title, description, image }: HeroSectionProps) => {
  return (
    <section className='flex h-[calc(100vh-var(--header-height))] items-center justify-between gap-5'>
      <div className='relative z-10 container flex flex-col'>
        <h1 className='max-w-160 text-4xl leading-tight font-bold md:text-5xl'>{title}</h1>
        <p className='mt-8'>{description}</p>

        <EnrollButton
          className='mt-8 w-50 md:mt-13'
          variant='default'
        />
      </div>
      <div className='absolute inset-0 w-full overflow-hidden rounded-b-[40px]'>
        {image ? (
          <Image
            fetchPriority='high'
            loading='eager'
            className='size-full object-cover object-top'
            src={image}
            alt={title}
            unoptimized
            quality={100}
            width={1200}
            height={630}
          />
        ) : null}
      </div>
    </section>
  )
}
