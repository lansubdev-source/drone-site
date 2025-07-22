'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function ScrollStack({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const contentElement = scroller.querySelector('.scroll-stack-inner');
    if (!contentElement) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: contentElement as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="scroll-stack-wrapper w-screen h-screen overflow-hidden relative"
    >
      <div className="scroll-stack-inner min-h-[200vh]">
        {children}
      </div>
    </div>
  );
}
