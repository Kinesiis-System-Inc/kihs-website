'use client'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import { OurJourneyProps } from '@/libs/types'



export const OurJourney = ({ data }: { data: OurJourneyProps}) => {
  return (
    <section className='flex flex-col md:flex-row justify-around w-full mt-16 p-4 md:px-24 lg:px-32 gap-16 pb-24'>
      <div className='relative md:h-[500px]'>
        {data?.nabhImage && (
          <img
            src={urlFor(data.nabhImage).url()}
            className='hidden md:block w-[100px] h-[100px] -top-[50px] left-10 absolute'
            alt='NABH Logo'
          />
        )}
        {data?.mainImage && (
          <img
            src={urlFor(data.mainImage).url()}
            className='w-full h-[300px] md:h-[500px] rounded-2xl object-cover'
            alt='KIHS building'
          />
        )}
        {data?.stats && (
          <div className='absolute -bottom-[50px] w-full min-h-[100px] rounded-lg bg-white shadow-2xl flex justify-around items-center'>
            {data.stats.map((stat, idx) => (
              <div key={idx} className='flex flex-col'>
                <h2 className='text-primary1 text-2xl font-semibold' dangerouslySetInnerHTML={{__html:stat.title}}/>
                {/* {stat.title}</h2> */}
                <p className='text-[14px] text-customGrey whitespace-pre-line' dangerouslySetInnerHTML={{__html:stat.subtitle}} />
                  {/* {stat.subtitle}</p> */}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='w-full lg:w-1/2 flex flex-col md:self-start md:pt-14 md:gap-8'>
        <div>
          <p className='text-sm text-blue-500 mb-1'>About Us</p>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>{data.aboutTitle}</h2>
          <p className='text-customGrey text-[14px] mb-6'>{data.aboutDescription}</p>
        </div>
        <div>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>{data.historyTitle}</h2>
          <p className='text-customGrey text-[14px] mb-6'>{data.historyDescription}</p>
        </div>
      </div>
    </section>
  )
}





































// import React from 'react'



// export const OurJourney = () => {


//   return (
//     <>
//       <section className='flex flex-col md:flex-row justify-around w-full mt-16 p-4 md:px-24 lg:px-32 gap-12 pb-24'>
//         <div className='relative'>
//           <img src="/nabh.png" className='hidden md:block w-[100px] h-[100px] -top-[50px] left-10 absolute' alt="NABH Logo" />
//           <img src='/about_hero.png' className='w-[100%] h-[500px] rounded-2xl' alt='KIHS building' />
//           <div className='absolute bottom-0 w-[100%] min-h-[100px] rounded-lg bg-white shadow-2xl flex justify-around items-center'>
//             <div className='flex flex-col'>
//               <h2 className='text-primary1 text-2xl font-semibold'>20K</h2>
//               <p className='text-[14px] text-customGrey'>Happy <br /> customers</p>
//             </div>
//             <div className='flex flex-col'>
//               <h2 className='text-primary1 text-2xl font-semibold'>50+</h2>
//               <p className='text-[14px] text-customGrey'>Doctors on<br /> call</p>
//             </div>
//             <div className='flex flex-col'>
//               <h2 className='text-primary1 text-2xl font-semibold'>20K</h2>
//               <p className='text-[14px] text-customGrey'>Super <br /> Specialities</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
//           <div>
//             <p className="text-sm text-blue-500 mb-1">About Us</p>
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to KIHS</h2>
//             <div />
//             <p className="text-customGrey text-[14px] mb-6">The Kullolli Institute of Health Services (KIHS) is a trusted name in affordable and quality healthcare in Sangli. Since its establishment, we have been committed to bridging the healthcare gap for rural and underserved communities, ensuring that no patient is left behind</p>

//           </div>
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">History & Evolution</h2>
//             <div />
//             <p className="text-customGrey text-[14px] mb-6">KIHS was founded in 1991 by Dr. S.A. Kullolli, an accomplished MS General Surgeon and a Class I Government officer, who recognised the challenges faced by rural patients in accessing quality healthcare. He left his government position to begin serving the community from a modest one-room clinic in Vishrambag, Sangli. Over the years, this initiative has grown into a multi-specialty healthcare institution with state-of-the-art facilities, making it a landmark in Sangli&apos;s healthcare landscape.</p>

//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
