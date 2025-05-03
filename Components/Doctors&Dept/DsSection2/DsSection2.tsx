"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Departments } from "./Departments/Departments";
import { DoctorsDetailsPage } from "./DoctorsDetails/DoctorsDetails";
import { OpdSchedule } from "./OpdSchedule/OpdSchedule";
import { DoctorsDepartmentsData } from "@/libs/types";
// import { OpdSchedule } from "./OpdSchedule/OpdSchedule"

export const DsSection2 = ({data}:{data:DoctorsDepartmentsData}) => {
  type NavCategory = "Doctors' details" | "Departments" | "OPD Schedule";

  const [navSelected, setNavSelected] =
    useState<NavCategory>("Doctors' details");
  const navRef = useRef<HTMLDivElement>(null);

  const categories: NavCategory[] = [
    "Doctors' details",
    "Departments",
    "OPD Schedule",
  ];

  // Refs for each section
  const DepartmentsRef = useRef<HTMLDivElement | null>(null);
  const DoctorsDetailsRef = useRef<HTMLDivElement | null>(null);
  const OpdScheduleRef = useRef<HTMLDivElement | null>(null);

  // Map categories to refs
  const sectionRefs: Record<
    NavCategory,
    React.RefObject<HTMLDivElement | null>
  > = {
    "Doctors' details": DepartmentsRef,
    Departments: DoctorsDetailsRef,
    "OPD Schedule": OpdScheduleRef,
  };

  const handleNavClick = (category: NavCategory) => {
    setNavSelected(category);

    const targetSection = sectionRefs[category].current;
    if (targetSection) {
      const yOffset = -136; // Offset to account for the fixed navbar
      const y =
        targetSection.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
                        navSelected === category
                          ? "text-primary1"
                          : "text-textGrey"
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
        <div ref={DepartmentsRef}>
          <Departments />
        </div>
        <div ref={DoctorsDetailsRef}>
          <DoctorsDetailsPage data={data} />
        </div>
        <div ref={OpdScheduleRef}>
          <OpdSchedule />
        </div>
      </div>
    </section>
  );
};
