import React from "react";

function Stats() {
  return (
    <section className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-3 text-center gap-6">
        {[
          ["3+", "Route Options"],
          ["100%", "Map Based"],
          ["Clean", "Design First"]
        ].map(([value, label], i) => (
          <div
            key={i}
            className="rounded-2xl p-6
              bg-linear-to-br
              from-[#756AB6]/80
              to-[#9B86BD]/80
              text-[#FFEFEF]
              shadow-xl"
          >
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm opacity-90">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
