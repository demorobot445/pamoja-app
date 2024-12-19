import { useState } from "react";
import ArrowNext from "../Svgs/ArrowNext";
import ArrowPrev from "../Svgs/ArrowPrev";
import Card from "./Card";

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date("12-19-2024")); // Initial date is today's date

  // Utility function to format the date
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // Function to go to the next day
  const goToNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1); // Increment day by 1
    setCurrentDate(nextDate);
  };

  // Function to go to the previous day
  const goToPrevDate = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1); // Decrement day by 1
    setCurrentDate(prevDate);
  };

  return (
    <div className="flex flex-col w-full gap-24 mb-28">
      <div className="flex w-full bg-primary py-7">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto px-4 lg:px-0 gap-10">
          <p className="font-bold uppercase text-white border-2 border-white font-vietnam-pro p-3 w-full lg:w-1/2">
            all events
          </p>
          <div className="flex w-full lg:w-1/2">
            <button onClick={goToPrevDate}>
              <ArrowPrev />
            </button>
            <p className="font-bold uppercase text-white border-2 border-white font-vietnam-pro p-3 w-full">
              {formatDate(currentDate)}
            </p>
            <button onClick={goToNextDate}>
              <ArrowNext />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col container px-4 lg:px-0 mx-auto gap-28">
        {["Thur, Dec 19", "Thur, Dec 19"].map((e, i) => {
          return <Card key={i} title={e} />;
        })}
      </div>
    </div>
  );
};

export default Events;
