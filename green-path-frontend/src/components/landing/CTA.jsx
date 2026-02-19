import React from "react";
import { Link } from "react-router-dom";
import { Map, ArrowRight, Wind } from "lucide-react";
import PrimaryParagraph from "../PrimaryParagraph";
import PrimaryHeading from "../PrimaryHeading";

function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div
        className="
          max-w-4xl mx-auto
          p-10 sm:p-12
          rounded-3xl
          bg-linear-to-r
          from-[#756AB6]
          via-[#9B86BD]
          to-[#756AB6]
          text-center
          shadow-2xl
        "
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-white/20">
            <Wind size={32} className="text-[#FFEFEF]" />
          </div>
        </div>

        {/* Heading */}
        <PrimaryHeading text="Ready to move Smarter?"/>
        {/* Subtext */}
        <PrimaryParagraph size="md" text=" Pick cleaner routes, avoid polluted areas, and jog with confidence using
          real-time health-aware paths."/>
         
        

        {/* CTA Button */}
        <Link
          to="/map"
          className="
            inline-flex items-center gap-2
            mt-8 px-8 py-3
            rounded-full
            bg-[#FFEFEF]
            text-[#756AB6]
            font-medium
            hover:bg-[#E2BBE9]
            transition
          "
        >
          <Map size={18} />
          Open Map
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default CTA;
