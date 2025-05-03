// sanity/schemaTypes/section3.ts
import { defineType, defineField } from 'sanity'

export const section3Type = defineType({
  name: 'section3',
  title: 'Section 3 - Tabbed Info Section',
  type: 'object',
  fields: [
    defineField({
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        defineField({
          name: 'tab',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tab Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Announcements', value: 'Announcements' },
                  { title: 'Notices', value: 'Notices' },
                  { title: 'Events', value: 'Events' },
                  { title: 'Quick Links', value: 'Quick Links' }
                ],
              },
            }),
            defineField({
              name: 'items',
              title: 'Items in Tab',
              type: 'array',
              of: [
                defineField({
                  name: 'item',
                  type: 'object',
                  fields: [
                    defineField({ name: 'date', title: 'Date', type: 'date' }),
                    defineField({ name: 'isNew', title: 'Is New', type: 'boolean', initialValue: false }),
                    defineField({ name: 'info', title: 'Information', type: 'string' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.custom((tabs) => {
          if (!tabs) return true
          const titles = tabs.map((tab: any) => tab.title)
          const uniqueTitles = new Set(titles)
          return titles.length === uniqueTitles.size
            ? true
            : 'Each tab title must be unique (e.g., only one "Announcements" allowed)'
        }),
    }),
  ],
})
