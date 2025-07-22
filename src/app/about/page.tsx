'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Carousel3D = dynamic(() => import('@/components/Carousel3D'), { ssr: false });

const carouselItems = [
  {
    id: 1,
    title: 'Hexa Agri Pro',
    brand: 'Agriculture',
    description: 'Optimized for precision farming and sustainable agriculture.',
    tags: ['6-axis', 'Spraying', 'AI-guided'],
    imageUrl: '/drones/hexa-agri-pro.webp',
    link: '/products/hexa-agri-pro',
  },
  {
    id: 2,
    title: 'Octa Plus Extreme',
    brand: 'Logistics',
    description: 'Heavy-lift logistics drone designed for remote deliveries.',
    tags: ['8-rotor', 'Payload', 'Secure'],
    imageUrl: '/drones/octa-plus-extreme.jpg',
    link: '/products/octa-plus-extreme',
  },
  {
    id: 3,
    title: 'Munitrix 4',
    brand: 'Defence',
    description: 'Reliable UAV for surveillance and tactical missions.',
    tags: ['Night Vision', 'Stealth', '4-rotor'],
    imageUrl: '/drones/munitrix-4.jpg',
    link: '/products/munitrix-4',
  },
  {
    id: 4,
    title: 'Varuna 6X',
    brand: 'Surveillance',
    description: 'Smart drone for real-time monitoring and crowd control.',
    tags: ['Thermal', 'AI Surveillance', 'High Endurance'],
    imageUrl: '/drones/varuna-6x.webp',
    link: '/products/varuna-6x',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-poppins">
      {/* 🔷 Hero Section with background video */}
      <section id="hero" className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src="/dronvid2.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl">
            Magic Myna pioneers India’s drone technology revolution, driving innovation across agriculture,
            defence, logistics, and surveillance with reliable, rugged UAVs.
          </p>
        </div>
      </section>

      {/* 🔶 Carousel Section */}
      <section className="w-full py-24 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Carousel3D items={carouselItems} />

          {/* ⬇️ Carousel Description */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Mobility with Indian Expertise</h2>
            <p className="text-gray-600 text-lg mb-4">
              Built in India, Built for the World.
            </p>
            <p className="text-gray-500">
              We are reshaping the aerial ecosystem with drones that deliver performance, endurance, and unmatched intelligence.
              Whether it's fields, frontlines, or far-off regions—Magic Myna gets the job done.
            </p>
          </div>

          {/* 🔽 Extended About Company Section */}
          <div className="mt-24 space-y-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#00364a] mb-6">Innovating for a Better Tomorrow</h2>
            <p className="text-gray-700 leading-relaxed">
              Magic Myna is dedicated to providing cutting-edge technological solutions for vital sectors such as Agriculture, Defence,
              Logistics, and Surveillance. Our core values – innovation, utility, and sustainability – drive everything we do. We actively
              collaborate with the brightest minds, industry leaders, and policymakers to build a thriving and inclusive unmanned aviation
              industry in India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Magic Myna is an India-based, DPIIT-recognized start-up with a clear vision: to revolutionize last-mile connectivity through
              innovative UAV-based aero mobility solutions. Headquartered in Bangalore, our journey takes flight from our state-of-the-art
              R&D and Production facility in Coimbatore.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our strength lies in our comprehensive expertise, covering every stage from the initial design and meticulous development to
              the efficient delivery of advanced unmanned aerial vehicles. We are proud to partner with the esteemed CSIR - National Aerospace
              Laboratories, a collaboration that fuels our ambition to democratize aero mobility solutions for a multitude of applications,
              spanning India and the world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are deeply rooted in our commitment to indigenization. By strategically utilizing local resources, nurturing Indian talent,
              and leveraging homegrown technology, we develop solutions that are not only economically sound but also environmentally
              sustainable and inherently scalable. This dedication directly supports the "Make in India" initiative, empowering local
              innovation and contributing significantly to the nation's economic advancement.
            </p>
          </div>

          {/* 👥 Team Section */}
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Founding Team</h2>
            
            {/* 🖼️ Group Image */}
          <div className="w-full mb-8">
            <img
              src="/products/team.jpeg"
              alt="Magic Myna Team"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

            <ul className="space-y-6 text-left text-gray-700">
              <li>
                <strong>SUNIL SOMAN NAIR</strong> – Co-Founder, Domain: Operations and Mobility Solutions
              </li>
              <li>
                <strong>SANJU KALAM</strong> – Co-Founder, Domain: Technology and R&D
              </li>
              <li>
                <strong>AMIN SULAIMAN</strong> – Co-Founder, Domain: Strategy and International Operations
              </li>
              <li>
                <strong>ZUJAR PARDIWALA</strong> – Co-Founder, Domain: Finance and Strategic Partnerships
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
