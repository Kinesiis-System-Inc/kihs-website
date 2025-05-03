import React from 'react'

export const CriticalCare = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
      <div className='relative'>
        <img src='/faci.png' className='rounded-2xl' alt='KIHS building' />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">1.Critical Care (ICU)</h2>
          <p className="text-customGrey text-[14px] mb-6">Our hospital provides advanced intensive care with two specialised ICUs:</p>
          <p className="text-customGrey text-[14px] font-semibold mb-6">Medical and Surgical ICU Features</p>
          <div />
          <p className="text-customGrey text-[14px]">Two dedicated ICUs:</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>
              Medical ICU
            </li>
            <li>
              Surgical ICU
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Advanced monitoring systems</p>
          <p className="text-customGrey text-[14px] pb-6">State-of-the-art equipment:</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>
              Ventilators
            </li>
            <li>
              Ultrasound machines
            </li>
            <li>
              Arterial Blood Gas (ABG) machine
            </li>
            <li>
              Isolation facilities for infectious diseases
            </li>
            <li>
              Attached operation theatre
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

