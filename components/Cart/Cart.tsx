import { store } from "@/store";
import Close from "../Svgs/Close";
import Card from "./Card";
import { useSnapshot } from "valtio";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCart } from "react-use-cart";

const Cart = () => {
  const container = useRef<HTMLDivElement>(null);
  const { isCartActive } = useSnapshot(store);
  const { isEmpty, items, cartTotal } = useCart();

  const handleCartClose = () => {
    store.isCartActive = false;
  };

  useGSAP(
    () => {
      if (isCartActive) {
        gsap.to(container.current!, { right: 0 });
      } else {
        gsap.to(container.current!, { right: "-100%" });
      }
    },
    { dependencies: [isCartActive], scope: container }
  );

  return (
    <div
      ref={container}
      className="fixed flex flex-col justify-between bg-white w-full lg:w-1/3 h-full z-20 px-7 -right-full top-0 "
    >
      <div className="flex flex-col h-fit">
        <div className="flex justify-between py-4 border-b border-black">
          <h1 className="text-4xl font-bold font-vietnam-pro uppercase">
            Cart
          </h1>
          <button onClick={handleCartClose}>
            <Close />
          </button>
        </div>
      </div>
      <div className="py-7 flex flex-col gap-7 overflow-hidden overflow-y-auto h-full">
        {isEmpty ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((e, i) => {
            return (
              <Card
                id={e.id}
                name={e.name}
                price={e.itemTotal}
                quantity={e.quantity}
                key={e.id}
                image={e.image}
              />
            );
          })
        )}
      </div>
      <div className="flex h-fit flex-col gap-4 border-t border-black py-4">
        <div className="flex justify-between">
          <h3 className="text-lg uppercase font-vietnam-pro font-light">
            Subtotal
          </h3>
          <h3 className="text-lg font-vietnam-pro font-bold">$ {cartTotal}</h3>
        </div>
        <p className="text-xs text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
        <button className="bg-black text-white uppercase font-light tracking-widest font-vietnam-pro py-4 ">
          check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
