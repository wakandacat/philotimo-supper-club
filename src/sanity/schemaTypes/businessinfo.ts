//philotimo schema for business info including contacts, socials

//name is internal
//title is external
import {
  FaXTwitter,
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from 'react-icons/fa6'
import {MdMail} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export const businessInfoType = defineType({
  name: 'businessInfo',
  title: 'Business Info',
  type: 'document',
  description: 'Business information including contacts and social media links. Ensure there is only one of these documents.',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('A name for the business is required.'),
      description: 'Your business name.',
      placeholder: 'Philotimo Supper Club',
    }),
     defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of your business.',
      placeholder: 'Your business description...',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Your business logo.',
      validation: Rule => Rule.required().error('A logo for the business is required.'),
      options: {
        hotspot: true
      }, fields: [
        defineField({
            name: 'alttext',
            title: 'Alt Text',
            type: 'string',
            description: 'Critical for accessibility of the website. Briefly describe the media content for search engines and for the visually impaired.',
            placeholder: 'Philotimo Supper Club Logo',
            validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO purposes.'),
        }),
        ],
    }),
     defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Your business location.',
      validation: Rule => Rule.required().error('A location for the business is required.'),
    }),
     defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Your business phone number.',
      placeholder: '123-456-7890',
    }),
     defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Your business email address.',
      placeholder: 'yourbusiness@email.com',
      validation: Rule => Rule.required().email().error('A valid email address is required.'),
    }),
    //list of social media links here
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'object',
      description: 'Your social media links.',
      fieldsets: [
        {name: 'social', title: 'Social media handles',}
      ],
      fields: [
        {
          title: 'Twitter',
          name: 'twitter',
          type: 'url',
          fieldset: 'social',
          icon: FaXTwitter
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
          fieldset: 'social',
          icon: FaInstagram
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'url',
          fieldset: 'social',
          icon: FaFacebook
        },
        {
          title: 'TikTok',
          name: 'tiktok',
          type: 'url',
          fieldset: 'social',
          icon: FaTiktok
        },
        {
          title: 'Spotify',
          name: 'spotify',
          type: 'url',
          fieldset: 'social',
          icon: FaSpotify
        },
        {
          title: 'YouTube',
          name: 'youtube',
          type: 'url',
          fieldset: 'social',
          icon: FaYoutube
        }
      ]
    }),
  ],
})