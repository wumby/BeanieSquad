/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function BasketballModel() {
  const { nodes } = useGLTF("/basketball.glb", true);
  const basketballRef = useRef(null);

  useFrame(() => {
    if (basketballRef.current) {
      //@ts-expect-error
      basketballRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={basketballRef} position={[0, -2, 0]}>
      <primitive object={nodes.BasketBall_BasketballSub_0} scale={0.2} />
    </group>
  );
}

export default function Basketball() {
  return (
    <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <BasketballModel />
      <OrbitControls minDistance={5} maxDistance={15} enablePan={false} />
    </Canvas>
  );
}
