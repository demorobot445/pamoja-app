import ArrowNext from "../Svgs/ArrowNext";
import ArrowPrev from "../Svgs/ArrowPrev";
import Card from "./Card";

const Events = () => {
  return (
    <div className="flex flex-col w-full gap-24 mb-28">
      <div className="flex  w-full bg-primary py-7">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto px-4 lg:px-0 gap-10">
          <p className="font-bold uppercase text-white border-2 border-white font-vietnam-pro p-3 w-full lg:w-1/2">
            all events
          </p>
          <div className="flex  w-full lg:w-1/2">
            <button>
              <ArrowPrev />
            </button>
            <p className="font-bold uppercase text-white border-2 border-white font-vietnam-pro p-3 w-full">
              SUN, OCT 6
            </p>
            <button>
              <ArrowNext />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col container px-4 lg:px-0 mx-auto gap-28">
        {["Sun, Oct 6", "Sun, Oct 7", "Sun, Oct 8"].map((e, i) => {
          return <Card key={i} title={e} />;
        })}
      </div>
    </div>
  );
};

export default Events;
