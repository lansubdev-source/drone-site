'use client';

import {
  Facebook,
  Linkedin,
  Youtube,
  X,
  Mail,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white text-sm font-poppins">
      {/* 🔹 Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* 🔸 Logo & Address */}
        <div>
          <img src="/logo.png" alt="MagicMyna" className="w-36 mb-4" />
          <p className="text-gray-400 leading-relaxed">
            GoodWorks Infinity Park,<br />
            Tower – 1, 92/A, 2nd Main Road, Electronic City,<br />
            Phase – 1, Bengaluru, Karnataka, 560100
          </p>
          <div className="flex gap-4 mt-5 text-cyan-400">
            <a
              href="https://www.facebook.com/MagicMyna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-transform hover:scale-110" />
            </a>
            <a
              href="https://www.youtube.com/channel/UClrkHnAyBVnD5-1htHft-jA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <X className="w-5 h-5 cursor-pointer hover:text-white transition-transform hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/company/magicmyna-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-transform hover:scale-110" />
            </a>
            <a
              href="https://www.youtube.com/channel/UClrkHnAyBVnD5-1htHft-jA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* 🔸 Company Links */}
        <div>
          <h3 className="text-base font-semibold uppercase mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* 🔸 Products */}
        <div>
          <h3 className="text-base font-semibold uppercase mb-4 text-white">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/products/hexa-agri-pro" className="hover:text-white">Hexa Agri Pro</Link></li>
            <li><Link href="/products/octa-plus-extreme" className="hover:text-white">Octa Plus Xtreme</Link></li>
            <li><Link href="/products/munitirx-4x" className="hover:text-white">Munitrix 4X</Link></li>
            <li><Link href="/products/varuna-6x" className="hover:text-white">Varuna 6X</Link></li>
          </ul>
        </div>

        {/* 🔸 Solutions */}
        <div>
          <h3 className="text-base font-semibold uppercase mb-4 text-white">Solutions</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/solutions/agriculture" className="hover:text-white">Agriculture</Link></li>
            <li><Link href="/solutions/strategic" className="hover:text-white">Strategic</Link></li>
            <li><Link href="/solutions/logistics" className="hover:text-white">Logistics</Link></li>
          </ul>
        </div>

        {/* 🔸 Contact Info */}
        <div>
          <h3 className="text-base font-semibold uppercase mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <Mail size={16} />
              <a href="mailto:sales@magicmyna.in" className="hover:underline">sales@magicmyna.in</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} />
              <a href="mailto:droneservices@magicmyna.in" className="hover:underline">droneservices@magicmyna.in</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} />
              <a href="tel:+917418617771" className="hover:underline">+91 741 861 7771</a>
            </li>
            <li>Mon–Sat: 09:30am–06:00pm</li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} MagicMyna. All rights reserved.
      </div>
    </footer>
  );
}
