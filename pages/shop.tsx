import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Shop from "@/components/Shop/Shop";
import Head from "next/head";

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - Shop</title>
      </Head>
      <HeaderV2 />
      <Shop />
      <Footer />
    </>
  );
}
