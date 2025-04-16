import { Html, useProgress } from "@react-three/drei";
import Image from "next/image";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html position={[0, 0, 0]} fullscreen>
      <Image
        className={`object-cover transition-all duration-1000 delay-[1.2s] ${
          progress === 100 ? "opacity-0" : "opacity-100"
        }`}
        unoptimized={true}
        src="/loader.gif"
        alt="loader"
        fill
      />
    </Html>
  );
};

export default Loader;
