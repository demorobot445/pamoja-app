import Cart from "@/components/Cart/Cart";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Shop from "@/components/Shop/Shop";
import CartIcon from "@/components/Svgs/CartIcon";
import { store } from "@/store";
import Head from "next/head";

export default function ShopPage() {
  const handleCart = () => {
    store.isCartActive = true;
  };
  return (
    <>
      <Head>
        <title>Pamoja Application - Shop</title>
      </Head>
      <Header isFixed />
      <button
        onClick={handleCart}
        className="fixed z-20 top-4 right-4 lg:top-9 lg:right-8"
      >
        <CartIcon />
      </button>
      <Cart />
      <Shop />
      <Footer />
    </>
  );
}
