import CarouselArtists from "@/components/Artists/CarouselArtists";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import TextLogo from "@/components/Svgs/TextLogo";
import Head from "next/head";

export default function Artists() {
  return (
    <>
      <Head>
        <title>Pamoja Application - {"Kasagga Jude"}</title>
      </Head>
      <HeaderV2 isColor />
      <section className="flex mt-[120px] items-center justify-evenly flex-col min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-112px)]">
        <h1 className="text-4xl lg:text-6xl uppercase font-vietnam-pro text-center font-bold">
          MEET THE
          <br />
          <span className="text-primary text-6xl lg:text-8xl">ARTISTS</span>
        </h1>
        <TextLogo />
      </section>
      <CarouselArtists />
      <Footer />
    </>
  );
}
