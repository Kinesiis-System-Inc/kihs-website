import { defineType, defineField } from "sanity"

export const criticalCare = defineType({
	name : "criticalCare",
	title : "Critical Care ICU",
	type : "object",
	fields : [
		defineField({
			name : "sectionTitle",
			title : "Section Title",
			type : "string"
		}),
		defineField({
			name : "video",
			title : "Video (WebM only)",
			type : "file",
			options: {
				accept: "video/webm",
			  },
			  description: "Upload a .webm video file here.",
		}),
		defineField({
			name : "des",
			title : "Description",
			type : "string"
		}),
		defineField({
			name : "boldTitle",
			title : "Bold Title",
			type : "string"
		}),
		defineField({
			name : "icus",
			title : "ICUs",
			type : "object",
			fields : [
				defineField({
					name : "name",
					title : "ICU Name",
					type : "string"
				}),
				defineField({
					name : "features",
					title : "ICU Features",
					type : "array",
					of : [{type : "string"}]
				})
			]
		}),
		defineField({
			name : "equipment",
			title : "ICU Equipment",
			type : "array",
			of : [{type : "string"}]
		}),
		defineField({
			name : "specialFeatures",
			title : "Special Facilities",
			type : "array",
			of : [{type : "string"}]
		})
	]
})