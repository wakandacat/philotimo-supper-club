//philotimo homepage

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The title for the hero section of the homepage.',
      placeholder: 'Welcome to the Greek Table',
      validation: Rule => Rule.required().error('A hero title for the homepage is required.'),
    }),
     defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'The subtitle for the hero section of the homepage.',
      placeholder: 'Experience the magic of Greek cuisine',
      validation: Rule => Rule.required().error('A hero subtitle for the homepage is required.'),
    }),
     defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      description: 'The introductory text for the homepage.',
      placeholder: 'Discover the flavors of Greece with our authentic cuisine.',
      validation: Rule => Rule.required().error('Intro text for the homepage is required.'),
    }),
  ],
})