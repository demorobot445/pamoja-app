import { Internet, Mail, Share } from "@/components/Contact/Svgs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Pamoja Application - Contact</title>
      </Head>
      <Header />
      <main className="flex flex-col gap-4 py-10 px-4 max-w-[600px] mx-auto">
        <h1 className="text-5xl lg:text-7xl text-primary font-bold font-vietnam-pro drop-shadow-[1px_1px_3px_rgba(210,104,30,1)]">
          Contact
        </h1>
        <hr className="border-primary" />
        <div className="flex flex-col text-primary text-2xl lg:text-4xl gap-2 font-vietnam-pro">
          <p>CEO & Founder</p>
          <p className="font-bold">Ria Rwayitare</p>

          <Link
            className="flex gap-2 items-center"
            href="mailto:riarwayitare@pamoja.art"
          >
            <Mail />
            <span>riarwayitare@pamoja.art</span>
          </Link>
          <Link
            className="flex gap-2 items-center"
            href="mailto:@we.are.pamoja"
          >
            <Share />
            <span>@we.are.pamoja</span>
          </Link>
          <Link
            target="_blank"
            className="flex gap-2 items-center"
            href="https://www.pamoja.art"
          >
            <Internet /> <span>www.pamoja.art</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
