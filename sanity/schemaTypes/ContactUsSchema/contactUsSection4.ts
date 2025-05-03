// sanity/schemas/contactUsSection4.ts
import { defineType, defineField } from 'sanity'

export const contactUsSection4 = defineType({
  name: 'contactUsSection4',
  title: 'Contact Us Section 4',
  type: 'object',
  fields: [
    defineField({
      name: 'getInTouchTitle',
      title: 'Get in Touch Title',
      type: 'string'
    }),
    defineField({
      name: 'getInTouchDescription',
      title: 'Get in Touch Description',
      type: 'text'
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactItem',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'numbers', title: 'Phone Numbers', type: 'array', of: [{ type: 'string' }] },
            { name: 'ext', title: 'Extension (optional)', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'hospitalHoursTitle',
      title: 'Hospital Hours Title',
      type: 'string'
    }),
    defineField({
      name: 'hospitalHoursDescription',
      title: 'Hospital Hours Description',
      type: 'text'
    }),
    defineField({
      name: 'hospitalHourList',
      title: 'Hospital Hour List',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'emergencyTitle',
      title: 'Emergency Title',
      type: 'string'
    }),
    defineField({
      name: 'emergencyDescription',
      title: 'Emergency Description',
      type: 'text'
    }),
    defineField({
      name: 'emergencyNumbers',
      title: 'Emergency Numbers',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'connectTitle',
      title: 'Connect With Us Title',
      type: 'string'
    }),
    defineField({
      name: 'connectDescription',
      title: 'Connect Description',
      type: 'text'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'social',
          fields: [
            { name: 'label', title: 'Platform Label', type: 'string' },
            { name: 'linkText', title: 'Link Text (Display)', type: 'string' },
            { name: 'url', title: 'Link URL', type: 'url' },
            { name: 'iconType', title: 'Icon Type', type: 'string' } // optional: use to render specific icons
          ]
        }
      ]
    })
  ]
})
