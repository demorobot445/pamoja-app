import Image from "next/image";

const Artwork = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="flex flex-col gap-6 max-w-[500px] mb-5">
          <h3 className="text-4xl uppercase font-bold font-vietnam-pro  text-primary">
            ARTWORKS DETAILS
          </h3>
          <h3 className="text-4xl uppercase font-bold font-vietnam-pro">
            HABBYARIMANA IDDY'S PORTFOLIO
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-24">
          {[...Array(2)].map((e, i) => {
            return (
              <div key={i} className="flex flex-col gap-6">
                <Image
                  className="lg:w-[500px] lg:h-[520px] object-cover mb-3"
                  src={`/artwork/${i}.png`}
                  alt="artwork-img"
                  height={1920}
                  width={1080}
                />
                <p className="text-center font-bold">Title: confidant</p>
                <p className="text-center font-bold">Original painting</p>
                <p className="text-center font-bold">Acrylic on canvas</p>
                <p className="text-center font-bold">Size: 115cm/105cm</p>
                <p className="text-center font-bold">Price: 800$</p>
                <button className="mt-3 mx-auto uppercase font-bold text-white bg-primary w-fit py-4 px-8">
                  add to bag
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Artwork;
