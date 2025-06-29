// sanity/schemaTypes/section1.ts
import { defineType, defineField } from 'sanity'

export const section1Type = defineType({
  name: 'section1',
  title: 'Section 1',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Top Tagline (e.g., hospital name)',
      type: 'string'
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description Paragraph',
      type: 'text'
    }),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        defineField({
          name: 'button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'primary', title: 'Primary Style?', type: 'boolean' },
            { name: 'link', title: 'Link URL', type: 'string' }
          ]
        })
      ]
    }),
    defineField({
      name: 'marqueeItems',
      title: 'Marquee Items',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'desktopImage',
      title: 'Desktop Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    })
  ]
})
