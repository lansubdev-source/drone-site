'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Course Details', 'Workshops & Training', 'Registration'];

export default function RPTOPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-poppins py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 font-grotesk tracking-wide uppercase text-black">
        Remote Pilot Training Organisation (RPTO)
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium text-sm md:text-base ${
              activeTab === i
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 p-6 md:p-10 rounded-2xl shadow-xl">
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="tab1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Details</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>DGCA Approved RPTO Curriculum</li>
                <li>30 Hours of Ground Training</li>
                <li>10 Hours of Flight Simulation</li>
                <li>Live Drone Flying with Certified Instructors</li>
                <li>Final Evaluation + DGCA Certification</li>
              </ul>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="tab2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black-800">Workshops & Training Programs</h2>
              <ul className="list-disc pl-6 space-y-2 text-black-700">
                <li>1–2 Day Introductory Drone Workshops</li>
                <li>Drone Awareness Programs in Schools & Colleges</li>
                <li>Corporate Training in Survey, Mapping & Inspection</li>
                <li>Custom Skill-Based Workshops for Professionals</li>
              </ul>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="tab3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black-800">Registration Form</h2>
              <p className="mb-4 text-gray-700">
                Fill the form below to enroll in the RPTO course or to join a training workshop.
              </p>
              <div className="w-full h-[600px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScXXXXXXX/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-xl border-0"
                  allowFullScreen
                  title="RPTO Registration"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
