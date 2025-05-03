'use client'

import React from 'react'
import { DynamicNavigation } from '../DyanmicNavigation/DynamicNavigation'
import { HomeSection3 } from '@/libs/types'


export const Section3:React.FC<{data:HomeSection3}> = ({data}) => {

    return (
        <section className='py-8 px-4 md:py-16 md:px-36 w-full h-max bg-bgBlue'>
            <DynamicNavigation tabsData={data.tabs} />
        </section>
    )
}

