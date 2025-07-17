"use client";

import Image from 'next/image';
import Link from 'next/link';

const solutions = [
  {
    title: 'GEO-SPATIAL MAPPING',
    image: '/geo.webp',
    subtitle: 'Land Surveys, GIS, Imaging',
  },
  {
    title: 'HEALTHCARE & EMERGENCY RESPONSE',
    image: '/products/healthcareandemergency.jpg',
    subtitle: 'Delivery & Remote Access Aid',
  },
  {
    title: 'PRECISION AGRICULTURE',
    image: '/products/precision.png',
    subtitle: 'Farm Management & Pest Control',
  },
  {
    title: 'WINDMILL INSPECTION',
    image: '/products/inspection.png',
    subtitle: 'Blade, Tower & Substation Monitoring',
  },
  {
    title: 'UTILITY INSPECTION',
    image: '/solar.jpg',
    subtitle: 'Oil & Gas, Pipelines & Perimeter',
  },
  {
    title: 'POWERLINE STRINGING',
    image: '/products/stringing.webp',
    subtitle: 'Transmission Line Deployment',
  },
];

export default function SolutionPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-black py-16 px-6 font-poppins">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight font-grotesk text-black">
            Mission-Specific Drone Solutions
          </h1>
          <p className="text-lg mb-6 text-black">
            Your one-stop partner for drones, training, and aerial support across industries.
          </p>

          <Link href="/#contact">
            <button className="bg-blue-600 text-white px-6 py-3 text-sm font-semibold rounded hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group border"
          >
            <div className="h-56 w-full overflow-hidden">
              <Image
                src={solution.image}
                alt={solution.title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-black mb-1">{solution.title}</h2>
              <p className="text-sm text-black">{solution.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
