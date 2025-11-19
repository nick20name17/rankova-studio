import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'h1',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'title_en',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description_en',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true, accept: 'image/*' },
      validation: (rule) => rule.required()
    })
  ]
})
