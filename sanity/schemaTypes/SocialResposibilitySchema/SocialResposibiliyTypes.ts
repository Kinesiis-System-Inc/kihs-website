// schemas/socialResponsibilityPage.ts
import { defineType, defineField } from 'sanity'

export const socialResponsibilityPage = defineType({
  name: 'socialResponsibilityPage',
  title: 'Social Responsibility Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'initiatives',
      title: 'Initiatives',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'initiativeItem',
          title: 'Initiative Item',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'description',
              title: 'Description (HTML allowed)',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Call to Action Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Call to Action Description',
      type: 'text',
    }),
    defineField({
      name: 'ctaImage',
      title: 'Call to Action Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'accessImage',
      title: 'Access Section Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'accessTitle',
      title: 'Access Title',
      type: 'string',
    }),
    defineField({
      name: 'accessSubTitle',
      title: 'Access SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'accessDescription',
      title: 'Access Section Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
