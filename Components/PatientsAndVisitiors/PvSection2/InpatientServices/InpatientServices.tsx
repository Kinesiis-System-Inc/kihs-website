import { urlFor } from '@/sanity/sanity-utils'
import React from 'react'
import { InpatientServices as InpatientServicesType } from '../../../../libs/types'

type Props = {
  data: {
    inpatientServices: InpatientServicesType
  }
}

export const InpatientServices = ({ data }:Props) => {
    // Property 'inpatientServices' does not exist on type '{ InpatientServices: InpatientServices; }'. Did you mean 'InpatientServices'?ts(2551)
// InpatientServices.tsx(7, 5): 'InpatientServices' is declared here.
                                                             
    console.log("inpatient service data is " , data?.inpatientServices)
    // const imgItem = ['/doct_cart.png', '/build_cart.png', '/doct_lady.png']
    return (
        // <div className="w-full mb-8 p-4 md:pl-16">
        //     <h2 className="text-2xl font-semibold">Inpatient Services</h2>
        //     <p className="mb-4 text-customGrey text-xs sm:text-sm md:text-[14px]">Welcome to Your Home Away from Home</p>
        //     <p className="mb-2 text-customGrey text-xs sm:text-sm md:text-[14px]">At our hospital, we prioritise your comfort and recovery with comprehensive inpatient care services:</p>
        //     <p className="text-customGrey text-xs sm:text-sm md:text-[14px]">Room Options:</p>
        //     <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
        //         <li>
        //             Our General Ward offers spacious accommodation with essential medical facilities, including central oxygen supply and nurse calling systems at every bed.
        //         </li>
        //         <li>
        //             Semi-Private and Private Rooms feature additional amenities like television, comfortable attendant seating, and daily fruit service.
        //         </li>
        //         <li>
        //             Exclusive Suite Room available for patients seeking premium healthcare experience with personalised care provider.
        //         </li>
        //     </ul>
        //     <p className="text-customGrey text-xs sm:text-sm md:text-[14px]">Medical Care:</p>
        //     <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-16">
        //         <li>
        //             Round-the-clock monitoring by our team of 168 healthcare professionals
        //         </li>
        //         <li>
        //             Round-the-clock monitoring by our team of 168 healthcare professionals
        //         </li>
        //         <li>
        //             Four state-of-the-art Operation Theatres with HEPA filtration for different specialties
        //         </li>
        //         <li>
        //             24/7 pharmacy services with complete medication support
        //         </li>
        //     </ul>
        //     <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 w-full'>
        //             {imgItem.map((item,index)=> <div key={index} className='w-full flex items-center justify-center'><img  src={item} className='rounded-3xl self-center' /></div> )}
        //     </div>
        // </div>
        <div className="w-full mb-8 p-4 md:pl-16">
            {data != undefined && <>
            {console.log("inside the inpatientService data")}
                <h2 className="text-2xl font-semibold"> {data.inpatientServices?.title} </h2>
                <p className="mb-4 text-customGrey text-xs sm:text-sm md:text-[14px]">{data.inpatientServices?.subTitle}</p>
                <p className="mb-2 text-customGrey text-xs sm:text-sm md:text-[14px]">At our hospital, we prioritise your comfort and recovery with comprehensive inpatient care services:</p>

                {/* <p className="text-customGrey text-xs sm:text-sm md:text-[14px]">Room Options:</p>
            <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
                <li>
                    Our General Ward offers spacious accommodation with essential medical facilities, including central oxygen supply and nurse calling systems at every bed.
                </li>
                <li>
                    Semi-Private and Private Rooms feature additional amenities like television, comfortable attendant seating, and daily fruit service.
                </li>
                <li>
                    Exclusive Suite Room available for patients seeking premium healthcare experience with personalised care provider.
                </li>
            </ul>
            <p className="text-customGrey text-xs sm:text-sm md:text-[14px]">Medical Care:</p>
            <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-16">
                <li>
                    Round-the-clock monitoring by our team of 168 healthcare professionals
                </li>
                <li>
                    Round-the-clock monitoring by our team of 168 healthcare professionals
                </li>
                <li>
                    Four state-of-the-art Operation Theatres with HEPA filtration for different specialties
                </li>
                <li>
                    24/7 pharmacy services with complete medication support
                </li>
            </ul> */}


                {data.inpatientServices?.services?.map((service, index: number) => {
                    return <>
                        <p key={index} className="text-customGrey text-xs sm:text-sm md:text-[14px]"> {service.serviceTitle} </p>
                        <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
                            {service.servicePoints?.map((point, index: number) => {
                                return <li key={index}> {point} </li>
                            })}
                        </ul>
                    </>

                })}


                <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 w-full'>
                    {data.inpatientServices?.imagesCollection.map((item, index: number) => <div key={index} className='w-full flex items-center justify-center'><img src={urlFor(item).url()} className='rounded-3xl self-center' /></div>)}
                </div>
            </>}
        </div>
    )
}
