'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import GLBDroneViewer from './GLBDroneViewer';

export default function DroneModelShowcaseSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Check out this model</h2>
          <p className="text-lg text-gray-300 mb-6">
            Interact with the 3D model on the right. Rotate, zoom, and inspect every detail of our advanced drone.
          </p>
        </div>

        {/* 3D Model Right */}
        <div className="w-full h-[500px]">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Environment preset="city" />
            <group scale={[5, 5, 5]}>
              <GLBDroneViewer />
            </group>
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
