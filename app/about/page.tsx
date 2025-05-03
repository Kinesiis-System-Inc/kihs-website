import { AboutUs } from "@/Components/About/About";
import { aboutUsPageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";


export default async function About() {

  const data = await client.fetch(aboutUsPageQuery)
  console.log("sanity data about us", data)

  return (
    <>
      <AboutUs data={data} />
    </>
  )
}

