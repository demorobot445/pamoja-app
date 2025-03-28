import { store } from "@/store";
import Link from "next/link";
import { useSnapshot } from "valtio";
import CloseWhite from "../Svgs/CloseWhite";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

type Props = {
  frameTl: React.MutableRefObject<gsap.core.Timeline | undefined>;
};

const FrameButtons: React.FC<Props> = ({ frameTl }) => {
  const { artistLink, moveCamera, previousLocation } = useSnapshot(store);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      frameTl.current = gsap
        .timeline({
          defaults: { ease: "power4", duration: 0.6 },
          reversed: true,
        })
        .set(container.current!, { pointerEvents: "auto" })
        .to(container.current!, { scaleX: 1, bottom: "0%", duration: 1 })
        .from(".btn", { scale: 0 })
        .from(".fade", { opacity: 0, stagger: 0.2 });
    },
    { scope: container }
  );

  const handleClose = () => {
    frameTl.current!.reversed(true);
    moveCamera(
      previousLocation.x,
      previousLocation.y,
      previousLocation.z,
      previousLocation.rotateY
    );
    gsap.set(document.body, { overflow: "" });
  };

  return (
    <div
      ref={container}
      className="fixed pointer-events-none bottom-[-100%] scale-x-0 lg:top-1/2  lg:-translate-y-1/2 lg:right-8 bg-white w-full lg:w-[525px] h-[45vh] lg:h-fit rounded-t-[42px] lg:rounded-b-[42px] p-10 z-10"
    >
      <button
        onClick={handleClose}
        className="btn h-16 w-16 bg-black absolute top-4 rounded-full right-4 flex items-center justify-center z-10"
      >
        <CloseWhite />
      </button>
      <div className="overflow-auto h-full flex flex-col gap-8">
        <div className="flex flex-col font-vietnam-pro gap-4">
          <h1 className="fade font-bold text-xl">Artwork 4/42</h1>
          <p className="fade font-light lg:max-w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            alias, hic ut voluptatum voluptatibus expedita beatae laboriosam
            nulla, sit, provident ipsam voluptates suscipit non reprehenderit
            asperiores distinctio molestias enim ducimus!
          </p>
        </div>
        <hr className="fade border-black/50" />
        <div className="flex flex-col lg:flex-row gap-4">
          <Link
            href="mailto:someone@example.com"
            className="fade text-xs w-fit whitespace-nowrap cursor-pointer font-vietnam-pro font-medium uppercase py-4 px-11 bg-black text-white rounded-full"
          >
            inquire for purchase
          </Link>
          <Link
            target="_blank"
            href={artistLink}
            className="fade text-xs w-fit whitespace-nowrap cursor-pointer font-vietnam-pro font-medium uppercase py-4 px-11 bg-black text-white rounded-full"
          >
            meet the artist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrameButtons;
