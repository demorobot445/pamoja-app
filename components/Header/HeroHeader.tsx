import Link from "next/link";
import Logo from "../Svgs/Logo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Html, useProgress } from "@react-three/drei";

const HeroHeader = () => {
  const { progress } = useProgress();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progress === 100) {
      const timeoutId = setTimeout(() => {
        gsap.to(overlayRef.current!, { opacity: 0 });
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [progress]);

  return (
    <Html position={[0, 1.5, 0]} fullscreen>
      <div
        ref={overlayRef}
        className="absolute z-[5] pointer-events-none w-full h-full bg-black/50 flex flex-col item-center justify-center"
      >
        <p className="font-vietnam-pro text-center text-xl text-white">
          SCROLL TO DISCOVER
        </p>
      </div>
      <header className="absolute bottom-0 gap-8 z-10 w-full flex flex-col items-center justify-center py-9">
        <Logo />
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 max-w-[85%] lg:max-w-[100%] lg:gap-16 justify-center w-full *:uppercase font-vietnam-pro *:font-medium text-white">
          <Link href="/about">about us</Link>
          <Link href="/">artist</Link>
          <Link href="/shop">shop</Link>
          <Link href="/contact">contact</Link>
          <Link href="/events">events</Link>
        </div>
      </header>
    </Html>
  );
};

export default HeroHeader;
