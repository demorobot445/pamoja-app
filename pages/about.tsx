import Banner from "@/components/About/Banner";
import Description from "@/components/About/Description";
import Meaning from "@/components/About/Meaning";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - About</title>
      </Head>
      <Header />
      <Description />
      <Banner />
      <Meaning />
      <Footer />
    </>
  );
}
