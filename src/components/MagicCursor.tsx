"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagicCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const sparkles = useRef<HTMLDivElement[]>([]);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      addSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const addSparkle = (x: number, y: number) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 500);
  };

  return (
    <motion.div
      className="smoke-trail"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
