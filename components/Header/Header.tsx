import { useRef, useState } from "react";
import TextLogo from "../Svgs/TextLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Header = ({ isFixed }: { isFixed?: boolean }) => {
  const tl = useRef<GSAPTimeline>();
  const containerRef = useRef<HTMLHeadElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { duration: 0.3, ease: "power4.inOut" },
          reversed: true,
        })
        .set(document.body, {
          overflow: "hidden",
          paddingRight: innerWidth < 600 ? 0 : 15,
        })
        .to(".btn-span-1", {
          top: "50%",
          yPercent: -50,
          rotate: 45,
          width: "100%",
        })
        .to(".btn-span-2", { top: "50%", yPercent: -50, scaleX: 0 }, "<")
        .to(
          ".btn-span-3",
          {
            top: "50%",
            yPercent: -50,
            rotate: -45,
            width: "100%",
          },
          "<"
        )
        .from(".menu", { yPercent: 100 })
        .from(".link", { yPercent: 100, opacity: 0, stagger: 0.1 });
    },
    { scope: containerRef }
  );

  const handleClick = () => {
    setIsActive((prev) => !prev);
    tl.current?.reversed(isActive);
  };

  return (
    <header
      ref={containerRef}
      className={`flex py-4 px-4 lg:py-8 lg:px-9 ${
        isFixed ? "fixed top-0 w-full z-20" : "relative"
      } `}
    >
      <button onClick={handleClick} className="h-12 w-12 relative z-30">
        <span className="btn-span-1 bg-black h-[6px] w-[100%] rounded-full block absolute  top-[10%]" />
        <span className="btn-span-2 bg-black h-[6px] w-[75%] rounded-full block absolute top-1/2 -translate-y-1/2" />
        <span className="btn-span-3 bg-black h-[6px] w-[50%] rounded-full block absolute top-[calc(90%-6px)]" />
      </button>
      <div className="w-full -ml-[50px] flex items-center justify-center h-12">
        <Link href="/">
          <TextLogo />
        </Link>
      </div>
      <div className="menu fixed z-20 h-full w-full inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <Link
            className="link text-5xl lg:text-7xl uppercase font-bold text-center font-vietnam-pro text-white"
            href="/shop"
          >
            shop
          </Link>
          <Link
            className="link text-5xl lg:text-7xl uppercase font-bold text-center font-vietnam-pro text-black"
            href="/artists"
          >
            artist
          </Link>
          <Link
            className="link text-5xl lg:text-7xl uppercase font-bold text-center font-vietnam-pro text-white"
            href="/about"
          >
            about us
          </Link>
          <Link
            className="link text-5xl lg:text-7xl uppercase font-bold text-center font-vietnam-pro text-black"
            href="#"
          >
            contact
          </Link>
          <Link
            className="link text-5xl lg:text-7xl uppercase font-bold text-center font-vietnam-pro text-white"
            href="/events"
          >
            events
          </Link>
        </div>
        <Image src="/menu-bg.png" fill alt="background" />
      </div>
    </header>
  );
};

export default Header;
