const FrameButtons = ({
  frameButtonRef,
}: {
  frameButtonRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={frameButtonRef}
      className="fixed transition-all -bottom-full w-full z-10 py-9 flex items-center justify-center gap-6"
    >
      <button className="border-white cursor-pointer border font-vietnam-pro font-medium uppercase py-4 px-11 text-white">
        add to bag
      </button>
      <button className="border-white cursor-pointer border font-vietnam-pro font-medium uppercase py-4 px-11 text-white">
        meet the artist
      </button>
    </div>
  );
};

export default FrameButtons;
