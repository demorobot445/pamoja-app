import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Color } from "three";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import Loader from "../Loader/Loader";
import HeroHeader from "../Header/HeroHeader";
import { Building } from "../Models/Building";

const Render = ({
  frameButtonRef,
}: {
  frameButtonRef: React.RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-svh fixed inset-0">
      <Canvas shadows={"soft"}>
        {/* <Lights /> */}
        <AnimatedCamera
          frameButtonRef={frameButtonRef}
          containerRef={containerRef}
        />
        <ambientLight intensity={0.3} />
        <Environment files={"/neutral.hdr"} />
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
