import { defineField, defineType } from 'sanity'

export const priceItemType = defineType({
  name: 'priceItem',
  title: 'Price Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'label_en',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'duration',
      type: 'string',
      description: 'e.g., 50, 60'
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (rule) => rule.required()
    })
  ]
})

export const priceGroupType = defineType({
  name: 'priceGroup',
  title: 'Price Group',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'e.g., Абонементи'
    }),

    defineField({
      name: 'label_en',
      type: 'string',
      description: 'e.g., Абонементи (англійська)'
    }),

    defineField({
      name: 'duration',
      type: 'string',
      description: 'e.g., 50, 60'
    }),
    defineField({
      name: 'price',
      type: 'number'
    }),

    defineField({
      name: 'description',
      type: 'string',
      description: 'Приклад: вокал/фортепіано ( діти 3-7 років)'
    }),

    defineField({
      name: 'description_en',
      type: 'string',
      description: 'Приклад: вокал/фортепіано ( діти 3-7 років)'
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'priceItem' }]
    })
  ]
})

export const priceSectionType = defineType({
  name: 'priceSection',
  title: 'Price Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'title_en',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'icon',
      type: 'image',
      options: { hotspot: true, accept: 'image/*' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'priceGroups',
      type: 'array',
      of: [{ type: 'priceGroup' }],
      validation: (rule) => rule.required()
    })
  ]
})
