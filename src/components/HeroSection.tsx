"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat font-poppins"
      style={{ backgroundImage: "url('/hero1.png')" }}
    >
      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex justify-between items-center">
        {/* Left Side: Logo + Nav */}
        <div className="flex items-center gap-12">
          {/* Logo Image */}
          <Link href="/home">
            <Image
              src="/logo.png"
              alt="Magic Myna Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-9 text-base font-semibold text-white">
            <Link href="/#home" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/careers" className="hover:text-gray-300 transition">Careers</Link>
            <Link href="/solutions" className="hover:text-gray-300 transition">Solutions</Link>
            <Link href="/#services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/products" className="hover:text-gray-300 transition">Products</Link>
            <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 pt-72 text-white">
        <h1 className="font-inter text-5xl font-extrabold tracking-tight">
          MAGIC MYNA
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium font-dji">
          Explore Vivid
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/products">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Buy Now
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
