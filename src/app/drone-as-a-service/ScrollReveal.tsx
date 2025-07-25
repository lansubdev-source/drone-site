'use client';

import { useEffect, useRef } from 'react';
import './ScrollReveal.css';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
}

export default function ScrollReveal({ children, threshold = 0.1 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('scroll-reveal-visible');
        } else {
          node.classList.remove('scroll-reveal-visible');
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
}
