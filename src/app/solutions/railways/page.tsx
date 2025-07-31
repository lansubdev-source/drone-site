'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RailwaysPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Enhancing railway safety and inspection with advanced aerial vision.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Our drone solutions redefine railway infrastructure maintenance, offering real-time
          inspection, tracking, and surveillance for uninterrupted railway operations.
        </p>
        <div className="mt-10">
          <Image
            src="/solutions/railways.jpg"
            alt="Railway Drone"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-8 py-20 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Modernizing rail infrastructure monitoring
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">📸 High-res imaging</h3>
            <p>Detect faults, obstructions, and track anomalies with precision.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🕵️ Real-time monitoring</h3>
            <p>Surveillance for theft prevention and emergency response.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">📡 Autonomous flight</h3>
            <p>Automated patrols on predefined tracks with AI-powered alerts.</p>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="relative px-8 py-28 bg-black text-white">
        <Image
          src="/drones/pavan-qc1.webp"
          alt="Pavan QC1 Drone"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pavan QC1</h2>
          <ul className="text-lg space-y-4">
            <li><strong>Autonomous inspection:</strong> Track linear assets with zero human risk.</li>
            <li><strong>Intelligent path planning:</strong> Adjusts for terrain and weather changes.</li>
            <li><strong>Secure data capture:</strong> Cloud-sync capabilities with offline storage.</li>
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            Pavan QC1 is built for critical infrastructure like railways, delivering unmatched
            efficiency in surveillance, inspection, and operational continuity.
          </p>
          <Link
            href="/products/pavan-qc1"
            className="inline-block mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
