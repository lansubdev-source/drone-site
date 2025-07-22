'use client';

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  target: number;
  label: string;
  suffix?: string;
};

export default function StatsCounter({ target, label, suffix = '+' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let current = 0;
          const duration = 1800; // ⏱ Faster total duration (ms)
          const frameRate = 30; // 🕒 Update every 30ms
          const totalSteps = Math.ceil(duration / frameRate);
          const increment = Math.ceil(target / totalSteps);

          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(current);
          }, frameRate);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl font-bold text-black">
        {count}
        {suffix}
      </div>
      <div className="text-gray-500 mt-1 text-sm">{label}</div>
    </div>
  );
}
