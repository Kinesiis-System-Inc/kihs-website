import { MedicalServiceQueryResult } from '@/libs/types';
import { medicalServiceQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react'

export const CriticalCare = () => {

  const [data, setData] = useState<MedicalServiceQueryResult | null>(null)

  useEffect(() => {
    client
      .fetch<MedicalServiceQueryResult>(medicalServiceQuery)
      .then((res) => setData(res))
  }, [])

  if(!data) return <p>...loading</p>

  return (
    <div className='flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24'>
      <div className="flex items-center justify-center w-full md:w-[40vw]">
        <video
          loop
          muted
          autoPlay
          className="w-full h-auto rounded-md shadow"
        >
          <source src={data.criticalCare.videoUrl} type="video/webm" />
          Your browser doesn’t support WebM.
        </video>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">1.{data.criticalCare.sectionTitle}</h2>
          <p className="text-customGrey text-[14px] mb-6">{data.criticalCare.des}</p>
          <p className="text-customGrey text-[14px] font-semibold mb-6">{data.criticalCare.boldTitle}</p>
          <div />
          <p className="text-customGrey text-[14px]">{data.criticalCare.icus.name}</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            {data.criticalCare.icus.features.map((item , index)=> <li key={index}>{item}</li>)}
          </ul>
          {/* <p className="text-customGrey text-[14px]">Advanced monitoring systems</p>
          <p className="text-customGrey text-[14px] pb-6">State-of-the-art equipment:</p> */}

          {data.criticalCare.equipment.length > 0 && data.criticalCare.equipment.map((e , index)=>{
            return <p key={index} className="text-customGrey text-[14px] pb-6">{e}</p>
          })}

          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            {data.criticalCare.specialFeatures.length > 0 && data.criticalCare.specialFeatures.map((i , ind)=>{
              return <li key={ind}>{i}</li>
            })}
          </ul>

        </div>
      </div>
    </div>
  )
}

