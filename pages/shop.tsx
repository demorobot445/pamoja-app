import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Shop from "@/components/Shop/Shop";
import Head from "next/head";

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - Shop</title>
      </Head>
      <Header isFixed />
      <Shop />
      <Footer />
    </>
  );
}
