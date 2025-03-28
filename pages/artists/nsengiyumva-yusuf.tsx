import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function NsengiyumvaYusuf() {
  return (
    <>
      <Head>
        <title>Pamoja Application - {"NSENGIYUMVA YUSUF"}</title>
      </Head>
      <HeaderV2 isColor />
      <Hero />
      <Carousel
        name={"NSENGIYUMVA YUSUF"}
        imageUrl={"/profile-pictures/yusufu.jpg"} // update image
      />
      <Description
        name={"NSENGIYUMVA YUSUF"}
        paragraph={[
          "Nsengiyumva Yusuf is a self-taught artist based in Rusizi, Rwanda. From a young age, he showed a fascination with creativity, often playing with mud and crafting imaginative objects. His journey into formal art began in 2022, marking a pivotal moment in his artistic career.",
          "Yusuf is particularly drawn to using collage techniques in his paintings, focusing on subjects that celebrate African art and culture. Through his work, he aims to blend traditional themes with contemporary expressions, offering a unique perspective on African identity.",
        ]}
      />
      <Artwork />
      <Footer />
    </>
  );
}
