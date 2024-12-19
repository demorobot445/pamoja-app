import Image from "next/image";

const Card = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <h3 className="text-6xl font-bold font-vietnam-pro">{title}</h3>
      <div className="flex flex-col mt-10 gap-20">
        {[...Array(2)].map((e, i) => {
          return (
            <div key={i} className="flex flex-col lg:flex-row gap-16">
              <div className="flex flex-col">
                <h4 className="text-2xl text-primary font-bold font-vietnam-pro mb-10">
                  Lauching Today
                </h4>
                <p className="text-2xl font-bold font-vietnam-pro">
                  9:30-10:30am
                </p>
                <p className="text-2xl font-light font-vietnam-pro">PAMOJA</p>
                <p className="text-2xl font-light font-vietnam-pro max-w-[260px]">
                  Gallery experience, for members
                </p>
              </div>
              <Image
                className="lg:w-[175px] lg:h-[300px] object-cover"
                src="/event.jpeg"
                alt="event-img"
                width={900}
                height={1600}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
