import Banner from "@/components/About/Banner";
import Description from "@/components/About/Description";
import Meaning from "@/components/About/Meaning";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - About</title>
      </Head>
      <HeaderV2 isColor />
      <Description />
      <Banner />
      <Meaning />
      <Footer />
    </>
  );
}
