import { defineType, defineField, defineArrayMember } from 'sanity'

export const serviceStandardsType = defineType({
  name: 'serviceStandards',
  title: 'Service Standards',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string'
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'standards',
      title: 'Service Standards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'standard',
          title: 'Standard Item',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            })
          ]
        })
      ]
    })
  ]
})