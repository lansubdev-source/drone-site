"use client";
import { useState } from "react";

const features = [
  { label: "MasterShots", video: "/mastershots.mp4" },
  { label: "QuickShots", video: "/quickshot.mp4" },
  { label: "Hyperlapse", video: "/hyperlapse.mp4" },
  { label: "Panorama", video: "/panorama.mp4" },
];

export default function FeatureVideoSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-white py-10 flex flex-col items-center font-poppins text-black">
      {/* Video Container */}
      <div className="w-full max-w-5xl h-[600px] overflow-hidden rounded-3xl shadow-lg">
        <video
          key={features[selected].video}
          src={features[selected].video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium">
        {features.map((feature, index) => (
          <button
            key={feature.label}
            onClick={() => setSelected(index)}
            className={`pb-1 transition-all duration-200 ${
              selected === index
                ? "text-black border-b-2 border-white font-semibold"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {feature.label}
          </button>
        ))}
      </div>
    </section>
  );
}
