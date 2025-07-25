'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function DroneExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const droneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !droneRef.current) return;

    gsap.to(droneRef.current, {
      y: 400,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom+=1000 top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-black">
      <div
        ref={droneRef}
        className="w-full h-[100vh] sticky top-0 flex items-center justify-center"
      >

      </div>
    </section>
  );
}
