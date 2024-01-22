import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import "./style.css";
import { Car } from "./Car.jsx";
import  {Ground}  from "./Ground.jsx";

function CarShow() {
  return (
    <React.Fragment>
      <OrbitControls 
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      />

      <PerspectiveCamera makeDefault fov={50} position={[0, 0.8, 3.5]} />      
      <color args={[20, 20, 20]} attach="" />

      <CubeCamera resolution={216} frames={30}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 1, 1]}
        intensity={60}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 0]}
      />
      <spotLight
        color={'purple'}
        intensity={60}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
      />
      <Ground />
      <EffectComposer>
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.00001, 0.00011]} // color offset
        />
      </EffectComposer>
    </React.Fragment>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ height: "100vh", width: "100vw", zIndex: 0}}
      >
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
