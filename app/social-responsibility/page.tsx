import React from 'react'

export default function Page() {
    const contentItem = [
        {
            title: "Healthcare for All",
            description: "We conduct monthly multi-specialty medical camps that bring quality healthcare directly to underprivileged and rural communities.<br/> Our team of dedicated medical professionals ensures that essential healthcare services reach those who need them most.",
        },
        {
            title: "Maternity Care",
            description: ` <p>
        Expecting mothers can benefit from our comprehensive maternity care
        package, including:
      </p>
      <ul className="list-disc pl-5 mt-2">
        <li>Free antenatal camps</li>
        <li>Complimentary medicines</li>
        <li>Up to 50% discount on delivery charges</li>
      </ul>`,
        },
        {
            title: "Education Empowerment",
            description: "Our adult literacy programs focus on teaching Marathi and English, completely free of cost.<br/>We believe that education knows no age, and these programs help adults gain confidence and independence in their daily lives.",
        },
    ];
    return (
        <main>
            <section className='flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around items-center w-full mt-16 gap-12 pb-24'>
                <div className='relative'>
                    <img src='/social_respo.png' className='rounded-2xl' alt='KIHS building' />
                </div>
                <div className="w-full md:h-[70vh] lg:w-1/2 flex flex-col justify-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8 h-full">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Empowering Communities Through Care</h2>
                        <div />
                        <p className="text-customGrey text-[14px] mb-6">
                            At GODH Foundation, we believe in creating lasting positive change in our communities. Our commitment goes beyond healthcare.
                        </p>
                        <p className="text-customGrey text-[14px]">
                            We&apos;re dedicated to building stronger, more educated, and healthier communities through meaningful initiatives that touch lives.
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-6 px-4 md:px-28'>
                <h2 className="text-2xl font-semibold">Inpatient Services</h2>
                <div>
                    <div className='grid grid-cols-1 gap-4'>
                        {contentItem.map(({ title, description }, index) => {
                            return (
                                <button key={index} className="flex items-center justify-between px-4 py-2 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                                    <span className="flex items-center gap-8 md:pr-16">
                                        <img src="/handWithPlus.png" alt="hand with plus icon" className="w-12 h-12" />
                                        <div className='flex flex-col items-start gap-1'>
                                            <span className='text-[16px] font-semibold text-start'>{title}</span>
                                            <span className="text-[14px] md:text-[16px] text-customGrey text-left" dangerouslySetInnerHTML={{ __html: `${description}` }} />
                                        </div>
                                    </span>
                                </button>
                            )

                        })}
                    </div>
                </div>
            </section>
            <section className='md:px-32 w-full py-24'>
                <div className='w-full min-h-[100px] bg-secondaryTint md:rounded-2xl flex flex-col md:flex-row items-center justify-center py-4 px-4 md:px-16'>
                    <div className='md:pr-28 flex flex-col gap-3'>
                        <h2 className='font-semibold text-2xl'>Making a Difference Together</h2>
                        <p className='text-customGrey text-[14px]'>
                            Every initiative at GODH Foundation is driven by our vision of an inclusive society where quality healthcare and education are accessible to all. Our work reaches into the remotest corners of society, ensuring that distance and financial constraints don&apos;t stand in the way of well-being.
                        </p>
                    </div>
                    <div>
                        <img src="/joy_star.png" className='w-full md:w-[600px]' alt="Two hands holding heart with the plus icon inside" />
                    </div>
                </div>
            </section>
            <section className='flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around items-center w-full mt-16 gap-12 pb-24'>
                <div className='relative'>
                    <img src='/dr_ot.png' className='rounded-2xl' alt='KIHS building' />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8 h-full">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold">How You Can Access Our Services</h2>
                        <p className="mb-4 text-customGrey text-xs sm:text-sm md:text-[14px]">Medical Camps</p>
                        <div />
                        <p className="text-customGrey text-[14px] mb-6">
                            Join our monthly multi-specialty camps designed specifically for underprivileged and rural populations.
                        </p>
                        <p className="text-customGrey text-[14px] mb-6">
                            These camps bring essential healthcare services right to your community.
                        </p>
                        <p className="text-customGrey text-[14px]">
                            Transform lives with us. Contact GODH Foundation or hospital helpdesk to learn more about our programs or to participate in our initiatives.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
