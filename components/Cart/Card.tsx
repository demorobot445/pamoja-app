import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Card = ({
  id,
  name,
  price,
  image,
  quantity,
}: {
  id: string;
  price: number | undefined;
  name: string;
  quantity: number | undefined;
  image: string;
}) => {
  const { removeItem, updateItemQuantity } = useCart();

  const [currentQuantity, setQuantity] = useState<number>(quantity!);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (currentQuantity !== 1) {
      setQuantity((prev) => prev - 1);
    } else {
      removeItem(id);
    }
  };

  useEffect(() => {
    updateItemQuantity(id, currentQuantity);
  }, [currentQuantity]);

  useEffect(() => {
    setQuantity(quantity!);
  }, [quantity]);

  return (
    <div className="flex gap-2">
      <Image
        className="object-cover h-20 w-20"
        src={image}
        alt="cart-product-img"
        height={100}
        width={100}
      />
      <div className="flex flex-col w-full justify-between">
        <h2 className="text-lg uppercase font-light tracking-widest font-vietnam-pro">
          {name}
        </h2>
        <div className="flex justify-between  w-full">
          <div className="flex border border-black  items-center justify-center">
            <button onClick={handlePlus} className="h-7 w-7">
              +
            </button>
            <p className="w-7 h-7 flex items-center justify-center">
              {currentQuantity}
            </p>
            <button onClick={handleMinus} className="h-7 w-7">
              -
            </button>
          </div>
          <h3 className="text-lg font-bold">$ {price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
