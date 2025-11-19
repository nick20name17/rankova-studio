import { defineField, defineType } from 'sanity'

export const lessonsPageType = defineType({
  name: 'lessonsPage',
  title: 'Lessons Page',
  type: 'document',
  fields: [
    defineField({ name: 'meta_title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'meta_title_en', type: 'string', validation: (r) => r.required() }),

    defineField({
      name: 'slug',
      type: 'slug',
      validation: (r) => r.required(),
      options: { source: 'meta_title' }
    }),

    defineField({ name: 'meta_description', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'meta_description_en', type: 'string', validation: (r) => r.required() }),

    defineField({
      name: 'hero',
      type: 'heroSection'
    })
  ]
})
