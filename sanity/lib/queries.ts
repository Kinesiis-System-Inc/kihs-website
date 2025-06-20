// sanity/lib/queries.ts

export const homePageQuery = `
  *[_type == "home"][0]{
    section1,
    section2,
     section3{         
      tabs[]{
        title,
        items[]{
          date,
          isNew,
          info,
          "pdfUrl": pdfFile.asset->url
        }
      }
    },
    aboutKihs {
      subtitle,
      title,
      description,
      image {
        asset -> {
          url
        }
      },
      imageAlt,
      imagePosition,
      buttons[] {
        label,
        primary,
        link
      }
    },
    testimonials[]->{
      _id,
      quote,
      name,
      title,
      "avatar": avatar.asset->url
    },
  }
`

export const aboutUsPageQuery = `
  *[_type == "AboutUs"][0]{
    ourJourney,
    visionMission {
      visionTitle,
      visionDescription,
      missionTitle,
      missionStatements,
      commitmentTitle,
      commitmentDescription,
      commitmentImage {
        asset -> { url }
      }
    },
    leadership {
      founders[] {
        name,
        title,
        subTitle,
        description,
        image { asset -> { url } },
        socialLinks[] {
          icon,
          url
        }
      },
      administrators[] {
        name,
        title,
        subTitle,
        image { asset -> { url } },
        socialLinks[] {
          icon,
          url
        }
      },
      coreValues[] {
        title,
        description,
        icon { asset -> { url } }
      }
    },
    serviceStandards {
      sectionTitle,
      sectionSubtitle,
      standards[] {
        title,
        description,
        image {
          asset -> {
            url
          }
        }
      }
    },
    stateOfTheArt {
      facilities {
        title,
        subtitle,
        image { asset -> { url } },
        features[] {
          text,
          listItems
        }
      },
      patientCare {
        title,
        image { asset -> { url } },
        features[] {
          text,
          listItems
        }
      },
      bulletIcon {
         asset -> {
               url
         }
      },
     }
    }
`

export const footerQuery = `
  *[_type == "footer"][0] {
    logo { asset -> { url } },
    companyLinks,
    pagesLinks,
    address,
    mapUrl,
    inquiries {
      phone,
      email
    },
    socialLinks[] {
      label,
      url,
      icon { asset -> { url } }
    }
  }
  `

  export const contactUsQuery = `
  *[_type == "contactus"][0]{
    contactUsSection1{
    title,
    subtitle,
    "desktopImage": desktopImage.asset->url,
    "mobileImage": mobileImage.asset->url,
    contacts[]{
      label,
      "icon": icon.asset->url
    },

   },
    contactUsSection2 {
    introText,
    heading,
    emergencySection {
      title,
      emergencyContacts[] {
        label,
        number
      }
    },
    locationTitle,
    address,
    landmarkHeading,
    landmarks,
    mobileDescriptionTitle,
    mobileDescriptionParagraphs,
    mapEmbedUrl
  },
  contactUsSection3 {
    images[] {
      asset->{
        _id,
        url
      }
    }
  },
  contactUsSection4 {
      getInTouchTitle,
      getInTouchDescription,
      contactDetails[] {
        label,
        numbers,
        ext
      },
      hospitalHoursTitle,
      hospitalHoursDescription,
      hospitalHourList,
      emergencyTitle,
      emergencyDescription,
      emergencyNumbers,
      connectTitle,
      connectDescription,
      socialLinks[] {
        label,
        linkText,
        url
      }
    },
    contactUsSection5 {
      adminContacts[] {
        department,
        name,
        email
      }
    },
    contactUsSection6 {
        title,
        description
    },
    contactUsSection7 {
       title,
       description,
       email,
       phoneNumbers,
       extensionNote,
       bottomText,
       image {
         asset -> { url }
       }
     },
     contactUsSection8 {
        subtitle,
        title,
        servicesList,
        submitButtonText,
        successMessage,
        errorMessage
     }
  }
`

export const socialResponsibilityQuery =`
  *[_type=="socialResponsibilityPage"][0]{
      heroImage,
      heroTitle,
      heroDescription,
      initiatives[]{
        title,
        description
      },
      ctaTitle,
      ctaDescription,
      ctaImage,
      accessImage,
      accessTitle,
      accessSubTitle,
      accessDescription
    }
`
export const pvQuery = `
  *[_type == "patientAndVisitors"][0]{
    // Inpatient Services (whatever fields you need)
    inpatientServices,

    // Facilities & Visitors—with aliased videoUrl
    "facilitiesAndVisitors": facilitiesAndVisitors{
      title,
      subTitle,
      titleAndPara[]{ title, para },
      "videoUrl": video.asset->url
    },

    // Support Services
    supportServices,

    // Insurance & Billing
    insuranceAndBilling
  }
`

export const blogQuery = `
*[_type == "blogs"] {
    _id,
    title,
    excerpt,
    slug,
    _createdAt,
    _updatedAt,
    mainImage,
    content,
    author->{
      _id,
      name,
      slug,
      title,
      image,
      phone,
      subtitle,
      timings,
      education,
      training,
      statistics,
      socialLinks
    }
  }
`
// export const medicalServiceQuery = `
//   *[_type == "medicalService"][0]{
//     "advancedDiagnostics": advancedDiagnostics{
//       "videoUrl": video.asset->url
//     }
//   }
// `


export const medicalServiceQuery = `
  *[_type == "medicalService"][0]{
    advancedDiagnostics {
      sectionTitle,
      "videoUrl": video.asset->url,
      diagnosticTypes[] {
        title,
        procedures
      }
    },
    criticalCare {
      sectionTitle,
      "videoUrl": video.asset->url,
      des,
      boldTitle,
      icus {
        name,
        features
      },
      equipment,
      specialFeatures
    },
    surgicalSpecialties {
      sectionTitle,
      des,
      "videoUrl": video.asset->url,
      surgicalHighlights {
        title,
        highlights
      },
      hospitalOffers {
        title,
        sections[] {
          sectionTitle,
          sectionPoints
        }
      }
    },
    medicalSpeciality {
      sectionTitle,
      "sectionImageUrl": sectionImage.asset->url,
      specialities
    }
  }
`;
