import {defineType , defineField} from "sanity"


export const facilitiesAndVisitor = defineType({
	name : "facilitiesAndVisitors",
	title : "Facilities And Visitors",
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