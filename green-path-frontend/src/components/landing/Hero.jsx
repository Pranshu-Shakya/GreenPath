import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#756AB6] leading-tight">
          Discover Cleaner, Healthier Jogging Routes
        </h1>

        <p className="mt-4 text-lg text-[#9B86BD]">
          Choose routes that care about your health, air quality,
          and everyday movement.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/map"
            className="px-6 py-3 rounded-full
              bg-[#756AB6] text-[#FFEFEF]
              hover:bg-[#9B86BD] transition shadow-lg"
          >
            Explore Routes
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 rounded-full
              bg-[#FFEFEF] text-[#756AB6]
              border border-[#E2BBE9]
              hover:bg-[#E2BBE9] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
