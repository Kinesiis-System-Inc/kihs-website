import { MedicalServiceQueryResult } from '@/libs/types'
import { medicalServiceQuery } from '@/sanity/lib/queries'
import { client } from '@/sanity/sanity-utils'
import React, { useEffect, useState } from 'react'

export const SurgicalSpecialties = () => {

  const [data, setData] = useState<MedicalServiceQueryResult | null>(null)


  useEffect(() => {
    client
      .fetch<MedicalServiceQueryResult>(medicalServiceQuery)
      .then((res) => setData(res))
  }, [])

  if(!data) return <p>...loading</p>

  return (
    <div className='flex flex-col md:flex-row px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>

      <div className="flex items-center justify-center w-full md:w-[40vw]">
        <video
          loop
          muted
          autoPlay
          className="w-full h-auto rounded-md shadow"
        >
          <source src={data?.surgicalSpecialties.videoUrl} type="video/webm" />
          Your browser doesn’t support WebM.
        </video>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">2.{data?.surgicalSpecialties.sectionTitle}</h2>
          <p className="text-customGrey text-[14px]">{data?.surgicalSpecialties.des}</p>
          <p className="text-customGrey text-[14px] font-semibold mb-6">{data?.surgicalSpecialties.surgicalHighlights.title}</p>
          <div />

          {data?.surgicalSpecialties.surgicalHighlights.highlights?.map((item , ind)=>{
            return <p key={ind} className="text-customGrey text-[14px]">- {item}</p>
          })}
          
          <p className="text-customGrey text-[14px] mb-6">{data?.surgicalSpecialties.hospitalOffers.title}:</p>
          {/* <p className="text-customGrey text-[14px] font-semibold">Surgical Departments</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              General Surgery
            </li>
            <li>
              Urology
            </li>
            <li>
              Oncosurgery
            </li>
            <li>
              Paediatric Surgery
            </li>
            <li>
              Surgical Gastroenterology
            </li>
            <li>
              Obstetrics & Gynaecology
            </li>
            <li>
              Ophthalmology
            </li>
            <li>
              ENT
            </li>
          </ul>
          <p className="text-customGrey text-[14px] font-semibold">Operation Theatres</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              4 specialized operation theatres
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Unique features:</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              HEPA air filtration
            </li>
            <li>
              Stainless steel operating rooms
            </li>
            <li>
              Attached Central Sterile Services Department (CSSD)
            </li>
            <li>
              Advanced HVAC system
            </li>
            <li>
              Advanced Anaesthesia Work Station
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Specialized OT configurations:</p>
          <ul className="list-decimal pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>
              Laparoscopic OT
            </li>
            <li>
              Genito-urological Surgery OT
            </li>
            <li>
              Gynaecology OT
            </li>
            <li>
              Ophthalmology OT
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Specialisations in:</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              Endo Urology surgeries
            </li>
            <li>
              Laparoscopic General Surgeries
            </li>
            <li>
              Laparoscopic Gynaecological Surgeries
            </li>
          </ul> */}

          {data?.surgicalSpecialties.hospitalOffers.sections?.map((s , index)=>{
            return <div key={index}>
               <p className="text-customGrey text-[14px] font-semibold">{s.sectionTitle}</p>
               <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
                {s.sectionPoints?.map((p , ind)=> <li key={ind}>{p}</li>)}
               </ul>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}
