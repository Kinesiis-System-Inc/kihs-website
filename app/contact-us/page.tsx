import { ContactUsSection1 } from '@/Components/ContactUs/ContactUsSection1/ContactUsSection1'
import { ContactUsSection2 } from '@/Components/ContactUs/ContactUsSection2/ContactUsSection2'
import { ContactUsSection3 } from '@/Components/ContactUs/ContactUsSection3/ContactUsSection3'
import { ContactUsSection4 } from '@/Components/ContactUs/ContactUsSection4/ContactUsSection4'
import { ContactUsSection5 } from '@/Components/ContactUs/ContactUsSection5/ContactUsSection5'
import { ContactUsSection6 } from '@/Components/ContactUs/ContactUsSection6/ContactUsSection6'
import { ContactUsSection7 } from '@/Components/ContactUs/ContactUsSection7/ContactUsSection7'
import { ContactUsSection8 } from '@/Components/ContactUs/ContactUsSection8/ContactUsSection8'
import { client } from '@/sanity/lib/client'
import { contactUsQuery } from '@/sanity/lib/queries'
import React from 'react'

export default async function page() {
  const data = await client.fetch(contactUsQuery)
  console.log("contactUs data", data)
  return (
    <main>
      <ContactUsSection1 data={data.contactUsSection1} />
      <ContactUsSection2 data={data.contactUsSection2} />
      <ContactUsSection3 images={data.contactUsSection3.images} />
      <ContactUsSection4 emergencyDescription={data.contactUsSection4.emergencyDescription}
        getInTouchTitle={data.contactUsSection4.getInTouchTitle}
        getInTouchDescription={data.contactUsSection4.getInTouchDescription}
        contactDetails={data.contactUsSection4.contactDetails}
        hospitalHoursTitle={data.contactUsSection4.hospitalHoursTitle}
        hospitalHoursDescription={data.contactUsSection4.hospitalHoursDescription}
        hospitalHourList={data.contactUsSection4.hospitalHourList}
        emergencyTitle={data.contactUsSection4.emergencyTitle}
        emergencyNumbers={data.contactUsSection4.emergencyNumbers}
        connectTitle={data.contactUsSection4.connectTitle}
        connectDescription={data.contactUsSection4.connectDescription}
        socialLinks={data.contactUsSection4.socialLinks}
      />
      <ContactUsSection5 contacts={data.contactUsSection5.adminContacts} />
      <ContactUsSection6 data={data.contactUsSection6}/>
      <ContactUsSection7 data={data.contactUsSection7}/>
      <ContactUsSection8 data={data.contactUsSection8} />
    </main>
  )
}
