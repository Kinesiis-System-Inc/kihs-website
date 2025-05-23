import {defineField , defineType} from "sanity"

export const contentType = defineType({
	name : "content",
	title : "Content",
	type : "object",
	fields : [
		defineField({
			name : "headingAndParas",
			title : "Heading and Paras",
			type : "array",
			of : [
				{
					type : "object",
					fields : [
						defineField({
							name : "heading",
							title : "Heading",
							type : "string"
						}),
						defineField({
							name : "paras",
							title : "Paras",
							type : "array",
							of : [
								{
									type : "text"
								}
							]
						})
					]
				}
			]
		})
	]
})