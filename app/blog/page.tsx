import Link from "next/link"
import Image from "next/image"
import { convertDateIntoString } from "@/libs/utils"
import { client, urlFor } from "@/sanity/sanity-utils"
import { blogQuery } from "@/sanity/lib/queries"
import { BlogPost } from "@/libs/types"

// This would be replaced with a Sanity client fetch in a real implementation
async function getLatestBlogPosts(): Promise<BlogPost[]> {
  const blogs = await client.fetch(blogQuery);
  return blogs ?? [];
}

export default async function Blogs() {
  const posts = await getLatestBlogPosts()
  console.log("posts is " , posts)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post:BlogPost) => (
          // Property 'current' does not exist on type 'string'.ts(2339)
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