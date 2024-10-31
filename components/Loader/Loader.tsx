import { Html, useProgress } from "@react-three/drei";
import Loading from "../Svgs/Loading";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html position={[0, 0.5, 0]} fullscreen>
      <div className="absolute z-20 inset-0 h-full w-full flex items-center justify-center bg-white">
        <Loading isBlack />
      </div>
      <div
        style={{ clipPath: `inset(${progress}% 0 0 0)` }}
        className="absolute z-20 transition-all inset-0 h-full w-full flex items-center justify-center bg-white"
      >
        <Loading />
      </div>
    </Html>
  );
};

export default Loader;
