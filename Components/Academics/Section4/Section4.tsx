import TestimonialCarousel from "@/Components/TestimonialCarousel/TestimonialCarousel";
import { Testimonial } from "@/libs/types";
import React from "react";


export const Section4: React.FC<{ data: Testimonial[] }> = ({ data }) => {
  return (
    <section id="testimonial">
      <TestimonialCarousel testimonials={data} />
    </section>
  );
};
