import Image from "next/image";
import Monogram from "../Svgs/Monogram";
import TextLogo from "../Svgs/TextLogo";

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row w-full relative">
      <div className="w-full lg:w-1/2 min-h-[50vh] flex items-center justify-center">
        <Monogram />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div className="relative py-10 lg:py-0 flex flex-col items-center justify-center z-10">
          <TextLogo isWhite />
          <div className="my-20">
            <h3 className="text-5xl lg:text-6xl text-center uppercase font-bold font-vietnam-pro text-white">
              where
            </h3>
            <h3 className="text-5xl lg:text-6xl text-center uppercase font-bold font-vietnam-pro text-black">
              rwandan
            </h3>
            <h3 className="text-5xl lg:text-6xl text-center uppercase font-bold font-vietnam-pro text-white">
              art
            </h3>
            <h3 className="text-5xl lg:text-6xl text-center uppercase font-bold font-vietnam-pro text-black">
              meet the
            </h3>
            <h3 className="text-5xl lg:text-6xl text-center uppercase font-bold font-vietnam-pro text-white">
              world
            </h3>
          </div>
          <TextLogo isWhite />
        </div>
        <Image src="/about/banner-bg.png" alt="background" fill />
      </div>
    </section>
  );
};

export default Banner;
