import {defineType , defineField} from "sanity"


export const blogSchema = defineType({
	name : "blogs",
	title : "Blogs",
	type : "document",
	fields : [
		defineField({
			name : "title",
			title : "Title",
			type : "string"
		}),
		defineField({
			name : "excerpt",
			title : "Excerpt",
			type : "string"
		}),
		defineField({
			name : "slug",
			title : "Slug",
			type : "slug",
			options: {
				source: 'title',
				maxLength: 100,
			  },
		}),
		defineField({
			name : "mainImage",
			title : "Main Image",
			type : "image",
			options : {hotspot : true}
		}),
		defineField({
			name : "author",
			title : "Author",
			type : "reference",
			to : [{type : "doctor"}]
		}),
		defineField({
			name : "content",
			title : "Content",
			type : "content"
		})
	]
})

