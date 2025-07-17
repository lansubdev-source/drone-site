'use client';

import React from 'react';

const useCases = [
  { title: 'Agriculture Monitoring', image: 'usecases/daas.jpg' },
  { title: 'Infrastructure Inspection', image: '/usecases/infrastructure.jpg' },
  { title: 'Surveillance & Security', image: '/usecases/security.webp' },
  { title: 'Disaster Management', image: '/usecases/disaster.webp' },
];

export default function DroneAsAService() {
  return (
    <div className="bg-white text-black font-poppins">
      {/* Header Video Section */}
      <section id="services" className="relative h-[600px] w-full overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/dronvid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-grotesk">
            Drone as a Service
          </h1>
          <p className="text-lg mt-4 max-w-2xl">
            Transforming industries through aerial intelligence and automated workflows.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-black-800 text-3xl font-semibold mb-4">About Our Service</h2>
        <p className="text-black text-lg">
          Our Drone-as-a-Service (DaaS) platform offers a complete solution — from mission
          planning and data capture to processing and insights. Whether you're in
          agriculture, energy, construction, or security, we deliver drone-based
          efficiency without the hassle of owning or operating one.
        </p>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-black-800 text-2xl font-bold text-center mb-10">Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg shadow overflow-hidden"
            >
              <img src={useCase.image} alt={useCase.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900">{useCase.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
