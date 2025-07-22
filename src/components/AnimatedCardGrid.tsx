'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
   {
    title: 'WINDMILL INSPECTION',
    image: '/products/inspection.png',
    subtitle: 'Blade, Tower & Substation Monitoring',
  },
  {
    title: 'UTILITY INSPECTION',
    image: '/solar.jpg',
    subtitle: 'Oil & Gas, Pipelines & Perimeter',
  },
  {
    title: 'POWERLINE STRINGING',
    image: '/products/stringing.webp',
    subtitle: 'Transmission Line Deployment',
  },
  {
    title: 'GEO-SPATIAL MAPPING',
    image: '/geo.webp',
    subtitle: 'Land Surveys, GIS, Imaging',
  },
  {
    title: 'HEALTHCARE & EMERGENCY RESPONSE',
    image: '/products/healthcareandemergency.jpg',
    subtitle: 'Delivery & Remote Access Aid',
  },
  {
    title: 'PRECISION AGRICULTURE',
    image: '/products/precision.png',
    subtitle: 'Farm Management & Pest Control',
  },
];

export default function AnimatedCardGrid() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section className="relative min-h-[200vh]">
      {/* Sticky wrapper */}
      <div className="sticky top-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative group overflow-hidden border shadow-lg cursor-pointer aspect-square"
            >
              {/* Image that shrinks on hover */}
              <div className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-[0.4] group-hover:translate-x-[-50%] group-hover:translate-y-[50%]">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10" />

              {/* Text */}
              <div className="absolute top-6 left-6 z-20 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6">
                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                <p className="text-sm text-violet-300">{solution.subtitle}</p>
              </div>

              {/* CTA */}
              <div className="absolute bottom-6 right-6 z-20 text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                MORE <span className="inline-block ml-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
