'use client';

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  target: number;
  label: string;
  suffix?: string;
  textColorClass?: string; // optional override for text color
};

export default function StatsCounter({
  target,
  label,
  suffix = '+',
  textColorClass = 'text-gray-900', // default: dark text for light background
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let current = 0;
          const duration = 1800;
          const frameRate = 30;
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
    <div ref={ref} className="text-center p-2">
      <div className={`text-3xl md:text-4xl font-bold ${textColorClass}`}>
        {count}
        {suffix}
      </div>
      <div className={`text-sm mt-1 ${textColorClass}`}>{label}</div>
    </div>
  );
}
