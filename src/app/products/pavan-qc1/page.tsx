'use client';

import Image from 'next/image';

export default function PavanQC1Page() {
  return (
    <section className="min-h-screen bg-white text-black font-poppins py-16 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-grotesk font-bold tracking-wide text-sky-600">Pavan QC1</h1>
        <p className="text-gray-700 mt-2 italic">
          Heavy-Lift Quadcopter for Rugged Industrial Missions
        </p>
      </div>

      {/* Drone Image */}
      <div className="flex justify-center">
        <Image
          src="/products/pavan-qc1.jpg"
          alt="Pavan QC1 Drone"
          width={900}
          height={400}
          className="rounded-xl shadow-md mb-8 object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-lg mb-6 text-center">
        <strong>Pavan QC1</strong> is a heavy-duty quadcopter engineered for large-payload logistics,
        surveillance, and industrial operations. Built for demanding missions, it combines
        strength, stability, and smart systems in one rugged frame.
      </p>

      {/* Highlights */}
      <h2 className="text-2xl font-semibold mb-4 text-center text-sky-600">Core Capabilities</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 max-w-xl mx-auto">
        <li>Supports high-payload delivery across tough terrains</li>
        <li>Customizable mission configurations for different industries</li>
        <li>Strong, weather-resistant build for rugged use</li>
        <li>Compatible with thermal cameras, delivery crates & sensors</li>
        <li>Real-time telemetry, GPS tracking, and return-to-home safety</li>
        <li>
          To explore use cases, email us at{' '}
          <a href="mailto:info@magicmyna.in" className="text-blue-600 underline">
            info@magicmyna.in
          </a>
        </li>
      </ul>
    </section>
  );
}
