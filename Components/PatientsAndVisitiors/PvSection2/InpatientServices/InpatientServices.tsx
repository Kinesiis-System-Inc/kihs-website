import React from 'react'

export const InpatientServices = () => {
    const imgItem = ['/doct_cart.png','/build_cart.png','/doct_lady.png']
    return (
        <div className="w-full mb-8 p-4 md:pl-16">
            <h2 className="text-2xl font-semibold">Inpatient Services</h2>
            <p className="mb-4 text-customGrey text-xs sm:text-sm md:text-[14px]">Welcome to Your Home Away from Home</p>
            <p className="mb-2 text-customGrey text-xs sm:text-sm md:text-[14px]">At our hospital, we prioritise your comfort and recovery with comprehensive inpatient care services:</p>
            <p className="text-customGrey text-xs sm:text-sm md:text-[14px]">Room Options:</p>
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
            </ul>
            <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 w-full'>
                    {imgItem.map((item,index)=> <div key={index} className='w-full flex items-center justify-center'><img  src={item} className='rounded-3xl self-center' /></div> )}
            </div>
        </div>
    )
}
