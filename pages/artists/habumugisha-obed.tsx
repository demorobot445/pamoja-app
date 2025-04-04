import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function HabumugishaObed() {
  const data = [
    {
      imageUrl: "/obed-artwork/0.jpg",
      details: [
        "Title: adherent",
        "Original painting",
        "Acrylic on canvas",
        "Size: 100cm/ 140cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/1.jpg",
      details: [
        "Title: nyamishaba",
        "Original painting",
        "Acrylic on canvas",
        "Size: 66cm/ 49cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/2.jpg",
      details: [
        "Title: nyamishaba",
        "Original painting",
        "Acrylic on canvas",
        "Size: 66cm/ 49cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/3.jpg",
      details: [
        "Title: mamamwiza",
        "Original painting",
        "Acrylic on canvas",
        "Size: 120cm/ 140cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/4.jpg",
      details: [
        "Title: cyato landscape 1",
        "Original painting",
        "Acrylic on canvas",
        "Size: 90cm/ 120cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/5.jpg",
      details: [
        "Title: nyamishaba",
        "Original painting",
        "Acrylic on canvas",
        "Size: 66cm/ 49cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/6.jpg",
      details: [
        "Title: ibirunga [volcanoes]",
        "Original painting",
        "Acrylic on canvas",
        "Size: 66cm/ 49cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/7.jpg",
      details: [
        "Title: liberity l",
        "Original painting",
        "Acrylic on canvas",
        "Size: 160cm/ 105cm",
      ],
    },
    {
      imageUrl: "/obed-artwork/8.jpg",
      details: [
        "Title: hunter",
        "Original painting",
        "Acrylic on canvas",
        "Size: 120cm/ 120cm ",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Pamoja Application - {"HABUMUGISHA OBED"}</title>
      </Head>
      <HeaderV2 isColor />
      <Hero />
      <Carousel
        name={"HABUMUGISHA OBED"}
        imageUrl={"/profile-pictures/obed.jpg"}
      />
      <Description
        name={"HABUMUGISHA OBED"}
        paragraph={[
          "HABUMUGISHA Obed was born in 2002 and raised in Rwanda.from a young age ,they displayed a keen interest in art, frequently drawing, painting,and sculpting scenes inspired by their surroundings.Early exposure to local galleries and museums ignited a passion for creativity that would define their future artistic endeavors.",
          "Hobed's work is a reflection of their deep connection to Rwandan culture and landscapes, blending traditional influences with contemporary artistic expressions.Through their art, HABUMUGISHA Obed seeks to capture and share the beauty and stories of their heritage, offering viewers a glimpse into the rich tapestry of Rwandan life.",
        ]}
      />
      <Artwork data={data} name={"HABUMUGISHA OBED"} />
      <Footer />
    </>
  );
}
