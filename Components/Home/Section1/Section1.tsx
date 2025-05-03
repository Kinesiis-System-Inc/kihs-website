'use client'
import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { IoMdHeart } from "react-icons/io";
import CustomButton from '@/Components/CustomButton/CustomButton';
import Marquee from "react-fast-marquee";
import {HomeSection1} from "@/libs/types"
import { urlFor } from '@/sanity/sanity-utils';
import { useRouter } from 'next/navigation';

export const Section1: React.FC<{ data: HomeSection1 }> = ({ data }) => {
    const items = [PiStarFourFill, "Laparoscopic Gynae Surgeries", IoMdHeart, "Laproscopic General Surgery", PiStarFourFill, "Endo Urology Surgery", IoMdHeart, "Laproscopic General Surgery"]
    const router = useRouter()
    return (
        <section className='w-full h-max md:h-[70vh] bg-white relative box-border'>
            <div className='hidden md:block w-max h-max absolute top-0 right-0 z-0'>
                <img className='h-[70vh]' src={urlFor(data.desktopImage).url()} alt="Picture of the building" />
            </div>
            <div className='w-full px-4 pt-8 md:p-0 md:w-fit flex flex-col gap-8 md:top-24 md:left-20 relative'>
                <img className='w-full block md:hidden' src={urlFor(data.mobileImage).url()} alt="Picture of the building" />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[14px] md:text-2xl lg:text-3xl text-primary2 font-semibold'>{data.tagline}</h3>
                    <h1 className='text-[25px] text-wrap md:text-3xl lg:text-5xl text-primary1 font-semibold' dangerouslySetInnerHTML={{__html:data.mainHeading}} />
                </div>
                <div>
                    <p className='text-customGrey text-[12px] md:text-[16px]'>Setting new benchmarks in Western Maharashtra with the highest <br /> number of endo-urology and laparoscopic surgeries!</p>
                </div>
                <div className='flex gap-4'>
                    <CustomButton label={"Contact Us"} primary={false} onClick={() => {router.push("/contact-us")}} />
                    <CustomButton label={"Book Appointment"} primary={true} onClick={() => { }} />
                </div>
            </div>
            <div className="h-10 mt-4 md:m-0 md:h-12 w-full bg-secondary1 md:absolute md:bottom-0">
                <Marquee pauseOnHover className="h-full w-full" speed={40}>
                    <div className="h-full md:w-screen flex md:justify-around items-center gap-4 px-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-customGrey">
                                {typeof item === "string" ? (
                                    <span className="text-xs md:text-base font-medium whitespace-nowrap">{item}</span>
                                ) : (
                                    <span className="flex-shrink-0">
                                        {React.createElement(item, {
                                            className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0",
                                        })}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    )
}
