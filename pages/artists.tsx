import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function ArtistsPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - Meet The Artists</title>
      </Head>
      <Header />
      <Hero />
      <Carousel />
      <Description />
      <Artwork />
      <Footer />
    </>
  );
}
