import {defineField , defineType} from "sanity"


export const insuranceAndBilling = defineType({
	name : "insuranceAndBilling",
	title : "Insurance And Billing",
	type : "object",
	fields : [
		defineField({
			name : "title",
			title : "Title",
			type : "string"
		}),
		defineField({
			name : "description",
			title : "Description",
			type : "text"
		}),
		defineField({
			name : "details",
			title : "Detail Section",
			type : "object",
			fields : [
				defineField({
					name : "detailsTItle",
					title : "Details Title",
					type : "string",
				}),
				defineField({
					name : "allDetails",
					title : "All Details",
					type : "array",
					of : [
						{
							type : "object",
							fields : [
								defineField({
									name : "label",
									title : "Label",
									type : "string"
								}),
								defineField({
									name : "value",
									title : "Value",
									type : "string"
								})
							]
						}
					]
				})
			]
		}),
		defineField({
			name : "coverImage",
			title : "Cover Image",
			type : "image",
			fields : [
				defineField({
					name : "alt",
					title : "Alt",
					type : "string"
				})
			]
		}),
		defineField({
			name : "table",
			title : "Table",
			type : "object",
			fields : [
				defineField({
					name : "title",
					title : "Title",
					type : "string"
				}),
				defineField({
					name : "tableContent",
					title : "Table Content",
					type : "array",
					of : [
						{
							type : "object",
							fields : [
								defineField({
									name : "tableName",
									title : "Table Name",
									type : "string"
								}),
								defineField({
									name : "tableValues",
									title : "Table Values",
									type : "array",
									of : [{
										type : "object",
										fields : [
											defineField({
												name : "companyName",
												title : "Company Name",
												type : "string"
											}),
											defineField({
												name : "companyLogo",
												title : "Company Logo",
												type : "image",
												fields : [{type : "string" , name : "alt" , title : "Alt"}]
											})
										]
									}]
								})
							]
						}
					]
				})
			]
		}),
		defineField({
			name : "images",
			title : "Images",
			type : "array",
			of : [
				{
					type : "image",
					fields : [{type : "string" , name : "alt" , title : "Alt"}]
				}
			]
		})
	]
})