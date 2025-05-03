import React from "react";

function Section1() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around px-4 md:px-16 lg:px-24 py-12 gap-8 md:gap-16 w-full  mt-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col md:items-start">
          <a href="#" className="text-sm text-blue-500 hover:underline mb-2">
            Laparoscopic Surgical Training Programs
          </a>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 ">
            Academic Training <br />
            Programs at KIHS
          </h2>
          <h3 className="text-black text-2xl font-semibold mb-2">
            Featured Workshops
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Total Laparoscopic Hysterectomy Hands-On Workshop <br />
            Retroperitoneal Dissection Hands-On Workshop
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/academicsfirst.png"
            alt="Gynaecology Doctors"
            className="rounded-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 px-4 md:px-20">
        <div className="p-6 border border-outlineGrey rounded-xl shadow-md flex flex-col gap-2">
          <img
            src="/handWithPlus.png"
            alt="Gynaecology Doctors"
            className="w-15 h-15 max-w-sm"
          />
          <h4 className=" text-2xl font-bold">Program Duration Options</h4>
          <ul className="list-disc pl-4 text-sm text-customGrey space-y-1">
            <li>3 days</li>
            <li>15 days</li>
            <li>1 month</li>
            <li>3 months</li>
            <li>6 months</li>
          </ul>
        </div>
        <div className="p-6 border border-outlineGrey rounded-xl shadow-md flex flex-col gap-2">
          <img
            src="/handWithPlus.png"
            alt="Gynaecology Doctors"
            className="w-15 h-15 max-w-sm"
          />
          <h4 className="text-2xl font-bold">Our Training Includes</h4>
          <ul className="list-disc pl-4 text-sm text-customGrey space-y-1">
            <li>Lectures by experts</li>
            <li>Hands-on surgical practice</li>
            <li>Wet lab experience</li>
            <li>Expert video discussions</li>
            <li>Training on laparoscopy</li>
            <li>Avoiding ureter and bladder injuries</li>
            <li>Diagnosing ureter and bladder complications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section1;
