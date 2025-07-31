"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedDropdownNav from "@/components/AnimatedDropdownNav";
import { FlipWords } from "@/components/FlipWords";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden font-urbanist text-white"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* Transparent Navbar */}
      <header className="absolute top-0 left-0 w-full z-30">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-white flex items-center gap-2"
          >
            <Image src="/logo.png" alt="Magic Myna Logo" width={100} height={40} />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-white font-medium relative">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <AnimatedDropdownNav />
            <Link href="/DronePage" className="hover:text-blue-600">
              Drone as a Service
            </Link>
            <Link href="/rpto" className="hover:text-blue-600">RPTO</Link>
          </nav>

          {/* Get in Touch */}
          <Link
            href="/contact"
            className="hidden md:inline-block px-5 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            Get in Touch
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-2 tracking-wide text-center"
        >
          <span className="text-white">Aero Mobility solutions for{" "}</span>
          <span
            className="inline-block align-middle text-sky-400"
            style={{ display: "inline-block", width: "10ch", textAlign: "left" }}
          >
            <FlipWords
              words={["Logistics", "Agriculture", "Defense"]}
              duration={3000}
              className="text-sky-400"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-2xl text-white font-medium mb-8"
        >
          Explore vivid
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Link
            href="/ProductsPage"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Our Products
          </Link>

          <Link
            href="#video"
            className="px-6 py-3 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            ▶ Watch Video
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
