'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ScrollStackItem({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string[];
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="h-screen w-full sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ translateY, scale }}
        className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
      >
        {/* 🖼️ Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          {/* ✨ Glass Overlay Text */}
          <div className="absolute bottom-0 w-full bg-black/70 backdrop-blur-md text-white p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-200">
              {description.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
