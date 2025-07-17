'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-800 px-6 py-20 font-poppins">
      
      {/* 🔹 Innovation Section (Top Cards) */}
      {/* 🔹 Innovation Section (Top Cards with Overlaid Text) */}
<section className="mb-20">
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <h2 className="text-4xl font-semibold mb-4 text-gray-800">
      Standing at the Forefront of Innovation
    </h2>
    <p className="text-gray-600 text-lg">
      As we explore new technology, we push the boundaries of what’s possible, driving progress through continuous innovation.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <motion.div
      className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src="/products/octamedabout.png"
        alt="Octa-Med Drone"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
      <div className="absolute bottom-0 p-6 text-white z-10">
        <p className="text-sm text-gray-200">Engineering, Science & Technology</p>
        <h3 className="text-xl font-semibold">Octa-Med Receives Industry Recognition</h3>
        <a href="/products/octa-med" className="text-sky-300 underline mt-2 inline-block">Learn More →</a>
      </div>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <Image
        src="/products/pavanabout.png"
        alt="Pavan Drone"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
      <div className="absolute bottom-0 p-6 text-white z-10">
        <p className="text-sm text-gray-200">Industry Insight Report</p>
        <h3 className="text-xl font-semibold">Pavan QC1 in National Agri Projects</h3>
        <a href="/products/pavan-qc1" className="text-sky-300 underline mt-2 inline-block">Learn More →</a>
      </div>
    </motion.div>
  </div>
</section>

      {/* 🔹 Taglines */}
      <section className="text-center mb-16">
        <motion.h2
          className="text-3xl font-bold text-sky-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          DSA &nbsp;|&nbsp; Drone for Societal Applications
        </motion.h2>
        <motion.h2
          className="text-3xl font-bold text-sky-600 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          D4E &nbsp;|&nbsp; Drone for Enterprise
        </motion.h2>
      </section>

      {/* 🔹 Company Intro */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Magic Myna leverages its professional expertise in aeromobility to deliver innovative drone-based products and services across multiple sectors. Backed by CSIR-NAL and supported by a team of engineering and management professionals, we are shaping India’s unmanned aviation future in collaboration with the Drone Federation of India.
        </motion.p>
      </section>

      {/* 🔹 Founders Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold text-center text-sky-600 mb-10">
          Founders of Magic Myna
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'SUNIL SOMAN NAIR',
              role: 'Co-Founder',
              domain: 'Operations and Mobility Solutions',
            },
            {
              name: 'SANJU KALAM',
              role: 'Co-Founder',
              domain: 'Technology and R&D',
            },
            {
              name: 'AMIN SULAIMAN',
              role: 'Co-Founder',
              domain: 'Strategy and International Operations',
            },
            {
              name: 'ZUJAR PARDIWALA',
              role: 'Co-Founder',
              domain: 'Finance and Strategic Partnerships',
            },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold text-lg text-gray-800">{person.name}</h4>
              <p className="text-sm text-gray-500">{person.role}</p>
              <p className="text-sm text-sky-600 mt-2">{person.domain}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Vision */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          To develop and deploy technologies for social good and democratize their use and applications.
        </p>
      </section>
    </main>
  );
}
