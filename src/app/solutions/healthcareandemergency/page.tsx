'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HealthcareEmergencyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Swift aerial support for healthcare & emergency response.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          MagicMyna drones ensure rapid delivery of essential medical supplies and emergency
          assistance, reaching even the most remote locations when every second counts.
        </p>
        <div className="mt-10">
          <Image
            src="/solutions/healthcare.jpg"
            alt="Healthcare Drone"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-8 py-20 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Delivering life-saving solutions from the sky
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚑 Rapid deployment</h3>
            <p>Ensure quick delivery of medicines, vaccines & blood units.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛰️ Remote accessibility</h3>
            <p>Reach disaster-hit or inaccessible regions in record time.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🔋 Reliable operation</h3>
            <p>Long-range drones with safety-first design and autonomous navigation.</p>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="relative px-8 py-28 bg-black text-white">
        <Image
          src="/drones/octa-med.webp"
          alt="Octa Med Drone"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Octa Med</h2>
          <ul className="text-lg space-y-4">
            <li><strong>Healthcare-first design:</strong> Custom payload options for medical gear.</li>
            <li><strong>Night ops ready:</strong> Equipped with navigation lights and thermal sensors.</li>
            <li><strong>Zero delay:</strong> Real-time communication and precise delivery coordinates.</li>
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            Octa Med is a game-changer for emergency medicine, enabling faster and more efficient 
            response during crises, epidemics, and disaster recovery missions.
          </p>
          <Link
            href="/products/octa-med"
            className="inline-block mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
