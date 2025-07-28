"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import DroneScene from "./DroneScene";

export default function LandingScrollSection() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  return (
    <div
      ref={scrollRef}
      className="relative w-full h-[500vh] overflow-x-hidden overflow-y-auto"
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/background-long.png"
          alt="Delivery Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3D Drone */}
      <DroneScene scrollYProgress={scrollYProgress} />

      {/* Scroll-based overlays */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex flex-col items-center text-white font-bold text-4xl">
        <div className="pt-[20vh]"> DRONE TAKING OFF </div>
        <div className="mt-[150vh]"> IN TRANSIT</div>
      </div>

      {/* Package Delivered message at bottom */}
      <div className="absolute bottom-[10vh] left-0 w-full z-20 text-center text-white font-bold text-4xl pointer-events-none">
        PACKAGE DELIVERED
      </div>
    </div>
  );
}
