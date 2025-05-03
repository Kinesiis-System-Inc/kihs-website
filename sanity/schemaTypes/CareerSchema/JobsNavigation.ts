import { defineField, defineType } from 'sanity'

export const jobPostingNav = defineType({
  name: 'jobPostingNav',
  title: 'Job Posting',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'jobCatagory',
      title: 'Job Category',
      type: 'string',
      options: {
        list: [
          { title: 'Doctors', value: 'Doctors' },
          { title: 'Nurses', value: 'Nurses' },
          { title: 'Management', value: 'Management' },
          { title: 'Development', value: 'Development' },
          { title: 'Administration', value: 'Administration' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'degree', title: 'Required Degree', type: 'string' }),
    defineField({ name: 'isNew', title: 'Join Immediately?', type: 'boolean' }),
  ]
})
