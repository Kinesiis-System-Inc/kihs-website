import { defineType, defineField } from 'sanity'

export const contactUsSection5 = defineType({
  name: 'contactUsSection5',
  title: 'Contact Us Section 5 - Admin Contacts',
  type: 'object',
  fields: [
    defineField({
      name: 'adminContacts',
      title: 'Administrative Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'adminContact',
          fields: [
            { name: 'department', title: 'Department', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'email', title: 'Email', type: 'string' },
          ]
        }
      ]
    })
  ]
})
