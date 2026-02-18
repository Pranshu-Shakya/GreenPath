import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div
        className="
          max-w-4xl mx-auto
          p-10 rounded-3xl
          bg-gradient-to-r
          from-[#756AB6]
          via-[#9B86BD]
          to-[#756AB6]
          text-center
          shadow-2xl
        "
      >
        <h2 className="text-3xl font-bold text-[#FFEFEF]">
          Ready to Start Running Smarter?
        </h2>

        <p className="mt-3 text-[#E2BBE9]">
          Pick cleaner routes and jog with confidence.
        </p>

        <Link
          to="/map"
          className="inline-block mt-6 px-8 py-3
            rounded-full bg-[#FFEFEF]
            text-[#756AB6] font-medium
            hover:bg-[#E2BBE9] transition"
        >
          Open Map
        </Link>
      </div>
    </section>
  );
}

export default CTA;
