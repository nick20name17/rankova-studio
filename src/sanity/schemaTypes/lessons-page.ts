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
    }),

    defineField({
      name: 'lessonFeedbackSection',
      type: 'feedbackSection'
    }),

    defineField({
      name: 'howItWorks',
      type: 'howItWorksSection'
    }),

    defineField({
      name: 'prices',
      type: 'array',
      of: [{ type: 'priceSection' }]
    })
  ]
})

export const lessonFeedbackSection = defineType({
  name: 'feedbackSection',
  title: 'Lesson Feedback Section',
  type: 'object',
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
    })
  ]
})

export const howItWorksSection = defineType({
  name: 'howItWorksSection',
  title: 'How It Works Section',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true, accept: 'image/*' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description1',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description1_en',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description2',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description2_en',
      type: 'text',
      validation: (rule) => rule.required()
    })
  ]
})
