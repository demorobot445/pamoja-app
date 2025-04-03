import Image from "next/image";

type Props = {
  name: string;
  imageUrl: string;
};

const Carousel: React.FC<Props> = ({ imageUrl, name }) => {
  return (
    <section className="lg:min-h-screen">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <h2 className="text-2xl lg:text-6xl w-full lg:w-fit uppercase font-bold font-vietnam-pro text-center text-white bg-primary px-4 py-3">
            {name}
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="artist-img"
            height={1920}
            width={1080}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
