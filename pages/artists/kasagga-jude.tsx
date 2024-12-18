import Artwork from "@/components/Artists/Artwork";
import Carousel from "@/components/Artists/Carousel";
import Description from "@/components/Artists/Description";
import Hero from "@/components/Artists/Hero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function KasaggaJude() {
  return (
    <>
      <Head>
        <title>Pamoja Application - {"Kasagga Jude"}</title>
      </Head>
      <Header />
      <Hero />
      <Carousel
        name={"Kasagga Jude"}
        imageUrl={"/profile-pictures/cedrick.jpg"} // update image
      />
      <Description
        name={"Kasagga Jude"}
        paragraph={[
          "Born on January 15, 1980, Kasagga Jude's artistic journey is a tapestry of creativity and passion. From an early age, his fascination with art manifested in the form of delightful doodles for his parents. Encouraged by their appreciation, Kasagga's artistic flame was ignited.",
          "His artistic talent shone through during his secondary school years when he triumphed in a Christmas postage stamp design competition for Posta Uganda. This early success set the stage for his future in the art world.",
          "Kasagga's journey took a literary turn when he ventured into book illustrations, a venture initially designed to enhance his father's works. The success of these illustrations led to requests from other authors, some of whose books garnered international acclaim, earning Kasagga two prestigious IBBY international awards for best illustrator.",
          "After completing an art course at Kyambogo University, Kasagga found himself teaching fine art to secondary school students while dedicating his free time to drawing and painting. A significant turning point occurred when he retired from teaching, allowing him to wholeheartedly embrace his true passion for painting. Since 2006, he has been a professional artist, crafting captivating works that enchant viewers with his quirky-dreamy style and subtly humorous undertones, often utilizing a candy palette dominated by the warm yellow stamp.",
          "Kasagga's art is deeply influenced by the simple beauty of everyday life and the rich social tapestry of his surroundings. He harbors a particular fondness for patterns and African motifs, where he boldly ventures to break traditional art rules to forge his distinct creative path.",
          "His early artistic endeavors captured the attention of art connoisseurs around the world, leading to his work being collected by individuals, including high-profile business figures. Notably, Java House, a renowned restaurant chain, recognized his talent, adorning some of their spaces with his evocative artwork.",
          "Kasagga Jude has left his creative imprint on a multitude of art exhibitions and fairs, including notable events like the Njovu Artists Exhibition in 2011, the Kenya Art Fair in 2015, and the Githeri Fry Art Exhibition in 2016. His passion for art extends beyond the canvas, and his commitment to the art world continues to resonate with art lovers and collectors.",
        ]}
      />
      <Artwork />
      <Footer />
    </>
  );
}
