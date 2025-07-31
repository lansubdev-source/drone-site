'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: 'Octa - Agri', path: 'octa-agri', image: '/products/octa-agri.png' },
  { name: 'Octa - Med', path: 'octa-med', image: '/products/octa-med.png' },
  { name: 'Pavan QC1', path: 'pavan-qc1', image: '/products/pavan-qc1.jpg' },
  { name: 'Workhorse Pro', path: 'workhorse-pro', image: '/products/workhorse-pro.jpg' },
  { name: 'Hexa Agri Pro', path: 'hexa-agri-pro', image: '/drones/hexa-agri-pro.webp' },
  { name: 'Octa Plus Extreme', path: 'octa-plus-extreme', image: '/drones/octa-plus-extreme.jpg' },
  { name: 'Munitrix 4', path: 'munitrix-4', image: '/drones/munitrix-4.jpg' },
  { name: 'Varuna 6x', path: 'varuna-6x', image: '/drones/varuna-6x.webp' },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 font-poppins text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Our Drone Lineup
      </motion.h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.path}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
          >
            <div className="relative w-full h-44">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-[120px]">
              <h2 className="text-base font-semibold text-gray-800">{product.name}</h2>
              <Link
                href={`/products/${product.path}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition mt-2"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
