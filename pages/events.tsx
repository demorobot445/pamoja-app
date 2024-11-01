import EventHead from "@/components/Events/EventHead";
import Events from "@/components/Events/Events";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - Events</title>
      </Head>
      <section className="bg-[#ffffff]">
        <Header />
        <EventHead />
        <Events />
        <Footer />
      </section>
    </>
  );
}
