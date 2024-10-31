import { useRef } from "react";
import { DirectionalLight, OrthographicCamera } from "three";

const Lights = () => {
  const lightRef = useRef<DirectionalLight>(null);
  const lightCameraRef = useRef<OrthographicCamera>(null);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={lightRef}
        position={[0, 10, 0]}
        intensity={30}
        castShadow
      >
        <orthographicCamera
          ref={lightCameraRef}
          attach="shadow-camera"
          args={[-4, 4, 20, -20]}
          near={0.1}
          far={15}
        />
      </directionalLight>
    </>
  );
};

export default Lights;
