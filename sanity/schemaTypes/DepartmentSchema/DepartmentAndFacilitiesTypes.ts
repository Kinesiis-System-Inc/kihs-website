import { defineType, defineField, defineArrayMember } from 'sanity'

export const doctorsDepartments = defineType({
  name: 'doctorsDepartments',
  title: 'Departments and Facilities Available',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'departments',
      title: 'Departments List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Department Title',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Department Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'services',
              title: 'Services List',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
        }),
      ],
    }),
  ],
})
