// sanity/schemaTypes/contactUsSection2.ts
import { defineType, defineField } from 'sanity'

export const contactUsSection2 = defineType({
  name: 'contactUsSection2',
  title: 'Contact Us Section 2',
  type: 'object',
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'emergencySection',
      title: 'Emergency Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'emergencyContacts',
          title: 'Emergency Contacts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'number', title: 'Phone Number', type: 'string' }
              ]
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'locationTitle',
      title: 'Location Title',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'landmarkHeading',
      title: 'Landmark Heading',
      type: 'string',
    }),
    defineField({
      name: 'landmarks',
      title: 'Landmarks',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'mobileDescriptionTitle',
      title: 'Mobile Description Title',
      type: 'string'
    }),
    defineField({
      name: 'mobileDescriptionParagraphs',
      title: 'Mobile Description Paragraphs',
      type: 'array',
      of: [{ type: 'text' }]
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    })
  ]
})
