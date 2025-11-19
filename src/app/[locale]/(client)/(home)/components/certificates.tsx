import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import { Section } from '@/components/common/section'
import { H2 } from '@/components/common/typography'
import { Button } from '@/components/ui/button'

export const CertificatesSection = async () => {
  const t = await getTranslations('Pages.Home.Sections.Certificates')

  return (
    <Section
      className='flex items-center justify-between gap-10 max-lg:flex-col-reverse'
      id='certificates'
    >
      <Button
        className='lg:hidden'
        variant='accent'
        asChild
      >
        <Link
          target='_blank'
          href='https://o2102.alteg.io/loyalty'
        >
          {t('Buy')}
        </Link>
      </Button>
      <Image
        className='shrink-0 max-md:w-[80%]'
        unoptimized
        width={520}
        height={380}
        quality={100}
        src='/home/certificates.png'
        alt='Certificates'
      />
      <div>
        <H2>{t('Title')}</H2>
        <p className='mt-6 md:text-lg'>{t('Text')}</p>
        <Button
          className='mt-10 max-lg:hidden'
          variant='accent'
          asChild
        >
          <Link
            target='_blank'
            href='https://o2102.alteg.io/loyalty'
          >
            {t('Buy')}
          </Link>
        </Button>
      </div>
    </Section>
  )
}
