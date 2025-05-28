"use client"

import Image from "next/image"
// import { Linkedin } from "lucide-react"
import { BsLinkedin } from "react-icons/bs";
import type { Author } from "@/libs/types"
import { urlFor } from "@/sanity/sanity-utils";
import {redirect} from "next/navigation"

// interface AuthorProfileProps {
//   author: Author
// }
interface AuthorProfileProps {
  author: Author;
}

export default function AuthorProfile({ author }: AuthorProfileProps) {

  console.log("author is " , author)

  const redirectDoctorDetails = (e: React.MouseEvent)=>{
    e.stopPropagation()
    redirect(`/doctor-details/${author?.slug?.current}`)
  }

  const returnLinkedinURL = (author: Author)=>{
    const url = author.socialLinks.filter((link)=>{
      if(link.icon == "linkedin") return link.url
    })

    // console.log("url is " , url[0]?.url)

    return url[0]?.url
  }
  
  return (
    <div  className="bg-secondary1 rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <Image
        onClick={redirectDoctorDetails}
          src={urlFor(author.image).url() || "/placeholder.svg?height=80&width=80"}
          alt={author.name}
          width={80}
          height={80}
          className="rounded-lg  cursor-pointer"
        />
        <div>
          <h3 className="font-bold text-lg">{author.name}</h3>
          <p className="text-sm">{author.title}</p>
          {author.socialLinks.find((link)=> link.icon == "linkedin") && (
            <a
            onClick={(e)=> e.stopPropagation()}
              href={returnLinkedinURL(author)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-1  cursor-pointer"
            >
              <BsLinkedin className="h-4 w-4 mr-1 text-[#0077B5]" />
              <span className="text-sm">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
      <p className="text-sm">{author.education}</p>
    </div>
  )
}