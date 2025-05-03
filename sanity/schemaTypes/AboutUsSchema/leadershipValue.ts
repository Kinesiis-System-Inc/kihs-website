// sanity/schemaTypes/leadership.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const leadershipType = defineType({
  name: 'leadership',
  title: 'Leadership & Core Values',
  type: 'object',
  fields: [
    defineField({
      name: 'founders',
      title: 'Founders',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subTitle', title: 'Subtitle', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'icon',
                      title: 'Icon Type',
                      type: 'string',
                      options: {
                        list: ['facebook', 'twitter', 'linkedin']
                      }
                    }),
                    defineField({ name: 'url', title: 'URL', type: 'url' })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'administrators',
      title: 'Administrators',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subTitle', title: 'Subtitle', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'icon',
                      title: 'Icon Type',
                      type: 'string',
                      options: {
                        list: ['facebook', 'twitter', 'linkedin']
                      }
                    }),
                    defineField({ name: 'url', title: 'URL', type: 'url' })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
            defineField({
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              options: { hotspot: true }
            })
          ]
        })
      ]
    })
  ]
})
