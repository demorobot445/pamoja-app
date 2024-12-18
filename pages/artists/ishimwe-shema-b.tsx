import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function IshimweShemaB() {
  return (
    <>
      <Head>
        <title>Pamoja Application - {"ISHIMWE SHEMA B."}</title>
      </Head>
      <Header />
      <Hero />
      <Carousel
        name={"ISHIMWE SHEMA B."}
        imageUrl={"/profile-pictures/shema.jpg"}
      />
      <Description
        name={"ISHIMWE SHEMA B."}
        paragraph={[
          "ISHIMWE SHEMA Bienvenu's journey into art began during childhood, but it wasn't until 2020, amidst the COVID-19 pandemic, that he ventured into it professionally. Guided by his mother, Ishimwe found his artistic voice, which centers on the deep connection between nature and humanity.",
          "His artworks often feature animals, serving as messengers of his reflections on African culture and ways of life. Beyond paintings, Ishimwe expresses his creativity through sculptures crafted from recycled materials, and distinctive African jewelry like horn necklaces and bracelets.",
          "His art is inspired by a belief in the power of humanity, peace, and love, as he strives to convey meaningful messages through his creations.",
        ]}
      />
      <Artwork />
      <Footer />
    </>
  );
}
