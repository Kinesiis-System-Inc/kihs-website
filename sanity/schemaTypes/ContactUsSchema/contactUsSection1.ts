// sanity/schemaTypes/contactUsSection1.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const contactUsSection1 = defineType({
  name: 'contactUsSection1',
  title: 'Contact Us Section 1',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (Mobile)',
      type: 'string',
    }),
    defineField({
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contacts',
      title: 'Contact List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'contactItem',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } }),
          ]
        }),
      ]
    }),
  ]
})
