'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiPaperclip } from "react-icons/fi";
import { toast } from "react-toastify";
import { ArrowDownRight } from "lucide-react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    introduction: string;
    curriculumVitae: File | null;
    linkedinUrl: string;
    portfolioLink: string;
    title: string;
}

interface ApplicationFormProps {
    title: string;
}

const ApplicationForm = ({ title }: ApplicationFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        introduction: '',
        curriculumVitae: null,
        linkedinUrl: '',
        portfolioLink: '',
        title: title
    });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // File type check
        if (file.type !== "application/pdf") {
            toast.error("Only PDF files are allowed");
            return;
        }

        // File size check (less than 5MB)
        const maxSizeInBytes = 5 * 1024 * 1024;
        if (file.size > maxSizeInBytes) {
            toast.error("File size should be less than 5MB");
            return;
        }

        setFormData({
            ...formData,
            curriculumVitae: file
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return
        setIsSubmitting(true)
        // Create a new FormData object to send the form data and file
        const submissionData = new FormData();
        submissionData.append('firstName', formData.firstName);
        submissionData.append('lastName', formData.lastName);
        submissionData.append('email', formData.email);
        submissionData.append('phoneNumber', formData.phoneNumber);
        submissionData.append('introduction', formData.introduction);
        submissionData.append('linkedinUrl', formData.linkedinUrl);
        submissionData.append('portfolioLink', formData.portfolioLink);
        submissionData.append('title', formData.title);

        // Append file if available
        if (formData.curriculumVitae) {
            submissionData.append('curriculumVitae', formData.curriculumVitae);
        }

        try {
            // Send the form data to the API
            const response = await fetch('/api/jobApplication', {
                method: 'POST',
                body: submissionData,
            });

            if (response.ok) {
                const result = await response.json();
                toast.success('Application submitted successfully!');
                console.log('Success:', result);
                setShowModal(true)
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    introduction: '',
                    curriculumVitae: null,
                    linkedinUrl: '',
                    portfolioLink: '',
                    title: title
                })
            } else {
                const error = await response.json();
                toast.error('Error submitting application: ' + error.message);
                console.error('Error:', error);
            }
        } catch (error) {
            toast.error('Failed to submit application');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false)
        }
    };

    return (
        <div className="w-full mx-auto px-4 md:px-28 py-8">
            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center">
                        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                        <p className="mb-6">Your application has been submitted successfully.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-6 py-2 bg-primary1 text-white rounded-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="mb-6">
                <p className="text-primary2 text-[14px] font-medium mb-1">Quick Application</p>
                <h1 className="text-3xl font-bold text-gray-900">Apply Now</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <textarea
                        name="introduction"
                        value={formData.introduction}
                        onChange={handleInputChange}
                        placeholder="Introduce Yourself"
                        className="w-full px-4 py-3 rounded-3xl  bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1 min-h-32"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            name="firstNameDisplay"
                            value={formData.curriculumVitae ? formData.curriculumVitae.name : "Curriculum Vitae"}
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none pr-12 cursor-pointer"
                            readOnly
                            onClick={() => document.getElementById("curriculumVitae")?.click()}
                        />

                        {/* Paperclip icon to trigger file input */}
                        <label
                            htmlFor="curriculumVitae"
                            className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                        >
                            <FiPaperclip />
                        </label>

                        {/* Optional: Clear file icon */}
                        {formData.curriculumVitae && (
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                                onClick={() => setFormData({ ...formData, curriculumVitae: null })}
                                aria-label="Remove file"
                            >
                                ×
                            </button>
                        )}

                        <input
                            id="curriculumVitae"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            name="linkedinUrl"
                            value={formData.linkedinUrl}
                            onChange={handleInputChange}
                            placeholder="LinkedIn URL"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            name="portfolioLink"
                            value={formData.portfolioLink}
                            onChange={handleInputChange}
                            placeholder="Portfolio Link"
                            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary1"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
              px-4 py-3.5 flex gap-1 items-center justify-center border-[3px] rounded-3xl 
              transition-all duration-300
              ${isSubmitting
                                ? 'bg-gray-300 border-gray-300 text-gray-700 cursor-not-allowed'
                                : 'bg-primary1 text-white border-primary1 hover:shadow-lg hover:bg-inherit hover:text-primary1'
                            }
            `}
                    >
                        <span className="font-semibold text-[12px] md:text-[16px]">
                            {isSubmitting ? 'Submitting…' : 'Next'}
                        </span>
                        {!isSubmitting && <ArrowDownRight size={24} />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;