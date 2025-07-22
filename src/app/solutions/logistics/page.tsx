// LogisticsPage.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Redefining delivery solutions: high altitudes, critical missions, and beyond.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At MagicMyna, we specialize in innovative logistic drone solutions designed to excel where
          conventional methods fall short. Whether it’s navigating treacherous terrains, reaching
          isolated areas, or delivering crucial supplies during emergencies—our drones are engineered
          for precision and reliability.
        </p>
        <div className="mt-10">
          <Image
            src="/products/logistics.webp"
            alt="Logistics Drone"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-8 py-20 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Logistics solutions – for critical missions
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚁 Enhanced stability</h3>
            <p>Carry sensitive payloads even under extreme conditions.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🎯 Versatile applications</h3>
            <p>Multiple payload options for mission-specific needs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">⚡ High endurance</h3>
            <p>Built to handle prolonged flights and critical operations.</p>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="relative px-8 py-28 bg-black text-white">
        <Image
          src="/products/log.webp"
          alt="Octa Plus Extreme"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Octa Plus Extreme</h2>
          <ul className="text-lg space-y-4">
            <li>
              <strong>Indigenous excellence:</strong> Designed with high local content for superior
              dependability.
            </li>
            <li>
              <strong>Engineered for logistics:</strong> Built to meet challenging delivery
              requirements in real-world terrain.
            </li>
            <li>
              <strong>Powerful performance:</strong> Withstand harsh environments while maintaining
              precision.
            </li>
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            From emergency supplies to strategic payloads, the Octa Plus Extreme sets a new
            benchmark in logistics drone performance—empowering missions that demand accuracy and
            resilience.
          </p>
          <Link
            href="/products/octa-plus-extreme"
            className="inline-block mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
