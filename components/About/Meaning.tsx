import Image from "next/image";
import Monogram from "../Svgs/Monogram";

const Meaning = () => {
  return (
    <section className="container px-4 lg:px-0 mx-auto my-16 flex flex-col items-center gap-28">
      <h2 className="text-center font-bold font-vietnam-pro uppercase text-5xl lg:text-6xl">
        the meaning behind the logo
      </h2>
      <div className="grid lg:grid-cols-3 items-center ">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/about/icons/1.png" alt="icon" height={100} width={100} />
          <h3 className="text-center font-vietnam-pro font-bold text-3xl lg:text-4xl">
            DAGI KNOT
          </h3>
          <h4 className="text-center font-vietnam-pro font-medium">
            African symbol of unity (umoja)
          </h4>
          <p className="text-center font-vietnam-pro">
            To strive for and maintain unity in the family, community, nation,
            and race.
          </p>
        </div>
        <div className="flex py-16 lg:py-0 items-center justify-center *:w-1/2">
          <Monogram />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/about/icons/2.png" alt="icon" height={100} width={100} />
          <h3 className="text-center font-vietnam-pro text-3xl lg:text-4xl font-bold">
            FUNTUNFUNEFU DENKYEM FUNEFU
          </h3>
          <h4 className="text-center font-vietnam-pro font-medium">
            Symbol of democracy, and unity in diversity.
          </h4>
          <p className="text-center font-vietnam-pro">
            The symbol is two crocodiles that share one stomach.
          </p>
        </div>
      </div>
      <p className="text-center max-w-[800px] font-vietnam-pro text-xl leading-loose">
        The logo combines two different symbols from African culture that
        represent unity By hand-drawing and then digitalizing the illustration,
        the style of this logo aims to recreate the hand-drawn tribal art of
        African culture
      </p>
    </section>
  );
};

export default Meaning;
