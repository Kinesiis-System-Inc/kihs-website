import React from "react";

function DepaofObGy() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24">
      <div className="relative flex items-center justify-center">
        <img
          src="/support_doc.png"
          className="rounded-2xl"
          alt="Department of Surgery"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            1. Department of Surgery
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>Cancer Surgeries</li>
            <li>Paediatric Surgeries</li>
            <li>Gastro Intestinal Surgeries</li>
            <li>Advanced Laparoscopic Surgeries</li>
            <li>Major & Supra Major Surgeries</li>
            <li>
              Hernia, Appendix, Gallbladder Stone, Piles, Fistula, Fissure,
              Breast Surgeries
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DepaofObGy;
