'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Varuna6XPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20 font-poppins">
      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            <span className="bg-gradient-to-r from-sky-500 to-cyan-600 text-transparent bg-clip-text">
              VARUNA 6X
            </span>
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Varuna 6X is built for demanding maritime and emergency response operations, offering extended flight time and high wind resistance.
          </p>
          <p className="mb-4 text-lg">
            With 6 high-efficiency rotors and a rugged airframe, it's capable of delivering critical payloads and conducting surveillance across hostile terrain.
          </p>
          <p className="mb-6 text-lg">
            Its smart flight control and waterproof design make it a top-tier performer in unpredictable environments.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-sky-700 mb-4 mt-8">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Marine-grade water resistance",
              "Long-range secure communication",
              "Thermal & night vision support",
              "Autonomous emergency response modes"].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-sky-600 mt-1" />
                <span className="text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail Video Section */}
        <div className="flex-1 w-full">
          <div
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl border border-gray-300"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src="/drones/varuna-6x.webp"
              alt="Varuna 6X Thumbnail"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white text-red-600 p-4 rounded-full shadow-lg">
                ▶
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showVideo && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowVideo(false)}
              >
                <motion.div
                  className="w-[90%] md:w-[70%] aspect-video"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/UNHOvd974Co?autoplay=1"
                    title="Varuna 6X Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 🔹 BLOG SECTION */}
<section className="mt-28 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Blogs</h2>
    <p className="text-gray-500 mt-2 text-md max-w-xl mx-auto">
      Insights into industrial drone logistics and intelligent delivery.
    </p>
  </div>

  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: 'Drone Logistics: The Next Frontier',
        img: '/products/logistics.webp',
        text: 'Discover how drones like Varuna 6X are transforming last-mile delivery.',
      },
      {
        title: 'Autonomous Delivery with UAVs',
        img: '/products/uav.jpg',
        text: 'Explore the efficiency of autonomous aerial delivery systems for packages and medical supplies.',
      },
      {
        title: 'Varuna 6X in Action',
        img: '/drones/varuna-6x.webp',
        text: 'Real-world use cases of Varuna 6X in industrial and remote delivery operations.',
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
