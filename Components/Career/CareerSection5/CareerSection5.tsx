import React from 'react'

export const CareerSection5 = () => {
    return (
        <section className='md:px-28 w-full -mt-24 md:mt-0'>
            <div className='w-full min-h-[100px] bg-bgBlue md:rounded-2xl flex flex-col-reverse md:flex-row items-center justify-center gap-4 px-4 py-8 md:pl-16'>
                <div className='flex flex-col gap-4'>
                    <div className='pr-28 flex flex-col gap-3'>
                        <h2 className='font-semibold text-4xl'>Internships and Volunteer Opportunities</h2>
                        <p className='text-customGrey text-[14px]'>
                            We offer internships and volunteer opportunities in various departments. These provide valuable experience and a chance to contribute to our mission.
                        </p>
                    </div>
                    <div className='pr-28 flex flex-col gap-3'>
                        <h2 className='font-bold text-[18px]'>How to Apply:</h2>
                        <p className='text-customGrey text-[14px]'>
                        Interested candidates can submit their resume, cover letter, and relevant documents to <a className='text-primary1 underline' href="mailto:hr@kullollihealth.com">hr@kullollihealth.com</a>  or 
                        visit the HR department in the administrative block at KIHS.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/girl_laptop.png" className='md:w-[30vw]' alt="Two hands holding heart with the plus icon inside" />
                </div>
            </div>
        </section>
    )
}
