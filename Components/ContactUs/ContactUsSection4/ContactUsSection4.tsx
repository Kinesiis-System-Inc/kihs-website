'use client'

import React from 'react'

type ContactItem = {
  label: string
  numbers: string[]
  ext?: string
}

type SocialLink = {
  label: string
  linkText: string
  url: string
}

type ContactUsSection4Props = {
  getInTouchTitle: string
  getInTouchDescription: string
  contactDetails: ContactItem[]
  hospitalHoursTitle: string
  hospitalHoursDescription: string
  hospitalHourList: string[]
  emergencyTitle: string
  emergencyDescription: string
  emergencyNumbers: string[]
  connectTitle: string
  connectDescription: string
  socialLinks: SocialLink[]
}

export const ContactUsSection4 = ({
  getInTouchTitle,
  getInTouchDescription,
  contactDetails,
  hospitalHoursTitle,
  hospitalHoursDescription,
  hospitalHourList,
  emergencyTitle,
  emergencyDescription,
  emergencyNumbers,
  connectTitle,
  connectDescription,
  socialLinks
}: ContactUsSection4Props) => {
  return (
    <section className="w-full mx-auto p-4 md:p-16 text-gray-800">
      {/* Get in Touch */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{getInTouchTitle}</h2>
        <p className="mb-2">{getInTouchDescription}</p>
        <ul className="list-disc pl-5 space-y-1">
          {contactDetails.map((item, index) => (
            <li key={index}>
              {item.label}:{' '}
              {item.numbers.map((num, i) => (
                <a key={i} href={`tel:${num}`} className="text-primary1 hover:underline mr-2">{num}</a>
              ))}
              {item.ext && `Extn: ${item.ext}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Hospital Hours */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{hospitalHoursTitle}</h2>
        <p className="mb-2">{hospitalHoursDescription}</p>
        <ul className="list-disc pl-5 space-y-3">
          {hospitalHourList.map((hour, i) => <li key={i}>{hour}</li>)}
        </ul>
      </div>

      {/* Emergency */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{emergencyTitle}</h2>
        <p className="mb-2">{emergencyDescription}</p>
        <p>
        Call us at &nbsp;
          {emergencyNumbers.map((num, i) => (
            <a key={i} href={`tel:${num}`} className="text-primary1 font-medium hover:underline mr-2">{num}</a>
          ))}
        </p>
      </div>

      {/* Socials */}
      <div>
        <h2 className="text-2xl font-bold mb-2">{connectTitle}</h2>
        <p className="mb-3">{connectDescription}</p>
        <div className="space-y-3">
          {socialLinks.map((link, index) => (
            <div className="flex items-center" key={index}>
              <span>{link.label}: </span>
              <a href={link.url} className="ml-1 text-primary1 hover:underline">{link.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
