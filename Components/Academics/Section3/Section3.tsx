import React from "react";

function Section3() {
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24">
        <div className="relative">
          <img
            src="/academics-image2.png"
            className="rounded-2xl"
            alt="Gynaecology Doctors"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Benefits of Our Programs
            </h2>
            <p className="list-disc pl-6 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
              <p> -Sharpen existing surgical skills</p>
              <p>-Build confidance in complex surgical procedures</p>
              <p>-Learn new techniques</p>
              <p>-Patential for career advancement</p>
              <p>-Continuous support from our institute</p>
              <p>-Overcome common surgical anxieties</p>
              <p>-Expert knowledge in urological safety</p>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24">
        <div className="relative">
          <img
            src="/academics-image3.png"
            className="rounded-2xl"
            alt="Gynaecology Doctors"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Key Programs Features
            </h2>
            <p className="list-disc pl-6 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
              <p>Independent hands-on experience</p>
              <p>Wet lab practice</p>
              <p>Operation room setup traning</p>
              <p>Vivid learning opportunities</p>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-24 mt-8">
        <div className="bg-secondaryTint rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Certification</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                – Certificate of completion from Kukkii Institute of Health
                Services
              </li>
              <li>– Officially certified training program</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-24 h-24 mt-4 md:mt-0 md:ml-6">
            <img
              src="/acadimics-image5.png" // replace with actual image path
              alt="Certificate Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24">
        <div className="relative">
          <img
            src="/academics-image4.png"
            className="rounded-2xl"
            alt="Gynaecology Doctors"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Eligibility</h2>
            <p className="list-disc  space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
              <p>-Qualified Gynaecologists with</p>
              <p>DGO</p>
              <p>DNB</p>
              <p>MS degree</p>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 px-4 md:px-25 mb-15">
        {/* How to Register */}
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            How to Register
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>– Complete our online registration form</li>
            <li>
              – Email:{" "}
              <a
                href="mailto:academics@kiih.edu"
                className="text-blue-600 underline"
              >
                academics@kiih.edu
              </a>
            </li>
            <li>– Phone registration available</li>
          </ul>
        </div>

        {/* Enrolment Deadline */}
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Enrolment Deadline
          </h3>
          <p className="text-sm text-gray-600">– Current batch: XXYY202X</p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
