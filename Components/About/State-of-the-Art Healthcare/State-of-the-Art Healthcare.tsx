'use client'

import { urlFor } from '@/sanity/lib/image'
import { Feature, StateOfTheArtProps } from '@/libs/types'



export const StateOfTheArtHealthcare = ({ data }: {data:StateOfTheArtProps}) => {
  const renderFeature = (feature: Feature, idx: number) => (
    <span key={idx} className='flex gap-2'>
      <img
      src={urlFor(data.bulletIcon).url()}
      className="w-6 h-6"
      alt="icon"
    />
      <div className='text-[14px] text-customGrey'>
        <p>{feature.text}</p>
        {feature.listItems && (
          <ul className='pl-8 list-disc'>
            {feature.listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </span>
  )

  return (
    <>
      {/* Facilities Section */}
      <section className='flex flex-col md:flex-row-reverse justify-around w-full px-4 md:px-24 lg:px-32 gap-12 mt-16'>
        <div className='relative'>
          <img
            src={urlFor(data.facilities.image).url()}
            className='w-full h-[500px] rounded-2xl object-cover'
            alt='Facilities'
          />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col md:self-start md:pt-14 md:gap-8'>
          <div>
            <p className='text-sm text-blue-500 mb-1'>{data.facilities.subtitle}</p>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>{data.facilities.title}</h2>
            <div className='flex flex-col gap-4'>
              {data.facilities.features?.map(renderFeature)}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Care Section */}
      <section className='flex flex-col md:flex-row justify-around w-full px-4 md:px-24 lg:px-32 gap-12 pb-24'>
        <div className='relative'>
          <img
            src={urlFor(data.patientCare.image).url()}
            className='w-full h-[500px] rounded-2xl object-cover'
            alt='Patient Care'
          />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col md:self-start md:pt-14 md:gap-8'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>{data.patientCare.title}</h2>
            <div className='flex flex-col gap-4'>
              {data.patientCare.features?.map(renderFeature)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
