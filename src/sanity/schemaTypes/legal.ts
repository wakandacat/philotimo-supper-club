//philotimo terms and conditions

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const legalType = defineType({
  name: 'legal',
  title: 'Legal Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'internationalizedArrayString',
      validation: Rule => Rule.required().error('A title for the legal page is required.'),
    }),
    defineField({
      name: 'termsText',
      title: 'Terms and Conditions',
      type: 'internationalizedArrayText',
      validation: Rule => Rule.required().error('The terms and conditions section is required.'),
    }),
  ],
})