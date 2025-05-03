// sanity/schemaTypes/home.ts
import { defineType, defineField } from 'sanity'

export const aboutUsType = defineType({
  name: 'AboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'ourJourney',
      title: 'Our Journey',
      type: 'ourJourney'
    }),
    defineField({
      name: 'visionMission',
      title: 'Vision & Mission',
      type: 'visionMission'
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership & Value',
      type: 'leadership'
    }),
    defineField({
      name: 'serviceStandards',
      title: 'Service Standards',
      type: 'serviceStandards'
    }),
    defineField({
      name: 'stateOfTheArt',
      title: 'State of the Art Healthcare',
      type: 'stateOfTheArtHealthcare'
    })
  ]
})
