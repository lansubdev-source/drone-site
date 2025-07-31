"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/snapshot1.webp", width: 210, height: 280 },
  { src: "/images/snapshot2.jpg", width: 250, height: 180 },
  { src: "/images/snapshot3.jpg", width: 220, height: 310 },
  { src: "/images/snapshot4.avif", width: 200, height: 200 },
  { src: "/images/snapshot5.jpg", width: 240, height: 280 },
];

export default function SnapshotsSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24 overflow-hidden font-poppins">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Gallery Section
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Snapshots of <span className="text-purple-600">achievements</span>
          </h2>
          <p className="text-gray-600 mt-2">
            
          </p>
        </div>
        <Link
          href="/gallery"
          className="text-blue-600 hover:underline text-sm font-medium mt-4 md:mt-0"
        >
          View all
        </Link>
      </div>

      {/* Masonry Style Image Row */}
      <div className="flex flex-wrap justify-between gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            style={{ width: img.width, height: img.height }}
            className="relative rounded-xl overflow-hidden"
          >
            <Image
              src={img.src}
              alt={`snapshot-${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
