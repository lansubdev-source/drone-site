"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function PavanQC1Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20 font-poppins">
      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text">
              PAVAN QC1
            </span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            The Pavan QC1 is a compact and agile drone designed for high-performance aerial tasks across industries.
          </p>
          <p className="mb-4 text-lg">
            Whether it’s inspection, mapping, or delivery, Pavan QC1 delivers reliable results with precision and control in every flight.
          </p>
          <p className="mb-6 text-lg">
            Featuring quick-connect modules, long flight duration, and AI stabilization, it’s engineered for everyday mission versatility.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-blue-600 mb-4 mt-8">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Modular payload attachments", "30+ min flight time", "AI-assisted navigation", "Compact & foldable frame"].map(
              (feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  <span className="text-base text-gray-700">{feature}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Video Card */}
        <div className="flex-1 w-full">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-300 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/drones/pavan-qc1.webp"
              alt="Pavan QC1 Video"
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
              src="https://www.youtube.com/embed/PAVAN_VIDEO_LINK?autoplay=1"
              title="Pavan QC1 Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 🔹 BLOG SECTION */}
      <section className="mt-28 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Insights</h2>
          <p className="text-gray-500 mt-2 text-md max-w-xl mx-auto">
            Learn how Pavan QC1 is powering the next wave of aerial operations in industrial and commercial sectors.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Survey Efficiency Boost",
              img: "/products/survey1.jpg",
              text: "Pavan QC1 enhances terrain and structural mapping with faster, sharper data capture.",
            },
            {
              title: "Compact. Durable. Ready.",
              img: "/services/inspect1.webp",
              text: "Why Pavan QC1 is the go-to UAV for small team operations across industries.",
            },
            {
              title: "Aerial Automation Simplified",
              img: "/services/inspect2.jpeg",
              text: "Integrating with smart analytics for complete mission intelligence."
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
