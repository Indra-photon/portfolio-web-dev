// src/components/Bubbles.js

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Bubble = () => {
  const meshRef = useRef();
  const velocity = useRef(new THREE.Vector3(
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02
  ));

  useFrame(() => {
    meshRef.current.position.add(velocity.current);

    // Reverse direction when hitting screen edges
    if (Math.abs(meshRef.current.position.x) > 5) velocity.current.x *= -1;
    if (Math.abs(meshRef.current.position.y) > 5) velocity.current.y *= -1;
    if (Math.abs(meshRef.current.position.z) > 5) velocity.current.z *= -1;
  });

  return (
    <mesh ref={meshRef} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={new THREE.Color(`hsl(${Math.random() * 360}, 100%, 75%)`)} transparent opacity={0.8} />
    </mesh>
  );
};

const Bubbles = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {[...Array(30)].map((_, index) => (
          <Bubble key={index} />
        ))}
      </Canvas>
    </div>
  );
};

export default Bubbles;
