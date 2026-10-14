//philotimo about page

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'About Title',
      type: 'internationalizedArrayString',
      description: 'The title for the about section of the page.',
      validation: Rule => Rule.required().error('A title for the about section is required.'),
    }),
     defineField({
      name: 'bannerText',
      title: 'Banner Text',
      type: 'internationalizedArrayString',
      description: 'The text that will appear on the hero banner of this page.',
      validation: Rule => Rule.required().error('Banner text for the about section is required.'),
    }),
     defineField({
      name: 'aboutText',
      title: 'The Supper Club Format',
      type: 'internationalizedArrayText',
      description: 'Information about how the supper club works.',
      validation: Rule => Rule.required().error('Information about the supper club is required.'),
    }),
     defineField({
      name: 'historyText',
      title: 'The Creation Story of the Supper Club',
      type: 'internationalizedArrayText',
      description: 'The history and vision of the supper club',
      validation: Rule => Rule.required().error('Information about the supper club is required.'),
    }),
     defineField({
      name: 'hostText',
      title: 'Host Text',
      type: 'internationalizedArrayText',
      description: 'The text for the host section of the about page.',
      validation: Rule => Rule.required().error('Host text for the about page is required.'),
    }),
      defineField({
      name: 'hostImage',
      title: 'Host Image',
      type: 'reference', 
      to: [{ type: 'media' }],
      description: 'The image for the host section.',
      validation: Rule => Rule.required().error('A host image is required.'),
    }),
      defineField({
      name: 'inspoText',
      title: 'Inspiration Text',
      type: 'internationalizedArrayText',
      description: 'The text for the inspiration section of the about page.',
      validation: Rule => Rule.required().error('Inspiration text for the about page is required.'),
    }),
     defineField({
      name: 'inspoImage',
      title: 'Inspiration Image',
      type: 'reference', 
      to: [{ type: 'media' }],
      description: 'The image for the inspiration section.',
      validation: Rule => Rule.required().error('An inspiration image is required.'),
    }),
  ],
})