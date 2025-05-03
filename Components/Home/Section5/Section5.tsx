import React from 'react'
import { ContentSection } from '../ContentSection/ContentSection'

export const Section5 = () => {
    return (
        <section >
            <ContentSection
                subtitle="Courses"
                title="Courses We Offer"
                description="At KIHS, we are proud to offer industry-recognized courses, including:"
                list={[
                    "Diploma in Nursing",
                    "Advanced Cardiac Life Support (ACLS)",
                    "General Medicine Certification",
                    "Surgical Assistance Program",
                    "Emergency Care Training",
                ]}
                listDescp="Each course is designed to combine theory and hands-on experience, ensuring students are prepared for real-world healthcare challenges."
                imageSrc="/course_doctor.png"
                imageAlt="Healthcare professional examining patient"
                imagePosition="right"
                buttons={[
                    {
                        label: "View All Courses",
                        primary: false,
                        onClick: () => { alert('Button clicked') },
                    },
                ]}
               
            />
        </section>
    )
}
