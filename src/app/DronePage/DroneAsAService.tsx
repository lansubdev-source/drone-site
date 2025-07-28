"use client";

import Image from "next/image";
import React from "react";

const reasons = [
  {
    title: "RELIABLE TECHNOLOGY",
    description: ["Indigenously designed & built.", "State-of-the-Art Technology."],
    sub: "Powerline Stringing Drone",
  },
  {
    title: "SAFETY",
    description: ["We adhere to the highest industry safety standards.", "Trained & certified operators."],
    sub: "Inspections / Mapping Drone",
  },
  {
    title: "COST EFFECTIVE",
    description: ["Lower operational costs.", "Minimized downtime."],
    sub: "Logistics & Delivery Drone",
  },
];

const agriculturalServices = [
  {
    title: "Crop Health Monitoring & Livestock Management",
    desc: "Efficiency with drone-based multispectral imaging for early disease detection, precision spraying, and remote livestock monitoring.",
    image: "/services/agri1.webp",
  },
  {
    title: "Aerial Spraying & Soil Field Analysis",
    desc: "Drone-enabled precision spraying, soil mapping, and irrigation optimization, reducing costs, chemical waste, and environmental impact.",
    image: "/services/agri2.jpeg",
  },
];

const industrialServices = [
  {
    title: "Industrial Excellence with Intelligence",
    desc: "Enhance safety and efficiency in oil & gas pipelines with automated drone inspections. Real time Detection and minimizes risk.",
    image: "/services/ind1.jpg",
  },
  {
    title: "Power Line & Utility Inspection",
    desc: "Ensure power grid reliability with drone-based thermal inspections, detecting faults, vegetation risks, and wear to minimize downtime and costs.",
    image: "/services/ind2.webp",
  },
  {
    title: "Structural & Wind Turbine Inspection",
    desc: "Optimize asset safety and performance with high-precision drone inspections, detecting defects in turbines and structures using visual and thermal imaging",
    image: "/services/ind3.webp",
  },
  {
    title: "Disaster Response & Wildlife Monitoring",
    desc: "Real-time disaster response wildlife surveillance, aiding emergency teams and conservation efforts with precision and minimal disruption.",
    image: "/services/ind4.jpg",
  },
  {
    title: "Progress Monitoring & Traffic Monitoring & Management",
    desc: "High-resolution GIS mapping, progress monitoring, and real-time traffic analysis to optimize urban planning, mobility solutions.",
    image: "/services/ind5.webp",
  },
  {
    title: "Dump Yard Management",
    desc: "Solutions for efficient dump yard waste management. Our drones offer aerial assessments, waste analysis, and fire hazard detection. They enhance safety, optimize space, and support sustainable waste management.",
    image: "/services/ind6.jpg",
  },
  {
    title: "Highway Assessment & Monitoring",
    desc: "Advanced drone services for road inspection, monitoring, and construction, ensuring faster and more efficient project execution",
    image: "/services/ind7.jpg",
  },
  {
    title: "Mining Survey",
    desc: "Revolutionize mine surveying by capturing high-resolution data for safer and more efficient planning.",
    image: "/services/ind8.jpg",
  },
  {
    title: "Rails Assessment & Monitoring",
    desc: "Enhance railway and metro track inspections by quickly detecting cracks, debris, and structural issues, improving safety and efficiency.",
    image: "/services/ind9.jpg",
  },
  {
    title: "Solar Panel Inspection",
    desc: "Enhance solar panel inspections with thermal imaging, detecting faults early to prevent damage and ensure efficiency.",
    image: "/services/ind10.webp",
  },
  {
    title: "Disaster Management",
    desc: "Enable rapid disaster response with high-resolution mapping, real-time data, and damage assessment.",
    image: "/services/ind11.webp",
  },
  {
    title: "Port Logistics Management",
    desc: "Enhance port operations by improving inventory management, real-time tracking, and warehouse logistics.",
    image: "/services/ind12.jpg",
  },
];

export default function DroneAsAService() {
  return (
    <section className="py-20 bg-white px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Why Choose Drone as a Service?
        </h2>

        {/* Reasons Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">{reason.sub}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {reason.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Agricultural Services */}
        <h2 className="text-3xl font-bold mb-8 text-center">Agricultural Services</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {agriculturalServices.map((item, idx) => (
            <div
              key={idx}
              className="group bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 w-[400px] h-[500px] hover:scale-105 mx-auto"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 h-[250px]">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Services */}
        <h2 className="text-3xl font-bold mb-8 text-center">Industrial Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {industrialServices.map((item, idx) => (
            <div
              key={idx}
              className="group bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 w-[400px] h-[500px] hover:scale-105 mx-auto"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 h-[250px]">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
