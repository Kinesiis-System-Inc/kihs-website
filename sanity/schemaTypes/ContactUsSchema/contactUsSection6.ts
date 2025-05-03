import { defineType, defineField } from 'sanity'

export const contactUsSection6 = defineType({
  name: 'contactUsSection6',
  title: 'Contact Us Section 6 - Privacy Statement',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Privacy Statement'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
})
