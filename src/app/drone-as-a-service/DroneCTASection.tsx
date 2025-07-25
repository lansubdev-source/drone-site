'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DroneCTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={ctaRef} className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Ready to Deploy?</h2>
        <p className="text-xl mb-8 opacity-75">Transform your operations with aerial intelligence today.</p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-300 transition">Get Started</button>
      </div>
    </section>
  );
}
