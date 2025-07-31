'use client';

import StatsCounter from '@/components/StatsCounter';
import Image from 'next/image';
import Link from 'next/link';

export default function AchievementsSection() {
  return (
    <section className="w-full">
      {/* 🔹 Top Half Image with Overlay CTA */}
      <div className="relative w-full h-[45vh]">
        <Image
          src="/agriculture.jpg" // Replace with actual path
          alt="Drone in Action"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white/10 backdrop-blur-md px-6 py-6 rounded-xl max-w-2xl text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Have a unique requirement?
            </h2>
            <p className="text-base md:text-lg font-medium mb-5">
              Let's build the perfect drone for you.
            </p>
            <Link
              href="/contact" // Update with actual link
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-full transition duration-300"
            >
              Get a Custom Drone
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Stats Section */}
      <div className="bg-gradient-to-b from-[#f8f9fa] to-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT Text */}
          <div>
            <p className="text-sm font-semibold text-cyan-700 uppercase">What we achieved</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Leading the future of UAV technology<br />
              with proven success
            </h2>
            <p className="text-gray-600 text-base">
              Delivering innovative and reliable solutions across industries, MagicMyna is redefining excellence in drone technology.
            </p>
          </div>

          {/* RIGHT Stats */}
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 gap-y-10 border p-10 relative z-10">
            <StatsCounter target={5000} label="Mtrs Trail Tested" />
            <StatsCounter target={15} label="Application" />
            <StatsCounter target={5} label="Models" />
            <StatsCounter target={2} label="Years Rigorous Trials" />
          </div>
        </div>
      </div>
    </section>
  );
}
