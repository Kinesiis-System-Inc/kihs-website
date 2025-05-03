import { defineType, defineField, defineArrayMember } from 'sanity'

export const stateOfTheArtType = defineType({
  name: 'stateOfTheArtHealthcare',
  title: 'State of the Art Healthcare',
  type: 'object',
  fields: [
    defineField({
      name: 'facilities',
      title: 'Facilities & Specialised Units',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'features',
          title: 'Feature List',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Text', type: 'text' }),
                defineField({
                  name: 'listItems',
                  title: 'List Items (optional)',
                  type: 'array',
                  of: [defineArrayMember({ type: 'string' })]
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'patientCare',
      title: 'Patient-Centric Care Features',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'features',
          title: 'Feature List',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Text', type: 'text' }),
                defineField({
                  name: 'listItems',
                  title: 'List Items (optional)',
                  type: 'array',
                  of: [defineArrayMember({ type: 'string' })]
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
        name:'bulletIcon',
        title:'Icon',
        type:'image',
        options:{hotspot:true}
    }),
  ]
})