// components/GLBDroneViewer.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

function DroneModel() {
  const { scene } = useGLTF('/models/drone.glb'); // Make sure path is correct
  return <primitive object={scene} scale={1.4} position={[0, -1, 0]} />;
}

export default function GLBDroneViewer() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 1.5, 4.5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Stage environment={null} intensity={0.6}>
          <DroneModel />
        </Stage>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3.5}
          maxDistance={6}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}
