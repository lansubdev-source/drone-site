// AgriculturePage.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Revolutionizing agriculture with innovation, precision, and endurance.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          MagicMyna Agricultural Drones bring precision, efficiency, and innovation to the
          forefront of modern farming. Our drones are engineered to handle a wide range of
          agricultural applications, helping farmers optimize their operations and achieve
          better outcomes.
        </p>
        <div className="mt-10">
          <Image
            src="/products/agri.jpg"
            alt="Agriculture Drone"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-8 py-20 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cultivating the future of farming
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🎯 Precision application</h3>
            <p>Achieve targeted spraying and reduce wastage.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛡️ Durable and reliable design</h3>
            <p>Built to withstand the rigors of agricultural environments.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛬 Safer design</h3>
            <p>Designed with safety sensors & return-to-launch features.</p>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="relative px-8 py-28 bg-black text-white">
        <Image
          src="/drones/hexa-agri-pro.webp"
          alt="Hexa Agri Pro"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Hexa Agri Pro</h2>
          <ul className="text-lg space-y-4">
            <li>
              <strong>Indigenous excellence:</strong> Designed with local components for superior
              performance.
            </li>
            <li>
              <strong>Custom-built for farming:</strong> Durable frame and precision design optimized
              for agricultural use.
            </li>
            <li>
              <strong>Long-lasting performance:</strong> High endurance for extended operations and
              better efficiency.
            </li>
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            Whether you're improving crop yield, optimizing resource use, or transitioning toward
            sustainable farming, MagicMyna Agricultural Drones empower you to cultivate success from
            the sky.
          </p>
          <Link
            href="/products/hexa-agri-pro"
            className="inline-block mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
