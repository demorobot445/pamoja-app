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
        name={"HABYARIMANA IDDY"}
        paragraph={[
          "Habyarimana Iddy, born in 1998 in Rusizi, Western Province, Rwanda, is a professional artist who lives and works in Rwanda. From a young age, Habyarimana dreamed of becoming an architect, but by the age of 15 he found himself drawn to the world of fine art. Influenced by his teachers and classmates who recognized his talent for capturing images from student books, he chose to pursue art in secondary school, eventually enrolling at École d'Art de Nyundo.",
          "In 2016, Habyarimana put his first brush to canvas, embarking on a journey that would solidify his love for portraiture and figurative abstraction. His work often focuses on the lives and experiences of Black people, capturing moments of humanity with a focus on the unique aspects of individual faces. He has long been fascinated by how we share common physical features yet remain visually distinct from one another. This curiosity has driven him to study and portray these differences in his artwork.",
          "Primarily working with oil paints and acrylics, Habyarimana’s portraits lean toward realism. His technique often involves the application of both thick and thin layers of paint, which lends depth and texture to his works. Through his art, he explores the complexities of identity and human connection.",
          "Habyarimana believes that 'art is life, and painting is oxygen.' To him, art is a vital force that brings joy, freedom, and an ongoing opportunity to learn. It allows him to connect with people and express the deeper meanings behind their visual language, sharing those experiences with the world.",
        ]}
      />
      <Artwork data={data} name={"HABUMUGISHA OBED"} />
      <Footer />
    </>
  );
}
