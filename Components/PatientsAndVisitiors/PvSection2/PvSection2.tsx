"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { InpatientServices } from "./InpatientServices/InpatientServices"
import { FacilitiesForVisitors } from "./FacilitiesForVisitors/FacilitiesForVisitors"
import { SupportServices } from "./SupportServices/SupportServices"
import { InsuranceAndBilling } from "./InsuranceAndBilling/InsuranceAndBilling"
import { client } from "@/sanity/sanity-utils"
import { pvQuery } from "@/sanity/lib/queries"

export const PvSection2 = () => {
  const [navSelected, setNavSelected] = useState<NavCategory>("Inpatient Services")
  const [prevNavIndex, setPrevNavIndex] = useState<number>(0)
  const navRef = useRef<HTMLDivElement>(null)

  type NavCategory = "Inpatient Services" | "Facilities for visitors" | "Support Services" | "Insurance And Billing"

  const categories: NavCategory[] = ["Inpatient Services", "Facilities for visitors", "Support Services", "Insurance And Billing"]

  const[data , setData] = useState()
  const getData = async()=>{
    const d = await client.fetch(pvQuery)
    console.log("d is " , d)
    setData(d)
    return d
  }

  useEffect(()=>{
    console.log("inside the parent useEffect")
    getData()
  },[])
 

  // Map each category to its corresponding component
  // const navComponents: Record<NavCategory, React.ReactNode> = {
  //   "Inpatient Services": <InpatientServices/>,
  //   "Facilities for visitors": <FacilitiesForVisitors />,
  //   "Support Services": <SupportServices />,
  //   "Insurance And Billing": <InsuranceAndBilling />,
  // }


  const navComponents: Record<NavCategory, (data: any) => React.ReactNode> = {
    "Inpatient Services": (data) => <InpatientServices data={data}/>,
    "Facilities for visitors": (data) => <FacilitiesForVisitors data={data} />,
    "Support Services": (data) => <SupportServices data={data} />,
    "Insurance And Billing": (data) => <InsuranceAndBilling data={data} />,
  }


  const handleNavClick = (category: NavCategory) => {
    setPrevNavIndex(categories.indexOf(navSelected))
    setNavSelected(category)
  }


  return (
    <section className="min-h-[70vh] w-full flex flex-col gap-4 sm:gap-8">
      <div className="px-4 md:px-16 pt-20">
        <div className="h-max w-full pb-4 sm:pb-8 flex flex-col gap-4 sm:gap-8 border-b-[2px] border-ligthGrey">
          <div className="w-full relative">
            <div
              ref={navRef}
              className="w-full flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
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
                      className={`text-xs sm:text-sm md:text-[14px] whitespace-nowrap ${
                        navSelected === category ? "text-primary1" : "text-textGrey"
                      } select-none text-center`}
                    >
                      {category}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        <div className="w-full flex items-center">
          {navSelected && (
            <motion.div
              key={navSelected}
              initial={{
                opacity: 0,
                x: prevNavIndex < categories.indexOf(navSelected) ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: prevNavIndex < categories.indexOf(navSelected) ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-24 w-full"
            >
              {/* {navComponents[navSelected]} */}
              {navComponents[navSelected](data)}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </section>
  )
}
