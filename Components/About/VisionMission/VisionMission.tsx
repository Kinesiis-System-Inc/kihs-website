'use client'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import { VisionMissionProps } from '@/libs/types'



export const VisionMission = ({ data }: {data:VisionMissionProps}) => {
  return (
    <>
      {/* Vision Section */}
      <section className='w-full min-h-[200px] flex flex-col md:flex-row justify-around gap-8 md:gap-20 md:items-center bg-secondaryTint p-4 md:px-24 lg:px-32 mt-16'>
        <div className='flex flex-col'>
          <p className="text-sm text-blue-500 mb-1">Our Vision</p>
          <h2 className='text-[30px] md:text-[40px] font-semibold leading-11'>
            <span className='text-nowrap' dangerouslySetInnerHTML={{__html:data.visionTitle}} />
          </h2>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col items-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8'>
          <p className="text-customGrey text-[14px] mt-6 md:pr-20">
            {data.visionDescription}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='w-full flex flex-col gap-4 md:gap-8 px-4 md:px-24 lg:px-32'>
        <div>
          <p className="text-sm text-blue-500 mb-1">Our Mission</p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{data.missionTitle}</h2>
        </div>
        <div>
          <h3 className='text-[14px] font-bold'>Mission Statements</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {data.missionStatements.map((item, index) => (
              <button key={index} className="flex items-center justify-between px-4 py-4 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                <span className="flex items-center gap-8 pr-16">
                  <img src="/handWithPlus.png" alt="hand with plus icon" className="w-8 h-8" />
                  <span className="text-[14px] md:text-[16px] text-customGrey text-left">{item}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="md:px-16 lg:px-32 w-full pb-24">
        <div className="w-full min-h-[100px] bg-secondaryTint md:rounded-2xl flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-10 lg:px-16">
          {/* Text Content */}
          <div className="md:w-2/3 lg:w-1/2 flex flex-col gap-3 text-center md:text-left">
            <h2 className="font-semibold text-xl sm:text-2xl">
              {data.commitmentTitle}
            </h2>
            <p className="text-customGrey text-sm sm:text-base">
              {data.commitmentDescription}
            </p>
          </div>

          {/* Image */}
          <div className="mt-6 md:mt-0 md:w-1/3 lg:w-1/2 flex justify-center">
            {data.commitmentImage?.asset && (
              <img
                src={urlFor(data.commitmentImage).url()}
                alt="Commitment visual"
                className='max-w-full h-auto'
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}