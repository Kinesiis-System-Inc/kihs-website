import { urlFor } from '@/sanity/sanity-utils'
import React from 'react'
import { FacilitiesAndVisitors as FacilitiesAndVisitorsType } from '../../../../libs/types'

type Props = {
  data: {
    facilitiesAndVisitors: FacilitiesAndVisitorsType
  }
}
export const FacilitiesForVisitors = ({ data }: Props) => {
    return (
        <div className='flex flex-col md:flex-row-reverse px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
            {data && <>
                <div className='relative'>
                    {/* <img src='/faci.png' className='rounded-2xl' alt='KIHS building' /> */}
                    <img src={urlFor(data.facilitiesAndVisitors?.coverImage).url()} className='rounded-2xl' alt={data.facilitiesAndVisitors.coverImage.alt} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold"> {data.facilitiesAndVisitors?.title} </h2>
                        <p className="text-customGrey text-[14px] mb-6"> {data.facilitiesAndVisitors?.subTitle} </p>
                        <div />
                        {/* <p className="text-customGrey text-[14px]">Amenities:</p>
                        <p className="text-customGrey text-[14px]">Spacious parking facility accommodating 200 two-wheelers and 50 four-wheelers with free parking</p>
                        <p className="text-customGrey text-[14px]">Vegetarian cafeteria serving nutritious meals with room delivery service</p>
                        <p className="text-customGrey text-[14px]">Free Wi-Fi access throughout the hospital premises
                            Dedicated prayer rooms and visitor lounges for peaceful moments</p>
                        <p className="text-customGrey text-[14px] mb-6">Mobile charging stations available in waiting areas</p>
                        <p className="text-customGrey text-[14px]">Safety Features:</p>
                        <p className="text-customGrey text-[14px]">Advanced fire safety systems with sprinklers and smoke detectors</p>
                        <p className="text-customGrey text-[14px]">Well-lit corridors and ramps connecting all floors
                            24/7 security service for your safety</p>
                        <p className="text-customGrey text-[14px]">Free Wi-Fi access throughout the hospital premises
                            Dedicated prayer rooms and visitor lounges for peaceful moments</p>
                        <p className="text-customGrey text-[14px] mb-6">Clear signage and directions throughout the facility</p> */}


                        {data.facilitiesAndVisitors?.titleAndPara?.map((item, index: number) => {
                            return <div key={index} className='md:w-full px-[10px] py-[15px] '>
                                <p key={index} className="text-customGrey text-[14px]"> {item.title}: </p>
                                {item.para?.map((p, ind: number) => {
                                    return <p key={ind} className="text-customGrey text-[14px]"> {p} </p>
                                })}
                            </div>
                        })}

                    </div>
                </div>
            </>}
        </div>
    )
}
