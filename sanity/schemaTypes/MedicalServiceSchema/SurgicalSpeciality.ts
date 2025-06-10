import { defineType, defineField } from "sanity";

export const surgicalSpecialties = defineType({
  name: "surgicalSpecialties",
  title: "Surgical Specialties",
  type: "object",
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
		name : "surgicalHighlights",
		title : "Surgical Highlights",
		type : "object",
		fields : [
			defineField({
				name : "title",
				title : "Title",
				type : "string"
			}),
			defineField({
				name : "highlights",
				title : "Highlights",
				type : "array",
				of : [{type : "string"}]
			})
		]
	}),
	defineField({
		name : "hospitalOffers",
		title : "Hospital's Facility",
		type : "object",
		fields : [
			defineField({
				name : "title",
				title : "Title",
				type : "string"
			}),
			defineField({
				name : "sections",
				title : "Sections",
				type : "array",
				of : [{type : "object",
					fields : [
						defineField({
							name : "sectionTitle",
							title : "Section Title",
							type : "string",
						}),
						defineField({
							name : "sectionPoints",
							title : "Section Points",
							type : "array",
							of : [{type : "string"}]
						})
					]
				}]
			})
		]
	})
  ]
});
