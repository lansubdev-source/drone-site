'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function OctaPlusExtremePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20 font-poppins">
      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              OCTA PLUS EXTREME
            </span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Octa Plus Extreme sets the benchmark in industrial-grade drone performance — purpose-built for demanding applications like surveillance, mapping, and delivery.
          </p>
          <p className="mb-4 text-lg">
            With superior payload capacity and advanced control systems, it’s engineered to thrive in high-stakes operations.
          </p>
          <p className="mb-6 text-lg">
            From rapid deployment to long-endurance missions, Octa Plus Extreme is built to dominate the skies.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-purple-700 mb-4 mt-8">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Up to 30 kg payload capacity", "Precision GNSS navigation", "Real-time telemetry and diagnostics", "Modular build for multipurpose deployment"].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-purple-500 mt-1" />
                <span className="text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Card with Play Button */}
        <div className="flex-1 w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-300">
            <Image
              src="/drones/octa-plus-extreme.jpg"
              alt="Octa Plus Extreme Video"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
            <button
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 Modal YouTube Player */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-4xl w-full">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/DzyJvzputKg?autoplay=1"
                title="Octa Plus Extreme Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-1 hover:bg-black"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* 🔹 BLOG SECTION */}
      <section className="mt-28 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Blogs</h2>
          <p className="text-gray-500 mt-2 text-md max-w-xl mx-auto">
            Stay ahead with insights, case studies, and breakthroughs in high-performance drone applications.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[{
            title: "High-Endurance Drones in Surveillance",
            img: "/products/high.jpg",
            text: "How drones like Octa Plus Extreme are elevating security operations in critical infrastructure monitoring."
          }, {
            title: "Payload Flexibility Explained",
            img: "/products/payload.jpeg",
            text: "Understand the significance of modular payload support in logistics, agriculture, and beyond."
          }, {
            title: "Building Future-Ready UAV Fleets",
            img: "/products/uav.jpg",
            text: "Discover how organizations are scaling drone programs with reliable, mission-ready platforms."
          }].map((blog, i) => (
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
