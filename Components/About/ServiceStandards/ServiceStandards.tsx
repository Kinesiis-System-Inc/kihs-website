'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ServiceProps } from '@/libs/types'



export default function ServiceStandards({ data }: {data:ServiceProps}) {
  return (
    <div className="px-9 md:px-20 py-10 mx-auto px-4 md:px-24 lg:px-32">
      <div className="mb-10">
        <p className="text-sm text-blue-500 mb-1">{data.sectionSubtitle}</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {data.sectionTitle}
        </h2>
      </div>

      <div className="space-y-20 py-10 w-full px-4 md:px-24 lg:px-32">
        {data.standards?.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-full h-80 md:h-96 relative rounded-xl overflow-hidden shadow ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div
              className={`md:px-6 ml-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold">{item.title}</h3>
              <p className="text-customGrey text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

