'use client'
import React from 'react'

type ContactItem = {
  label: string
  icon: string
}

type ContactUsSection1Props = {
  data: {
    title: string
    subtitle: string
    desktopImage: string
    mobileImage: string
    contacts: ContactItem[]
  }
}

export const ContactUsSection1 = ({ data }: ContactUsSection1Props) => {
  return (
    <section className='w-full h-max md:h-[70vh] bg-white pb-6 flex items-center relative box-border'>
      <div className='hidden md:block w-max h-max'>
        <img className='h-[70vh]' src={data.desktopImage} alt="Building" />
      </div>
      <div className='w-full px-4 pt-8 md:p-0 md:w-fit flex flex-col gap-8 md:pl-12'>
        <img className='w-full block md:hidden' src={data.mobileImage} alt="Building Mobile" />
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl md:text-3xl lg:text-5xl text-black font-semibold'>{data.title}</h3>
          <p className='text-customGrey md:hidden text-[12px] md:text-[16px]'>{data.subtitle}</p>
        </div>
        <div className='flex flex-col pr-20 gap-4'>
          {data.contacts?.map((item, index) => (
             <button key={index}
             className="flex w-fit items-center justify-between px-4 py-4 bg-outlineGrey border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
             <span className="flex items-center gap-3">
               <img src={item.icon} alt={`${item.label.toLowerCase()} icon`} />
               <span className="text-[14px] md:text-[16px]">{item.label}</span>
             </span>
           </button>
          ))}
        </div>
      </div>
    </section>
  )
}
