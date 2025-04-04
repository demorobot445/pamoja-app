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
        .to(overlayRef.current!, { opacity: 1, delay: 0.2 })
        .to(overlayRef.current!, { opacity: 0 }, ">1")
        .call(() => {
          store.isMenuShow = true;
        });
    }
  }, [active]);

  return (
    <Html style={{ pointerEvents: "none" }} position={[0, 0.5, 0]} fullscreen>
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
