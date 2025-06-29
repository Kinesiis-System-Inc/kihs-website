import { defineType, defineField, defineArrayMember } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'companyLinks',
      title: 'Company Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' })
          ]
        })
      ]
    }),
    defineField({
      name: 'pagesLinks',
      title: 'Pages Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' })
          ]
        })
      ]
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps URL',
      type: 'url'
    }),
    defineField({
      name: 'inquiries',
      title: 'Inquiries',
      type: 'object',
      fields: [
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' })
      ]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Platform Name', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon Image', type: 'image' }),
            defineField({ name: 'url', title: 'URL', type: 'url' })
          ]
        })
      ]
    })
  ]
})