import { defineType, defineField } from 'sanity'

export const InpatientServices = defineType({
	name: 'inpatientServices',
	title: 'Inpatient Services',
	type: 'object',
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
			name : "services",
			title : "Services",
			type : "array",
			of : [
				{
					type : "object",
					fields : [
						{
							name : "serviceTitle",
							title : "Service's Title",
							type : "string"
						},
						{
							name : "servicePoints",
							title : "Service's Points",
							type : "array",
							of : [{type : "string"}]
						}
					]
				}
			]
		}),
		defineField({
			name : "imagesCollection",
			title : "Images Collection",
			type : "array",
			of : [{
				type : "image",
				fields : [{type : "string" , name : "alt" , title : "Alt Name"}]
			}]
		}),
	]
})
