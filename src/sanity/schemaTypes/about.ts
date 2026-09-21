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
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      description: 'The title for the about section of the page.',
      placeholder: 'philotimo definition',
      validation: Rule => Rule.required().error('A title for the about section is required.'),
    }),
     defineField({
      name: 'aboutSupperClub',
      title: 'About Supper Club',
      type: 'text',
      description: 'Information about the supper club.',
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
      name: 'inspoText',
      title: 'Inspiration Text',
      type: 'text',
      description: 'The text for the inspiration section of the about page.',
      placeholder: 'Inspired by Nikki\'s mother.',
      validation: Rule => Rule.required().error('Inspiration text for the about page is required.'),
    }),
      defineField({
      name: 'visionText',
      title: 'Vision Text',
      type: 'text',
      description: 'The text for the vision section of the about page.',
      placeholder: 'Our vision is to create an intergenerational event.',
      validation: Rule => Rule.required().error('Vision text for the about page is required.'),
    }),
  ],
})