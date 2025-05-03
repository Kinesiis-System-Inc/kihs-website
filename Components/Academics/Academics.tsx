import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import { Section4 } from "./Section4/Section4";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";

async function Academics() {
  const data = await client.fetch(homePageQuery);
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 data={data?.testimonials} />
    </div>
  );
}

export default Academics;
