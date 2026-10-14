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
      type: 'internationalizedArrayString',
      description: 'The title for the hero section of the homepage. ex.: Welcome to the Greek Table',
      validation: Rule => Rule.required().error('A hero title for the homepage is required.'),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'internationalizedArrayText',
      description: 'The subtitle for the hero section of the homepage. ex.: Experience the magic of Greek cuisine.',
      validation: Rule => Rule.required().error('A hero subtitle for the homepage is required.'),
    }),
     defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference', 
      to: [{ type: 'media' }],
      description: 'The image for the hero section of the homepage..',
      validation: Rule => Rule.required().error('A hero image for the homepage is required.'),
    }),
     defineField({
      name: 'introText',
      title: 'WWelcome Text',
      type: 'internationalizedArrayText',
      description: 'The welcome text for the homepage. ex.: Discover the flavors of Greece with our authentic cuisine.',
      validation: Rule => Rule.required().error('Welcome text for the homepage is required.'),
    }),
  ],
})