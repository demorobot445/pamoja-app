import { Html } from "@react-three/drei";
import Image from "next/image";

const Loader = () => {
  return (
    <Html position={[0, 0.5, 0]} fullscreen>
      <Image
        className="object-cover"
        unoptimized={true}
        src="/loader.gif"
        alt="loader"
        fill
      />
    </Html>
  );
};

export default Loader;
