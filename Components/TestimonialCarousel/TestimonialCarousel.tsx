"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Testimonial } from "@/libs/types"

// type Testimonial = {
//   id: number
//   quote: string
//   name: string
//   title: string
//   avatar: string
// }

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  // const testimonials: Testimonial[] = [
  //   {
  //     id: 1,
  //     quote:
  //       "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care.",
  //     name: "Rohit Sharma",
  //     title: "Cardiology Patient",
  //     avatar: "/testi.png",
  //   },
  //   {
  //     id: 2,
  //     quote:
  //       "The level of professionalism and care I received was outstanding. The staff made me feel comfortable throughout my entire treatment.",
  //     name: "Sarah Johnson",
  //     title: "Dental Patient",
  //     avatar: "/testi.png",
  //   },
  //   {
  //     id: 3,
  //     quote:
  //       "I've been a patient for years and have always received exceptional care. The doctors take time to listen and explain everything thoroughly.",
  //     name: "Michael Chen",
  //     title: "Family Medicine Patient",
  //     avatar: "/testi.png",
  //   },
  // ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const goToNext = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [testimonials.length])

  const goToPrevious = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval) // Cleanup function to clear interval
  }, [goToNext]) // Fixed dependency array

  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#f0f7ff] py-12 px-4 md:py-16 lg:py-20 md:px-20">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <WorldMapDots />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-[14px] md:text-base font-medium mb-2">Testimonials</h3>
          <h2 className="text-2xl md:text-3xl font-bold">What People Say About Us</h2>
        </div>

        {/* Testimonial Content */}
        <div className="w-full mx-auto relative flex justify-center items-center">
          {/* Current Testimonial with Framer Motion */}
          <motion.div 
            className="w-full overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => {
              const swipe = Math.abs(offset.x) > 100;
              if (swipe) {
                if (offset.x > 0) {
                  goToNext();
                } else {
                  goToPrevious();
                }
              }
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="text-center max-w-3xl mx-auto px-4 md:px-10 py-6 md:py-10"
              >
                <div className="mb-6 md:mb-8 px-4">
                  <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-6">
                    <Image
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                      className="rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                  <blockquote className="text-[12px] md:text-lg font-medium mb-4">
                   {`"${testimonials[currentIndex].quote}"`}
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-sm md:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm md:text-[16px]">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={goToNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-inherit rounded-full p-2 border-[1px] md:border-[2.5px] border-black hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-2 h-2 md:w-6  md:h-6" />
          </motion.button>
          <motion.button
            onClick={goToPrevious}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-inherit rounded-full p-2 border-[1px] md:border-[2.5px] border-black hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-2 h-2 md:w-6  md:h-6" />
          </motion.button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? -1 : 1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full ${
                currentIndex === index ? "w-6 bg-black" : "w-2 bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// World Map Dots Component
function WorldMapDots() {
  return (
    <img src="/map.png" alt="World map background" />
  )
}