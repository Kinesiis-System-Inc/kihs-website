/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/sanity-utils";

const iconComponents = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

type DoctorData = {
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  statistics?: any;
  phone?: string;
  education?: string;
  training?: string;
  socialLinks?: { icon: "facebook" | "twitter" | "linkedin"; url: string }[];
};

type Department = {
  _id: string;
  name: string;
  doctors: { slug: { current: string } }[];
};

export const Departments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [doctorDetails, setDoctorDetails] = useState<Record<string, DoctorData>>({});
  const router = useRouter();

  const handleImageClick = (slug: string) => {
    router.push(`/doctor-details/${slug}`);
  };
  debugger
  useEffect(() => {
    const fetchDepartmentsAndDoctors = async () => {
      // 1. Get departments and doctor slugs
      const departmentQuery = `
      *[_type == "department"]{
        _id,
        name,
        "doctors": doctors[]->{
          slug
        }
      }
    `;
      const departmentsData: Department[] = await client.fetch(departmentQuery);
      setDepartments(departmentsData);

      // 2. Get doctor details using all slugs
      const allSlugs = departmentsData.flatMap((dept) =>
        (dept.doctors || []).map((doc) => doc?.slug?.current).filter(Boolean)
      );
      const uniqueSlugs = [...new Set(allSlugs)];

      const doctorDetailsQuery = `
        *[_type == "doctor" && slug.current in $slugs]{
          slug,
          name,
          title,
          subtitle,
          "imageUrl": image.asset->url,
          phone,
          education,
          training,
          statistics,
          socialLinks
        }
      `;
      const doctors = await client.fetch(doctorDetailsQuery, { slugs: uniqueSlugs });

      // 3. Save doctor details mapped by slug
      const detailsBySlug: Record<string, DoctorData> = {};
      doctors.forEach((doc: any) => {
        detailsBySlug[doc.slug.current] = doc;
      });
      console.log("details by slug",detailsBySlug)
      setDoctorDetails(detailsBySlug);
    };

    fetchDepartmentsAndDoctors();
  }, []);

  return (
    <div className="w-full mb-8 p-4 md:pl-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Doctor&apos;s Details</h2>

      <div className="grid grid-cols-1 md:grid-rows-2 gap-8 mt-4">
        {departments.map((department) => (
          <section key={department._id} className="w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32 my-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{department.name}</h2>

            <div className="relative w-[70vw] md:w-[80vw]">
              <div
                className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                style={{
                  scrollbarWidth: "thin",
                  WebkitOverflowScrolling: "touch",
                  msOverflowStyle: "none",
                  scrollbarColor: "rgb(209 213 219) transparent",
                }}
              >
                {department.doctors?.map((doctorRef, index) => {
                  const doctor = doctorDetails[doctorRef.slug.current];
                  if (!doctor) return null;

                  return (
                    <div
                      key={index}
                      className="flex-none w-[280px] snap-start rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white"
                    >
                      <div className="aspect-[4/3] bg-blue-50 overflow-hidden">
                        <img
                          src={doctor.imageUrl || "/placeholder.svg"}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                          onClick={() => handleImageClick(doctorRef.slug.current)}
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <h3 className="font-semibold text-lg">{doctor.name}</h3>
                        <p className="text-sm text-gray-700 font-medium">{doctor.title}</p>
                        <p className="text-sm text-gray-500">{doctor.subtitle}</p>
                        <div className="mt-3 flex space-x-3">
                          {doctor.socialLinks?.map((link, idx) => {
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
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
