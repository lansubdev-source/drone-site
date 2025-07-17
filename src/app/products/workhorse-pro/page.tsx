'use client';

import Image from 'next/image';

export default function WorkhorseProPage() {
  return (
    <section className="min-h-screen bg-white text-black font-poppins py-16 px-6 max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-grotesk font-bold tracking-wide text-sky-600">Workhorse Pro</h1>
        <p className="text-gray-700 mt-2 italic">Multipurpose Quadcopter – Launching Soon</p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/products/workhorse-pro.jpg"
          alt="Workhorse Pro Drone"
          width={900}
          height={400}
          className="rounded-xl shadow-md mb-8 object-cover"
        />
      </div>

      <p className="text-lg mb-6 text-center">
        <strong>Workhorse Pro</strong> is a versatile, next-gen quadcopter designed for multi-role operations
        across industry sectors. Engineered for adaptability and reliability, it's your go-to drone for
        demanding use cases.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center text-sky-600">Features & Info</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 max-w-xl mx-auto">
        <li>Launching Soon</li>
        <li>Customizable Payload Bay</li>
        <li>AI-assisted autonomous flight support</li>
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
