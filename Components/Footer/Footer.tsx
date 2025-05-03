'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import { FooterData } from '@/libs/types'

export const Footer = ({ data }: { data: FooterData }) => {
    // console.log("Footer data",data)
  const pathname = usePathname()

  return (
    <footer className='w-full h-max py-5 px-8 md:px-24 flex flex-col gap-8'>
      <div className='hidden md:block'>
        {data.logo && (
          <Link href="/" className="font-bold text-xl">
            <Image src={urlFor(data.logo).url()} alt="Footer Logo" width={90} height={50} />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 justify-center items-start grid-rows-3 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Company Links */}
        <div>
          <h3 className="text-[16px] font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            {data.companyLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`hover:underline ${pathname === item.url ? "text-primary1" : "text-black"}`}
                >
                  <motion.span className="relative text-[14px] inline-block" initial="rest" whileHover="hover">
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-primary1 rounded-full"
                      variants={{
                        rest: { width: 0, transition: { duration: 0.3 } },
                        hover: { width: '100%', transition: { duration: 0.3 } }
                      }}
                    />
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages Links */}
        <div>
          <h3 className="text-[16px] font-semibold mb-2">Pages</h3>
          <ul className="space-y-2">
            {data.pagesLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`hover:underline ${pathname === item.url ? "text-primary1" : "text-black"}`}
                >
                  <motion.span className="relative text-[14px] inline-block" initial="rest" whileHover="hover">
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-primary1 rounded-full"
                      variants={{
                        rest: { width: 0, transition: { duration: 0.3 } },
                        hover: { width: '100%', transition: { duration: 0.3 } }
                      }}
                    />
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address + Inquiries */}
        <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 col-span-2 md:col-span-1">
          <div className="md:order-3">
            <h3 className="text-[16px] font-semibold mb-2">Address</h3>
            <address className="not-italic text-[14px] text-gray-700 space-y-1">
              {data.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <Link href={data.mapUrl} target='_blank' className="underline block mt-2 py-1">
                View on Maps
              </Link>
            </address>
          </div>
          <div className="md:order-3 md:-mt-4">
            <h3 className="text-[16px] font-semibold mb-2 md:mt-8">Inquiries</h3>
            <div className="text-gray-700 space-y-1 text-[14px]">
              <p className="font-medium">{data.inquiries.phone}</p>
              <p>{data.inquiries.email}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="md:order-4 col-span-2 md:col-span-1 self-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-wrap items-center gap-4">
            {data.socialLinks.map((item, index) => (
              <motion.a
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <img src={urlFor(item.icon).url()} alt={item.label} className='h-6' />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
