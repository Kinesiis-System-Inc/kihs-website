'use client'

import React, { useEffect } from 'react'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { DoctorProfile } from '@/Components/DoctorProfile/DoctorProfile'
import { urlFor } from '@/sanity/lib/image'
import { LeadershipProps } from '@/libs/types'

const iconComponents = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin
}

export const Leadership = ({ data }: {data:LeadershipProps}) => {
  useEffect(() => {
    const carousel = document.getElementById('carousel')
    const scrollLeftBtn = document.getElementById('scroll-left')
    const scrollRightBtn = document.getElementById('scroll-right')

    const handleScrollLeft = () => carousel?.scrollBy({ left: -300, behavior: 'smooth' })
    const handleScrollRight = () => carousel?.scrollBy({ left: 300, behavior: 'smooth' })

    scrollLeftBtn?.addEventListener('click', handleScrollLeft)
    scrollRightBtn?.addEventListener('click', handleScrollRight)

    return () => {
      scrollLeftBtn?.removeEventListener('click', handleScrollLeft)
      scrollRightBtn?.removeEventListener('click', handleScrollRight)
    }
  }, [])

  return (
    <>
      {/* Founders Section */}
      <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32'>
        <div>
          <p className='text-sm text-blue-500 mb-1'>Leadership & Values</p>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Meet Our Founders</h2>
        </div>
        <div className='w-full flex flex-col gap-8'>
          {data.founders?.map((founder, index) => (
            <DoctorProfile
              key={index}
              name={founder.name}
              title={founder.title}
              subTitle={founder.subTitle}
              description={founder.description}
              imageSrc={urlFor(founder.image).url()}
              socialLinks={founder.socialLinks}
            />
          ))}
        </div>
      </section>

      {/* Administrators Section */}
      <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32 my-12'>
        <div className='w-full flex justify-between items-center'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Key Administrators</h2>
          <div className='hidden md:flex items-center gap-2'>
            <button id='scroll-left' className='p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors'>
              <svg width='24' height='24' fill='none' stroke='currentColor'>
                <path d='M15 19L8 12L15 5' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
            <button id='scroll-right' className='p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors'>
              <svg width='24' height='24' fill='none' stroke='currentColor'>
                <path d='M9 5L16 12L9 19' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
          </div>
        </div>

        <div className='relative w-[70vw] md:w-[80vw]'>
          <div
            id='carousel'
            className='flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'
          >
            {data.administrators?.map((admin, index) => (
              <div
                key={index}
                className='flex-none w-[280px] snap-start rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white'
              >
                <div className='aspect-[4/3] bg-blue-50 overflow-hidden'>
                  <img
                    src={urlFor(admin.image).url()}
                    alt={admin.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-4 flex flex-col gap-2'>
                  <h3 className='font-semibold text-lg'>{admin.name}</h3>
                  <p className='text-sm text-gray-700 font-medium'>{admin.title}</p>
                  <p className='text-sm text-gray-500'>{admin.subTitle}</p>
                  <div className='mt-3 flex space-x-3'>
                    {admin.socialLinks.map((link, idx) => {
                      const Icon = iconComponents[link.icon]
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors'
                        >
                          <Icon className='w-4 h-4' />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32 pb-24'>
        <div>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Core Values</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {data.coreValues?.map((value, index) => (
            <button
              key={index}
              className='flex items-center justify-between px-4 py-4 bg-white border-[2px] border-ligthGrey rounded-lg transition-all duration-300 hover:bg-gray-200'
            >
              <span className='flex flex-col items-start gap-2 pr-16'>
                <img
                  src={urlFor(value.icon).url()}
                  alt={value.title}
                  className='w-8 h-8'
                />
                <span className='text-[16px] md:text-[18px] text-black font-semibold text-left'>
                  {value.title}
                </span>
                <span className='text-[14px] md:text-[16px] text-customGrey text-left'>
                  {value.description}
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
