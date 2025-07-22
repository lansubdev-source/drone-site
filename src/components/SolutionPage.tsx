'use client';

import ScrollStackItem from '@/components/ScrollStackItem';

const solutions = [
  {
    title: "Agriculture Drones",
    description: [
      "Precision farming & crop health monitoring",
      "Automated spraying & seeding",
      "Soil analysis & yield estimation",
    ],
    image: "/agriculture.jpg",
  },
  {
    title: "Logistics Drones",
    description: [
      "Parcel & cargo delivery",
      "Last-mile connectivity for rural areas",
      "Rapid response courier systems",
    ],
    image: "/logistics.webp",
  },
  {
    title: "Surveillance Drones",
    description: [
      "24/7 area monitoring",
      "Perimeter security for industries & borders",
      "Crowd & event surveillance",
    ],
    image: "/surveillance.webp",
  },
  {
    title: "Strategic Defense Drones",
    description: [
      "Reconnaissance & intelligence gathering",
      "Tactical mission support",
      "Border patrolling & high-risk operations",
    ],
    image: "/products/crisis.jpeg",
  },
];

export default function SolutionPage() {
  return (
    <main className="relative bg-white text-black">
      {/* 🔹 Section Heading */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Mission-Specific Drone Solutions
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore our suite of drones tailored to meet specific industry needs—from agriculture to strategic defense. Each solution is crafted for maximum efficiency, performance, and impact.
        </p>
      </section>

      {/* 🔹 Scroll-stacked cards */}
      {solutions.map((item, index) => (
        <ScrollStackItem
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </main>
  );
}
