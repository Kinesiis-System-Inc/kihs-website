import { defineType, defineField } from "sanity";


// Main schema combining video and diagnostic types
export const advancedDiagnostics = defineType({
  name: "advancedDiagnostics",
  title: "Advanced Diagnostics",
  type: "document", // Use `document` if you want this editable via Sanity Studio root
  fields: [
    defineField({
        name : "sectionTitle",
        title : "Section Title",
        type : "string"
    }),
    defineField({
      name: "video",
      title: "Video (WebM only)",
      type: "file",
      options: {
        accept: "video/webm",
      },
      description: "Upload a .webm video file here.",
    }),
    defineField({
      name: "diagnosticTypes",
      title: "Diagnostic Categories",
      type: "array",
      of: [
        {type : "object",
            fields : [
                defineField({
                    name : "title",
                    title : "Type Name",
                    type : "string"
                }),
                defineField({
                    name : "procedures",
                    title : "Procedures",
                    type : "array",
                    of : [{type : "string"}]
                })
            ]

        }
      ],
    }),
  ],
});
