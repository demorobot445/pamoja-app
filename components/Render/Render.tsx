import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Building } from "../Models/Building";
import Lights from "../Lights/Lights";
import { Color, Euler } from "three";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import Loader from "../Loader/Loader";
import HeroHeader from "../Header/HeroHeader";

const Render = ({
  frameButtonRef,
}: {
  frameButtonRef: React.RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-svh fixed inset-0">
      <Canvas shadows={"soft"}>
        <Lights />
        <AnimatedCamera
          frameButtonRef={frameButtonRef}
          containerRef={containerRef}
        />
        <Environment
          files={"/env.hdr"}
          environmentIntensity={0.3}
          environmentRotation={new Euler(0, Math.PI * 0.3, 0)}
        />
        <color args={[new Color("gray")]} attach={"background"} />
        <HeroHeader />
        <Suspense fallback={<Loader />}>
          <Building position={[-0.6, 0, 5]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Render;
