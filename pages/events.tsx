import EventHead from "@/components/Events/EventHead";
import Events from "@/components/Events/Events";
import Footer from "@/components/Footer/Footer";
import HeaderV2 from "@/components/Header/HeaderV2";
import Head from "next/head";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - Events</title>
      </Head>
      <section className="bg-[#ffffff]">
        <HeaderV2 isColor />
        <EventHead />
        <Events />
        <Footer />
      </section>
    </>
  );
}
