import FrameButtons from "@/components/FrameButtons/FrameButtons";
import Render from "@/components/Render/Render";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const frameButtonRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Pamoja Application</title>
      </Head>
      <Render frameButtonRef={frameButtonRef} />
      <FrameButtons frameButtonRef={frameButtonRef} />
    </>
  );
}
