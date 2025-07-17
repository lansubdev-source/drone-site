'use client';

import React from 'react';

const sections = [
  {
    title: 'Emergency Response Drones',
    description: [
      'Emergency care for patients and trauma support',
      'Response to natural & environmental disasters',
      'Delivery of medicines and essential medical supplies',
    ],
    image: '/healthcare.jpeg',
  },
  {
    title: 'Agricultural Drones',
    description: [
      'Precision agriculture & smart farm management',
      'Monitoring crop yield and health',
      'Detecting pest infestations and affected zones',
      'Seeding operations for large fields',
      'Automated pesticide and fertilizer spraying',
    ],
    image: '/agriculture.jpg',
  },
  {
    title: 'Logistics & Delivery Drones',
    description: [
      'Cargo and parcel deliveries',
      'Rural last-mile delivery services',
      'Critical postal and document transport',
      'Fast courier services in urban and remote areas',
    ],
    image: '/logistics.webp',
  },
];

export default function AlternatingFeatures() {
  return (
    <section className="bg-white text-black font-poppins pt-24">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20 max-w-screen-xl mx-auto"
          >
            {/* Text Section */}
            <div className={`lg:w-1/2 ${isEven ? 'order-1' : 'order-2'}`}>
              <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-black font-grotesk">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-black">
                {section.description.map((point, i) => (
                  <li key={i} className="font-medium">{point}</li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className={`lg:w-1/2 ${isEven ? 'order-2' : 'order-1'}`}>
              <img
                src={section.image}
                alt={section.title}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
