import Image from "next/image";

const Shop = () => {
  return (
    <section className="flex flex-wrap ">
      {[...Array(4)].map((e, i) => {
        return (
          <div className="w-full cursor-pointer group lg:w-1/2 relative overflow-hidden">
            <Image
              className="w-full h-full"
              src={`/shop/${i}.png`}
              alt="product-img"
              height={1080}
              width={1920}
            />
            <div className="absolute transition-all w-full h-full flex items-center justify-center flex-col gap-4 bg-black/50 z-10 left-0 -top-full group-hover:top-0">
              <h2 className="text-4xl text-white font-bold font-vietnam-pro uppercase">
                PAMOJA
              </h2>
              <h2 className="text-4xl text-white font-bold font-vietnam-pro uppercase">
                TOTE BAG
              </h2>
              <h2 className="text-4xl text-white font-normal font-vietnam-pro">
                50.00
              </h2>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Shop;
