'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/drones/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold max-w-3xl"
        >
          Drone as a Service (DaaS)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-white/90 text-lg md:text-xl max-w-xl"
        >
          Cutting-edge aerial solutions for precision, efficiency, and safety.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Explore Services
        </motion.button>
      </div>

      {/* 🔹 Dark Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-5" />
    </section>
  );
}
