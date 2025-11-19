import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FaqListItem {
  Title: string
  Content: string
}

export const FaqSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Faq')

  const list = t.raw('List') as FaqListItem[]

  return (
    <Section
      className='max-w-4xl'
      id='faq'
    >
      <H2 className='text-center'>{t('Title')}</H2>

      <Accordion
        className='mt-13 space-y-3'
        type='single'
        collapsible
      >
        {list.map((item) => (
          <AccordionItem
            className='border-b-0'
            key={item.Title}
            value={item.Title}
          >
            <AccordionTrigger className='items-center rounded-full border bg-[#F4F4F4] px-7 font-medium md:text-lg'>
              {item.Title}
            </AccordionTrigger>
            <AccordionContent className='mt-4 px-7 text-base'>
              <span dangerouslySetInnerHTML={{ __html: item.Content }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
