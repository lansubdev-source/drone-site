'use client';

import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  { title: 'Agriculture Monitoring', image: 'usecases/daas.jpg' },
  { title: 'Infrastructure Inspection', image: '/usecases/infrastructure.jpg' },
  { title: 'Surveillance & Security', image: '/usecases/security.webp' },
  { title: 'Disaster Management', image: '/usecases/disaster.webp' },
];

const reasons = [
  {
    title: "RELIABLE TECHNOLOGY",
    description: ["Indigenously designed & built.", "State-of-the-Art Technology."],
    sub: "Powerline Stringing Drone",
  },
  {
    title: "SAFETY",
    description: ["We adhere to the highest industry standards and regulatory compliances."],
    sub: "Magic Myna customised solutions",
  },
  {
    title: "CUSTOMISED SOLUTIONS",
    description: ["We provide customised solutions to meet your real needs."],
    sub: "Cost Effective Drones",
  },
  {
    title: "COST-EFFECTIVE",
    description: ["Our products and solutions help you achieve optimum efficiency, productivity and cost-effectiveness."],
    sub: "Magic Myna support",
  },
  {
    title: "CONTINUOUS SUPPORT",
    description: ["We believe in comprehensive support to our clients. We are always there when you need us the most."],
    sub: "Sustainable future by Magic Myna",
  },
  {
    title: "SUSTAINABILITY",
    description: ["All our operations are environment-friendly and ensure a green & sustainable future."],
    sub: "Eco-focused Drone Systems",
  },
];

const agriculturalServices = [
  {
    title: "Crop Health Monitoring & Livestock Management",
    desc: "Efficiency with drone-based multispectral imaging for early disease detection, precision spraying, and remote livestock monitoring.",
    image: "/services/agri1.webp",
  },
  {
    title: "Aerial Spraying & Soil Field Analysis",
    desc: "Drone-enabled precision spraying, soil mapping, and irrigation optimization, reducing costs, chemical waste, and environmental impact.",
    image: "/services/agri2.jpeg",
  },
];

const industrialServices = [
  {
    title: "Industrial Excellence with Intelligence",
    desc: "Enhance safety and efficiency in oil & gas pipelines with automated drone inspections. Real time Detection and minimizes risk.",
    image: "/services/ind1.jpg",
  },
  {
    title: "Power Line & Utility Inspection",
    desc: "Ensure power grid reliability with drone-based thermal inspections, detecting faults, vegetation risks, and wear to minimize downtime and costs.",
    image: "/services/ind2.webp",
  },
  {
    title: "Structural & Wind Turbine Inspection",
    desc: "Optimize asset safety and performance with high-precision drone inspections, detecting defects in turbines and structures using visual and thermal imaging",
    image: "/services/ind3.webp",
  },
  {
    title: "Disaster Response & Wildlife Monitoring",
    desc: "Real-time disaster response wildlife surveillance, aiding emergency teams and conservation efforts with precision and minimal disruption.",
    image: "/services/ind4.jpg",
  },
  {
    title: "Progress Monitoring & Traffic Monitoring & Management",
    desc: "High-resolution GIS mapping, progress monitoring, and real-time traffic analysis to optimize urban planning, mobility solutions.",
    image: "/services/ind5.webp",
  },
  {
    title: "Dump Yard Management",
    desc: "Solutions for efficient dump yard waste management. Our drones offer aerial assessments, waste analysis, and fire hazard detection. They enhance safety, optimize space, and support sustainable waste management.",
    image: "/services/ind6.jpg",
  },
  {
    title: "Highway Assessment & Monitoring",
    desc: "Advanced drone services for road inspection, monitoring, and construction, ensuring faster and more efficient project execution",
    image: "/services/ind7.jpg",
  },
  {
    title: "Mining Survey",
    desc: "Revolutionize mine surveying by capturing high-resolution data for safer and more efficient planning.",
    image: "/services/ind8.jpg",
  },
  {
    title: "Rails Assessment & Monitoring",
    desc: "Enhance railway and metro track inspections by quickly detecting cracks, debris, and structural issues, improving safety and efficiency.",
    image: "/services/ind9.jpg",
  },
  {
    title: "Solar Panel Inspection",
    desc: "Enhance solar panel inspections with thermal imaging, detecting faults early to prevent damage and ensure efficiency.",
    image: "/services/ind10.webp",
  },
  {
    title: "Disaster Management",
    desc: "Enable rapid disaster response with high-resolution mapping, real-time data, and damage assessment.",
    image: "/services/ind11.webp",
  },
  {
    title: "Port Logistics Management",
    desc: "Enhance port operations by improving inventory management, real-time tracking, and warehouse logistics.",
    image: "/services/ind12.jpg",
  },
];

export default function DroneAsAService() {
  return (
    <div id="drone-as-a-service" className="bg-white text-black font-poppins">
      <section className="relative h-[600px] w-full overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/dronvid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-grotesk">Drone as a Service</h1>
          <p className="text-lg mt-4 max-w-2xl">
            Transforming industries through aerial intelligence and automated workflows.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">A Comprehensive Range of Services</h2>
        <p className="text-lg">
          Drone as a Service (Draas) - Cutting-Edge Aerial Solutions for Critical Industries. Unlock the power of advanced aerial intelligence with our Drone as a Service (Draas) solution. We provide state-of-the-art drone technology to enhance efficiency, accuracy, and safety across various industries. Our expert team delivers high-resolution imaging, real-time data analysis, and actionable insights to support critical operations.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Agricultural Services</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {agriculturalServices.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-700 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Industrial Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {industrialServices.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-700 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg shadow overflow-hidden">
              <img src={useCase.image} alt={useCase.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900">{useCase.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2">
                {item.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              {item.sub && <p className="text-sm italic text-gray-500">{item.sub}</p>}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
