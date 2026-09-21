//philotimo schema for images (and maybe videos)

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const mediaType = defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'image',
      validation: Rule => Rule.required().error('Image or video is required.'),
      options: {
        hotspot: true
    }, fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'A short caption for the image or video. Whatever you want.',
            placeholder: 'Little Vegas was the life of the party!'
        }),
        defineField({
            name: 'alttext',
            title: 'Alt Text',
            type: 'string',
            description: 'Critical for accessibility of the website. Briefly describe the media content for search engines and for the visually impaired.',
            placeholder: 'A small white cat sitting on a wooden table.',
            validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO purposes.'),
        }),
        ],
    })
    ],
})