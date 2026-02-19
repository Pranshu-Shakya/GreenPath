import React from "react";
import PrimaryButton from "../PrimaryButton";
import PrimaryParagraph from "../PrimaryParagraph";
import PrimaryHeading from "../PrimaryHeading";


function ExploreDataSection() {
    return (
        <section className="w-full min-h-[50vh] flex overflow-hidden ">
            {/* LEFT : Map Preview */}
            <div className="relative w-full md:w-2/3 bg-[#FFEFEF]">
                {/* Fake map background (replace later with real map if needed) */}
                <div className="absolute inset-0 bg-[url('/lucknowmap.png')] bg-cover bg-center opacity-80" />
            </div>

            {/* RIGHT : Content Panel */}
            <div className="
        w-full md:w-1/3
        flex flex-col justify-center
        px-10
        bg-[#756AB6]
      ">

                <PrimaryHeading level="h1" text="A map that cares" />
                <PrimaryParagraph text="A map built for Lucknow. It helps you find optimized paths that prioritise your health, based on local conditions and routes you actually use."
                    size="md" />
            </div>
        </section>
    );
}

export default ExploreDataSection;
