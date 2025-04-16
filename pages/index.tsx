import FrameButtons from "@/components/FrameButtons/FrameButtons";
import HeaderV2 from "@/components/Header/HeaderV2";
import Render from "@/components/Render/Render";
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

      <Render frameTl={frameTl} />
      <FrameButtons frameTl={frameTl} />
    </>
  );
}
