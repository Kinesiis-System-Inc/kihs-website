'use client'
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

interface DoctorProfileProps {
    name: string;
    title: string;
    subTitle:string;
    description: string | undefined;
    imageSrc: string;
    socialLinks: { icon: "facebook" | "twitter" | "linkedin"; url: string }[];
}

const iconComponents = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
  };
  
export const DoctorProfile: React.FC<DoctorProfileProps> = ({
    name,
    title,
    description,
    imageSrc,
    socialLinks,
}) => {
    return (
        <div className="w-full flex flex-col items-center md:flex-row bg-white text-black md:p-6 gap-16">
            <img
                src={imageSrc}
                alt={name}
                className="w-full md:w-80 md:h-80 rounded-lg"
            />
            <div className="md:pr-28">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm">{title}</p>
                <p className="mt-2 text-customGrey text-sm">{description}</p>
                <div className="mt-4 flex space-x-4">
                    {socialLinks.map((link, index) => {
                        const IconComponent = iconComponents[link.icon];
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition"
                            >
                                <IconComponent className="w-5 h-5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

