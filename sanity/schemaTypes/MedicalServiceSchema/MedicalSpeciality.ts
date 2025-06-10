import {defineType , defineField} from "sanity"

export const medicalSceciality = defineType({
	name : "medicalSpeciality",
	title : "Medical Speciality",
	type : "object",
	fields : [
		defineField({
			name : "sectionTitle",
			title : "Section Title",
			type : "string"
		}),
		defineField({
			name : "sectionImage",
			title : "Section Image",
			type : "image"
		}),
		defineField({
			name : "specialities",
			title : "Specialities",
			type : "array",
			of : [{type : "string"}]
		})
	]
})