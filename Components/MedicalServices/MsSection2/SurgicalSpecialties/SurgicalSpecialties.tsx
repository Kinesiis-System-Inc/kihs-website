import React from 'react'

export const SurgicalSpecialties = () => {
  return (
    <div className='flex flex-col md:flex-row px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
      <div className='relative flex items-center justify-center'>
        <img src='/support_doc.png' className='rounded-2xl' alt='KIHS building' />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">2.Surgical Specialties</h2>
          <p className="text-customGrey text-[14px]">Comprehensive Surgical Services</p>
          <p className="text-customGrey text-[14px] font-semibold mb-6">Surgical Highlights</p>
          <div />
          <p className="text-customGrey text-[14px]">- Leader in Endo Urology surgeries</p>
          <p className="text-customGrey text-[14px] mb-6">- Highest number of laparoscopic surgeries in Western Maharashtra</p>
          <p className="text-customGrey text-[14px] mb-6">Our hospital offers expert surgical care across multiple specialties:</p>
          <p className="text-customGrey text-[14px] font-semibold">Surgical Departments</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              General Surgery
            </li>
            <li>
              Urology
            </li>
            <li>
              Oncosurgery
            </li>
            <li>
              Paediatric Surgery
            </li>
            <li>
              Surgical Gastroenterology
            </li>
            <li>
              Obstetrics & Gynaecology
            </li>
            <li>
              Ophthalmology
            </li>
            <li>
              ENT
            </li>
          </ul>
          <p className="text-customGrey text-[14px] font-semibold">Operation Theatres</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              4 specialized operation theatres
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Unique features:</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              HEPA air filtration
            </li>
            <li>
              Stainless steel operating rooms
            </li>
            <li>
              Attached Central Sterile Services Department (CSSD)
            </li>
            <li>
              Advanced HVAC system
            </li>
            <li>
              Advanced Anaesthesia Work Station
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Specialized OT configurations:</p>
          <ul className="list-decimal pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>
              Laparoscopic OT
            </li>
            <li>
              Genito-urological Surgery OT
            </li>
            <li>
              Gynaecology OT
            </li>
            <li>
              Ophthalmology OT
            </li>
          </ul>
          <p className="text-customGrey text-[14px]">Specialisations in:</p>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>
              Endo Urology surgeries
            </li>
            <li>
              Laparoscopic General Surgeries
            </li>
            <li>
              Laparoscopic Gynaecological Surgeries
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
