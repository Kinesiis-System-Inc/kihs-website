import { defineType, defineField, defineArrayMember } from 'sanity'

export const ourJourneyType = defineType({
  name: 'ourJourney',
  title: 'Our Journey',
  type: 'object',
  fields: [
    defineField({
      name: 'nabhImage',
      title: 'NABH Logo Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Hero Image (KIHS Building)',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'statItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Stat Title (e.g. 20K)',
              type: 'string'
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle (e.g. Happy customers)',
              type: 'string'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string'
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text'
    }),
    defineField({
      name: 'historyTitle',
      title: 'History Title',
      type: 'string'
    }),
    defineField({
      name: 'historyDescription',
      title: 'History Description',
      type: 'text'
    })
  ]
})
