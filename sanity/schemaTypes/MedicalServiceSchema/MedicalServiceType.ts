import { defineType , defineField } from "sanity"


export const MedicalServiceType = defineType({
    name : "medicalService",
    title : "Medical Services",
    type : "document",
    fields : [
        defineField({
            name : "advancedDiagnostics",
            type : "advancedDiagnostics",
            title : "Advanced Diagnostics"
        })
    ]
})