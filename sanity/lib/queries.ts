// sanity/lib/queries.ts

export const homePageQuery = `
  *[_type == "home"][0]{
    section1,
    section2,
    section3,
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
