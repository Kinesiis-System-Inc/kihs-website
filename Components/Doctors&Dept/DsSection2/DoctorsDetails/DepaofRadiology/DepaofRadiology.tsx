import React from "react";

function DepaofRadiology() {
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
            9.Department of Radiology
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold">
            (Shailaja Diagnostics)
          </h2>
          <ul className="list-disc pl-10 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-6">
            <li>Digital X-ray</li>
            <li>IVP</li>
            <li>HSG</li>
            <li>Ultrsonography</li>
            <li>Interventional USG</li>
            <li>Color Doppler</li>
            <li>3D/4D Obstetrics</li>
            <li>Sonography</li>
            <li>Echocardiography</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DepaofRadiology;
