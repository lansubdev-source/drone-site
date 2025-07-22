"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Data ---
const impactAreas = [
   {
    id: 1,
    title: "Panel Vision Solutions",
    description: "Catch hidden issues with high-definition thermal scans.",
    image: "/products/panel.jpg",
  },
  {
    id: 2,
    title: "Airborne Crisis Support",
    description: "Fast, reliable eyes in the sky when it matters most.",
    image: "/products/crisis.jpeg",
  },
  {
    id: 3,
    title: "Blueprints from the Sky",
    description: "Accurate terrain models, progress tracking, and site planning.",
    image: "/products/sky.jpg",
  },
  {
    id: 4,
    title: "Sky-Level Crop Intelligence",
    description: "Precision farming from the sky - boost yield, reduce costs.",
    image: "/products/crop.avif",
  },
  {
    id: 5,
    title: "Industrial Precision",
    description: "Smarter inspections for pipelines, grids, and refineries.",
    image: "/products/industrial.webp",
  },
  {
    id: 6,
    title: "Safer Railways",
    description: "Early detection of rail defects via aerial scans.",
    image: "/products/railway.webp",
  },
  {
    id: 7,
    title: "Aero Port Insights",
    description: "Aerial views for accurate docking operations.",
    image: "/products/aero.webp",
  },
  {
    id: 8,
    title: "Elevated Line Insights",
    description: "Minimizing downtime, maximizing safety.",
    image: "/products/elevated.jpg",
  },
];

// --- Card Component ---
const ImpactCard = ({ area }: { area: typeof impactAreas[number] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={area.image}
        alt={area.title}
        width={800}
        height={600}
        className="w-full h-full object-cover"
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end"
          >
            <h3 className="text-white text-lg font-semibold mb-1">{area.title}</h3>
            <p className="text-white text-sm">{area.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Layout with Asymmetry ---
export default function ImpactAreas() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 font-urbanist text-gray-900">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Impact Areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Discover how Magic Myna transforms industries with drone-powered aerial intelligence.
        </motion.p>
      </div>

      {/* Grid Layout with big + small tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[250px]">
        {/* First Group */}
        <div className="col-span-2 row-span-2">
          <ImpactCard area={impactAreas[0]} />
        </div>
        <div className="row-span-1">
          <ImpactCard area={impactAreas[1]} />
        </div>
        <div className="row-span-1">
          <ImpactCard area={impactAreas[2]} />
        </div>

        {/* Second Group */}
        <div className="col-span-2 row-span-2">
          <ImpactCard area={impactAreas[3]} />
        </div>
        <div className="row-span-1">
          <ImpactCard area={impactAreas[4]} />
        </div>
        <div className="row-span-1">
          <ImpactCard area={impactAreas[5]} />
        </div>

        {/* Remaining if any */}
        <div className="col-span-2 row-span-2">
          <ImpactCard area={impactAreas[6]} />
        </div>
        <div className="row-span-2">
          <ImpactCard area={impactAreas[7]} />
        </div>
      </div>
    </section>
  );
}
