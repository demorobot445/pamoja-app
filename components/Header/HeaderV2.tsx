import Link from "next/link";
import Logo from "./Logo";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import ColorLogo from "./ColorLogo";
import Person from "../Svgs/Person";
import CloseWhite from "../Svgs/CloseWhite";

type Props = {
  isRoom?: boolean;
  isColor?: boolean;
};

const HeaderV2: React.FC<Props> = ({ isRoom = false, isColor = false }) => {
  const { moveToSecondRoom, moveToFirstRoom, moveToThirdRoom } =
    useSnapshot(store);

  const container = useRef<HTMLElement>(null);

  const tl = useRef<GSAPTimeline>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({ reversed: true })
        .to(".menu", { height: 395 })
        .to(".menu", { width: 224 })
        .to(".cover", { opacity: 1 });
    },
    { scope: container }
  );

  const handleClick = () => {
    tl.current?.reversed(!tl.current.reversed());
  };

  const handleContactOpen = contextSafe(() => {
    gsap.timeline().to(".menu", { opacity: 0 }).to(".contact-info", { top: 0 });
  });

  const handleContactClose = contextSafe(() => {
    gsap
      .timeline()
      .to(".contact-info", { top: "-100%" })
      .to(".menu", { opacity: 1 });
  });

  return (
    <>
      <header
        ref={container}
        className="fixed pointer-events-none gap-4 lg:gap-0  w-full z-20 top-0 left-0 flex justify-between p-5 lg:p-10"
      >
        <div className="contact-info pointer-events-auto fixed z-10  -top-full right-0 w-48 lg:w-80">
          <Person />
          <button
            onClick={handleContactClose}
            className="flex cursor-pointer flex-col items-center justify-center h-8 w-8 lg:h-12 lg:w-12 bg-primary rounded-full absolute right-10 lg:right-18 bottom-[100px] lg:bottom-42 *:w-5 *:h-5 lg:*:w-8 lg:*:h-8"
          >
            <CloseWhite />
          </button>
          <div className="flex flex-col absolute gap-5 left-1/2 -translate-x-1/2 top-6 lg:top-16 text-[8px] lg:text-xs">
            <h1 className="text-center font-vietnam-pro text-primary">
              CEO & FOUNDER
              <br /> <span className="font-bold">Ria Rwayitarev</span>
            </h1>
            <h2 className="text-center font-vietnam-pro text-primary">
              riawayitare@pamoja.art
              <br /> @we.are.pamoja
              <br /> www.pamoja.art
            </h2>
          </div>
        </div>

        <Link href="/" className="h-10 pointer-events-auto">
          {isColor ? <ColorLogo /> : <Logo />}
        </Link>
        <div className="menu bg-white pointer-events-auto rounded-md relative h-10 w-10 p-3 overflow-hidden">
          <button
            onClick={handleClick}
            className={`absolute z-10 top-0 right-0 group h-10 w-10 ${
              isColor ? "bg-primary" : "bg-white"
            } rounded-md p-[0.63em] flex items-center justify-center cursor-pointer`}
          >
            <div
              className={`absolute h-[0.38em] w-[0.38em] ${
                isColor ? "bg-white" : "bg-primary"
              } rounded-full transition-all left-[0.3em] group-hover:left-[0.63em]`}
            />
            <div
              className={`absolute h-[0.38em] w-[0.38em] ${
                isColor ? "bg-white" : "bg-primary"
              } rounded-full transition-all right-[0.3em] group-hover:right-[0.63em]`}
            />
            <div
              className={`absolute h-[0.38em] w-[0.38em] ${
                isColor ? "bg-white" : "bg-primary"
              } rounded-full transition-all top-[0.3em] group-hover:top-[0.63em]`}
            />
            <div
              className={`absolute h-[0.38em] w-[0.38em] ${
                isColor ? "bg-white" : "bg-primary"
              } rounded-full transition-all bottom-[0.3em] group-hover:bottom-[0.63em]`}
            />
          </button>
          <div className="cover flex flex-col gap-8 opacity-0">
            <button
              onClick={handleContactOpen}
              className="font-vietnam-pro cursor-pointer text-xs rounded-full px-3 py-1.5 bg-primary w-fit flex items-center justify-center gap-1"
            >
              <span className="block rounded-full h-1.5 w-1.5 bg-black" />
              Contact us
            </button>
            <Image
              src="/menu-placeholder.png"
              alt="image"
              height={200}
              width={400}
              className="w-full object-contain"
            />
            <nav className="flex gap-1 flex-col">
              <Link
                className="text-xs font-vietnam-pro uppercase"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-xs font-vietnam-pro uppercase"
                href="/artists"
              >
                Artists
              </Link>
              <Link
                className="text-xs font-vietnam-pro uppercase"
                href="/events"
              >
                Events
              </Link>
              <Link className="text-xs font-vietnam-pro uppercase" href="/shop">
                Shop
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {isRoom ? (
        <p className="fixed z-10 text-center text-white font-vietnam-pro w-full bottom-2 lg:bottom-3 text-xs lg:text-sm">
          Designed and Developed by Mars Black
        </p>
      ) : (
        <></>
      )}
      {isRoom ? (
        <div className="h-10 w-full fixed z-10 bottom-5 lg:bottom-10 flex items-center gap-4 lg:gap-10 justify-center">
          <button
            onClick={moveToFirstRoom}
            className="font-vietnam-pro cursor-pointer text-xs lg:text-base uppercase rounded-full px-3 py-1.5 text-white font-bold w-fit flex items-center justify-center gap-1"
          >
            <span className="block rounded-full h-1.5 w-1.5 bg-primary" />
            room 1
          </button>
          <button
            onClick={moveToSecondRoom}
            className="font-vietnam-pro cursor-pointer text-xs lg:text-base uppercase rounded-full px-3 py-1.5 text-white font-bold w-fit flex items-center justify-center gap-1"
          >
            <span className="block rounded-full h-1.5 w-1.5 bg-primary" />
            room 2
          </button>
          <button
            onClick={moveToThirdRoom}
            className="font-vietnam-pro cursor-pointer text-xs lg:text-base uppercase rounded-full px-3 py-1.5 text-white font-bold w-fit flex items-center justify-center gap-1"
          >
            <span className="block rounded-full h-1.5 w-1.5 bg-primary" />
            room 3
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HeaderV2;
