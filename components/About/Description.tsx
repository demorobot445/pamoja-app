import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const Description = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const breakPoint = 800;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          const animation = gsap
            .timeline()
            .to(".box-2", { yPercent: isDesktop ? -80 : -110 })
            .to(".box-3", { yPercent: isDesktop ? -160 : -210 });

          ScrollTrigger.create({
            trigger: container.current!,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            animation,
          });
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="container pt-32 mx-auto h-screen px-4 lg:px-0 lg:pb-16 flex flex-col gap-16"
    >
      <div className="flex flex-col gap-2 lg:gap-4">
        <h1 className=" font-vietnam-pro font-bold text-5xl lg:text-7xl uppercase">
          About <span className="text-primary">us</span>
        </h1>
        <p className="font-vietnam-pro text-xl lg:text-2xl font-bold text-primary">
          MORE THAN A GALLERY
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="box-1 bg-[#F4F4EC] w-full flex items-center justify-center rounded-2xl p-10 relative">
          <div className="absolute h-3 w-3 bg-primary left-3 top-3 rounded-full" />
          <p className="font-vietnam-pro max-w-[670px]  leading-loose">
            Pamoja is an innovative virtual gallery and community platform
            dedicated to celebrating and empowering African artists. Our mission
            is to bridge the gap between local talent and global opportunities,
            offering a unique space to showcase your exceptional work to an
            international audience.
          </p>
        </div>
        <div className="box-2 bg-[#EFE9DB] w-full flex items-center justify-center rounded-2xl p-10 relative">
          <div className="absolute h-3 w-3 bg-primary left-3 top-3 rounded-full" />
          <p className="font-vietnam-pro max-w-[670px]  leading-loose">
            Designed with your needs in mind, Pamoja provides tools and
            resources to help you thrive in the global art scene. We believe in
            the power of art to transcend boundaries and are committed to
            ensuring that African artists are recognized and celebrated
            worldwide.
          </p>
        </div>
        <div className="box-3 bg-[#EBE4D5] w-full flex items-center justify-center rounded-2xl p-10 relative">
          <div className="absolute h-3 w-3 bg-primary left-3 top-3 rounded-full" />
          <p className="font-vietnam-pro max-w-[670px] leading-loose">
            Pamoja is more than just a gallery; it&apos;s a vibrant community
            where creativity flourishes, collaboration is encouraged, and
            opportunities for growth are abundant. Whether you are an emerging
            artist or an established creator, Pamoja supports your artistic
            journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
