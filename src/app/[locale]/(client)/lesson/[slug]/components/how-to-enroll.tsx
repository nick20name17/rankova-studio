import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { nunito } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const HowToEnroll = async () => {
  const t = await getTranslations('Pages.Lesson.Sections.HowToEnroll')
  return (
    <Section>
      <H2 className='text-center'>{t('Title')}</H2>

      <div className='mt-26 grid gap-x-12 gap-y-26 max-sm:justify-center sm:grid-cols-2 lg:grid-cols-4'>
        {[1, 2, 3, 4].map((index) => (
          <EnrollCard
            key={index}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}

const EnrollCard = ({ index }: { index: number }) => {
  return (
    <div className='relative text-center max-sm:max-w-70'>
      <div
        className={cn(
          nunito.className,
          'text-accent/50 absolute top-[31%] left-1/2 -z-1 -translate-1/2 text-[222px] font-black'
        )}
      >
        {index}
      </div>
      <div className={cn(nunito.className, 'text-lg font-semibold uppercase')}>ЗАЛИШТЕ ЗАЯВКУ</div>
      <p className='text-muted-foreground mt-6'>
        Заповнюєте форму і очікуєте на дзвінок. Узгоджуєте час пробного заняття.
      </p>
    </div>
  )
}
