import { defineType, defineField, defineArrayMember } from 'sanity'

export const department = defineType({ // Wrap the entire schema definition
    name: 'department',
    title: 'Department',
    type: 'document',
    fields: [
      defineField({ // Define the name field
        name: 'name',
        title: 'Department Name',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({ // Define the doctors array field
        name: 'doctors',
        // The original title "Doctors (references slug)" is slightly misleading
        // as the reference stores the document ID.
        title: 'Associated Doctors', // A clearer title
        type: 'array',
        of: [ // Define the types allowed in the array
          defineArrayMember({ // Define a single member of the array
            type: 'reference', // The type is a reference
            to: [{ type: 'doctor' }], // It references documents of type 'doctor'
          })
        ],
      }),
    ],
  });