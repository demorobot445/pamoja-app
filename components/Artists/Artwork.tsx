import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  data: { imageUrl: string; details: string[] }[];
};

const Artwork: React.FC<Props> = ({ name, data }) => {
  return (
    <section className="w-full bg-white py-24">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="flex flex-col gap-6 max-w-[500px] mb-5">
          <h3 className="text-4xl uppercase font-bold font-vietnam-pro  text-primary">
            ARTWORKS DETAILS
          </h3>
          <h3 className="text-4xl uppercase font-bold font-vietnam-pro">
            {name}&apos;S PORTFOLIO
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-24">
          {data.map(({ details, imageUrl }, i) => {
            return (
              <div key={i} className="flex flex-col gap-6">
                <Image
                  className="lg:w-[500px] lg:h-[520px] object-contain mb-3"
                  src={imageUrl}
                  alt="artwork-img"
                  height={1920}
                  width={1080}
                />

                {details.map((e, i) => {
                  return (
                    <p key={i} className="text-center font-bold">
                      {e}
                    </p>
                  );
                })}
                <Link
                  href="mailto:riawayitare@pamoja.art"
                  className="text-xs mx-auto w-fit whitespace-nowrap cursor-pointer font-vietnam-pro font-medium uppercase py-4 px-11 bg-black text-white rounded-full"
                >
                  Inquire for purchase
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Artwork;
