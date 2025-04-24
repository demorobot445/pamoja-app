import FrameButtons from "@/components/FrameButtons/FrameButtons";
import HeaderV2 from "@/components/Header/HeaderV2";
import Render from "@/components/Render/Render";
import Logo from "@/components/Svgs/Logo";
import { store } from "@/store";
import Head from "next/head";
import { useRef } from "react";
import { useSnapshot } from "valtio";

export default function Home() {
  const frameTl = useRef<GSAPTimeline>(null);

  const { isMenuShow } = useSnapshot(store);

  return (
    <>
      <Head>
        <title>Pamoja Application</title>
      </Head>
      <div
        className={`${
          isMenuShow ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <HeaderV2 isRoom />
      </div>
      <div
        className={`fixed z-10 bottom-10 pointer-events-none -translate-x-1/2 left-1/2 ${
          isMenuShow ? "opacity-0" : "opacity-100"
        } transition-opacity`}
      >
        <Logo />
      </div>
      <Render frameTl={frameTl} />
      <FrameButtons frameTl={frameTl} />
    </>
  );
}
