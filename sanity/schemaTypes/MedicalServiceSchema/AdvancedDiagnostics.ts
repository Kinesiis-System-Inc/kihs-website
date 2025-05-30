import {defineType , defineField} from "sanity"


export const advancedDiagnostics = defineType({
    name : "advancedDiagnostics",
    title : "Advanced Diagnostics",
    type : "object",
    fields : [
        defineField({
             name: "video",
             title: "Video (WebM only)",
             type: "file",
             options: {
                accept: "video/webm",
             },
            description: "Upload a .webm video file here.",
    }),
    ]
})