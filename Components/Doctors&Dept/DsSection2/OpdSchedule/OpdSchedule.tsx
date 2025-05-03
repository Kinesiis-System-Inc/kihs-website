import React from "react";

export const OpdSchedule = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-6">
      <div className="flex flex-col gap-2">
        {/* Breadcrumb Link */}
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Outpatient Department (OPD)
        </a>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-3xl font-bold text-gray-900">
          Outpatient Department (OPD)
        </h2>

        {/* Timings */}
        <p className="text-sm text-gray-700 font-medium">
          <span className="font-semibold">10:00 AM to 7:00 PM</span>,{" "}
          <span className="font-semibold">Monday to Saturday</span>{" "}
          <span className="font-normal text-gray-500">
            (Closed on Sundays. Emergency services only.)
          </span>
        </p>
      </div>
    </section>
  );
};
