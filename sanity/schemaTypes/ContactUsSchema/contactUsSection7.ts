import { defineType, defineField } from 'sanity'

export const contactUsSection7 = defineType({
  name: 'contactUsSection7',
  title: 'Contact Us Section 7',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Contact Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Contact Us:'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'extensionNote',
      title: 'Extension Note',
      type: 'string'
    }),
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'string'
    })
  ]
})
