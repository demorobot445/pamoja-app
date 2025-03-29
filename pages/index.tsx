// import Cart from "@/components/Cart/Cart";
import FrameButtons from "@/components/FrameButtons/FrameButtons";
import HeaderV2 from "@/components/Header/HeaderV2";
import Render from "@/components/Render/Render";
// import CartIcon from "@/components/Svgs/CartIcon";
import Logo from "@/components/Svgs/Logo";
import { store } from "@/store";
import Head from "next/head";
import { useRef } from "react";
import { useSnapshot } from "valtio";

export default function Home() {
  const frameTl = useRef<GSAPTimeline>();

  const handleCart = () => {
    store.isCartActive = true;
  };

  const { isMenuShow } = useSnapshot(store);

  return (
    <>
      <Head>
        <title>Pamoja Application</title>
      </Head>
      {/* <button onClick={handleCart} className="fixed z-20 top-9 right-8">
        <CartIcon />
      </button>
      <Cart /> */}
      <div
        className={`${
          isMenuShow ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <HeaderV2 isRoom />
      </div>
      <div
        className={`fixed z-10 bottom-10 -translate-x-1/2 left-1/2 ${
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
