import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function IshimweShemaB() {
  const data = [
    {
      imageUrl: "/shema-artwork/0.jpg",
      details: [
        "Title: emancipation III",
        "Original painting",
        "Acrylic on canvas",
        "Size: 115cm/ 100cm",
      ],
    },
    {
      imageUrl: "/shema-artwork/1.jpg",
      details: [
        "Title: RWANDA NZIZA",
        "Original painting",
        "Acrylic on canvas",
        "Size: 80cm/ 70cm",
      ],
    },
    {
      imageUrl: "/shema-artwork/2.jpg",
      details: [
        "Title: emancipation II",
        "Original artwork",
        "Acrylic on canvas",
        "Size: 130cm/103cm",
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Pamoja Application - {"ISHIMWE SHEMA B."}</title>
      </Head>
      <HeaderV2 isColor />
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
      <Artwork data={data} name={"ISHIMWE SHEMA B."} />
      <Footer />
    </>
  );
}
