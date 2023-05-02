import * as THREE from "three";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = (props) => {
  const ref = useRef();
  const materials = useLoader(MTLLoader, "3DModel2/Maxim.mtl");
  const obj = useLoader(OBJLoader, "3DModel2/Maxim.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 2) / 8,
      Math.sin(t / 1.5) / 4,
      0.15 + Math.sin(t / 0.8) / 8
    );
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });

  console.log(obj);
  return (
    <group ref={ref}>
      <primitive object={obj} scale={0.08} position={(0, 0, -2)} />
    </group>
  );
};

export default function LegoModel() {
  return (
    <div className="h-36 w-screen lg:w-96">
      <Canvas
        className="h-full"
        shadows
        camera={{
          position: [10, 1, 1.2],
        }}
      >
        <ambientLight color={"white"} intensity={0.8} />
        <pointLight castShadow />

        <Suspense fallback={null}>
          <Scene />
          {/*<OrbitControls />*/}
        </Suspense>
      </Canvas>
    </div>
  );
}
