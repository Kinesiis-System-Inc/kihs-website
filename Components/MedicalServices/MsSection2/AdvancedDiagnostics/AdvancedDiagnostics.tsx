'use client'
import { MedicalServiceQueryResult } from '@/libs/types';
import { medicalServiceQuery } from '@/sanity/lib/queries';
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'


export const AdvancedDiagnostics =  () => {
  const [data, setData] = useState<MedicalServiceQueryResult | null>(null)

  useEffect(() => {
    client
      .fetch<MedicalServiceQueryResult>(medicalServiceQuery)
      .then((res) => setData(res))
  }, [])

  if (!data) return <p>Loading…</p>
  return (
    <div className="w-full mb-8 p-4 md:pl-16">
      <h2 className="text-2xl font-semibold">{data.advancedDiagnostics.sectionTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Left Column */}
        {/* <div>
          <p className="text-sm text-customGrey">Comprehensive Diagnostic Services</p>
          <p className="text-sm text-customGrey">Our diagnostic capabilities include:</p>
          <p className="text-sm text-customGrey">Clinical Pathology Services</p>
          <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
            <li>Clinical Pathology</li>
            <li>X-Ray</li>
            <li> Intravenous Pyelogram (IVP)</li>
            <li>Hysterosalpingography (HSG)</li>
          </ul>
          <p className="text-sm text-customGrey">Imaging Services</p>
          <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
            <li>Ultrasonography</li>
            <li>Sonography Guided Procedures</li>
            <li>Echocardiography</li>
          </ul>
        </div> */}


        {data.advancedDiagnostics.diagnosticTypes.map((item , index)=>{
          return <div key={index}>
            <p  className="text-sm text-customGrey">{item.title}</p>
            {item.procedures.length > 0 && <>
            <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
              {item.procedures.map((p , ind)=>{
                return <li key={ind}> {p} </li>
              })}
            </ul>
            </>}
          </div>
        })}







        {/* Right Column */}
        {/* <div>
          <p className="text-sm text-customGrey">Specialised Diagnostic Procedures</p>
          <ul className="list-disc pl-6 text-customGrey text-sm space-y-1">
            <li>Electrocardiogram (ECG)</li>
            <li>Endoscopy</li>
            <li>Laparoscopy</li>
            <li>Hysteroscopy</li>
            <li>Cystoscopy</li>
            <li>Optometry</li>
          </ul>
        </div> */}
      
      </div>

      {/* Image Grid */}
      <div className='flex items-center justify-center md:justify-between w-full mt-6 md:px-64'>
        {data.advancedDiagnostics.videoUrl && (
          <video
            loop
            muted
            autoPlay
            className="w-full rounded-md shadow"
          >
            <source src={data.advancedDiagnostics.videoUrl} type="video/webm" />
            Your browser doesn’t support WebM.
          </video>
        )}
      </div>
    </div>
  )
}
