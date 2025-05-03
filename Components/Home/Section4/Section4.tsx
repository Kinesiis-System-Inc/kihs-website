'use client'
import { urlFor } from "@/sanity/lib/image";
import { ContentSection } from "../ContentSection/ContentSection";
import { Section4Props } from "@/libs/types";

export const Section4 = ({ data }: {data:Section4Props}) => {
  return (
    <section>
      <ContentSection
        subtitle={data.subtitle}
        title={data.title}
        description={data.description}
        imageSrc={urlFor(data.image).url()}
        imageAlt={data.imageAlt}
        imagePosition={data.imagePosition}
        buttons={
          data.buttons?.map((btn) => ({
            label: btn.label,
            primary: btn.primary,
            onClick: () => {
              if (btn.link) {
                window.location.href = btn.link;
              }
            },
          })) || []
        }
      />
    </section>
  );
};
