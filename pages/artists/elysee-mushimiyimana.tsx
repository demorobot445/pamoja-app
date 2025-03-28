import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function ElyseeMushimiyimana() {
  return (
    <>
      <Head>
        <title>Pamoja Application - {"ELYSEE MUSHIMIYIMANA"}</title>
      </Head>
      <HeaderV2 isColor />
      <Hero />
      <Carousel
        name={"ELYSEE MUSHIMIYIMANA"}
        imageUrl={"/profile-pictures/elysee.jpg"}
      />
      <Description
        name={"ELYSEE MUSHIMIYIMANA"}
        paragraph={[
          "Elysee Mushimiyimana is a Rwandan contemporary artist born in Kamembe. His artistic journey is a fusion of his childhood passion and formal education at the School of Art in Nyundo. Specializing in African art, particularly Rwandan, he captures the essence of his surroundings through portraits, landscapes, and daily life scenes.",
          "His work is a testament to the profound influence of his mother's love and the historical events that shape his community. Employing a diverse range of media, including acrylic and oil paints, watercolors, charcoal, wood pieces, and ink, Elysee's creations transcend traditional boundaries. Beyond painting, he extends his artistic expression to illustrations, short animations, commission portraits, and sculptures.",
          "Characterized by visible brushstrokes, darkish colors, and a deliberate reduction of details, Elysee's art emanates a distinctive aesthetic. He believes that his creations not only contribute to the world's visual beauty but also serve as a powerful means of expressing his emotions.",
          "For him, art is not only a form of personal expression but a source of income and a medium to inspire and connect with people on a profound level. Elysee Mushimiyimana envisions his art as a vehicle to make the world more beautiful, convey his sentiments, generate livelihood, and inspire individuals across diverse backgrounds.",
        ]}
      />
      <Artwork />
      <Footer />
    </>
  );
}
