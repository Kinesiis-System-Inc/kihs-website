// sanity/schemaTypes/contactUsSection3.ts
import { defineField, defineType } from 'sanity'

export const contactUsSection3 = defineType({
  name: 'contactUsSection3',
  title: 'Contact Us Section 3',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Doctor Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        }
      ]
    })
  ]
})
