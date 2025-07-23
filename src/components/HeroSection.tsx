// src/components/HeroSection.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const DroneModel = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/drone.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * 0.5,
        0.05
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mouse.y * 0.3,
        0.05
      );
    }
  });

  return <primitive ref={ref} object={scene} scale={1.8} />;
};

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMouse({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <DroneModel mouse={mouse} />
        <Environment preset="sunset" />
      </Canvas>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Magic Myna
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mt-4 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Drones That Deliver. From Farmlands to Frontlines.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Explore Our Drones
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
            Watch in Action
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
