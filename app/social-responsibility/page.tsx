// app/social-responsibility/page.tsx (or wherever you render this page)

import FloatingLogo from '@/Components/FloatingLogo/FloatingLogo'
import { InitiativeItem } from '@/libs/types'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { socialResponsibilityQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'


export default async function SocialResponsibilityPage() {
  // Fetch the one document of type `socialResponsibilityPage`
  const data = await client.fetch(socialResponsibilityQuery)

  if (!data) {
    return <div className="p-10 text-center">Content not found</div>
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around items-center w-full mt-16 gap-12 pb-24">
        <div className="relative">
          <img
            src={urlFor(data.heroImage).url()}
            className="rounded-2xl"
            alt={data.heroTitle}
          />
        </div>
        <div className="w-full md:h-[70vh] lg:w-1/2 flex flex-col justify-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8 h-full">
        
         <FloatingLogo/>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            {data.heroTitle}
          </h2>
          <PortableText
            value={data.heroDescription}
            components={{
              block: {
                // you can customize how blocks render if needed
                normal: ({ children }) => (
                  <p className="text-customGrey text-[14px]">{children}</p>
                ),
              },
            }}
          />
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="flex flex-col gap-6 px-4 md:px-28">
        <h2 className="text-2xl font-semibold">Inpatient Services</h2>
        <div className="grid grid-cols-1 gap-4">
          {data.initiatives.map((item: InitiativeItem, idx: number) => (
            <button
              key={idx}
              className="flex items-center justify-between px-4 py-2 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer hover:bg-gray-200 transition-all"
            >
              <span className="flex items-center gap-8 md:pr-16">
                <img
                  src="/handWithPlus.png"
                  alt="icon"
                  className="w-12 h-12"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[16px] font-semibold text-start">
                    {item.title}
                  </span>
                  {/* description was stored as text with HTML tags */}
                  <span
                    className="text-[14px] md:text-[16px] text-customGrey text-left"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="md:px-32 w-full py-24">
        <div className="w-full min-h-[100px] bg-secondaryTint md:rounded-2xl flex flex-col md:flex-row items-center justify-center p-8">
          <div className="md:pr-28 flex flex-col gap-3">
            <h2 className="font-semibold text-2xl">{data.ctaTitle}</h2>
            <p className="text-customGrey text-[14px]">
              {data.ctaDescription}
            </p>
          </div>
          <div>
            <img
              src={urlFor(data.ctaImage).url()}
              className="w-full md:w-[600px]"
              alt={data.ctaTitle}
            />
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around items-center w-full mt-16 gap-12 pb-24">
        <div className="relative">
          <img
            src={urlFor(data.accessImage).url()}
            className="rounded-2xl"
            alt={data.accessTitle}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-4 h-full">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {data.accessTitle}
            </h2>
            <p className="mb-4 text-customGrey text-xs sm:text-sm md:text-[14px]"> {data.accessSubTitle}</p>
          </div>
          <PortableText
            value={data.accessDescription}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-customGrey text-[14px]">{children}</p>
                ),
              },
            }}
          />
        </div>
      </section>
    </main>
  )
}