"use client"

import type React from "react"
import CustomButton from "@/Components/CustomButton/CustomButton"


interface ContentButton {
    label: string;
    primary?: boolean;
    onClick?: () => void;
}

interface ContentSectionProps {
    title: string
    subtitle?: string
    description?: string | React.ReactNode
    imageSrc: string
    imageAlt: string
    imagePosition?: "left" | "right"
    buttons?: ContentButton[]
    list?: string[]
    listDescp?: string
    className?: string
}

export const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    imagePosition = "left",
    buttons = [],
    list = [],
    listDescp,
    className = "",
}) => {
    return (
        <div className={`py-12 w-full min-h-[70vh] ${className}`}>
            <div className="container mx-auto px-4 md:px-14">
                <div
                    className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
                >
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        {/* <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden">
                            <Image
                                src={imageSrc || "/placeholder.svg"}
                                alt={imageAlt}
                                fill
                                className="object-contain rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div> */}
                        <img className="object-contain rounded-lg" src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
                    </div>

                    {/* Content Container */}
                    <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pt-14 md:gap-8">
                        <div>
                            {subtitle && <p className="text-sm text-blue-500 mb-1">{subtitle}</p>}
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
                            <div />

                            {typeof description === "string" ? (
                                <p className="text-black mb-6">{description}</p>
                            ) : (
                                <div className="text-black mb-6">{description}</div>
                            )}

                            {list && list.length > 0 && (
                                <ul className="mb-6 ml-4 space-y-2">
                                    {list.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-2">{index + 1}.</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {typeof listDescp === "string" ? (
                                <p className="text-black mb-6">{listDescp}</p>
                            ) : (
                                <div className="text-black mb-6">{listDescp}</div>
                            )}
                            {buttons.length > 0 && (
                                <div className="flex flex-wrap gap-4 mt-2">
                                    {buttons.map((button, index) => (
                                        <CustomButton key={index} label={button.label} primary={button.primary} onClick={button.onClick} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

