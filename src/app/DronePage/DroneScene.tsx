"use client";

import { Canvas, useFrame, Primitive } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useTransform } from "framer-motion";
import React from "react";
import * as THREE from "three";

export default function DroneScene({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <Canvas
      className="w-full h-screen fixed top-0 left-0 z-10 pointer-events-none"
      camera={{ position: [0, 0, 5] }}
    >
      <Primitive object={new THREE.AmbientLight(0xffffff, 0.7)} />
      <Primitive object={new THREE.DirectionalLight(0xffffff, 1)} position={[0, 10, 5]} />
      <Drone scrollYProgress={scrollYProgress} />
    </Canvas>
  );
}

// Move Drone into its own function
function Drone({ scrollYProgress }: { scrollYProgress: any }) {
  const ref = useRef<any>(null);
  const gltf = useGLTF("/models/drone.glb");

  const y = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.8]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = y.get();
      ref.current.scale.setScalar(scale.get());
    }
  });

  return <Primitive ref={ref} object={gltf.scene} />;
}
