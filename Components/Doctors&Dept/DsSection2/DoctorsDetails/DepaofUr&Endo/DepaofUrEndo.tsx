import React from "react";

function DepaofUrEndo() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16  justify-around w-full mt-16 gap-12 pb-24">
      <div className="relative flex items-center justify-center">
        <img
          src="/support_doc.png"
          className="rounded-2xl"
          alt="KIHS building"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            3.Department of Urology & Endo <br />  urology
          </h2> 
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>Complete Stone Care Clinic</li>
            <li>Advanced Endourology Center (PCNL, URSL, TURP, RIRS)</li>
            <li>Laser Lithotipsy</li>
            <li>ESWL</li>
            <li>Prostate Clinic</li>
            <li>Nephrectomy</li>
            <li>Pyeloplasty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DepaofUrEndo;
