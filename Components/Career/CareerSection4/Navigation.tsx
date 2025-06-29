"use client"

import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { client } from "@/sanity/lib/client"

type NavCategory = "Doctors" | "Nurses" | "Management" | "Development" | "Administration"

interface JobData {
    title: string
    jobCatagory: NavCategory
    catagory: NavCategory // <-- for display
    isNew: boolean
    degree: string
    slug: string
}

export const Navigation = () => {
    const [navSelected, setNavSelected] = useState<NavCategory>("Doctors")
    const [prevNavIndex, setPrevNavIndex] = useState<number>(0)
    const [groupedJobs, setGroupedJobs] = useState<Record<NavCategory, JobData[]>>({
        Doctors: [],
        Nurses: [],
        Management: [],
        Development: [],
        Administration: [],
    })

    const categories: NavCategory[] = ["Doctors", "Nurses", "Management", "Development", "Administration"]
    const navRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const handleViewOpening = (slug: string) => {
        router.push(`/careers/${slug}`)
    }

    const fetchJobs = async () => {
        const data: Omit<JobData, 'catagory'>[] = await client.fetch(`*[_type == "jobPosting"]{
            title,
            jobCatagory,
            isNew,
            degree,
            "slug": slug.current
        }`)

        const grouped: Record<NavCategory, JobData[]> = {
            Doctors: [],
            Nurses: [],
            Management: [],
            Development: [],
            Administration: [],
        }

        data.forEach(job => {
            if (job.jobCatagory && grouped[job.jobCatagory]) {
                grouped[job.jobCatagory].push({ ...job, catagory: job.jobCatagory })
            }
        })

        setGroupedJobs(grouped)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    const handleNavClick = (category: NavCategory) => {
        setPrevNavIndex(categories.indexOf(navSelected))
        setNavSelected(category)
    }

    const NewsEventComp = ({ title, isNew, degree, slug, catagory }: JobData) => (
        <div className="w-full py-3 p-2 md:p-3 sm:p-4 grid grid-cols-3 bg-white border-[2px] border-outlineGrey rounded-2xl">
            <div className="flex flex-col col-span-2 gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-primary1 text-xs sm:text-sm">{catagory}</span>
                    {isNew ? <span className="px-2 sm:px-4 text-xs sm:text-sm bg-secondaryTint rounded-full">Join immediately</span> : ''}
                </div>
                <div>
                    <p className='font-semibold text-sm sm:text-base'>{title}</p>
                    <p className='text-[14px] text-customGrey'>{degree}</p>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button
                    onClick={() => handleViewOpening(slug)}
                    className="px-3 py-1 text-xs sm:text-sm bg-bgBlue rounded-full cursor-pointer"
                >
                    View Opening
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-h-[60vh] w-full flex flex-col gap-4 sm:gap-8">
            <div className="h-max w-full pb-4 sm:pb-8 flex flex-col gap-4 sm:gap-8">
                <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold text-black text-base sm:text-[18px] md:text-2xl lg:text-3xl">
                        We are currently seeking dedicated individuals to fill the following roles:
                    </h3>
                </div>
                <div className="w-full relative">
                    <div ref={navRef} className="w-full flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide px-1">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 cursor-pointer relative flex-shrink-0"
                                onClick={() => handleNavClick(category)}
                            >
                                <motion.div
                                    className="flex-grow flex flex-col items-center justify-center gap-2 cursor-pointer relative"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span
                                        className={`text-xs sm:text-sm md:text-[14px] whitespace-nowrap ${navSelected === category ? "text-primary1" : "text-textGrey"
                                            } select-none text-center`}
                                    >
                                        {category}
                                    </span>
                                </motion.div>
                                {navSelected === category && (
                                    <div className="absolute bottom-0 bg-primary1 h-[2px] w-full rounded"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence initial={false}>
                <div className="w-full flex items-center justify-center">
                    {navSelected && (
                        <motion.div
                            key={navSelected}
                            initial={{ opacity: 0, x: prevNavIndex < categories.indexOf(navSelected) ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: prevNavIndex < categories.indexOf(navSelected) ? -100 : 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                        >
                            {Array.isArray(groupedJobs[navSelected]) && groupedJobs[navSelected].length > 0 ? (
                                groupedJobs[navSelected].map((item, ind) => (
                                    <NewsEventComp key={ind} {...item} />
                                ))
                            ) : (
                                <p className="text-sm text-gray-500 col-span-full">No job openings in this category.</p>
                            )}

                        </motion.div>
                    )}
                </div>
            </AnimatePresence>
        </div>
    )
}
