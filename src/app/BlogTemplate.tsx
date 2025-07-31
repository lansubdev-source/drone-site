"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type BlogTemplateProps = {
  title: string;
  date: string;
  image: string;
  content: ReactNode; // allows rich JSX
};

export default function BlogTemplate({ title, date, image, content }: BlogTemplateProps) {
  return (
    <main className="bg-gradient-to-br from-[#f0f4f8] to-white text-gray-900 font-sans">
      {/* Cinematic Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg px-4"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm text-gray-500 mb-6 text-center"
        >
          Published on {date}
        </motion.p>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-lg prose-slate max-w-none"
        >
          {content}
        </motion.article>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/#blogs"
            className="inline-block px-6 py-2 text-white bg-teal-600 rounded-full shadow hover:bg-teal-700 transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}
