import { Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Color } from "three";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import { Building } from "../Models/Building";
import Instruction from "../Header/Instruction";

type Props = {
  frameTl: React.MutableRefObject<gsap.core.Timeline | undefined>;
};

const Render: React.FC<Props> = ({ frameTl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-lvh fixed inset-0">
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
  );
};

export default Render;
