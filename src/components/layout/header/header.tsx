import { EnrollButton } from '../../common/enroll-button'
import { Logo } from '../../logo'

import { HeaderNav } from './header-nav'
import { MobileHeaderNav } from './mobile-header-nav'

export const Header = () => {
  return (
    <header className='bg-background sticky top-0 z-50 h-(--header-height) shadow-md/5'>
      <div className='container flex items-center justify-between gap-4'>
        <Logo className='relative z-100' />

        <HeaderNav className='max-xl:hidden' />
        <MobileHeaderNav className='xl:hidden' />

        <EnrollButton className='w-40 max-xl:hidden xl:w-50' />
      </div>
    </header>
  )
}
