'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DroneFeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-black text-white px-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mb-10">Key Features</h2>
      <ul className="grid grid-cols-2 gap-8 max-w-4xl">
        <li className="bg-white bg-opacity-5 p-6 rounded-xl">✔️ Autonomous Navigation</li>
        <li className="bg-white bg-opacity-5 p-6 rounded-xl">✔️ Real-time Data Streaming</li>
        <li className="bg-white bg-opacity-5 p-6 rounded-xl">✔️ Payload Flexibility</li>
        <li className="bg-white bg-opacity-5 p-6 rounded-xl">✔️ Long-Range & Endurance</li>
      </ul>
    </section>
  );
}
