"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useTransform, useMotionValue, useScroll } from "framer-motion";

export default function DroneScene({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <Canvas
      className="w-full h-screen fixed top-0 left-0 z-10 pointer-events-none"
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 10, 5]} />
      <Drone scrollYProgress={scrollYProgress} />
    </Canvas>
  );
}

function Drone({ scrollYProgress }: { scrollYProgress: any }) {
  const ref = useRef<any>(null);
  const gltf = useGLTF("/models/drone.glb");

  // Control vertical position and size based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [3, -3]); // move from top to bottom
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.8]); // grow gradually

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = y.get();
      ref.current.scale.setScalar(scale.get());
    }
  });

  return <primitive ref={ref} object={gltf.scene} />;
}
