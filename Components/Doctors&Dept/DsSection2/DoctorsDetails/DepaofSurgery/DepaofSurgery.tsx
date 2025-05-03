import React from "react";

function DepaofSurgery() {
  return (
    <div className="flex flex-col md:flex-row-reverse px-4 md:px-16 justify-around w-full mt-16 gap-12 pb-24">
      <div className="relative">
        <img
          src="/doctor_group.png"
          className="rounded-2xl"
          alt="Gynaecology Doctors"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:self-start md:pr-20 lg:pr-40 md:pt-14 md:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            2. Department of Obstetrics and Gynaecology
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-customGrey text-xs sm:text-sm md:text-[14px] mb-4">
            <li>Hysterectomy Clinic</li>
            <li>Fibroid Clinic</li>
            <li>Operative Laparoscopy</li>
            <li>Operative Hysteroscopy</li>
            <li>Fertility Enhancing Surgeries</li>
            <li>Urogynaecology Clinic</li>
            <li>Gynae-Oncology Clinic</li>
            <li>Colposcopy, Cryotherapy</li>
            <li>Maternity Clinic</li>
            <li>Infertility Clinic</li>
            <li>Endocrinology</li>
            <li>Maternal Nutrition</li>
            <li>Cosmetic Gynaecology</li>
            <li>
              SUI Correction by Laser, Vaginal Tightening, Vaginal Rejuvenation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DepaofSurgery;
