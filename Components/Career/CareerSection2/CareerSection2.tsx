import React from 'react'

export const CareerSection2 = () => {
    const contentItem = [
        {
            title: "Skill-Based Hiring",
            description: "We prioritise talent and ability over qualifications.",
        },
        {
            title: "Inclusive Culture",
            description: "We promote diversity and welcome individuals from all backgrounds.",
        },
        {
            title: "Employee Well-being",
            description: "We offer attractive benefits and prioritise the well-being of our employees and their families.",
        },
        {
            title: "Growth Opportunities",
            description: "We provide ongoing training and development opportunities to help you advance your career.",
        },
        {
            title: "Make a Difference",
            description: "Join us in providing exceptional patient care and making a positive impact on the community.",
        },
    ];

    return (
        <section className='w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32'>
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose a Career with Us?</h2>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {contentItem.map(({ title, description }, index) => {
                        return (
                            <button key={index} className="flex items-center justify-between px-4 py-2 bg-white border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                                <span className="flex items-center gap-8 md:pr-16">
                                    <img src="/handWithPlus.png" alt="hand with plus icon" className="w-12 h-12" />
                                    <div className='flex flex-col items-start gap-1'>
                                        <span className='text-[16px] font-semibold'>{title}</span>
                                        <span className="text-[14px] md:text-[16px] text-customGrey text-left">{description}</span>
                                    </div>
                                </span>
                            </button>
                        )

                    })}
                </div>
            </div>
        </section>
    )
}
