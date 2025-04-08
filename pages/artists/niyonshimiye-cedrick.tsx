import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function NiyonshimiyeCedrick() {
  const data = [
    {
      imageUrl: "/cedrick-artwork/0.jpg",
      details: [
        "aqua life",
        "Original painting",
        "Acrylic on canvas",
        "Size: 100cm/140cm",
      ],
    },
    {
      imageUrl: "/cedrick-artwork/1.jpg",
      details: [
        "no matter what Mather is Mather",
        "Original painting",
        "Acrylic on canvas",
        "Size: 66cm/80cm",
      ],
    },
    {
      imageUrl: "/cedrick-artwork/2.jpg",
      details: [
        "God of zebra = colors",
        "Original painting",
        "Acrylic on canvas",
        "Size: 106cm/73cm",
      ],
    },
    {
      imageUrl: "/cedrick-artwork/3.jpg",
      details: [
        "east African birds",
        "Original painting",
        "Acrylic on canvas",
        "Size: 100cm/160cm",
      ],
    },
    {
      imageUrl: "/cedrick-artwork/4.jpg",
      details: [
        "binary numbers",
        "Original painting",
        "Acrylic on canvas",
        "Size: 70cm/60cm",
      ],
    },
    {
      imageUrl: "/cedrick-artwork/5.jpg",
      details: [
        "blessings",
        "Original painting",
        "Acrylic on canvas",
        "Size: 100cm/71cm",
      ],
    },
    {
      imageUrl: "/cedrick-artwork/6.jpg",
      details: [
        "wastes over canvas",
        "Original painting collage",
        "Found objects Acrylic on canvas",
        "Size: 113cm/64cm",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Pamoja Application - {"NIYONSHIMIYE CEDRICK"}</title>
      </Head>
      <HeaderV2 isColor />
      <Hero />
      <Carousel
        name={"NIYONSHIMIYE CEDRICK"}
        imageUrl={"/profile-pictures/cedrick.jpg"}
      />
      <Description
        name={"NIYONSHIMIYE CEDRICK"}
        paragraph={[
          "Wadam is a Rwandan artist who has been actively creating since 2015, drawing inspiration from his childhood experiences with clay toys and local artists like Tombora. Despite not attending art school, Wadam developed his creative abilities through exposure to galleries and his own innate curiosity.",
          "His journey began with street art, specializing in wall paintings and collages made from recycled materials such as stones, toys, jewelry, plastics, and zips. His unique approach stems from a belief that every item possesses its own positive uniqueness, reflecting personal emotions.",
          "Wadam's artistic expression focuses on painting animals, Pan-Africanism art, and depictions of Africans in various styles, often incorporating elements like fur textures and binary numbers. His work is a celebration of cultural identity and personal narrative, beautifully decorating emotions through vibrant and thought-provoking imagery.",
        ]}
      />
      <Artwork data={data} name={"NIYONSHIMIYE CEDRICK"} />
      <Footer />
    </>
  );
}
