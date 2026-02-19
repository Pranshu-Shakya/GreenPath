import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Wind, Route } from "lucide-react";

function Hero() {
    return (
        <section className="pt-24 sm:pt-28 md:pt-32 px-12 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

                {/* LEFT : Content */}
                <div className="text-center md:text-left">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#756AB6] ">
                        Move Healthier,<br/>
                        Beyond Distances

                    </h1>

                    {/* Primary Description */}
                    <p className="mt-5 text-base sm:text-lg text-[#9B86BD] max-w-xl mx-auto md:mx-0">
                        Traditional maps optimise for distance. Our map optimises for
                        <span className="font-medium text-[#756AB6]"> your health</span> —
                        guiding you through cleaner air, safer streets, and smarter routes
                        designed specifically for jogging and walking.
                    </p>



                    {/* CTA */}
                    <div className="mt-8 flex justify-center md:justify-start">
                        <Link
                            to="/about"
                            className="
                inline-flex items-center gap-2
                px-8 py-3 rounded-full
                bg-[#FFEFEF]
                text-[#756AB6]
                border border-[#E2BBE9]
                hover:bg-[#E2BBE9]
                transition-all
                font-medium
              "
                        >
                            Learn How It Works
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* RIGHT : Visual */}
                <div className="flex justify-center md:justify-end">
                    <div
                        className="
              relative
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-[26rem] lg:h-[26rem]
              rounded-full
              
              flex items-center justify-center
            "
                    >
                        <img
                            src="/hero.gif"
                            alt="Health optimized jogging routes map"
                            className="
                w-52 h-52
                sm:w-60 sm:h-60
                md:w-72 md:h-72
                lg:w-140 lg:h-140
                object-contain
                
                drop-shadow-xl
              "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
