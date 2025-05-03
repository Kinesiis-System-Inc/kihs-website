import React from 'react'

type ContactUsSection6Props = {
 data:{ title: string
  description : string
 }
}


export const ContactUsSection6 = ({data}:ContactUsSection6Props) => {
  return (
    <section className='w-full p-4 md:p-16 bg-secondaryTint min-h-52 flex flex-col gap-4'>
        <h2 className='text-black font-semibold text-3xl'>{data.title}</h2>
        <p className='text-[14px]'>{data.description}</p>
    </section>
  )
}
