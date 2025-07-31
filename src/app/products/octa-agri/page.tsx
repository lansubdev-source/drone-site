// ✅ Octa Agri
'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function OctaAgriPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20 font-poppins">
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-500 to-lime-600 text-transparent bg-clip-text">
              OCTA AGRI
            </span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Designed for high-efficiency agricultural spraying, Octa Agri offers superior payload handling and wide coverage.
          </p>
          <p className="mb-4 text-lg">
            Supports precision GPS navigation, multi-nozzle configurations, and durable airframe for tough fieldwork.
          </p>
          <p className="mb-6 text-lg">
            Ideal for large farms seeking smart and scalable drone solutions.
          </p>

          <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Multi-nozzle spraying system',
              'Extended flight range',
              'High payload capacity',
              'Resistant to dust and water',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span className="text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-300 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/drones/octa-agri.webp"
              alt="Octa Agri Video"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/2KcU3vV4jVg?autoplay=1"
              title="Octa Agri Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}


// The other three product files (OctaMedPage, PavanQC1Page, WorkhorseProPage) are next. Let me know when ready to continue.
