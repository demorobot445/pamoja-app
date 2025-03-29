import TextLogo from "../Svgs/TextLogo";

const Hero = () => {
  return (
    <section className="flex mt-[120px] items-center justify-evenly flex-col min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-112px)]">
      <h1 className="text-4xl lg:text-6xl uppercase font-vietnam-pro text-center font-bold">
        MEET THE
        <br />
        <span className="text-primary text-6xl lg:text-8xl">ARTIST</span>
      </h1>
      <TextLogo />
    </section>
  );
};

export default Hero;
