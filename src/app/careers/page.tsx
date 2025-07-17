'use client';

import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Drone Pilot – Agriculture Division',
    location: 'Tamil Nadu, India',
    type: 'Full-Time',
    description: 'Operate drones for crop monitoring, spraying, and field survey missions.',
  },
  {
    id: 2,
    title: 'Flight Instructor – RPTO',
    location: 'Bangalore, India',
    type: 'Contract',
    description: 'Train RPTO candidates in drone flying and DGCA curriculum.',
  },
  {
    id: 3,
    title: 'Data Analyst – Aerial Mapping',
    location: 'Remote',
    type: 'Part-Time',
    description: 'Process aerial survey data and generate actionable reports using GIS tools.',
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<null | number>(null);

  return (
    <section
      id="/careers"
      className="min-h-screen bg-[#f9fafb] text-gray-900 font-poppins py-20 px-6 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-extrabold text-center mb-12 font-grotesk tracking-wide text-sky-600">
        Careers at Magic Myna
      </h1>

      <div className="space-y-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              📍 {job.location} | 📄 {job.type}
            </p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button
              className="bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-700 transition"
              onClick={() => setSelectedJob(job.id)}
              aria-label={`Apply for ${job.title}`}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Application Modal */}
      {selectedJob !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-2xl border border-sky-500">
            <h3 className="text-xl font-bold mb-4 text-sky-600">
              Apply for: {jobs.find((j) => j.id === selectedJob)?.title}
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application submitted!");
                setSelectedJob(null);
              }}
            >
              <label className="block">
                <span className="text-sm text-gray-700">Your Name</span>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-700">Email Address</span>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-700">Upload Resume</span>
                <input
                  type="file"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded font-semibold"
              >
                Submit Application
              </button>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="w-full mt-2 text-sm text-sky-500 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
