import Image from 'next/image'
import React from 'react'

export const CareerSection3 = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-2">
                {/* Main large image - full width on mobile, left side on desktop */}
                <div className="lg:w-1/2">
                    <div className="relative w-full h-auto aspect-[510/450] rounded-lg overflow-hidden">
                        <Image
                            src="/main_img.png"
                            alt="Featured image"
                            width={510}
                            height={450}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Grid of smaller images - stacked on mobile, right side grid on desktop */}
                <div className="lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Image 1 */}
                        <div className="relative w-full h-auto aspect-[336/291] rounded-lg overflow-hidden">
                            <Image
                                src="/doct_img.png"
                                alt="Gallery image 1"
                                width={336}
                                height={291}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="relative w-full h-auto aspect-[336/291] rounded-lg overflow-hidden">
                            <Image
                                src="/play_img.png"
                                alt="Gallery image 2"
                                width={336}
                                height={291}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="relative w-full h-auto aspect-[336/291] rounded-lg overflow-hidden">
                            <Image
                                src="/work_img.png"
                                alt="Gallery image 3"
                                width={336}
                                height={291}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 4 */}
                        <div className="relative w-full h-auto aspect-[336/291] rounded-lg overflow-hidden">
                            <Image
                                src="/operation_img.png"
                                alt="Gallery image 4"
                                width={336}
                                height={291}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
