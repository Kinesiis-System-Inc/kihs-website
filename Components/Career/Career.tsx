import React from 'react'
import { CareerSection1 } from './CareerSection1/CareerSection1'
import { CareerSection2 } from './CareerSection2/CareerSection2'
import { CareerSection3 } from './CareerSection3/CareerSection3'
import { CareerSection4 } from './CareerSection4/CareerSection4'
import { CareerSection5 } from './CareerSection5/CareerSection5'
// import { CareerSection6 } from './CareerSection6/CareerSection6'

export const Career = () => {
  return (
    <main className='w-full min-h-[70vh] flex flex-col gap-24'>
        <CareerSection1/>
        <CareerSection2/>
        <CareerSection3/>
        <CareerSection4/>
        <CareerSection5/>
        {/* <CareerSection6/> */}
    </main>
  )
}
