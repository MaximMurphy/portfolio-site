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
  const materials = useLoader(MTLLoader, "3DModel3/hello.mtl");
  const obj = useLoader(OBJLoader, "3DModel3/hello.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 16,
      Math.sin(t / 3) / 8,
      -0.6 + Math.sin(t / 2) / 8
    );
    ref.current.position.y = (-50 + Math.cos(t / 2)) / 3.5;
  });

  // checking for screen size
  if (window.matchMedia("(min-width: 701px)").matches) {
    //bigger screens
    return (
      <group ref={ref}>
        <primitive object={obj} scale={0.3} position={(0, 0, 0)} />
      </group>
    );
  } else {
    //mobile
    return (
      <group ref={ref}>
        <primitive object={obj} scale={0.175} />
      </group>
    );
  }
};

export default function LegoModel() {
  return (
    <div className="h-72 w-full">
      <Canvas
        className="h-full"
        shadows
        camera={{
          position: [10, 20, 0],
        }}
      >
        <ambientLight color={"white"} intensity={0} />
        <pointLight castShadow />

        <Suspense fallback={null}>
          <Scene />
          {/*<OrbitControls />*/}
        </Suspense>
      </Canvas>
    </div>
  );
}
