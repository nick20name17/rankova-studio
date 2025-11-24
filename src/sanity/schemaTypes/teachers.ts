import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { defineField, defineType } from 'sanity'

export const teachersSection = defineType({
  name: 'teachersSection',
  title: 'Teachers Section',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'document' }),
    defineField({
      name: 'name',
      type: 'string',
      description: 'Ім’я викладача',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'name_en',
      type: 'string',
      description: 'Ім’я викладача (англійська)',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'expirience',
      description: 'Досвід викладача',
      type: 'number',
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
      name: 'music',
      description: 'Що для Вас музика?',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'music_en',
      description: 'Що для Вас музика? (англійська)',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'teaching',
      description: 'Що важливе у викладанні?',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'teaching_en',
      description: 'Що важливе у викладанні? (англійська)',
      type: 'text',
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'photo',
      type: 'image',
      options: { hotspot: true, accept: 'image/*' },
      validation: (rule) => rule.required()
    })
  ]
})
