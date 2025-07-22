'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function Munitrix4Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20 font-poppins">
      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              MUNITRIX 4
            </span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Designed for precision surveillance and monitoring, the Munitrix 4 is equipped with a high-resolution camera system, real-time data streaming, and long flight time capabilities.
          </p>
          <p className="mb-4 text-lg">
            Ideal for defense, border patrolling, and infrastructure security, it delivers unmatched aerial intelligence.
          </p>
          <p className="mb-6 text-lg">
            Stay ahead with strategic eyes in the sky—engineered for reliability, clarity, and control.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 mt-8">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'HD thermal + optical dual camera system',
              'Secure real-time video transmission',
              'Flight endurance up to 55 minutes',
              'Wind-resistant and stealth design',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-indigo-600 mt-1" />
                <span className="text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Card */}
        <div className="flex-1 w-full">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-300 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/drones/munitrix-4.jpg"
              alt="Munitrix 4 Video"
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/KYwn1fSKdOg?autoplay=1"
              title="Munitrix 4 Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 🔹 BLOG SECTION */}
      <section className="mt-28 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Blogs</h2>
          <p className="text-gray-500 mt-2 text-md max-w-xl mx-auto">
            Insights into surveillance tech and tactical drone applications.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Drones in Modern Surveillance',
              img: '/surveillance.webp',
              text: 'Explore how surveillance drones are redefining security and threat detection.',
            },
            {
              title: 'Border Patrol with UAVs',
              img: '/inspection.jpg',
              text: 'Using drones to monitor and secure critical borders with efficiency.',
            },
            {
              title: 'Aerial Intelligence Systems',
              img: '/products/aerial.jpg',
              text: 'An in-depth look at drone-based intelligence in real-time operations.',
            },
          ].map((blog, i) => (
            <div
              key={i}
              className="rounded-xl shadow-lg border border-gray-300 overflow-hidden hover:shadow-xl transition duration-300 bg-white"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
