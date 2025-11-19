import Image from 'next/image'

import { Section } from '@/components/common/section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export const PhotosSection = () => {
  return (
    <Section className='mt-5 overflow-x-hidden'>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <div className='flex items-center justify-end gap-4'>
          <CarouselPrevious className='static translate-0' />
          <CarouselNext className='static translate-0' />
        </div>
        <CarouselContent className='mt-13'>
          {Array.from({ length: 11 }).map((_, index) => {
            return (
              <CarouselItem
                className='h-100 md:basis-1/2'
                key={index}
              >
                <Image
                  className='size-full rounded-4xl object-cover object-top'
                  width={6}
                  unoptimized
                  height={480}
                  quality={100}
                  src={`/home/photos/${index + 1}.png`}
                  alt='Feedback'
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </Section>
  )
}
