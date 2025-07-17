'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Octa–Med',
    image: '/products/octa-med.png',
    shortSpecs: ['BVLOS Operations', 'Folding Frame', 'Medical Delivery'],
    slug: 'octa-med',
  },
  {
    id: 2,
    name: 'Octa–Agri',
    image: '/products/octa-agri.png',
    shortSpecs: ['18L Tank', 'Electrostatic Nozzles', 'Terrain Following'],
    slug: 'octa-agri',
  },
  {
    id: 3,
    name: 'Pavan QC1',
    image: '/products/pavan-qc1.jpg',
    shortSpecs: ['Heavy Lift', 'Custom Missions', 'Rugged Design'],
    slug: 'pavan-qc1',
  },
  {
    id: 4,
    name: 'Workhorse Pro',
    image: '/products/workhorse-pro.jpg',
    shortSpecs: ['Multi-role', 'Autonomous', 'Launching Soon'],
    slug: 'workhorse-pro',
  },
  {
    id: 5,
    name: 'Prolift & Endura',
    image: '/products/prolift-endura.png',
    shortSpecs: ['Heavy Lift', 'Fixed Wing', 'Coming Soon'],
    slug: 'prolift-endura',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 font-grotesk text-sky-600">
        Our Drone Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-sky-600 transition duration-300 group flex flex-col justify-center items-center text-center space-y-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={280}
              height={180}
              className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="text-lg font-semibold text-sky-600">{product.name}</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              {product.shortSpecs.map((spec, i) => (
                <li key={i}>• {spec}</li>
              ))}
            </ul>
            <Link href={`/products/${product.slug}`}>
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition mt-2">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
