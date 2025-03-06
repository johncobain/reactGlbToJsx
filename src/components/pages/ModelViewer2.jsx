import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { FlyingCarGLTF } from "../3dModel/Scene";

function ModelViewer2() {
  return (
    <>
      <title>GLB Model</title>
      <main className="px-5">
        <div className="border-2 h-[700px] my-5 rounded-lg">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              fov={75}
              position={[0, 0, 2]}
              resolution={1024}
            />
            <CameraControls />
            <ambientLight intensity={0.5} />
            <Suspense>
              <FlyingCarGLTF></FlyingCarGLTF>
            </Suspense>
            <Environment
              background={true}
              preset="city"
              ground={{
                height: 5, // Height of the camera that was used to create the env map (Default: 15)
                radius: 120, // Radius of the world. (Default 60)
                scale: 10, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
              }}
            />
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default ModelViewer2;
