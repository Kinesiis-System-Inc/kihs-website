import React from "react";

import { Facebook, Twitter, Linkedin } from "lucide-react";

type SocialLink = {
  icon: "facebook" | "twitter" | "linkedin";
  url: string;
};

const iconComponents = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

function Section2() {
  const doctors3: {
    name: string;
    title: string;
    description: string;
    subTitle: string;
    imageSrc: string;
    socialLinks: SocialLink[];
  }[] = [
    {
      name: "Dr. S A Kullolli",
      title: "Founder, Chief Medical Director, and Head of Surgery",
      description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
      imageSrc: "/doctorImg.png",
      subTitle: "A visionary who transformed rural healthcare in Sangli.",
      socialLinks: [
        { icon: "facebook", url: "https://facebook.com" },
        { icon: "twitter", url: "https://twitter.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      name: "Dr. S A Kullolli",
      title: "Founder, Chief Medical Director, and Head of Surgery",
      description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
      imageSrc: "/doctorImg.png",
      subTitle: "A visionary who transformed rural healthcare in Sangli.",
      socialLinks: [
        { icon: "facebook", url: "https://facebook.com" },
        { icon: "twitter", url: "https://twitter.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      name: "Dr. S A Kullolli",
      title: "Founder, Chief Medical Director, and Head of Surgery",
      description: `Dr. SA Kullolli, the founder and Chief Medical Director of Kullolli Institute of Health Services, is a well-known surgeon in Western Maharashtra and North Karnataka. He worked in government hospitals from 1968 to 1996, eventually becoming the head doctor at Tasgaon District Hospital. After retiring from the government, he started his own clinic in 1996. Dr. Kullolli is passionate about helping people and has grown his practice from a small clinic to a large, 150-bed hospital. Dr. Kullolli's dedication to healthcare has earned him recognition and awards from various NGOs, including "Mannina Maga" from the Vimochana Devadasi Nirmulan Society and the "Excellence Award in Health Sector" from the Sakal Group. At 82 years old, Dr. Kullolli still actively cares for patients at his hospital.`,
      imageSrc: "/doctorImg.png",
      subTitle: "A visionary who transformed rural healthcare in Sangli.",
      socialLinks: [
        { icon: "facebook", url: "https://facebook.com" },
        { icon: "twitter", url: "https://twitter.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
  ];
  return (
    <div>
      <section className="w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32 my-12">
        <div className="w-full flex justify-between items-center mt-5">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Distinguished Facuity
          </h2>
        </div>
        {/* Scrollable container with custom scrollbar */}
        <div className="relative w-full px-4 md:w-[80vw]">
          <div
            id="doctors-carousel"
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            style={{
              scrollbarWidth: "thin",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarColor: "rgb(209 213 219) transparent",
            }}
          >
            {doctors3.map((doctor, index) => (
              <div
                key={index}
                className="flex-none w-[280px] snap-start rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white"
              >
                <div className="aspect-[4/3] bg-blue-50 overflow-hidden">
                  <img
                    src={doctor.imageSrc || "/placeholder.svg"}
                    alt={`${doctor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <p className="text-sm text-gray-700 font-medium">
                    {doctor.title}
                  </p>
                  <p className="text-sm text-gray-500">{doctor.subTitle}</p>
                  <div className="mt-3 flex space-x-3">
                    {doctor.socialLinks.map((link, idx) => {
                      const IconComponent = iconComponents[link.icon];
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                          aria-label={`${link.icon} profile`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          {/* <div className="flex justify-center mt-4 md:hidden">
            <div className="flex gap-1">
              {doctors3.slice(0, Math.min(doctors3.length, 5)).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full ${
                    idx === 0 ? "w-6 bg-blue-500" : "w-1.5 bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Section2;
