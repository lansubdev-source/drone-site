'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryItems = [
  { src: '/gallery/team1.jpg', colSpan: 'col-span-1', height: 'h-80' },
  { src: '/gallery/team2.jpg', colSpan: 'col-span-1', height: 'h-60' },
  { src: '/gallery/team3.jpg', colSpan: 'col-span-1 md:col-span-2', height: 'h-96' },
  { src: '/gallery/team4.jpg', colSpan: 'col-span-1', height: 'h-64' },
  { src: '/gallery/team5.jpg', colSpan: 'col-span-1', height: 'h-60' },
  { src: '/gallery/team6.jpg', colSpan: 'col-span-1', height: 'h-72' },
  { src: '/gallery/team7.jpg', colSpan: 'col-span-1 md:col-span-2', height: 'h-80' },
  { src: '/gallery/team8.jpg', colSpan: 'col-span-1', height: 'h-64' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#eaf6fb] py-20 px-4 font-poppins text-gray-800">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm uppercase text-gray-500">Meet the Team</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Behind every <span className="text-sky-700">flight and innovation</span> stands a team of experts
            </h1>
            <p className="text-gray-600 max-w-xl">
              Our journey is powered by a crew of visionaries, engineers, and operators who bring
              excellence to every mission. This gallery celebrates their expertise and milestones.
            </p>
          </div>
          <div className="hidden md:block text-sm text-gray-600">
            With years of aerial experience, global recognitions, and state-of-the-art drone
            technology, we’re proud of our achievements — and the people who made them possible.
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map(({ src, colSpan, height }, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${colSpan} ${height} bg-white rounded-xl overflow-hidden shadow-md`}
            >
              <Image
                src={src}
                alt={`Team Photo ${index + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
