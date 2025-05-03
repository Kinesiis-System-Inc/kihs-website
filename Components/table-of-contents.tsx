"use client"

import { useEffect, useState } from "react"
import { cn } from "@/libs/utils"

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const articleHeadings = Array.from(document.querySelectorAll(".blog-content h2, .blog-content h3")).map(
      (heading) => {
        const id = heading.id
        const text = heading.textContent || ""
        const level = heading.tagName === "H2" ? 2 : 3

        return { id, text, level }
      },
    )

    setHeadings(articleHeadings)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    articleHeadings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      articleHeadings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <div className="sticky top-[136px]">
      <h3 className="font-bold text-lg mb-4">In this article</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                "border-l-2 pl-3 py-1 text-sm transition-colors",
                heading.level === 3 ? "ml-3" : "",
                activeId === heading.id
                  ? "border-primary1 text-primary1 font-medium"
                  : "border-gray-200 text-gray-600 hover:border-gray-400",
              )}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const yOffset = -136 // Account for the 136px header height
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
