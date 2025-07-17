"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "RELIABLE TECHNOLOGY",
    description: [
      "Indigenously designed & built.",
      "State-of-the-Art Technology.",
    ],
    sub: "Powerline Stringing Drone",
  },
  {
    title: "SAFETY",
    description: [
      "We adhere to the highest industry standards and regulatory compliances.",
    ],
    sub: "Magic Myna customised solutions",
  },
  {
    title: "CUSTOMISED SOLUTIONS",
    description: ["We provide customised solutions to meet your real needs."],
    sub: "Cost Effective Drones",
  },
  {
    title: "COST-EFFECTIVE",
    description: [
      "Our products and solutions help you achieve optimum efficiency, productivity and cost-effectiveness.",
    ],
    sub: "Magic Myna support",
  },
  {
    title: "CONTINUOUS SUPPORT",
    description: [
      "We believe in comprehensive support to our clients. We are always there when you need us the most.",
    ],
    sub: "Sustainable future by Magic Myna",
  },
  {
    title: "SUSTAINABILITY",
    description: [
      "All our operations are environment-friendly and ensure a green & sustainable future.",
    ],
    sub: "Eco-focused Drone Systems",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:ring-2 hover:ring-black/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {item.sub && (
              <p className="text-sm italic text-gray-500">{item.sub}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
