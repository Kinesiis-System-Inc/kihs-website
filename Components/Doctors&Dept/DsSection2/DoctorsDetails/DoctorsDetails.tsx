'use client'

import { Department, DoctorsDepartmentsData } from "@/libs/types"



export function DoctorsDetailsPage({data}:{data:DoctorsDepartmentsData}) {


  return (
    <div className="px-4 md:px-12 lg:px-24 py-6">
      <div className="text-sm text-blue-500">
        {data.subHeading}
      </div>
      <div className="text-2xl sm:text-3xl font-bold mb-4">{data.mainHeading}</div>

      {data.departments?.map((dept: Department, idx: number) => (
        <div
          key={idx}
          className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24`}
        >
          <div className="relative flex items-center justify-center">
            <img src={dept.imageUrl} className="rounded-2xl" alt={dept.title} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{dept.title}</h2>
            <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
              {dept.services.map((service: string, serviceIdx: number) => (
                <li key={serviceIdx}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
