'use client'

import React from 'react'
import { urlFor } from '@/sanity/lib/image' // Adjust based on your project path

type ContactUsSection3Props = {
  images: {
    asset: {
      _id: string
      url: string
    }
  }[]
}

export const ContactUsSection3 = ({ images }: ContactUsSection3Props) => {
  return (
    <section className='min-h-32 grid grid-cols-2 md:grid-cols-4 p-2 gap-2 md:p-16 md:gap-4'>
      {images.map((img, index) => (
        <img
          key={index}
          src={urlFor(img.asset).url()}
          alt={`Doctor ${index + 1}`}
          className="w-full h-auto object-cover"
        />
      ))}
    </section>
  )
}