"use client";

import Image from "next/image";

const features = [
  {
    title: "Fast",
    image: "/features/fast.png",
  },
  {
    title: "Precise",
    image: "/features/pre1.png",
  },
  {
    title: "Sustainable",
    image: "/features/sus1.png",
  }
];

export default function DeliveryFeatures() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-2">Finally, first-class delivery.</h2>
        <p className="text-lg font-semibold text-blue-600 mb-12">Meet your Zip →</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[400px] h-[500px] overflow-hidden shadow-lg mx-auto"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
