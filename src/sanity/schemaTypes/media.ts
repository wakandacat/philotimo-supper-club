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
      description: 'Internal label to help you find this in the media library. Visitors never see it.',
      validation: (Rule) => Rule.required().error('Give this media item a name so you can find it later.'),
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'image',
      validation: Rule => Rule.required().error('Image is required.'),
      options: {
        hotspot: true
    }, fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'internationalizedArrayString',
            description: 'A short caption for the image. Whatever you want. ex.: Little Vegas was the life of the party!',
        }),
        defineField({
            name: 'alttext',
            title: 'Alt Text',
            type: 'internationalizedArrayString',
            description: 'Critical for accessibility of the website. Briefly describe the media content for search engines and for the visually impaired. ex.: A small white cat sitting on a wooden table.',
            validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO purposes.'),
        }),
        ],
    })
    ],
    preview: {
      select: { title: 'name', media: 'file' },
      prepare: ({ title, media }) => ({
        title: title ?? 'Untitled media',
        media,
      }),
    },
})