import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Color } from "three";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import Loader from "../Loader/Loader";
import HeroHeader from "../Header/HeroHeader";
import { Building } from "../Models/Building";

type Props = {
  frameTl: React.MutableRefObject<gsap.core.Timeline | undefined>;
};

const Render: React.FC<Props> = ({ frameTl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-lvh fixed inset-0">
      <Canvas shadows={"soft"}>
        <AnimatedCamera containerRef={containerRef} />
        <Environment preset="warehouse" />
        <color args={[new Color("gray")]} attach={"background"} />
        <HeroHeader />
        <Suspense fallback={<Loader />}>
          <Building frameTl={frameTl} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Render;
