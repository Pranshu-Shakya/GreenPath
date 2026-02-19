import React from "react";
import { Wind, Route, MapPin } from "lucide-react";

/* ===========================
   FEATURES DATA
=========================== */
const features = [
  {
    title: "Air-Aware Routes",
    desc: "Routes visualized with clean air in mind.",
    icon: Wind,
  },
  {
    title: "Multiple Path Options",
    desc: "Choose between different paths.",
    icon: Route,
  },
  {
    title: "Map-Based Selection",
    desc: "Select start & end directly on the map.",
    icon: MapPin,
  },
];

function Features() {
  return (
    <section className="px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((f, i) => {
          const Icon = f.icon;

          return (
            <div
              key={i}
              className="
                p-6 sm:p-7
                rounded-2xl
                bg-white/60 backdrop-blur
                border border-[#E2BBE9]
                shadow-lg
                text-center sm:text-left
              "
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center sm:justify-start">
                <div className="inline-flex p-3 rounded-full bg-[#E2BBE9]/40">
                  <Icon size={22} className="text-[#756AB6]" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#756AB6]">
                {f.title}
              </h3>

              <p className="mt-2 text-sm text-[#9B86BD]">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
