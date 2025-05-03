"use client"

import React, { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
// import { Tab } from "@/libs/types";
// import { ChevronLeft, ChevronRight } from "lucide-react"

interface SanityItem {
  date?: string;
  isNew?: boolean;
  info?: string;
  // Add any other potential fields from Sanity
}

interface SanityTab {
  _type?: string;
  _key?: string;
  title?: string;
  items?: SanityItem[];
}

interface DynamicNavigationProps {
  tabsData: SanityTab[]
}

export const DynamicNavigation: React.FC<DynamicNavigationProps> = ({ tabsData }) => {
  console.log(tabsData, "tab data")
  
  // Process and normalize the Sanity data
  const [processedData, setProcessedData] = useState<Record<string, Info[]>>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [navSelected, setNavSelected] = useState<string>("");
  const [prevNavIndex, setPrevNavIndex] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Define Info interface for your content items
  interface Info {
    date: string;
    isNew: boolean;
    info: string;
  }

  // Process Sanity data when it changes
  useEffect(() => {
    if (!tabsData || tabsData.length === 0) return;

    // Create a map to deduplicate tabs by title
    const tabMap = new Map<string, Info[]>();
    
    // Process each tab from Sanity
    tabsData.forEach(tab => {
      if (!tab.title || !tab.items) return;
      
      // Convert Sanity items to Info format
      const processedItems = tab.items.map(item => {
        const typedItem = item as unknown as SanityItem;
        return {
          date: typedItem.date || "No date",
          isNew: typedItem.isNew || false,
          info: typedItem.info || "No information available",
        };
      });
      
      // Add to map (will overwrite duplicates with the latest instance)
      tabMap.set(tab.title, processedItems);
    });
    
    // Convert map to record
    const newProcessedData: Record<string, Info[]> = {};
    const newCategories: string[] = [];
    
    tabMap.forEach((items, title) => {
      newProcessedData[title] = items;
      newCategories.push(title);
    });
    
    setProcessedData(newProcessedData);
    setCategories(newCategories);
    
    // Set initial selected tab to first category
    if (newCategories.length > 0 && !navSelected) {
      setNavSelected(newCategories[0]);
    }
  }, [tabsData]);

  const NewsEventComp = ({ date, isNew, info }: Info) => {
    return (
      <div className="w-full py-3 p-2 md:p-3 sm:p-4 grid grid-cols-3 bg-white border-[2px] border-outlineGrey rounded-2xl">
        <div className="flex flex-col col-span-2 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-primary1 text-xs sm:text-sm">{date}</span>
            {isNew ? <span className="px-2 sm:px-4 text-xs sm:text-sm bg-secondaryTint rounded-full">New</span> : ''}
          </div>
          <div>
            <p className='font-semibold text-sm sm:text-base'>
              {info}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="px-3 py-1 text-xs sm:text-sm bg-bgBlue rounded-full cursor-pointer">View</button>
        </div>
      </div>
    );
  };

  const handleNavClick = (category: string) => {
    if (categories.length === 0) return;
    setPrevNavIndex(categories.indexOf(navSelected));
    setNavSelected(category);
  }

  // If data is still loading or empty
  if (categories.length === 0) {
    return <div className="min-h-[70vh] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-[70vh] w-full flex flex-col gap-4 sm:gap-8">
      <div className="h-max w-full pb-4 sm:pb-8 flex flex-col gap-4 sm:gap-8 border-b-[2px] border-ligthGrey">
        <div className="flex flex-col gap-0.5">
          <p className="text-primary2 text-xs sm:text-sm md:text-[16px] lg:text-[18px] font-light">Press Centre</p>
          <h3 className="font-semibold text-black text-base sm:text-[18px] md:text-2xl lg:text-3xl">News and Events</h3>
        </div>
        <div className="w-full relative">
          {/* {showNavArrows && (
            <>
              <button
                onClick={() => scrollNav("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => scrollNav("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          )} */}
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
          {navSelected && processedData[navSelected] && (
            <motion.div
              key={navSelected}
              initial={{
                opacity: 0,
                x: prevNavIndex < categories.indexOf(navSelected) ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: prevNavIndex < categories.indexOf(navSelected) ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {processedData[navSelected].map((item, ind) => (
                <NewsEventComp key={ind} {...item} />
              ))}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  )
}






// import React, { useState, useRef } from "react"
// import { AnimatePresence, motion } from "framer-motion"
// import { Tab } from "@/libs/types";
// // import { ChevronLeft, ChevronRight } from "lucide-react"

// interface DynamicNavigationProps {
//   tabsData: Tab[] 
// }


// export const DynamicNavigation: React.FC<DynamicNavigationProps> = ({ tabsData }) => {
//   console.log(tabsData,"tab data")
//   const [navSelected, setNavSelected] = useState<NavCategory>("Announcements")
//   const [prevNavIndex, setPrevNavIndex] = useState<number>(0)
//   // const [showNavArrows, setShowNavArrows] = useState<boolean>(false)
//   const navRef = useRef<HTMLDivElement>(null)

//   type NavCategory = "Announcements" | "Notices" | "Events" | "Quick Links"

//   const categories: NavCategory[] = ["Announcements", "Notices", "Events", "Quick Links"]

//   interface Info {
//     date: string
//     isNew: boolean
//     info: string
//   }
// const NewsEventComp = ({ date, isNew, info }: Info) => {
//     return (
//         <div className="w-full py-3 p-2 md:p-3 sm:p-4 grid grid-cols-3 bg-white border-[2px] border-outlineGrey rounded-2xl">
//             <div className="flex flex-col col-span-2 gap-2">
//                 <div className="flex items-center gap-2"><span className="text-primary1 text-xs sm:text-sm">{date}</span>
//                 {isNew ? <span className="px-2 sm:px-4 text-xs sm:text-sm bg-secondaryTint rounded-full">New</span> : ''}</div>
//                 <div>
//                     <p className='font-semibold text-sm sm:text-base'>
//                         {info}
//                     </p>
//                 </div>
//             </div>
//             <div className="flex items-center justify-end">
//                 <button className="px-3 py-1 text-xs sm:text-sm bg-bgBlue rounded-full cursor-pointer">View</button>
//             </div>
//         </div>
//     );
//   };

//   const nav: Record<NavCategory, Info[]> = {
//     Announcements: [
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//     ],
//     Notices: [
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//     ],
//     Events: [
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//     ],
//     "Quick Links": [
//       {
//         date: "19 Jan2025",
//         isNew: false,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//       {
//         date: "19 Jan2025",
//         isNew: true,
//         info: "Notification for CGHS and ECHS Empanelment Program",
//       },
//     ],
//   }

//   const handleNavClick = (category: NavCategory) => {
//     setPrevNavIndex(categories.indexOf(navSelected))
//     setNavSelected(category)
//   }

//   return (
//     <div className="min-h-[70vh] w-full flex flex-col gap-4 sm:gap-8">
//       <div className="h-max w-full pb-4 sm:pb-8 flex flex-col gap-4 sm:gap-8 border-b-[2px] border-ligthGrey">
//         <div className="flex flex-col gap-0.5">
//           <p className="text-primary2 text-xs sm:text-sm md:text-[16px] lg:text-[18px] font-light">Press Centre</p>
//           <h3 className="font-semibold text-black text-base sm:text-[18px] md:text-2xl lg:text-3xl">News and Events</h3>
//         </div>
//         <div className="w-full relative">
//           {/* {showNavArrows && (
//             <>
//               <button
//                 onClick={() => scrollNav("left")}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
//                 aria-label="Scroll left"
//               >
//                 <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>
//               <button
//                 onClick={() => scrollNav("right")}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
//                 aria-label="Scroll right"
//               >
//                 <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>
//             </>
//           )} */}
//           <div
//             ref={navRef}
//             className="w-full flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide px-1"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center gap-2 cursor-pointer relative flex-shrink-0"
//                 onClick={() => handleNavClick(category)}
//               >
//                 <motion.div
//                   className="flex-grow flex flex-col items-center justify-center gap-2 cursor-pointer relative"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span
//                     className={`text-xs sm:text-sm md:text-[14px] whitespace-nowrap ${
//                       navSelected === category ? "text-primary1" : "text-textGrey"
//                     } select-none text-center`}
//                   >
//                     {category}
//                   </span>
//                 </motion.div>

//                 {navSelected === category && (
//                   <div className="absolute bottom-0 bg-primary1 h-[2px] w-full rounded"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <AnimatePresence initial={false}>
//         <div className="w-full flex items-center justify-center">
//           {navSelected && (
//             <motion.div
//               key={navSelected}
//               initial={{
//                 opacity: 0,
//                 x: prevNavIndex < categories.indexOf(navSelected) ? 100 : -100,
//               }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: prevNavIndex < categories.indexOf(navSelected) ? -100 : 100 }}
//               transition={{ duration: 0.5 }}
//               className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
//             >
//               {nav[navSelected].map((item, ind) => (
//                 <NewsEventComp key={ind} {...item} />
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </AnimatePresence>
//     </div>
//   )
// }
