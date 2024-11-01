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
                  Member Early Hour
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
                className="lg:w-[300px] lg:h-[175px] object-cover"
                src="/demo.jpeg"
                alt="event-img"
                width={1600}
                height={900}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
