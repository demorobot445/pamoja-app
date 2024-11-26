import { Html } from "@react-three/drei";
import Image from "next/image";

const Loader = () => {
  return (
    <Html position={[0, 0.5, 0]} fullscreen>
      {/* <Image src="/loader.png" alt="loader" fill /> */}
      <video
        className="h-full w-full object-cover"
        muted
        autoPlay
        playsInline
        src="/loader.mp4"
      ></video>
    </Html>
  );
};

export default Loader;
