'use client'

import React, { useState } from 'react'
import CustomButton from '@/Components/CustomButton/CustomButton'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ContactUsSection8Props = {
  data:
  {
  subtitle: string
  title: string
  servicesList: string[]
  submitButtonText: string
  successMessage: string
  errorMessage: string
 }
}

export const ContactUsSection8 = ({data}: ContactUsSection8Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return {
          ...prev,
          services: prev.services.filter(s => s !== service),
        }
      } else {
        return {
          ...prev,
          services: [...prev.services, service],
        }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return  
    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success(data.successMessage)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          services: [],
          message: '',
        })
        setShowModal(true) 
      } else {
        toast.error(data.errorMessage)
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full mx-auto px-4 py-8 md:px-16 md:py-16 bg-white">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
            <p className="mb-6">Thank you for connecting, we’ll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-5 py-2 bg-primary1 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-primary1 text-sm mb-2">{data.subtitle}</h3>
        <h2 className="text-2xl font-bold text-gray-900">{data.title}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Services section */}
        <div className="mb-6">
          <p className="text-gray-800 font-medium mb-3">Services you are interested in</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.servicesList.map((service, index) => (
              <button
                key={`${service}-${index}`}
                type="button"
                className={`px-4 py-3 rounded-full border text-left transition-colors ${
                  formData.services.includes(service)
                    ? 'border-blue-500 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleServiceToggle(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Message field */}
        <div className="mb-6">
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        {/* Submit button */}
        <div>
          <CustomButton
            label={isLoading ? 'Sending...' : data.submitButtonText}
            primary={true}
            btntype="submit"
            onClick={() => 'submit'}
          />
        </div>
      </form>
    </section>
  )
}
