"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function WorkhorseProPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20 font-poppins">
      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text">
              WORKHORSE PRO
            </span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Workhorse Pro is the ultimate industrial-grade drone engineered for heavy-duty payload delivery, large-scale inspections, and all-weather endurance.
          </p>
          <p className="mb-4 text-lg">
            With reinforced carbon-fiber frame, multiple sensor compatibility, and strong lift motors, it excels in logistics and construction sites alike.
          </p>
          <p className="mb-6 text-lg">
            Whether you're transporting critical goods or monitoring infrastructure, Workhorse Pro delivers unmatched reliability and strength.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-yellow-700 mb-4 mt-8">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Heavy-lift capable (10+ kg payload)",
              "IP-rated for harsh weather use",
              "Multi-sensor & LiDAR support",
              "Extended transmission range",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-500 mt-1" />
                <span className="text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video/Image */}
        <div className="flex-1 w-full">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-300 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/drones/workhorse-pro.webp"
              alt="Workhorse Pro Drone"
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

      {/* 🔹 MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/9XaH9f2QkHc?autoplay=1"
              title="Workhorse Pro Drone Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 🔹 BLOG SECTION */}
      <section className="mt-28 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Workforce Technology</h2>
          <p className="text-gray-500 mt-2 text-md max-w-xl mx-auto">
            See how Workhorse Pro is empowering delivery, logistics, and engineering operations worldwide.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Lifting the Load: Drones for Heavy-Duty Tasks",
              img: "/products/logistics1.webp",
              text: "Explore how industrial drones are transforming transport and delivery sectors with power and efficiency.",
            },
            {
              title: "Autonomous Logistics Revolution",
              img: "/services/logi2.webp",
              text: "Cut operational costs and increase reach using drone-based automated supply chain solutions.",
            },
            {
              title: "Drones in Construction and Inspection",
              img: "/services/infra.jpg",
              text: "Streamline complex industrial inspections with AI-powered eyes in the sky.",
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
