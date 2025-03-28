import Image from "next/image";
import Link from "next/link";

const EventHead = () => {
  return (
    <div className="container pt-10 px-4 lg:px-0 mx-auto">
      <h1 className="mt-28 mb-9 text-5xl lg:text-7xl uppercase font-bold font-vietnam-pro">
        Events
      </h1>
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center pb-6">
        <h3 className="text-2xl uppercase font-bold font-vietnam-pro text-primary">
          UPCOMING EVENTS
        </h3>
        <Link
          href="#"
          className="flex text-2xl uppercase font-bold font-vietnam-pro text-[#D9D9D9]"
        >
          OUR MAILING LIST
          <Image src="/arrow-up.png" alt="icon" height={36} width={35} />
        </Link>
      </div>
    </div>
  );
};

export default EventHead;
