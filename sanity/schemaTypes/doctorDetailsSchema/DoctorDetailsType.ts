import { defineType, defineField } from 'sanity'

export const doctor = defineType({
  name: 'doctor',
  title: 'Doctor Details',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title/Position',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (optional)',
      type: 'string',
    }),
    defineField({
      name: 'timings',
      title: 'OPD Timings',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'timingItem',
          title: 'Timing Item',
          initialValue: [],
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  { title: 'Monday', value: 'Monday' },
                  { title: 'Tuesday', value: 'Tuesday' },
                  { title: 'Wednesday', value: 'Wednesday' },
                  { title: 'Thursday', value: 'Thursday' },
                  { title: 'Friday', value: 'Friday' },
                  { title: 'Saturday', value: 'Saturday' },
                  { title: 'Sunday', value: 'Sunday' },
                ],
                layout: 'dropdown', // Optional: default is dropdown anyway
              },
            },
            {
              name: 'timing',
              title: 'Timing',
              type: 'string',
            },
          ],
        },
      ],
    }),    
    defineField({
      name: 'education',
      title: 'Educational Tab Text',
      type: 'text',
    }),
    defineField({
      name: 'training',
      title: 'Training Tab Text',
      type: 'text',
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            { 
              name: 'icon', 
              type: 'string', 
              title: 'Icon', 
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' }
                ],
                layout: 'radio'
              }
            },
            { name: 'url', type: 'url', title: 'Profile URL' },
          ],
        }),
      ],
    }),
  ],
})
