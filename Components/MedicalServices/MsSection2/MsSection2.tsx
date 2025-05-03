"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { CriticalCare } from "./CriticalCare/CriticalCare"
import { SurgicalSpecialties } from "./SurgicalSpecialties/SurgicalSpecialties"
import { MedicalSpecialties } from "./MedicalSpecialties/MedicalSpecialties"
import { AdvancedDiagnostics } from "./AdvancedDiagnostics/AdvancedDiagnostics"

export const MsSection2 = () => {
    type NavCategory = "Critical Care (ICU)" | "Surgical Specialties" | "Medical Specialties" | "Advanced Diagnostics"

    const [navSelected, setNavSelected] = useState<NavCategory>("Critical Care (ICU)")
    const navRef = useRef<HTMLDivElement>(null)

    const categories: NavCategory[] = ["Critical Care (ICU)", "Surgical Specialties", "Medical Specialties", "Advanced Diagnostics"]

    // Refs for each section
    const criticalCareRef = useRef<HTMLDivElement | null>(null)
    const surgicalSpecialtiesRef = useRef<HTMLDivElement | null>(null)
    const medicalSpecialtiesRef = useRef<HTMLDivElement | null>(null)
    const advancedDiagnosticsRef = useRef<HTMLDivElement | null>(null)

    // Map categories to refs
    const sectionRefs: Record<NavCategory, React.RefObject<HTMLDivElement | null>> = {
        "Critical Care (ICU)": criticalCareRef,
        "Surgical Specialties": surgicalSpecialtiesRef,
        "Medical Specialties": medicalSpecialtiesRef,
        "Advanced Diagnostics": advancedDiagnosticsRef,
    }

    const handleNavClick = (category: NavCategory) => {
        setNavSelected(category)

        const targetSection = sectionRefs[category].current
        if (targetSection) {
            const yOffset = -136 // Offset to account for the fixed navbar
            const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset

            window.scrollTo({ top: y, behavior: "smooth" })
        }
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
                                            className={`text-xs sm:text-sm md:text-[14px] whitespace-nowrap ${navSelected === category ? "text-primary1" : "text-textGrey"
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

            {/* Section Components with refs */}
            <div className="flex flex-col">
                <div ref={criticalCareRef}>
                    <CriticalCare />
                </div>
                <div ref={surgicalSpecialtiesRef}>
                    <SurgicalSpecialties />
                </div>
                <div ref={medicalSpecialtiesRef}>
                    <MedicalSpecialties />
                </div>
                <div ref={advancedDiagnosticsRef}>
                    <AdvancedDiagnostics />
                </div>
            </div>
        </section>
    )
}
