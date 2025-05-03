import Image from "next/image"
import { Linkedin } from "lucide-react"
import { BsLinkedin } from "react-icons/bs";
import type { Author } from "@/libs/types"

interface AuthorProfileProps {
  author: Author
}

export default function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="bg-secondary1 rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={author.image || "/placeholder.svg?height=80&width=80"}
          alt={author.name}
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div>
          <h3 className="font-bold text-lg">{author.name}</h3>
          <p className="text-sm">{author.title}</p>
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-1"
            >
              <BsLinkedin className="h-4 w-4 mr-1 text-[#0077B5]" />
              <span className="text-sm">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
      <p className="text-sm">{author.bio}</p>
    </div>
  )
}