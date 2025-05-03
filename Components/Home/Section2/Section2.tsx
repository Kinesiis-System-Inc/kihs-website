import ServiceButton from '@/Components/ServiceButton/ServiceButton'
import React from 'react'
import {HomeSection2} from '@/libs/types'


export const Section2:React.FC<{data:HomeSection2}> = ({data}) => {

  // console.log(data)

  // const data = [
  //   {
  //     label:"Medical Services",
  //     icon: "/handWithPlus.png",
  //     url:"/medical-services"
  //   },
  //   {
  //     label:"Patient Facilities",
  //     icon: "/patientVector.png",
  //     url:" "
  //   },
  //   {
  //     label:"Book Appointment",
  //     icon: "/calendar.png",
  //     url:" "
  //   },
  //   {
  //     label:"OPD Details",
  //     icon: "/OpdVector.png",
  //     url:" "
  //   },
  //   {
  //     label:"Insurance & Billing",
  //     icon: "/billCard.png",
  //     url:" "
  //   },
  //   {
  //     label:"Doctors & Departments",
  //     icon: "/health-check.png",
  //     url:" "
  //   },
  // ]

  return (
    <section className='py-8 px-4 md:py-16 md:px-36 w-full h-max'>
      <div className='px-4 py-12 md:p-12 w-full h-max rounded-2xl shadow-2xl flex flex-col gap-8'>
        <div>
          <h3 className='text-primary2 font-normal'>{data?.heading}</h3>
          <p className='font-semibold text-black text-[12px] md:text-[16px]'>{data.subheading}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              data.services.map((item,index)=>{
                return(
               
                  <ServiceButton key={index} label={item.label} icon={item.icon} url={item.url}/>
                )
              })
            }
        </div>
      </div>

    </section>
  )
}

