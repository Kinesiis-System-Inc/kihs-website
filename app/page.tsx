import {Section1} from '../Components/Home/Section1/Section1'
import {Section2} from '../Components/Home/Section2/Section2'
import {Section3} from '../Components/Home/Section3/Section3'
import {Section4} from '../Components/Home/Section4/Section4'
// import {Section5} from '../Components/Home/Section5/Section5'
import {Section6} from '../Components/Home/Section6/Section6'
import { client } from '@/sanity/lib/client'
import { homePageQuery } from '@/sanity/lib/queries'

export default async function Home() {
  const data = await client.fetch(homePageQuery)
  console.log("sanity data",data)
  return (
    <>
      <Section1 data={data?.section1}/>
      <Section2 data={data?.section2}/>
      <Section3 data={data?.section3}/>
      <Section4 data={data?.aboutKihs}/>
      {/* <Section5/> */}
      <Section6 data={data?.testimonials}/>
    </>
  )
}
