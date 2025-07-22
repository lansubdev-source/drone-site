"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

const drones = [
  {
    name: "Hexa Agri Pro",
    caption: "Precision agriculture",
    image: "/drones/hexa-agri-pro.webp",
    href: "/products/hexa-agri-pro",
  },
  {
    name: "Octa Plus Extreme",
    caption: "Heavy-duty industrial",
    image: "/drones/octa-plus-extreme.jpg",
    href: "/products/octa-plus-extreme",
  },
  {
    name: "Munitrix 4",
    caption: "Advanced surveillance",
    image: "/drones/munitrix-4.jpg",
    href: "/products/munitrix-4",
  },
  {
    name: "Varuna 6x",
    caption: "Tactical multi‑role",
    image: "/drones/varuna-6x.webp",
    href: "/products/varuna-6x",
  },
];

export default function DroneFleet() {
  return (
    <section className="py-20 bg-white text-black font-urbanist">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Drone Fleet</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore our versatile drone solutions tailored for agriculture, defense, and logistics.
        </p>

        <Marquee className="max-w-full" speed={40} pauseOnHover repeat={6}>
          {drones.map((drone, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[320px] mx-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={drone.image}
                alt={drone.name}
                width={400}
                height={250}
                className="w-full h-48 object-contain rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">{drone.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{drone.caption}</p>
                <Link
                  href={drone.href}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
