export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface HomeSection1{
    mainHeading: string
    mobileImage: object
    desktopImage: object
    ctaButtons: object[]
    _type: string
    description: string
    tagline: string
  }
  
  export interface Service {
    _key: string;
    _type: 'service';
    label: string;
    url?: string;
    icon: SanityImage;
  }

  export interface HomeSection2{
    heading: string
    _type: string
    services: Service[]
    subheading: string
  }

  export interface TabItem {
    _key?: string;
    _type?: string;
    date?: string;
    isNew: boolean;
    info: string;
    pdfUrl?: string
  }
  
  export interface Tab {
    _key: string;
    _type: string;
    // title: 'Announcements' | 'Notices' | 'Events' | 'Quick Links';
    title: string;
    items: TabItem[];
  }
  
  export interface HomeSection3 {
    // _type: 'section3';
    tabs: Tab[];
  }

  export interface Button {
    label: string;
    primary?: boolean;
    link?: string;
  }
  
  export interface Section4Props {
      subtitle?: string;
      title: string;
      description: string;
      image: { asset: { _ref: string } };
      imageAlt: string;
      imagePosition: "left" | "right";
      buttons?: Button[];
  }

  export interface Testimonial {
    _id: string;
    quote: string;
    name: string;
    title: string;
    avatar: string;
  }


  
  export interface AboutUsProps{
    data:
    {
      ourJourney : OurJourneyProps;
      visionMission: VisionMissionProps;
      leadership: LeadershipProps;
      serviceStandards: ServiceProps;
      stateOfTheArt:StateOfTheArtProps;
   }
  }


  
  export interface  OurJourneyProps {
      mainImage?: { asset: { _ref: string } }
      nabhImage?: { asset: { _ref: string } }
      stats?: Stat[]
      aboutTitle: string
      aboutDescription: string
      historyTitle: string
      historyDescription: string
  }

  export interface  Stat  {
    title: string;
    subtitle: string;
  }

  export interface VisionMissionProps{
      visionTitle: string
      visionDescription: string
      missionTitle: string
      missionStatements: string[]
      commitmentTitle: string
      commitmentDescription: string
      commitmentImage?: {
        asset: {
          _ref: string
          url: string
        }
      }
  }


  export interface SocialLink {
    icon: 'facebook' | 'twitter' | 'linkedin'
    url: string
  }
  
  export interface Doctor{
    name: string
    title: string
    subTitle: string
    description?: string
    image: { asset: { _ref: string } }
    socialLinks: SocialLink[]
  }
  
  export interface CoreValue {
    title: string
    description: string
    icon: { asset: { _ref: string } }
  }
  
  export interface LeadershipProps{
      founders: Doctor[]
      administrators: Doctor[]
      coreValues: CoreValue[]
  }


  export interface Standard{
    title: string
    description: string
    image: {
      asset: {
        _ref: string
      }
    }
  }
  
  export interface ServiceProps{
      sectionTitle: string
      sectionSubtitle: string
      standards: Standard[]
  }

  export interface Feature{
    text: string
    listItems?: string[]
  }
  
  export interface Section{
    title: string
    subtitle?: string
    image: { asset: { _ref: string } }
    features: Feature[]
  }
  
  export interface StateOfTheArtProps{
      facilities: Section
      patientCare: Section
      bulletIcon :{
        asset: {
          _ref: string
        }
      }
  }


  export interface LinkItem{
    label: string
    url: string
  }
  
  export interface FooterData{
    logo?: { asset: { _ref: string } }
    companyLinks: LinkItem[]
    pagesLinks: LinkItem[]
    address: string[]
    mapUrl: string
    inquiries: { phone: string; email: string }
    socialLinks: { label: string; url: string; icon: { asset: { _ref: string } } }[]
  }

  export type Department = {
    title: string
    services: string[]
    imageUrl: string
  }
  
  export type DoctorsDepartmentsData = {
    mainHeading: string
    subHeading: string
    departments: Department[]
  }

  export type InitiativeItem = {
    title: string;
    description: string;
  };


 export type ImageWithAlt = {
  _type: 'image';
  alt?: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

export type FileWithAsset = {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

export type FacilitiesAndVisitors = {
  title: string;
  subTitle: string;
  titleAndPara: {
    title: string;
    para: string[];
    _key?: string;
  }[];
  coverImage: ImageWithAlt;
  videoUrl?: string
};

export type InpatientServices = {
  title: string;
  subTitle: string;
  services: {
    serviceTitle: string;
    servicePoints: string[];
    _key?: string;
  }[];
  imagesCollection: (ImageWithAlt & { _key?: string })[];
};

export type SupportServices = {
  title: string;
  subTitle: string;
  titleAndPara: {
    title: string;
    para: string[];
    _key?: string;
  }[];
  coverImage: ImageWithAlt;
};

export type InsuranceAndBilling = {
  title: string;
  description: string;
  details: {
    detailsTItle: string;
    allDetails: {
      label: string;
      value: string;
      _key?: string;
    }[];
  };
  coverImage: ImageWithAlt;
  table: {
    title: string;
    tableContent: {
      tableName: string;
      tableValues: {
        companyName: string;
        companyLogo: ImageWithAlt & { _key?: string };
        _key?: string;
      }[];
      _key?: string;
    }[];
  };
  images: (ImageWithAlt & { _key?: string })[];
};

export type PatientAndVisitors = {
  _id: string;
  _type: 'patientAndVisitors';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;

  inpatientServices: InpatientServices & { _type: 'inpatientServices' };
  facilitiesAndVisitors: FacilitiesAndVisitors & { _type: 'facilitiesAndVisitors' };
  supportServices: SupportServices & { _type: 'supportServices' };
  insuranceAndBilling: InsuranceAndBilling & { _type: 'insuranceAndBilling' };
};


export type BlogPost = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  excerpt: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  mainImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  author: {
    _id: string;
    name: string;
    title: string;
    phone?: string;
    education?: string;
    training?: string;
    slug?: { _type: 'slug'; current: string };
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
};

export type Author = {
   _id: string;
    name: string;
    title: string;
    phone?: string;
    education?: string;
    training?: string;
    slug?: { _type: 'slug'; current: string };
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    socialLinks: SocialLink[]
};

export type PortableTextContent = {
  headingAndParas: {
    heading: string;
    paras: string[];
  }[];
};


export type MedicalServiceQueryResult = {
  advancedDiagnostics: {
    videoUrl?: string
  }
}