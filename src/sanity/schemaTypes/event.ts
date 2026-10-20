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
      name: 'title',
      title: 'Event Name',
      type: 'internationalizedArrayString',
      description: 'Name the event something memorable! ex.: Marvin\'s Magical Event',
      validation: Rule => Rule.required().error('A name for the event is required.'),
    }),
     defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayText',
      description: 'Add all the relevant details about the event including the theme, dress code, menu, etc. ex.: Join us for an evening of magic and mystery! \n\nDress code: Formal attire with a touch of whimsy. \n\nMenu: A delectable selection of gourmet dishes and enchanting desserts.',
      validation: Rule => Rule.required().error('A description for the event is required.'),
    }),
     defineField({
      name: 'datetime',
      title: 'Date and Time',
      type: 'datetime',
      options: {
        timeStep: 15,
        displayTimeZone: 'America/Toronto',
        allowTimeZoneSwitch: false,
      },
      description: 'The date and time of the event.',
      validation: Rule => Rule.required().error('A date and time for the event is required.'),
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'number',
      description: 'If there is a cost associated with the event, include it here.',
      validation: Rule => Rule.positive().precision(2).error('Please enter a valid cost for the event.'),
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
      description: 'Media associated with the event. For a future event, include promotionals. For a past event, include photos and videos.',
      validation: (Rule) => [
        Rule.min(1).error('Add at least one photo or video.'),
        Rule.unique().error('The same item is added twice.'),
      ],
    }),
  ],
  preview: {
    select: { title: 'title.0.value', subtitle: 'datetime' },
    prepare: ({ title, subtitle }) => ({
      title: title ?? 'Untitled event',
      subtitle: subtitle ? new Date(subtitle).toLocaleDateString('en-CA') : 'No date',
    }),
  },
})