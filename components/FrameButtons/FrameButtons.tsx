import { store } from "@/store";
import Link from "next/link";
import { useSnapshot } from "valtio";

const FrameButtons = ({
  frameButtonRef,
}: {
  frameButtonRef: React.RefObject<HTMLDivElement>;
}) => {
  const { artistLink } = useSnapshot(store);

  return (
    <div
      ref={frameButtonRef}
      className="fixed transition-all -bottom-full w-full z-10 py-9 flex items-center justify-center gap-6"
    >
      {/* <button
        onClick={handleAddToCart}
        className="border-white cursor-pointer border font-vietnam-pro font-medium uppercase py-4 px-11 text-white"
      >
        add to bag
      </button> */}
      <Link
        target="_blank"
        href={artistLink}
        className="border-white cursor-pointer border font-vietnam-pro font-medium uppercase py-4 px-11 text-white"
      >
        meet the artist
      </Link>
    </div>
  );
};

export default FrameButtons;
