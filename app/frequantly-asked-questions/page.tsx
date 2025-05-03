'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoPlusCircle } from 'react-icons/go'
import { FiMinusCircle } from 'react-icons/fi'

export default function Page() {
    const [openIndexes, setOpenIndexes] = useState<Record<number, number | null>>({ 0: 0 });
    const faqData = [
        {
            category: "General Questions",
            items: [
                {
                    question: "What are your hospital timings?",
                    answer:
                        "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "How do I book an appointment?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "Do you have parking facilities?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "Is Wi-Fi available?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "Do you have parking facilities?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
            ],
        },
        {
            category: "Medical Services",
            items: [
                {
                    question: "What specialties do you cover?",
                    answer:
                        "We specialise in Endo Urology, Laparoscopic Surgery, Gynaecology, General Surgery, Ophthalmology, and many other specialties. Please check Doctors & Department page for more details.",
                },
                {
                    question: "What diagnostic services do you offer?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "Do you have emergency services?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
            ],
        },
        {
            category: "Facilities & Accommodation",
            items: [
                {
                    question: "What types of rooms are available?",
                    answer:
                        "We offer General Ward, Semi-Private Rooms, Private Rooms, and Suite Rooms. All rooms have central oxygen supply and nurse calling systems.",
                },
                {
                    question: "Is food available at the hospital?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "Are visitors allowed?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
            ],
        },
        {
            category: "Insurance & Records",
            items: [
                {
                    question: "What insurance plans do you accept?",
                    answer:
                        "We accept most major insurance providers including government schemes (MJPJAY, AB-Ark) and private insurers <br/> Contact our insurance desk at 0233-2305329, 9156305329 Extn:2000 for specific details.",
                },
                {
                    question: "Is food available at the hospital?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: "Are visitors allowed?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
            ],
        },
        {
            category: "GODH Foundation Initiative",
            items: [
                {
                    question: "Do you offer any free medical camps?",
                    answer:
                        "Yes, we organize monthly multi-specialty medical camps for underprivileged and rural populations through our GODH Foundation.",
                },
                {
                    question: " Are there any special discounts for maternity services?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
                {
                    question: ".Do you offer any educational programs for the community?",
                    answer: "Our hospital is open 24/7 for emergencies. OPD services run from 10:00 AM to 7:00 PM, Monday to Saturday (Closed on Sundays).",
                },
            ],
        },
    ];

    const contactData = [
        {
            label: "care@kullollihealth.com",
            icon: "/message_vector.png",
        },
        {
            label: "kihssangli@gmail.com",
            icon: "/message_vector.png",
        },
    ]

    const toggleFAQ = (sectionIndex: number, index: number) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [sectionIndex]: prev[sectionIndex] === index ? null : index,
        }));
    };

    return (
        <main className="px-4 md:px-24 py-16">
            <p className="text-sm text-blue-500 mb-1">FAQs</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-full py-4">
                {faqData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-11">
                        <h2 className="text-xl font-semibold mb-8">{section.category}</h2>
                        {section.items.map((faq, index) => (
                            <div key={index} className="border-b border-ligthGrey py-6">
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => toggleFAQ(sectionIndex, index)}
                                >
                                    <span className="font-semibold text-[16px]">{`${index + 1}. ${faq.question}`}</span>
                                    <span>{openIndexes[sectionIndex] === index ? <div className="h-4w-4">
                                        <FiMinusCircle className="text-customGrey cursor-pointer" />
                                    </div> : <div className="h-4w-4">
                                        {' '}
                                        <GoPlusCircle className="text-customGrey cursor-pointer" />
                                    </div>}</span>

                                </button>
                                <AnimatePresence>
                                    {openIndexes[sectionIndex] === index && faq.answer && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-2 text-sm text-gray-600 overflow-hidden"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-8">Still Have Questions?</h2>
                <div className='flex flex-col pr-20 gap-4 mb-6'>
                    <p className="font-semibold text-[16px]">Contact us at:</p>
                    {
                        contactData.map((item, index) => {
                            return (
                                <button key={index}
                                    className="max-w-fit flex items-center justify-between px-4 py-4 bg-outlineGrey border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200">
                                    <span className="flex items-center gap-3">
                                        <img src={item.icon} alt={`${item.label.toLowerCase()} icon`} />
                                        <span className="text-[14px] md:text-[16px]">{item.label}</span>
                                    </span>
                                </button>
                            )
                        })
                    }
                </div>
                <p className="my-6 text-sm text-gray-600">Our staff is always ready to help you with any additional questions or concerns you may have.</p>
            </div>

        </main>
    )
}
