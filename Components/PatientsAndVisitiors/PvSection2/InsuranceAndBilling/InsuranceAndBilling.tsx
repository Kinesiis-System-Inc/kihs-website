import React from 'react'

export const InsuranceAndBilling = () => {
    const imgItem = ['/doct_cart.png', '/build_cart.png', '/doct_lady.png'];
    return (
        <div className='flex flex-col gap-24'>
            <div className='flex flex-col md:flex-row-reverse px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
                <div className='relative'>
                    <img src='/doctor_group.png' className='rounded-2xl' alt='KIHS building' />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold">Insurance & Billing</h2>
                        <div />
                        <p className="text-customGrey text-[14px]">At KIHS Hospital, we ensure a seamless billing and insurance experience with our cashless services.</p>
                        <p className="text-customGrey text-[14px] mb-6">Partnered with leading TPAs, government schemes, and private insurers, we simplify claims for stress-free healthcare. Whether you&apos;re covered by New India Assurance, Star Health, ICICI Lombard, or others, our team is here to assist you.</p>
                        <p className="text-customGrey text-[14px]">For Details:</p>
                        <p className="text-customGrey text-[14px]">Call: 02332305329 - 2000/ +91 915630532</p>
                        <p className="text-customGrey text-[14px]">Email : Miss. Revati Suryavanshi</p>
                        <a href='mailto:Cashless@kullollihealth.com' className="text-customGrey text-[14px]">Cashless@kullollihealth.com</a>
                    </div>
                </div>
            </div>
            <div className="w-full mb-8 p-4 md:pl-16">
                <h2 className="text-2xl font-semibold">Cashless Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {/* Left Column */}
                    <div>
                        <h3 className="text-lg font-semibold">TPA</h3>
                        <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
                            <li>MD India</li>
                            <li>Mediassist TPA</li>
                            <li>Paramount TPA</li>
                            <li>FHPL TPA</li>
                            <li>East West TPA</li>
                            <li>Medsave TPA</li>
                            <li>Health India TPA</li>
                        </ul>

                        <h3 className="text-lg font-semibold">Government Scheme</h3>
                        <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
                            <li>MPJJAY</li>
                            <li>AB-Ark</li>
                            <li>[ECHS]</li>
                        </ul>

                        <h3 className="text-lg font-semibold">Govt. Insurance Companies</h3>
                        <ul className="list-disc pl-6 text-customGrey text-sm space-y-1">
                            <li>New India Assurance</li>
                            <li>Oriental Insurance</li>
                            <li>United Insurance</li>
                            <li>National Insurance</li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h3 className="text-lg font-semibold">Private Insurance Companies</h3>
                        <ul className="list-disc pl-6 text-customGrey text-sm space-y-1">
                            <li>Star Health</li>
                            <li>Bajaj Health</li>
                            <li>Reliance Health</li>
                            <li>Religare Health</li>
                            <li>SBI Life</li>
                            <li>Liberty</li>
                            <li>Niva Bupa</li>
                            <li>TATA AIG</li>
                            <li>Aditya</li>
                            <li>IFFCO Tokio Health</li>
                            <li>Care Health</li>
                            <li>Cholamandalam</li>
                            <li>Edelweiss</li>
                            <li>Go Digit</li>
                            <li>HDFC ERGO</li>
                            <li>HDFC ERGO Gen.</li>
                            <li>HDFC LIFE</li>
                            <li>ICICI Lombard</li>
                            <li>KOTAK MAHINDRA</li>
                            <li>Manipal SigmaNavi Gen.</li>
                            <li>Magma HDI</li>
                            <li>Care Health</li>
                            <li>Universal Sampo</li>
                            <li>SBI General</li>
                            <li>Future Gen.</li>
                            <li>New India</li>
                            <li>Raheja QBE</li>
                            <li>Royal Sundaram</li>
                            <li>Apollo Munich</li>
                            <li>L & T Gen.</li>
                            <li>Max Life</li>
                        </ul>
                    </div>
                </div>

                {/* Image Grid */}
                <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 w-full mt-6'>
                    {imgItem.map((item,index)=> <div key={index} className='w-full flex items-center justify-center'><img  src={item} className='rounded-3xl self-center' /></div> )}
            </div>
            </div>
        </div>
    )
}
