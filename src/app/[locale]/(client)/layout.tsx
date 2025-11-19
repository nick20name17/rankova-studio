import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header/header'

const ClientLayout = async ({ children }: LayoutProps<'/[locale]'>) => {
  return (
    <>
      <Header />
      <main className='flex-1'> {children}</main>
      <Footer />
    </>
  )
}

export default ClientLayout
