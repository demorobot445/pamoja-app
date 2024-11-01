import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <section className="lg:min-h-screen">
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
      >
        {["lauren c.", "kiran l.", "joson k.", "faizo k."].map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <h2 className="text-6xl w-full lg:w-fit uppercase font-bold font-vietnam-pro text-center text-white bg-primary px-4 py-3">
                    {e}
                  </h2>
                </div>
                <div className="w-full lg:w-1/2">
                  <Image
                    className="h-full w-full object-cover"
                    src="/artists/0.png"
                    alt="artist-img"
                    height={1920}
                    width={1080}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
