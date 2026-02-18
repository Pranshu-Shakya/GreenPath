import React from "react";
import PrimaryButton from "../PrimaryButton";
import { Search } from "lucide-react";


function ExploreDataSection() {
  return (
    <section className="w-full min-h-[70vh] flex overflow-hidden shadow-2xl">
      
      {/* LEFT : Map Preview */}
      <div className="relative w-full md:w-2/3 bg-[#FFEFEF]">
        {/* Fake map background (replace later with real map if needed) */}
        <div className="absolute inset-0 bg-[url('/lucknowmap.png')] bg-cover bg-center opacity-80" />

        {/* Search bar */}
        <div className="relative z-10 flex justify-center items-start pt-20">
          <div className="
            w-[70%]
            flex items-center
            bg-white
            rounded-full
            px-5 py-3
            shadow-xl
          ">
            <input
              type="text"
              placeholder="Search for air quality data"
              className="
                flex-1
                outline-none
                text-sm
                text-gray-700
                placeholder-gray-400
              "
            />
            <span className="text-[#756AB6] text-lg"><Search/></span>
          </div>
        </div>
      </div>

      {/* RIGHT : Content Panel */}
      <div className="
        w-full md:w-1/3
        flex flex-col justify-center
        px-10
        bg-[#756AB6]
      ">
        <h2 className="text-3xl font-semibold text-[#FFEFEF] leading-snug">
        A map that cares 
        </h2>

        <p className="mt-4 text-sm text-[#E2BBE9] leading-relaxed">
          Hundreds of people use OpenAQ every day.
          Our interactive map makes it easy to explore
          and understand global air quality data.
        </p>

        <div className="mt-8">
          <PrimaryButton>
            Explore the data
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default ExploreDataSection;
