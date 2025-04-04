import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const CarouselArtists = () => {
  const data = [
    {
      name: "ELYSEE MUSHIMIYIMANA",
      imgUrl: "/profile-pictures/elysee.jpg",
      url: "/artists/elysee-mushimiyimana",
    },
    {
      name: "HABYARIMANA IDDY",
      imgUrl: "/profile-pictures/iddy.jpg",
      url: "/artists/habyarimana-iddy",
    },
    {
      name: "ISHIMWE SHEMA B.",
      imgUrl: "/profile-pictures/shema.jpg",
      url: "/artists/ishimwe-shema-b",
    },
    {
      name: "HABUMUGISHA OBED",
      imgUrl: "/profile-pictures/obed.jpg",
      url: "/artists/habumugisha-obed",
    },
    {
      name: "NIYONSHIMIYE CEDRICK",
      imgUrl: "/profile-pictures/cedrick.jpg",
      url: "/artists/niyonshimiye-cedrick",
    },
    {
      name: "NSENGIYUMVA YUSUF",
      imgUrl: "/profile-pictures/yusuf.jpg",
      url: "/artists/nsengiyumva-yusuf",
    },
  ];

  return (
    <section className="lg:h-screen">
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
      >
        {data.map(({ imgUrl, name, url }, i) => {
          return (
            <SwiperSlide key={i}>
              <Link href={url}>
                <div className="w-full flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <h2 className="text-2xl lg:text-6xl w-full lg:w-fit uppercase font-bold font-vietnam-pro text-center text-white bg-primary px-4 py-3">
                      {name}
                    </h2>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Image
                      className="h-[50vh] lg:h-screen w-full object-cover"
                      src={imgUrl}
                      alt="artist-img"
                      height={1920}
                      width={1080}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CarouselArtists;
