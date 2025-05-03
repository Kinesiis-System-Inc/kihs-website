import React from 'react'

export const CareerSection1 = () => {
    return (
        <section className='flex flex-col md:flex-row justify-around items-center w-full h-full mt-16 px-4 md:py-20 md:px-24 lg:px-32 gap-12'>
            <div>
                <img src='/doctor_group.png' className='w-[100%] h-[500px] rounded-2xl' alt='Group of doctor' />
            </div>
            <div className="w-full md:h-[500px] lg:w-1/2 flex flex-col items-center justify-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
                <div>
                    <p className="text-sm text-blue-500 mb-1">Careers at Kullolli Institute of Health Services (KIHS)</p>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Join a team that values compassion, skill, and dedication.</h2>
                    <div />
                    <p className="text-customGrey text-[14px] mb-6">At KIHS, we believe in putting people first, both our patients and our employees.
                        We promote a supportive and inclusive environment where everyone feels valued and respected.</p>

                </div>
            </div>
        </section>
    )
}
