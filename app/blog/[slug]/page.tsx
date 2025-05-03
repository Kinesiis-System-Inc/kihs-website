import Image from "next/image"
import { notFound } from "next/navigation"
import TableOfContents from "@/Components/table-of-contents"
import AuthorProfile from "@/Components/author-profile"
import PortableText from "@/Components/portable-text"
import { formatDate } from "@/libs/utils"

// This would be replaced with a Sanity client fetch in a real implementation
async function getBlogPost(slug: string) {
    console.log(slug)
    // Mock data for demonstration
    return {
        _id: "1",
        title: "Exploring Generative AI in Content Creation",
        slug: "exploring-generative-ai-in-content-creation",
        publishedAt: "2023-08-24T00:00:00Z",
        excerpt:
            "Discover how to effectively use AI tools like ChatGPT for content creation while maintaining quality and authenticity.",
        mainImage: "/blogimg.png",
        author: {
            _id: "author1",
            name: "Lorem Ipsum",
            image: "/passportimg.png",
            title: "Founder of SAAS Firm - the Best AI and Deep Driven Customer Engagement Tool",
            bio: "With 10 years in SaaS, I've built MilestoneHitter and helped 100+ companies scale their sales and marketing. I'm excited if you share my vision for success!",
            linkedin: "https://linkedin.com/in/loremipsum",
        },
        content: [], // This would be Portable Text from Sanity
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getBlogPost(resolvedParams.slug);

    if (!post) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 md:px-24 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left sidebar - Table of Contents */}
                {/* <aside className="hidden lg:block lg:col-span-3">
          <TableOfContents />
        </aside> */}

                {/* Main content */}
                <main className="lg:col-span-9">
                    <article>
                        <div className="mb-8">
                            <Image
                                src={post.mainImage || "/placeholder.svg?height=400&width=800"}
                                alt={post.title}
                                width={800}
                                height={400}
                                className="w-full rounded-lg object-cover aspect-video"
                            />
                        </div>

                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                            <p className="text-customGrey">Posted on {formatDate(post.publishedAt)}</p>
                        </header>

                        <PortableText content={post.content} />
                    </article>
                </main>

                {/* Right sidebar - Author profile */}
                <aside className="flex flex-col gap-8 lg:col-span-3">
                    <AuthorProfile author={post.author} />
                    <TableOfContents />
                </aside>
            </div>
        </div>
    )
}
