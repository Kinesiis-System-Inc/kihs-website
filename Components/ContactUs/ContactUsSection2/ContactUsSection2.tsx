'use client'

import React from 'react'
import { PiSirenThin } from "react-icons/pi"

type EmergencyContact = {
  label: string
  number: string
}

type ContactUsSection2Props = {
  data: {
    introText: string
    heading: string
    emergencySection: {
      title: string
      emergencyContacts: EmergencyContact[]
    }
    locationTitle: string
    address: string
    landmarkHeading: string
    landmarks: string[]
    mobileDescriptionTitle: string
    mobileDescriptionParagraphs: string[]
    mapEmbedUrl: string
  }
}

export const ContactUsSection2 = ({ data }: { data: ContactUsSection2Props["data"] }) => {
  return (
    <section className="bg-blue-50 min-h-screen p-4 md:p-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-gray-800 mb-4">{data.introText}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {data.heading}
          </h1>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            {data.emergencySection.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {data.emergencySection.emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-primary1 text-white rounded-lg p-4 flex items-center flex-1">
                <div className="mr-3">
                  <PiSirenThin size={40} />
                </div>
                <div>
                  <div className="font-semibold">{contact.label}</div>
                  <div className="text-lg">{contact.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location and Map */}
        <div className="flex flex-col md:flex-row gap-6 pt-16">
          {/* Location Details */}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              {data.locationTitle}
            </h2>

            <div className="mb-6">
              <p className="text-gray-700 mb-2">{data.address}</p>
              <p className="font-semibold mb-2">{data.landmarkHeading}</p>
              <ul className="list-disc pl-5 text-gray-700">
                {data.landmarks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Mobile only */}
            <div className="md:hidden mt-6">
              <h3 className="font-semibold text-lg mb-2">{data.mobileDescriptionTitle}</h3>
              {data.mobileDescriptionParagraphs.map((para, i) => (
                <p key={i} className="text-gray-700 text-sm mb-2">{para}</p>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 relative min-h-64">
            <div className="rounded-lg overflow-hidden h-64 md:h-full w-full relative">
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="256"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
