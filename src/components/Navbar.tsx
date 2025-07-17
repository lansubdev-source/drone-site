"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (pathname === "/home" || pathname === "/") {
        setShow(scrollY > 10); // Show navbar once scroll begins
      } else {
        setShow(true); // Always show on other pages
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (!show) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0a2540]/90 text-white shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-10">
        <Link href="/home">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
        <div className="flex gap-6 font-medium text-sm sm:text-base">
          <Link href="/#home" className="hover:text-gray-300">Home</Link>
          <Link href="/careers" className="hover:text-gray-300">Careers</Link>
          <Link href="/solutions" className="hover:text-gray-300">Solutions</Link>
          <Link href="/#services" className="hover:text-gray-300">Services</Link>
          <Link href="/products" className="hover:text-gray-300 transition">Products</Link>
           <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
