'use client';

import Image from 'next/image';

export default function OctaMedPage() {
  return (
    <section className="min-h-screen bg-white text-black font-poppins py-16 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-grotesk font-bold tracking-wide text-sky-600">Octa–Med</h1>
        <p className="text-gray-700 mt-2 italic">BVLOS Drone for Emergency & Medical Delivery</p>
      </div>

      {/* Drone Image */}
      <div className="flex justify-center">
        <Image
          src="/products/octa-med.png"
          alt="Octa-Med Drone"
          width={900}
          height={400}
          className="rounded-xl shadow-md mb-8 object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-lg mb-6 text-center">
        <strong>Octa–Med</strong> is purpose-built for Beyond Visual Line of Sight (BVLOS) missions,
        particularly in time-critical emergency situations like medicine delivery, blood transport,
        or disaster relief.
      </p>

      {/* Highlights */}
      <h2 className="text-2xl font-semibold mb-4 text-center text-sky-600">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 max-w-xl mx-auto">
        <li>Certified for BVLOS operations under DGCA norms</li>
        <li>Lightweight folding frame for quick deployment</li>
        <li>Payload bay optimized for medical transport</li>
        <li>Secure, temperature-controlled delivery module</li>
        <li>Real-time telemetry and mission monitoring</li>
        <li>
          For inquiries, contact us at{' '}
          <a href="mailto:info@magicmyna.in" className="text-blue-600 underline">
            info@magicmyna.in
          </a>
        </li>
      </ul>
    </section>
  );
}
