'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function StrategicPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Robust. Rugged. Reliable.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Strategic operations demand cutting-edge technology and unmatched precision. At MagicMyna, we develop advanced UAV solutions for defense, border patrol, and disaster management—built to operate in the most critical, high-stakes environments.
        </p>
        <div className="mt-10">
          <Image
            src="/products/strategic.jpg"
            alt="Strategic Drone"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-8 py-20 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tactical capabilities – trusted in the toughest conditions
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🎯 Precision intelligence</h3>
            <p>Multi-sensor payloads for reconnaissance and situational awareness.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛠️ Mission ready</h3>
            <p>Customizable configurations for diverse and evolving mission objectives.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">🇮🇳 Indigenous edge</h3>
            <p>High indigenization ensures supply chain security and scalability.</p>
          </div>
        </div>
      </section>

      {/* Featured Product Overlay Section */}
      <section className="relative px-8 py-28 bg-black text-white">
        <Image
          src="/products/strategic1.webp"
          alt="Strategic Drone Overlay"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Engineered for Excellence</h2>
          <ul className="text-lg space-y-4">
            <li>
              <strong>Purpose-built:</strong> From surveillance to tactical strike support, our UAVs deliver.
            </li>
            <li>
              <strong>Technology forward:</strong> Integrating autonomy, AI, and real-time data systems.
            </li>
            <li>
              <strong>National mission aligned:</strong> Designed and manufactured to support India’s defense goals.
            </li>
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            Our strategic drone platforms are not only reliable and intelligent but also fully aligned with the vision of self-reliance and modern warfare readiness.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
