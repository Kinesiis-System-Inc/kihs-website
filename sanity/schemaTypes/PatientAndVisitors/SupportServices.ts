import {defineField , defineType} from "sanity"


export const supportServices  = defineType({
	name : "supportServices",
	title : "Support Services",
	type : "object",
	fields : [
		defineField({
			name : "title",
			title : "Title",
			type : "string"
		}),
		defineField({
			name : "subTitle",
			title : "Sub Title",
			type : "string"
		}),
		defineField({
			name : "titleAndPara",
			title : "Title and Para",
			type : "array",
			of : [
				{
					type : "object",
					fields : [
						{
							name : "title",
							title : "Title",
							type : "string",
						},
						{
							name : "para",
							title : "Para",
							type : "array",
							of : [{
								type : "string"
							}]
						}
					]
				}
			]
		}),
		defineField({
			name : "coverImage",
			title : "Cover Image",
			type : "image",
			fields : [{type : "string" , name : "alt" , title : "Alt"}],
			validation: Rule => Rule.required()
		})
	]
})