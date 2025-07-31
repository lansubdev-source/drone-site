'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PowerlinePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering efficient powerline stringing and inspections.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          MagicMyna drones enhance power infrastructure with safe, high-precision stringing,
          reducing risks and downtime during large-scale electrical grid operations.
        </p>
        <div className="mt-10">
          <Image
            src="/solutions/powerline.jpg"
            alt="Powerline Drone"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-8 py-20 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Revolutionizing power grid deployment
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">⚡ Precision stringing</h3>
            <p>String cables over vast terrains with pinpoint accuracy.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌐 Remote inspection</h3>
            <p>Identify wear and corrosion before outages happen.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛰️ Autonomous flying</h3>
            <p>AI-backed routing for efficient energy sector deployment.</p>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="relative px-8 py-28 bg-black text-white">
        <Image
          src="/drones/workhorse-pro.webp"
          alt="Workhorse Pro Drone"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Workhorse Pro</h2>
          <ul className="text-lg space-y-4">
            <li><strong>Heavy-duty payloads:</strong> Designed for industrial-grade stringing jobs.</li>
            <li><strong>Precision control:</strong> Multi-GNSS & anti-drift stabilization systems.</li>
            <li><strong>Rugged endurance:</strong> Operates in extreme weather conditions.</li>
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            From powerline setup to real-time inspections, Workhorse Pro empowers utility companies
            with dependable, intelligent drone support that boosts productivity.
          </p>
          <Link
            href="/products/workhorse-pro"
            className="inline-block mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
