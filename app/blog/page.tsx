import Link from "next/link"
import Image from "next/image"
import { convertDateIntoString } from "@/libs/utils"
import { client, urlFor } from "@/sanity/sanity-utils"
import { blogQuery } from "@/sanity/lib/queries"

// This would be replaced with a Sanity client fetch in a real implementation
async function getLatestBlogPosts() {
  // Mock data for demonstration

  const blogs = await client.fetch(blogQuery)

    return blogs ? blogs : []

  // return [
  //   {
  //     _id: "1",
  //     title: "Exploring Generative AI in Content Creation",
  //     slug: "exploring-generative-ai-in-content-creation",
  //     publishedAt: "2023-08-24T00:00:00Z",
  //     excerpt:
  //       "Discover how to effectively use AI tools like ChatGPT for content creation while maintaining quality and authenticity.",
  //     mainImage: "/blogimg.png",
  //     author: {
  //       _id: "author1",
  //       name: "Lorem Ipsum",
  //       image: "/placeholder.svg?height=80&width=80",
  //       title: "Founder of SAAS Firm",
  //     },
  //   },
  //   {
  //     _id: "2",
  //     title: "The Future of Healthcare Technology",
  //     slug: "future-of-healthcare-technology",
  //     publishedAt: "2023-08-20T00:00:00Z",
  //     excerpt: "Explore the latest innovations in healthcare technology and how they're transforming patient care.",
  //     mainImage: "/blogimg.png",
  //     author: {
  //       _id: "author2",
  //       name: "Jane Smith",
  //       image: "/placeholder.svg?height=80&width=80",
  //       title: "Healthcare Technology Specialist",
  //     },
  //   },
  //   {
  //     _id: "3",
  //     title: "Improving Patient Experience Through Digital Solutions",
  //     slug: "improving-patient-experience-digital-solutions",
  //     publishedAt: "2023-08-15T00:00:00Z",
  //     excerpt: "Learn how digital solutions are enhancing the patient experience in modern healthcare settings.",
  //     mainImage: "/blogimg.png",
  //     author: {
  //       _id: "author3",
  //       name: "John Doe",
  //       image: "/placeholder.svg?height=80&width=80",
  //       title: "Digital Health Consultant",
  //     },
  //   },
  // ]
}

export default async function Blogs() {
  const posts = await getLatestBlogPosts()
  console.log("posts is " , posts)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src={urlFor(post.mainImage).url() || "/placeholder.svg?height=400&width=800"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{convertDateIntoString(post._createdAt)}</p>
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <Image
                    src={urlFor(post.author.image).url() || "/placeholder.svg?height=40&width=40"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}