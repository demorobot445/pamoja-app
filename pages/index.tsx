import Cart from "@/components/Cart/Cart";
import FrameButtons from "@/components/FrameButtons/FrameButtons";
import Render from "@/components/Render/Render";
import CartIcon from "@/components/Svgs/CartIcon";
import { store } from "@/store";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const frameButtonRef = useRef<HTMLDivElement>(null);

  const handleCart = () => {
    store.isCartActive = true;
  };

  return (
    <>
      <Head>
        <title>Pamoja Application</title>
      </Head>
      <button onClick={handleCart} className="fixed z-20 top-9 right-8">
        <CartIcon />
      </button>
      <Cart />
      <Render frameButtonRef={frameButtonRef} />
      <FrameButtons frameButtonRef={frameButtonRef} />
    </>
  );
}
