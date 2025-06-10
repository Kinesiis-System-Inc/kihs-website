import { urlFor } from '@/sanity/sanity-utils';
import React from 'react'
import { InsuranceAndBilling as InsuranceAndBillingType } from '../../../../libs/types';

type Props = {
    data: {
        insuranceAndBilling: InsuranceAndBillingType;
    };
};

export const InsuranceAndBilling = ({ data }: Props) => {

    return (
        <div className='flex flex-col gap-24'>
            <div className='flex flex-col md:flex-row-reverse px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24'>
                {/* <div className='relative'> */}
                {/* <img src='/doctor_group.png' className='rounded-2xl' alt='KIHS building' /> */}
                {/* <img src={urlFor(data.insuranceAndBilling?.coverImage).url()} className='rounded-2xl' alt={data.insuranceAndBilling?.coverImage.alt} /> */}
                {/* </div> */}
                <div className="flex items-center justify-center w-full md:w-[40vw]">
                    <video
                        loop
                        muted
                        autoPlay
                        className="w-full h-auto rounded-md shadow"
                    >
                        <source src="./Conference Hall.webm" type="video/webm" />
                        Your browser doesn’t support WebM.
                    </video>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold"> {data.insuranceAndBilling?.title} </h2>
                        <div />
                        {/* <p className="text-customGrey text-[14px]">At KIHS Hospital, we ensure a seamless billing and insurance experience with our cashless services.</p>
                        <p className="text-customGrey text-[14px] mb-6">Partnered with leading TPAs, government schemes, and private insurers, we simplify claims for stress-free healthcare. Whether you&apos;re covered by New India Assurance, Star Health, ICICI Lombard, or others, our team is here to assist you.</p> */}
                        <p className="text-customGrey text-[14px] mb-6"> {data.insuranceAndBilling?.description} </p>

                        {/* <p className="text-customGrey text-[14px]">For Details:</p>
                        <p className="text-customGrey text-[14px]">Call: 02332305329 - 2000/ +91 915630532</p>
                        <p className="text-customGrey text-[14px]">Email : Miss. Revati Suryavanshi</p>
                        <a href='mailto:Cashless@kullollihealth.com' className="text-customGrey text-[14px]">Cashless@kullollihealth.com</a> */}

                        <p className="text-customGrey text-[14px]"> {data.insuranceAndBilling?.details?.detailsTItle}: </p>
                        {data.insuranceAndBilling?.details?.allDetails.map((item, index) => {
                            return <div key={index}>
                                <p className="text-customGrey text-[14px]">{item.label}: {item.value}</p>
                            </div>
                        })}

                    </div>
                </div>
            </div>
            <div className="w-full mb-8 p-4 md:pl-16">
                <h2 className="text-2xl font-semibold"> {data.insuranceAndBilling?.table?.title} </h2>

                {/* table section UI */}
                <section className="overflow-x-auto p-4 md:px-16 md:py-10">
                    {data.insuranceAndBilling?.table?.tableContent.map((t, index) => {
                        return (
                            <div key={index} className={`w-[100%] px-[10px] ${index != 0 ? "py-[25px]" : "p-0"}`}>
                                <h2 className='text-xl px-[10px] py-[15px]'>{t.tableName}</h2>

                                <table className="min-w-full table-fixed bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden text-center ">
                                    <thead>
                                        <tr className="bg-primary1 text-white rounded-t-lg text-center">
                                            <th className="py-3 px-4 w-1/2 first:rounded-tl-lg last:rounded-tr-lg text-center ">Logo</th>
                                            <th className="py-3 px-4 w-1/2 text-center">Company</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {t.tableValues?.map((tv, ind: number) => (
                                            <tr key={ind} className="border-b border-gray-200 hover:bg-gray-100 text-center ">
                                                <td className="py-3 px-4  text-center flex justify-center items-center w-full "> <img className='w-[50px] h-auto' src={urlFor(tv.companyLogo).url()} alt={`${tv.companyLogo.alt}-image`} />  </td>
                                                <td className="py-3 px-4 w-1/2 text-center ">{tv.companyName}</td>
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
                    {data.insuranceAndBilling?.images.map((item, index) => <div key={index} className='w-full flex items-center justify-center'><img src={urlFor(item).url()} alt={item.alt} className='rounded-3xl self-center' /></div>)}
                </div>
            </div>
        </div>
    )
}