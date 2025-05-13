import React from 'react'

export const InsuranceAndBilling = () => {
    const imgItem = ['/doct_cart.png', '/build_cart.png', '/doct_lady.png'];


    interface CompanyType {
        name: string,
        image: string
    }
    interface CompanyDetailsType {
        title: string,
        companies: CompanyType[]
    }


    const tableContent: CompanyDetailsType[] = [
        {
            title: "TPA",
            companies: [
                {
                    name: "MD India",
                    image: "/TPA/md_india.png"
                },
                {
                    name: "Mediassist TPA",
                    image: "/TPA/Mediassist_TPA.png"
                },
                {
                    name: "Paramount TPA",
                    image: "/TPA/Paramount_TPA.png"
                },
                {
                    name: "FHPL TPA",
                    image: "/TPA/FHPL_TPA.png"
                },
                {
                    name: "East West TPA",
                    image: "/TPA/EastWest_TPA.png"
                },
                {
                    name: "Medsave TPA",
                    image: "/TPA/Medsave_TPA.png"
                },
                {
                    name: "Health India TPA",
                    image: "/TPA/Health_India_TPA.png"
                }
            ]
        },
        {
            title: "Government Scheme",
            companies: [
                {
                    name: "MPJJAY",
                    image: "/Government-Scheme/MJPJAY.jpeg"
                },
                {
                    name: "AB-Ark",
                    image: "/Government-Scheme/AB-Ark.jpg"
                },
                {
                    name: "[ECHS]",
                    image: "/Government-Scheme/ECHS.png"
                }
            ]
        },
        {
            title: "Govt. Insurance Companies",
            companies: [
                {
                    name: "New India Assurance",
                    image: "/Govt-Insurance-Companies/New_India_Assurance.jpeg"
                },
                {
                    name: "Oriental Insurance",
                    image: "/Govt-Insurance-Companies/The_Oriental_Insurance_Company_Logo.svg.png"
                },
                {
                    name: "United Insurance",
                    image: "/Govt-Insurance-Companies/United-Insurance.jpeg"
                },
                {
                    name: "National Insurance",
                    image: "/Govt-Insurance-Companies/National-Insurance.png"
                }
            ]
        },
        {
            title: "Private Insurance Companies",
            companies: [
                {
                    name: "Star Health",
                    image: "/Private-Insurance-Companies/Star_Health_and_Allied_Insurance.svg.png"
                },
                {
                    name: "Bajaj Health",
                    image: "/Private-Insurance-Companies/Bajaj-Health.png"
                },
                {
                    name : "Reliance Health",
                    image : "/Private-Insurance-Companies/Reliance-Health.png"
                },
                {
                    name : "Religare Health",
                    image : "/Private-Insurance-Companies/Raheja-QBE.png"
                },
                {
                    name : "SBI Life",
                    image : "/Private-Insurance-Companies/SBI-Life.png"
                },
                {
                    name : "Liberty",
                    image : "/Private-Insurance-Companies/Liberty_Insurance.png"
                },
                {
                    name : "Niva Bupa",
                    image : "/Private-Insurance-Companies/Niva-Bupa.webp"
                },
                {
                    name : "TATA AIG",
                    image : "/Private-Insurance-Companies/TATA-AIG.png"
                },
                {
                    name : "Aditya",
                    image : "/Private-Insurance-Companies/Aditya-Birla-Capital.png"
                },
                {
                    name : "IFFCO Tokio Health",
                    image : "/Private-Insurance-Companies/IFFCO_Tokio_Health.png"
                },
                {
                    name : "Care Health",
                    image : "/Private-Insurance-Companies/Care_health_insurance_logo.png"
                },
                {
                    name : "Cholamandalam",
                    image : "/Private-Insurance-Companies/Cholamandalam.png"
                },
                {
                    name : "Edelweiss",
                    image : "/Private-Insurance-Companies/Edelweiss.png"
                },
                {
                    name : "Go Digit",
                    image : "/Private-Insurance-Companies/Go-Digit.webp"
                },
                {
                    name : "HDFC ERGO",
                    image : "/Private-Insurance-Companies/HDFC-Ergo-logo.png"
                },
                {
                    name : "HDFC ERGO Gen.",
                    image : "/Private-Insurance-Companies/HDFC-ERGO-GEN.webp"
                },
                {
                    name : "HDFC LIFE",
                    image : "/Private-Insurance-Companies/HDFC_Life_Logo.svg.png"
                },
                {
                    name : "ICICI Lombard",
                    image : "/Private-Insurance-Companies/ICICI-Lombard.png"
                },
                {
                    name : "KOTAK MAHINDRA",
                    image : "/Private-Insurance-Companies/KOTAK-MAHINDRA.png"
                },
                {
                    name : "Manipal SigmaNavi Gen.",
                    image : "/Private-Insurance-Companies/Manipal-SigmaNavi-Gen..png"
                },
                {
                    name : "Magma HDI",
                    image : "/Private-Insurance-Companies/Magma-HDI.png"
                },
                {
                    name : "Care Health",
                    image : "/Private-Insurance-Companies/Care_health_insurance_logo.png"
                },
                {
                    name : "Universal Sampo",
                    image : "/Private-Insurance-Companies/Universal-Sompo.jpeg"
                },
                {
                    name : "SBI General",
                    image : "/Private-Insurance-Companies/SBI-General.jpeg"
                },
                {
                    name : "Future Gen.",
                    image : "/Private-Insurance-Companies/Future-Gen.png"
                },
                {
                    name : "New India",
                    image : "/Private-Insurance-Companies/New-India.png"
                },
                {
                    name : "Raheja QBE",
                    image : "/Private-Insurance-Companies/Raheja-QBE.png"
                },
                {
                    name : "Royal Sundaram",
                    image : "/Private-Insurance-Companies/Royal-Sundaram.png"
                },
                {
                    name : "Apollo Munich",
                    image : "/Private-Insurance-Companies/Apollo-Munich.png"
                },
                {
                    name : "L & T Gen.",
                    image : "/Private-Insurance-Companies/L&T-insurance.jpg"
                },
                {
                    name : "Max Life",
                    image : "/Private-Insurance-Companies/Max-Life.png"
                }
            ]
        }
    ]

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

                {/* table section UI */}
                <section className="overflow-x-auto p-4 md:px-16 md:py-10">
                    {tableContent.map((content, index) => {
                        return (
                            <div key={index} className={`w-[100%] px-[10px] ${index != 0 ? "py-[25px]" : "p-0"}`}>
                                <h2 className='text-xl px-[10px] py-[15px]'>{content.title}</h2>

                                <table className="min-w-full table-fixed bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden text-center ">
                                    <thead>
                                        <tr className="bg-primary1 text-white rounded-t-lg text-center">
                                            <th className="py-3 px-4 w-1/2 first:rounded-tl-lg last:rounded-tr-lg text-center ">Logo</th>
                                            <th className="py-3 px-4 w-1/2 text-center">Company</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {content.companies?.map((company, index) => (
                                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 text-center ">
                                                <td className="py-3 px-4  text-center flex justify-center items-center w-full "> <img className='w-[50px] h-auto' src={company.image} alt={`${company.name}-image`} />  </td>
                                                <td className="py-3 px-4 w-1/2 text-center ">{company.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        )
                    })}
                </section>

                {/* Image Grid */}
                <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 w-full mt-6'>
                    {imgItem.map((item, index) => <div key={index} className='w-full flex items-center justify-center'><img src={item} className='rounded-3xl self-center' /></div>)}
                </div>
            </div>
        </div>
    )
}
