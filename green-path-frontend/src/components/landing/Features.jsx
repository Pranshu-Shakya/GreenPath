import React from "react";

const features = [
  {
    title: "Air-Aware Routes",
    desc: "Routes visualized with clean air in mind."
  },
  {
    title: "Multiple Path Options",
    desc: "Choose between different jogging paths."
  },
  {
    title: "Map-Based Selection",
    desc: "Select start & end directly on the map."
  }
];

function Features() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#FFEFEF]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl
              bg-white/60 backdrop-blur
              border border-[#E2BBE9]
              shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#756AB6]">
              {f.title}
            </h3>
            <p className="mt-2 text-[#9B86BD] text-sm">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
      <HowItWorks/>
    </section>
  );
}

export default Features;

function HowItWorks() {
  const steps = [
    { step: "01", title: "Select on Map", desc: "Tap to choose start & end points." },
    { step: "02", title: "Compare Routes", desc: "View multiple jogging paths." },
    { step: "03", title: "Run Smarter", desc: "Pick the route that fits you best." },
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl font-semibold text-center text-[#756AB6] mb-14">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div
            key={s.step}
            className="
              relative
              p-8 rounded-2xl
              bg-white/60 backdrop-blur
              border border-[#E2BBE9]
              shadow-xl
            "
          >
            <span className="absolute -top-5 left-6 text-5xl font-bold text-[#E2BBE9]">
              {s.step}
            </span>

            <h3 className="mt-6 text-xl font-semibold text-[#756AB6]">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-[#9B86BD]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export {HowItWorks};
