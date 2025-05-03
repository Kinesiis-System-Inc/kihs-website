import { defineType, defineField, defineArrayMember } from 'sanity'

export const contactUsSection8 = defineType({
  name: 'contactUsSection8',
  title: 'Contact Us Section 8',
  type: 'object',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Contact Us'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Get in Touch'
    }),
    defineField({
      name: 'servicesList',
      title: 'List of Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Submit'
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Toast Message',
      type: 'string',
      initialValue: 'Email sent successfully!'
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Toast Message',
      type: 'string',
      initialValue: 'Email sending failed!'
    }),
  ]
})
