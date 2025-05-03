// sanity/schemaTypes/home.ts
import { defineType, defineField } from 'sanity'

export const contactUsType = defineType({
  name: 'contactus',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'contactUsSection1',
      title: 'Contact Us Section 1',
      type: 'contactUsSection1'
    }),
    defineField({
      name: 'contactUsSection2',
      title: 'Contact Us Section 2',
      type: 'contactUsSection2'
    }),
    defineField({
      name: 'contactUsSection3',
      title: 'Contact Us Section 3',
      type: 'contactUsSection3'
    }),
    defineField({
      name: 'contactUsSection4',
      title: 'Contact Us Section 4',
      type: 'contactUsSection4'
    }),
    defineField({
      name: 'contactUsSection5',
      title: 'Contact Us Section 5',
      type: 'contactUsSection5'
    }),
    defineField({
      name: 'contactUsSection6',
      title: 'Contact Us Section 6',
      type: 'contactUsSection6'
    }),
    defineField({
      name: 'contactUsSection7',
      title: 'Contact Us Section 7',
      type: 'contactUsSection7'
    }),
    defineField({
      name: 'contactUsSection8',
      title: 'Contact Us Section 8',
      type: 'contactUsSection8'
    })
  ]
})
