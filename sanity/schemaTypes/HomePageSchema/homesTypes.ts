// sanity/schemaTypes/home.ts
import { defineType, defineField } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'section1',
      title: 'Section 1',
      type: 'section1'
    }),
    defineField({
      name: 'section2',
      title: 'Key Services',
      type: 'section2'
    }),
    defineField({
      name: 'section3',
      title: 'New and Events',
      type: 'section3'
    }),
    defineField({
      name: 'aboutKihs',
      title: 'About KIHS',
      type: 'aboutKihs'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }]
    }),
  ]
})
