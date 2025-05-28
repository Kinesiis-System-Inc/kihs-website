import { urlFor } from '@/sanity/sanity-utils'
import React from 'react'
import { SupportServices as SupportServicesType } from '../../../../libs/types'

type Props = {
  data: {
    supportServices: SupportServicesType
  }
}

export const SupportServices = ({ data }: Props) => {
  return (
    <div className='flex flex-col md:flex-row px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
            <div className='relative'>
                {/* <img src='/doctor_group.png' className='rounded-2xl' alt='KIHS building' /> */}
                <img src={urlFor(data.supportServices.coverImage).url()} className='rounded-2xl' alt={data.supportServices.coverImage.alt} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold"> {data.supportServices.title} </h2>
                    <p className="text-customGrey text-[14px] mb-6"> {data.supportServices.subTitle} </p>
                    <div />
                    {/* <p className="text-customGrey text-[14px]">Patient Support:</p>
                    <p className="text-customGrey text-[14px]">Digital health record system for seamless medical information access</p>
                    <p className="text-customGrey text-[14px]">Dedicated nursing staff and resident doctors available 24/7</p>
                    <p className="text-customGrey text-[14px] mb-6">Specialised housekeeping team maintaining hospital hygiene
                    Patient counselling and guidance services</p>
                    <p className="text-customGrey text-[14px]">Environmental Initiatives:</p>
                    <p className="text-customGrey text-[14px]">Modern Sewage Treatment Plant ensuring proper waste management</p>
                    <p className="text-customGrey text-[14px]">Solar-powered facilities reducing environmental impact</p>
                    <p className="text-customGrey text-[14px]">Organic waste treatment through composting</p>
                    <p className="text-customGrey text-[14px]">Indoor plants creating a healing environment</p>
                    <p className="text-customGrey text-[14px] mb-6">Energy-efficient HVAC system for your comfort</p>
                    <p className="text-customGrey text-[14px]">Administrative Support:</p>
                    <p className="text-customGrey text-[14px]">Help desk for general inquiries and assistance</p>
                    <p className="text-customGrey text-[14px]">Simplified admission and discharge processes</p>
                    <p className="text-customGrey text-[14px]">Insurance documentation support</p>
                    <p className="text-customGrey text-[14px] mb-6">Regular patient feedback system for continuous improvement</p> */}

                    {data.supportServices?.titleAndPara?.map((item , index : number)=>{
                        return <div key={index} className='md:w-full px-[10px] py-[15px]'>
                             <p className="text-customGrey text-[14px]">{item.title}:</p>
                             {item.para?.map((p , ind:number)=>{
                                return <p key={ind} className="text-customGrey text-[14px]"> {p} </p>
                             })}
                        </div>
                    })}

                </div>
            </div>
        </div>
  )
}
