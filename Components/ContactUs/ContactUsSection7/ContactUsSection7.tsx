'use client'

import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

type ContactUsSection7Props = {
  data:
  {
  image: { asset: { _ref: string } }
  title: string
  description: string
  email: string
  phoneNumbers: string[]
  extensionNote: string
  bottomText: string
  }
}

export const ContactUsSection7 = ({
    data
}: ContactUsSection7Props) => {
  return (
    <section className="w-full px-4 md:px-16 py-12">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Container */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="rounded-md overflow-hidden w-full max-w-sm aspect-square flex items-center justify-center">
              <Image
                src={urlFor(data.image).url()}
                alt="Contact Image"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h2>
            <p className="text-gray-700 mb-6">{data.description}</p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="text-primary1 flex-shrink-0" size={20} />
                <a href={`mailto:${data.email}`} className="text-primary1 hover:underline">
                  {data.email}
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="text-primary1 flex-shrink-0 mt-1" size={20} />
                <div className='flex flex-col'>
                  <div className='flex flex-wrap gap-2'>
                    {data.phoneNumbers.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone}`} className="text-black hover:underline block">
                        {phone}
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-700">Extn: {data.extensionNote}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-lg font-medium text-gray-800">
                {data.bottomText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
