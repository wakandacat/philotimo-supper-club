//philotimo about page

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page Content',
  type: 'document',
  fields: [
    // defineField({ name: 'language', type: 'string', readOnly: true, hidden: true }),
    defineField({
      name: 'title',
      title: 'About Title',
      type: 'string',
      description: 'The title for the about section of the page.',
      placeholder: 'About page',
      validation: Rule => Rule.required().error('A title for the about section is required.'),
    }),
     defineField({
      name: 'bannerText',
      title: 'Banner Text',
      type: 'string',
      description: 'The text that will appear on the hero banner of this page.',
      placeholder: 'Philotimo definition',
      validation: Rule => Rule.required().error('Banner text for the about section is required.'),
    }),
     defineField({
      name: 'aboutText',
      title: 'The Supper Club Format',
      type: 'text',
      description: 'Information about how the supper club works.',
      placeholder: 'Learn more about our supper club.',
      validation: Rule => Rule.required().error('Information about the supper club is required.'),
    }),
     defineField({
      name: 'historyText',
      title: 'The Creation Story of the Supper Club',
      type: 'text',
      description: 'The history and vision of the supper club',
      placeholder: 'Learn more about our supper club.',
      validation: Rule => Rule.required().error('Information about the supper club is required.'),
    }),
     defineField({
      name: 'hostText',
      title: 'Host Text',
      type: 'text',
      description: 'The text for the host section of the about page.',
      placeholder: 'Meet Nikki.',
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
      type: 'text',
      description: 'The text for the inspiration section of the about page.',
      placeholder: 'Inspired by Nikki\'s mother.',
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