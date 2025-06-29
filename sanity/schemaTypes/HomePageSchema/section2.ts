// sanity/schemaTypes/section2.ts
import { defineType, defineField } from 'sanity'

export const section2Type = defineType({
  name: 'section2',
  title: 'Section 2 - Services Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text'
    }),
    defineField({
      name: 'services',
      title: 'Service Buttons',
      type: 'array',
      of: [
        defineField({
          name: 'service',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'icon', title: 'Icon (image)', type: 'image', options: { hotspot: true },validation: Rule => Rule.required(), },
            { name: 'url', title: 'URL', type: 'string' }
          ]
        })
      ]
    })
  ]
})
