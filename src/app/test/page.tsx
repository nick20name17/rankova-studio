import type { PriceSection } from '../../../sanity.types'

import { client } from '@/sanity/lib/client'

const Page = async () => {
  const PRICES_QUERY = `*[_type == "priceSection"] | order(orderRank)`
  const prices = (await client.fetch(PRICES_QUERY, {}, {})) as PriceSection[]

  return <pre>{JSON.stringify(prices, null, 2)}</pre>
}

export default Page
