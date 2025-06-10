import { MedicalServiceQueryResult } from '@/libs/types'
import { medicalServiceQuery } from '@/sanity/lib/queries'
import { client } from '@/sanity/sanity-utils'
import React, { useEffect, useState } from 'react'

export const MedicalSpecialties = () => {

  const [data, setData] = useState<MedicalServiceQueryResult | null>(null)

  useEffect(() => {
    client
      .fetch<MedicalServiceQueryResult>(medicalServiceQuery)
      .then((res) => setData(res))
  }, [])

  if(!data) return <p>...loading</p>


  return (
    <div className='flex flex-col md:flex-row-reverse px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
      <div className='relative'>
        <img src={data.medicalSpeciality.sectionImageUrl} className='rounded-2xl' alt='KIHS building' />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">3.{data.medicalSpeciality.sectionTitle}</h2>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            {data.medicalSpeciality.specialities?.map((item , index)=> <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
