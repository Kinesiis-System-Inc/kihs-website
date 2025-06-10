import { MsSection1 } from '@/Components/MedicalServices/MsSection1/MsSection1'
import { MsSection2 } from '@/Components/MedicalServices/MsSection2/MsSection2'
import React from 'react'

export default function Page (){
  
  return (
    <main className='w-full flex flex-col gap-4'>
            <MsSection1/>
            <MsSection2/>
        </main>
  )
}
