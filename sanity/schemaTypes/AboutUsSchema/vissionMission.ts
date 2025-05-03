import { defineType, defineField, defineArrayMember } from 'sanity'

export const visionMissionType = defineType({
  name: 'visionMission',
  title: 'Vision & Mission',
  type: 'object',
  fields: [
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string'
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'text'
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string'
    }),
    defineField({
      name: 'missionStatements',
      title: 'Mission Statements',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'commitmentTitle',
      title: 'Commitment Title',
      type: 'string'
    }),
    defineField({
      name: 'commitmentDescription',
      title: 'Commitment Description',
      type: 'text'
    }),
    defineField({
      name: 'commitmentImage',
      title: 'Commitment Image',
      type: 'image',
      options: { hotspot: true }
    })
  ]
})