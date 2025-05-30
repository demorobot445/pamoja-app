import { Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Color } from "three";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import { Building } from "../Models/Building";
import Instruction from "../Header/Instruction";

type Props = {
  frameTl: React.RefObject<gsap.core.Timeline | null>;
};

const Render: React.FC<Props> = ({ frameTl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <div id="react-three-canvas" className="h-lvh fixed inset-0">
        <Canvas shadows={"soft"}>
          <Instruction />
          <AnimatedCamera containerRef={containerRef} />
          <Environment preset="warehouse" />
          <color args={[new Color("gray")]} attach={"background"} />
          <Suspense fallback={null}>
            <Building frameTl={frameTl} />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </div>
  );
};

export default Render;
