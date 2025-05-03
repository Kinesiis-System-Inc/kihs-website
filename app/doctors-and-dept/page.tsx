
import React from "react";
import { PvSection1 } from "@/Components/PatientsAndVisitiors/PvSection1/PvSection1";
import { DsSection2 } from "@/Components/Doctors&Dept/DsSection2/DsSection2";
import { client } from "@/sanity/sanity-utils";

export default async function page() {
  const data = await client.fetch(`*[_type == "doctorsDepartments"][0] {
    mainHeading,
    subHeading,
    departments[] {
      title,
      services,
      "imageUrl": image.asset->url
    }
  }`)
  return (
    <main className="w-full flex flex-col">
      <PvSection1 />
      <DsSection2 data={data} />
    </main>
  );
}
