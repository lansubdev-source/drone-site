"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "UTILITY INSPECTION",
    image: "/products/utility.jpg",
    points: [
      "Topographic monitoring.",
      "Encroachment detection.",
      "Stockpile & pipeline inspections.",
    ],
  },
  {
    title: "POWERLINE STRINGING",
    image: "/products/stringing.webp",
    points: [
      "Drone-enabled power transmission.",
      "Safe, time-saving operations.",
    ],
  },
  {
    title: "GEO-SPATIAL MAPPING",
    image: "/products/geo.jpeg",
    points: [
      "Land Surveys & Mapping with GIS.",
      "High Resolution Maps.",
      "Thermal Imaging.",
      "Infrared imaging.",
      "Corridor Surveillance.",
      "Railways.",
    ],
  },
  {
    title: "HEALTHCARE AND EMERGENCY RESPONSE",
    image: "/products/healthcareandemergency.jpg",
    points: [
      "Emergency Response during disasters.",
      "Delivery of medical supplies & essentials.",
      "Healthcare access in remote areas.",
    ],
  },
  {
    title: "PRECISION AGRICULTURE",
    image: "/products/precision.png",
    points: [
      "Farm & Water Management.",
      "Crop & Soil Monitoring.",
      "Pest Detection & Control.",
    ],
  },
  {
    title: "WINDMILL INSPECTION",
    image: "/products/inspection.png",
    points: [
      "Visual & thermal turbine inspections.",
      "Wind farm infrastructure checks.",
      "Blade condition monitoring.",
    ],
  },
  {
    title: "DRONE AS A SERVICE (DaaS)",
    image: "/products/daas.avif",
    points: [
      "On-demand drone service delivery.",
      "No drone ownership required.",
      "Flexible business options.",
    ],
  },
  {
    title: "REMOTE PILOT TRAINING (RPTO)",
    image: "/products/rpto.webp",
    points: [
      "DGCA-compliant training.",
      "Flight training with experts.",
      "Curriculum aligned to industry.",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-gray-100 text-gray-900 px-6 md:px-12 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 text-sky-600"
      >
        Drone-Based Solutions
      </motion.h1>

      <div className="space-y-20 max-w-7xl mx-auto">
        {solutions.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={400}
                  className="w-full h-72 md:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all">
                <h2 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-4">
                  {item.title}
                </h2>
                <ul className="list-disc pl-5 text-gray-800 text-base space-y-2 leading-relaxed">
                  {item.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
