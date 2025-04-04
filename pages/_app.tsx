import "@/styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import type { AppProps } from "next/app";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${beVietnamPro.variable} font-sans overflow-x-hidden bg-background`}
    >
      <Component {...pageProps} />
    </main>
  );
}
