"use client";

import type React from "react";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OurJourney } from "./OurJourney/OurJourney";
import { VisionMission } from "./VisionMission/VisionMission";
import { Leadership } from "./Leadership/Leadership";
import ServiceStandards from "./ServiceStandards/ServiceStandards";
import { StateOfTheArtHealthcare } from "./State-of-the-Art Healthcare/State-of-the-Art Healthcare";
import { AboutUsProps } from "@/libs/types";

export const AboutUs = ({data}: AboutUsProps) => {
  console.log(data)
  const [navSelected, setNavSelected] = useState<NavCategory>("Our Journey");
  const [prevNavIndex, setPrevNavIndex] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);

  type NavCategory =
    | "Our Journey"
    | "Vision & Mission"
    | "Leadership & Value"
    | "Service Standards"
    | "State-of-the-Art Healthcare";

  const categories: NavCategory[] = [
    "Our Journey",
    "Vision & Mission",
    "Leadership & Value",
    "Service Standards",
    "State-of-the-Art Healthcare",
  ];

  // Map each category to its corresponding component
  const navComponents: Record<NavCategory, React.ReactNode> = {
    "Our Journey": <OurJourney data={data.ourJourney} />,
    "Vision & Mission": <VisionMission data={data.visionMission} />,
    "Leadership & Value": <Leadership data={data.leadership} />,
    "Service Standards": <ServiceStandards data={data.serviceStandards} />,
    "State-of-the-Art Healthcare": <StateOfTheArtHealthcare data={data.stateOfTheArt} />,
  };

  const handleNavClick = (category: NavCategory) => {
    setPrevNavIndex(categories.indexOf(navSelected));
    setNavSelected(category);
  };

  return (
    <main className="min-h-[70vh] w-full flex flex-col gap-4 sm:gap-8">
      <div className="px-4 md:px-20 pt-20">
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
              exit={{
                opacity: 0,
                x: prevNavIndex < categories.indexOf(navSelected) ? -100 : 100,
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-24"
            >
              {navComponents[navSelected]}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </main>
  );
};
