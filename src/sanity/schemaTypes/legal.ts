//philotimo terms and conditions

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const legalType = defineType({
  name: 'legal',
  title: 'Legal Page Content',
  type: 'document',
  fields: [
    // defineField({ name: 'language', type: 'string', readOnly: true, hidden: true }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string'
    }),
    defineField({
      name: 'termsText',
      title: 'Terms and Conditions',
      type: 'text',
      description: 'Terms and conditions for the website.',
      placeholder: 'Terms and Conditions',
      validation: Rule => Rule.required().error('The terms and conditions section is required.'),
    }),
  ],
})