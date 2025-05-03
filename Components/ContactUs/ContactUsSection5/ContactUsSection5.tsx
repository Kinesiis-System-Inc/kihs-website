'use client'
import React from 'react'

type AdminContact = {
  department: string
  name: string
  email: string
}

type ContactUsSection5Props = {
  contacts: AdminContact[]
}

export const ContactUsSection5 = ({ contacts }: ContactUsSection5Props) => {
  return (
    <section className="overflow-x-auto p-4 md:p-16">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary1 text-white text-left rounded-t-lg">
            <th className="py-3 px-4 first:rounded-tl-lg last:rounded-tr-lg">Department</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">{contact.department}</td>
              <td className="py-3 px-4">{contact.name}</td>
              <td className="py-3 px-4 text-blue-500">
                {contact.email && contact.email !== '-' ? (
                  <a href={`mailto:${contact.email}`} className="underline">
                    {contact.email}
                  </a>
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
