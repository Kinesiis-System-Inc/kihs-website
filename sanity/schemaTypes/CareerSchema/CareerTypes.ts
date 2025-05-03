// sanity/schemaTypes/home.ts
import { defineType, defineField } from 'sanity'

export const careerType = defineType({
  name: 'careerPage',
  title: 'Career Page',
  type: 'document',
  fields: [
    defineField({
      name: 'jobPostingNav',
      title: 'Job Posting',
      type: 'jobPostingNav'
    }),
  ]
})
