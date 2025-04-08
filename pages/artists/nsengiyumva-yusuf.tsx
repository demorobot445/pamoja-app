import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function NsengiyumvaYusuf() {
  const data = [
    {
      imageUrl: "/yusuf-artwork/0.jpg",
      details: [
        "Lion",
        "Original painting",
        "Acrylic on canvas",
        "Size: 58cm/ 60cm",
      ],
    },
    {
      imageUrl: "/yusuf-artwork/1.jpg",
      details: [
        "dance in colors",
        "Original painting",
        "Acrylic on canvas",
        "Size: 120cm/ 140cm",
      ],
    },
    {
      imageUrl: "/yusuf-artwork/2.jpg",
      details: [
        "b0b",
        "Original painting",
        "Plastic shoes fabrics and acrylic on canvas",
        "Size: 145cm/ 180cm",
      ],
    },
    {
      imageUrl: "/yusuf-artwork/3.jpg",
      details: [
        "kumwaro",
        "Original painting",
        "Acrylic on canvas",
        "Size: 67cm/ 57cm",
      ],
    },
    {
      imageUrl: "/yusuf-artwork/4.jpg",
      details: [
        "relationship",
        "Original painting",
        "Plastic shoes fabrics and acrylic on canvas",
        "Size: 60cm/ 60cm",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Pamoja Application - {"NSENGIYUMVA YUSUF"}</title>
      </Head>
      <HeaderV2 isColor />
      <Hero />
      <Carousel
        name={"NSENGIYUMVA YUSUF"}
        imageUrl={"/profile-pictures/yusuf.jpg"} // update image
      />
      <Description
        name={"NSENGIYUMVA YUSUF"}
        paragraph={[
          "Nsengiyumva Yusuf is a self-taught artist based in Rusizi, Rwanda. From a young age, he showed a fascination with creativity, often playing with mud and crafting imaginative objects. His journey into formal art began in 2022, marking a pivotal moment in his artistic career.",
          "Yusuf is particularly drawn to using collage techniques in his paintings, focusing on subjects that celebrate African art and culture. Through his work, he aims to blend traditional themes with contemporary expressions, offering a unique perspective on African identity.",
        ]}
      />
      <Artwork data={data} name={"NSENGIYUMVA YUSUF"} />
      <Footer />
    </>
  );
}
