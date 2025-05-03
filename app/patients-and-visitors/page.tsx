import { PvSection1 } from '@/Components/PatientsAndVisitiors/PvSection1/PvSection1'
import { PvSection2 } from '@/Components/PatientsAndVisitiors/PvSection2/PvSection2'
import React from 'react'

export default function page() {
  return (
    <main className='w-full flex flex-col gap-4'>
        <PvSection1/>
        <PvSection2/>
    </main>
  )
}
