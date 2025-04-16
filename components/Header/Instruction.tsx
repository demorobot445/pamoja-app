import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Html, useProgress } from "@react-three/drei";
import { store } from "@/store";

const Instruction = () => {
  const { active } = useProgress();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) {
      gsap
        .timeline()
        .call(() => {
          store.isMenuShow = true;
        })
        .to(overlayRef.current!, { opacity: 1, delay: 0.35 })
        .to(overlayRef.current!, { opacity: 0, delay: 1 });
    }
  }, [active]);

  return (
    <Html
      style={{ pointerEvents: "none" }}
      position={[0.14, 0.5, 0]}
      fullscreen
    >
      <div
        ref={overlayRef}
        className="absolute opacity-0 z-[5] pointer-events-none w-full h-full bg-black/50 flex flex-col item-center justify-center"
      >
        <p className="font-vietnam-pro text-center text-xl text-white">
          SCROLL TO EXPLORE
          <br />
          SELECT ARTWORK TO DISCOVER
        </p>
      </div>
    </Html>
  );
};

export default Instruction;
