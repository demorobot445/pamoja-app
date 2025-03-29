import { store } from "@/store";
import Image from "next/image";
import { useCart } from "react-use-cart";

const Shop = () => {
  const { addItem } = useCart();

  const handleAddToCart = (
    id: number,
    price: number,
    name: string,
    image: string
  ) => {
    addItem({
      id: `${id}`,
      name,
      price,
      quantity: 1,
      image,
    });
    store.isCartActive = true;
  };

  return (
    <section className="flex flex-wrap ">
      {["TOTE BAG", "TOTE BAG"].map((e, i) => {
        return (
          <div
            key={i}
            onClick={() => handleAddToCart(i, 50, e, `/shop/${i}.png`)}
            className="w-full cursor-pointer group lg:w-1/2 relative overflow-hidden"
          >
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
                {e}
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
