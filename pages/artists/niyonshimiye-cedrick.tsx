// import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function NiyonshimiyeCedrick() {
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
      {/* <Artwork name={"NIYONSHIMIYE CEDRICK"} /> */}
      <Footer />
    </>
  );
}
