"use client"

import { useEffect, useRef } from "react"
import { slugify } from "@/libs/utils"

// interface PortableTextProps {
//   content: string[] // This would be Portable Text from Sanity
// }

export default function PortableText({ content }) {

  const contentRef = useRef<HTMLDivElement>(null)

  // This is a simplified version - in a real implementation you would use @portabletext/react
  // This is just to demonstrate the concept

  useEffect(() => {
    // Add IDs to all headings for the table of contents
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3")
      headings.forEach((heading) => {
        const text = heading.textContent || ""
        heading.id = slugify(text)
      })
    }
  }, [content])

  // In a real implementation, you would use the @portabletext/react library
  // This is just a placeholder to demonstrate the concept
  return (
    <div ref={contentRef} className="blog-content prose max-w-none">


      {content?.headingAndParas?.map((item , index : number)=>{
        return <div key={index}>
          <h2> {item.heading} </h2>

          {item?.paras?.map((para , ind:number)=>{
            return <p key={ind}> {para} </p>
          })}

        </div>
      })}


      {/* <h2 id="exploring-generative-ai">Exploring Generative AI in Content Creation</h2>
      <p>
        Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage
        your audience. I bet generative AI has crossed your mind as an option for creating content. Well, let me share
        from my firsthand experience.
      </p>

      <p>
        Google encourages high-quality blogs regardless of whether they&apos;re written by humans or created using artificial
        intelligence like ChatGPT. Here&apos;s what matters: producing original material with expertise and trustworthiness
        based on Google&apos;s E-E-A-T principles.
      </p>

      <p>
        This means focusing more on people-first writing rather than primarily employing AI tools to manipulate search
        rankings. There comes a time when many experienced professionals want to communicate their insights but get
        stuck due to limited writing skills – that&apos;s where Generative AI can step in.
      </p>

      <p>
        So, together, we&apos;re going explore how this technology could help us deliver valuable content without sounding
        robotic or defaulting into moral regurgitations of existing material (spoiler alert – common pitfalls). Hang
        tight – it&apos;ll be a fun learning journey!
      </p>

      <h2 id="steering-clear">Steering Clear of Common AI Writing Pitfalls</h2>
      <p>
        Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to some unfortunate results.
        One common pitfall I&apos;ve seen is people opting for quantity over quality – they churn out blogs, but each one
        feels robotic and soulless, reading just like countless others on the internet.
      </p>

      <p>
        Another issue involves not properly prompting your AI to generate unique perspectives that offer value to
        readers. It often happens if you let an AI tool write your full blog unrestrained! Trust me on this – Ask any
        experienced marketer or writer about their takeaways from using generative AI tools. They&apos;ll agree that adding a
        human touch and following specific guidelines are key when implementing these tech pieces.
      </p>

      <p>
        Remember, our goal here isn&apos;t merely satisfying search engines but, more importantly, knowledge-hungry humans
        seeking reliable information online. So keep your audience&apos;s needs at heart while leveraging technology&apos;s
        assistance.
      </p>

      <h2 id="understanding-chatgpt">Understanding ChatGPT Capabilities - Define Your Style</h2>
      <p>
        Welcome to the intriguing world of ChatGPT! Its ability and potential can truly be mind-boggling. I have learned
        from experience how capable it is in dealing with diverse content generation tasks, only that its text sounded
        slightly &quot;unnatural&quot; in accordance with TechTarget. However, fear not – there are ways around that!
      </p>

      <p>
        One strategic move I&apos;ve seen work wonders is defining your unique writing style first before handing over the
        reins to AI; you treat it like a canvas whereupon our vision opens up. If we clearly instruct who we&apos;re
        targeting or what tone resonates more effectively, generative AI tools such as ChatGPT will comply remarkably
        well.
      </p>

      <p>
        In framing guidelines, remember to keep audience interest at heart while adapting technology&apos;s benefits for
        efficient output – I put emphasis on this because neglecting these aspects could backfire by generating
        unappealing robotic-like reads.
      </p>

      <p>
        Ultimately, aiming towards reader-focused driven creativity illuminated under authentically-humaned narratives
        holds priority above all else when crafting blogs using auto-generation toolkits!
      </p>

      <h2 id="understand-your-readers">Understand Your Readers</h2>
      <p>
        Understanding your readers is vital when producing blog posts. It&apos;s not about filling boxes with popular search
        terms, no matter how much keyword research you do. Real readability goes beyond that! Your content has to
        &apos;speak&apos; directly to your target audience.
      </p>

      <p>
        Building an ideal Customer Profile (ICP) can help immensely in this respect (Don Martie). The tool identifies
        specific firmographics or psychographic drivers behind customer success – a valuable guide for creating targeted
        outputs catering to arrayed reader types.
      </p>

      <p>
        Simultaneously, SEO aspects also need attention: identifying suitable keywords & phrases people commonly use
        when searching online (SEORCH reference). Yet remember – human appeal doesn&apos;t mean packing text up likely into
        repetitive semblances bearing little value substance and stuffing it full with only &apos;keywords&apos;.
      </p> */}
    </div>
  )
}
