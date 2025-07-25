"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

const DroneModel = () => {
  const gltf = useGLTF("/models/drone.glb"); // Replace with your actual GLB path
  return <primitive object={gltf.scene} scale={3.5} position={[0, -1, 0]} />;
};

export default function GLBDroneViewer() {
  return (
    <div className="w-full h-[120vh] sticky top-0 z-0">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <DroneModel />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
