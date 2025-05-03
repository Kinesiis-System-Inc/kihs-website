import { defineField, defineType } from 'sanity'

export const jobPosting = defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
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
      name: 'jobCategory', 
      title: 'Job Category',
      type: 'string',
      options: {
        list: [
          { title: 'Doctors', value: 'Doctors' },
          { title: 'Nurses', value: 'Nurses' },
          { title: 'Management', value: 'Management' },
          { title: 'Development', value: 'Development' },
          { title: 'Administration', value: 'Administration' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }), 
      defineField({
        name: 'degree',
        title: 'Required Degree',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'isNew',
        title: 'Join Immediately?',
        type: 'boolean',
        initialValue: false,
      }),   
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Sangli, Maharashtra',
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      initialValue: 'Full-Time',
    }),
    defineField({
      name: 'description',
      title: 'Job Summary Description',
      type: 'text',
    }),
    defineField({
      name: 'whatYouWillDo',
      title: 'What You Will Do',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'expectations',
      title: 'Expectations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
