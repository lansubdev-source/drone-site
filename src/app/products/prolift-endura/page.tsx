'use client';

import Image from 'next/image';

export default function ProliftEnduraPage() {
  return (
    <section className="min-h-screen bg-white text-black font-poppins py-16 px-6 max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-grotesk font-bold tracking-wide text-sky-600">Prolift & Endura</h1>
        <p className="text-gray-700 mt-2 italic">
          Heavy Lift Drone & Fixed-Wing VTOL – Coming Soon
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/products/prolift-endura.png"
          alt="Prolift & Endura Drones"
          width={900}
          height={400}
          className="rounded-xl shadow-md mb-8 object-cover"
        />
      </div>

      <p className="text-lg mb-6 text-center">
        The <strong>Prolift</strong> series represents our heavy-lift drones for logistics and
        industrial applications, while <strong>Endura</strong> is our upcoming long-range VTOL
        platform offering efficiency and endurance for large area surveillance.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center text-sky-600">Product Highlights</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 max-w-xl mx-auto">
        <li>Coming Soon – stay tuned for updates</li>
        <li>Prolift: High-payload drone for delivery & industrial tasks</li>
        <li>Endura: Fixed-wing VTOL for endurance and speed</li>
        <li>Advanced telemetry & battery management systems</li>
        <li>
          To know more, write to us at{' '}
          <a href="mailto:info@magicmyna.in" className="text-blue-600 underline">
            info@magicmyna.in
          </a>
        </li>
      </ul>
    </section>
  );
}
