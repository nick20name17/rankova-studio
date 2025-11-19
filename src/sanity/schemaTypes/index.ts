import { type SchemaTypeDefinition } from 'sanity'

import { heroSection } from './hero-section'
import { lessonsPageType } from './lessons-page'
import { priceGroupType, priceItemType, priceSectionType } from './price-section'
import { teachersSection } from './teachers'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [lessonsPageType, heroSection, teachersSection, priceSectionType, priceGroupType, priceItemType]
}
