"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimatedDropdownNav from "@/components/AnimatedDropdownNav"; // Adjust if needed

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const heroHeight = heroSection?.offsetHeight || 400;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNavbar(scrollY > heroHeight - 80); // Trigger once past hero
    };

    handleScroll(); // Run on mount in case user refreshes halfway down
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 font-urbanist transition-all duration-300 ${
        showNavbar
          ? "opacity-100 bg-[#0B0F2B] bg-opacity-95 shadow-md backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
          <Image src="/logo.png" alt="Magic Myna Logo" width={100} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium relative">
          <Link href="/" className="hover:text-sky-100">Home</Link>
          <Link href="/about" className="hover:text-sky-100">About</Link>
          <AnimatedDropdownNav />
          <Link href="/drone-as-a-service" className="hover:text-sky-100">Drone as a Service</Link>
          <Link href="/rpto" className="hover:text-sky-100">RPTO</Link>
        </nav>

        {/* Get in Touch Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
