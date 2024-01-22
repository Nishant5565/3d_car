import React, { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Html } from "@react-three/drei";

export function Car() {
  const gltf = useLoader(
    GLTFLoader,
    "../models/car/scene.gltf"
  );

  // const [rotationY, setRotationY] = useState(Math.PI); // Initial rotation at 180 degrees
  const mesh = useRef();

  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0, 0);
    gltf.scene.rotation.set(0, 2.75, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  // useEffect(() => {
  //   if (mesh.current) {
  //     mesh.current.rotation.y = rotationY;
  //   }
  // }, [rotationY]);

  const handleClick = () => {
    // Rotate to 0 degrees when the button is clicked
    setRotationY(0);
  };

  return (
    <>
      <primitive object={gltf.scene} ref={mesh} />

    </>
  );
}
