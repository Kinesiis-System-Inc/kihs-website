'use client'
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { urlFor } from '@/sanity/sanity-utils'
import { SanityImage } from "@/libs/types";

interface ServiceProps {
  label: string;
  icon: string | SanityImage; // use the actual type if using object
  url: string | undefined;
}
const ServiceButton: React.FC<ServiceProps> = ({ label, icon, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.button
      className="flex items-center justify-between px-4 py-4 bg-outlineGrey border-[2px] border-ligthGrey rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200"
      onMouseEnter={() => setIsHovered(true)} // Detect hover on button
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (url?.trim()) {
          router.push(url)
        }
      }}
      type="button"
      aria-label={`Go to ${label}`}
    >
      <span className="flex items-center gap-3">
        <img src={typeof icon === 'string' ? icon : urlFor(icon).url()} alt={`${label.toLowerCase()} icon`} className="w-6 h-6" />
        <span className="text-[14px] md:text-[16px]">{label}</span>
      </span>

      {/* Animate ChevronRight when button is hovered */}
      <motion.div
        animate={{ x: isHovered ? 5 : 0 }} // Move right on hover
        transition={{ type: "tween", duration: 0.3 }} // Smooth animation
      >
        <ChevronRight size={24} />
      </motion.div>
    </motion.button>
  );
};

export default ServiceButton;
