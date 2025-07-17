'use client';

import Image from 'next/image';

export default function OctaAgriPage() {
  return (
    <section className="min-h-screen bg-white text-black font-poppins py-16 px-6 max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-grotesk font-bold tracking-wide text-sky-600">Octa–Agri</h1>
        <p className="text-gray-700 mt-2 italic">Precision Agriculture & Pesticide Spraying</p>
      </div>

      <Image
        src="/products/octa-agri.png"
        alt="Octa-Agri Drone"
        width={900}
        height={400}
        className="rounded-xl shadow-md mb-8 object-cover w-full"
      />

      <p className="text-lg mb-6">
        <strong>Magic Myna Octa–Agri</strong> is a Kisan Drone specially designed for efficient,
        large-scale agricultural operations. From smart spraying to terrain-aware navigation,
        it empowers farmers with precision tools that save time and resources.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-sky-600">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>18L capacity tank for extended spraying missions</li>
        <li>3 electrostatic nozzles for high-efficiency droplet delivery</li>
        <li>DGCA-NPNT and Digital Sky compliant</li>
        <li>360° collision avoidance system</li>
        <li>Lidar-based terrain following</li>
        <li>Geo-fencing and flight permit via MoCA under Rule 48</li>
        <li>Max flow rate: 1.5 L/min</li>
        <li>
          To know more, write to us at <a href="mailto:info@magicmyna.in" className="text-sky-600 underline">info@magicmyna.in</a>
        </li>
      </ul>
    </section>
  );
}
