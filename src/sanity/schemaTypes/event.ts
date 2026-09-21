//philotimo event schema

//name is internal
//title is external

import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name the event something memorable!',
      placeholder: 'Marvin\'s Magical Event',
      validation: Rule => Rule.required().error('A name for the event is required.'),
    }),
     defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Add all the relevant details about the event including the theme, dress code, menu, etc.',
      placeholder: 'Join us for an evening of magic and mystery! \n\nDress code: Formal attire with a touch of whimsy. \n\nMenu: A delectable selection of gourmet dishes and enchanting desserts.',
      validation: Rule => Rule.required().error('A description for the event is required.'),
    }),
     defineField({
      name: 'datetime',
      title: 'Date and Time',
      type: 'datetime',
      description: 'The date and time of the event.',
      validation: Rule => Rule.required().error('A date and time for the event is required.'),
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'number',
      description: 'If there is a cost associated with the event, include it here. Price is in CAD.',
      validation: Rule => Rule.positive().required().error('A positive cost for the event is required.'),
    }),
     defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the event.',
      validation: Rule => Rule.required().error('A location for the event is required.'),
    }),
     defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'media' }] }],
      description: 'Any media associated with the event. For a future event, include promotionals. For a past event, include photos and videos.',
    }),
  ],
})