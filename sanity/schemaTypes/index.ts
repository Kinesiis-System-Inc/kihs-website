import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { homeType } from './HomePageSchema/homesTypes'
import { section1Type } from './HomePageSchema/section1'
import { section2Type } from './HomePageSchema/section2'
import { section3Type } from './HomePageSchema/section3'
import { testimonialType } from './HomePageSchema/testimonial'
import { aboutUsType } from './AboutUsSchema/aboutUsTypes'
import { ourJourneyType } from './AboutUsSchema/ourJourney'
import { visionMissionType } from './AboutUsSchema/vissionMission'
import { leadershipType } from './AboutUsSchema/leadershipValue'
import { serviceStandardsType } from './AboutUsSchema/serviceStandardsTypes'
import { stateOfTheArtType } from './AboutUsSchema/stateOfTheArt'
import { footerType } from './FooterSchema/FooterTypes'
import { aboutKihsType } from './HomePageSchema/section4'
import { contactUsType } from './ContactUsSchema/contactUsTypes'
import { contactUsSection1 } from './ContactUsSchema/contactUsSection1'
import { contactUsSection2 } from './ContactUsSchema/contactUsSection2'
import { contactUsSection3 } from './ContactUsSchema/contactUsSection3'
import { contactUsSection4 } from './ContactUsSchema/contactUsSection4'
import { contactUsSection5 } from './ContactUsSchema/contactUsSection5'
import { contactUsSection6 } from './ContactUsSchema/contactUsSection6'
import { contactUsSection7 } from './ContactUsSchema/contactUsSection7'
import { contactUsSection8 } from './ContactUsSchema/contactUsSection8'
import { doctor } from './doctorDetailsSchema/DoctorDetailsType'
import { department } from './DepartmentSchema/DepartmentTypes'
import { doctorsDepartments } from './DepartmentSchema/DepartmentAndFacilitiesTypes'
import { jobPosting } from './JobPostingSchema/JobPostingSchema'
import { jobPostingNav } from './CareerSchema/JobsNavigation'
import { careerType } from './CareerSchema/CareerTypes'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    footerType,
    homeType,
    section1Type,
    section2Type,
    section3Type,
    aboutKihsType,
    testimonialType,
    aboutUsType,
    ourJourneyType,
    visionMissionType,
    leadershipType,
    serviceStandardsType,
    stateOfTheArtType,
    contactUsType,
    contactUsSection1,
    contactUsSection2,
    contactUsSection3,
    contactUsSection4,
    contactUsSection5,
    contactUsSection6,
    contactUsSection7,
    contactUsSection8,
    doctor,
    department,
    doctorsDepartments,
    jobPosting,
    careerType,
    jobPostingNav,
  ],
}
