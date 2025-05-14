// components/Section3.tsx
'use client'
import React from 'react'
import { DynamicNavigation } from '../DyanmicNavigation/DynamicNavigation'
import { HomeSection3 } from '@/libs/types'


interface Section3Props {
  data: HomeSection3
}

export const Section3: React.FC<Section3Props> = ({ data }) => {
  // Map your raw tabs -> the SanityTab[] shape that DynamicNavigation wants
  const sanityTabs = data.tabs.map(tab => ({
    title: tab.title,
    items: tab.items.map(item => ({
      date: item.date ?? '',     // fallback to empty string
      isNew: item.isNew,
      info: item.info,
      pdfUrl: item.pdfUrl       // may be undefined
    }))
  }))

  return (
    <section className="py-8 px-4 md:py-16 md:px-36 w-full bg-bgBlue">
      <DynamicNavigation tabsData={sanityTabs} />
    </section>
  )
}
