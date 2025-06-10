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
        }),
        defineField({
            name : "criticalCare",
            type : "criticalCare",
            title : "Critical Care"
        }),
        defineField({
            name : "surgicalSpecialties",
            type : "surgicalSpecialties",
            title : "Surgical Specialties"
        }),
        defineField({
            name : "medicalSpeciality",
            type : "medicalSpeciality",
            title : "Medical Speciality"
        }),
    ]
})