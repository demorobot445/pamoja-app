import Link from "next/link";
import Logo from "../Svgs/Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="gap-10 w-full flex flex-col items-center justify-center py-9 relative">
      <div className="relative z-10 *:w-[200px]">
        <Logo />
      </div>
      <div className="flex flex-wrap gap-9 relative z-10 items-center lg:gap-16 justify-center w-full *:uppercase font-vietnam-pro *:font-medium text-white">
        <Link href="/about">about us</Link>
        <Link href="/artists">artist</Link>
        <Link href="/shop">shop</Link>
        <Link href="/">contact</Link>
        <Link href="/events">events</Link>
      </div>
      <p className="text-xs font-vietnam-pro text-center uppercase relative z-10 text-white">
        All right reserved to PAMOJA ART LTD
      </p>
      <Image
        className="object-cover"
        src="/menu-bg.png"
        fill
        alt="background"
      />
    </footer>
  );
};

export default Footer;
