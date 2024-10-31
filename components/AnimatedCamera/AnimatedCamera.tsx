import { store } from "@/store";
import { useGSAP } from "@gsap/react";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import { PerspectiveCamera as PC } from "three";
// import { Pane } from "tweakpane";

const AnimatedCamera = ({
  containerRef,
  frameButtonRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  frameButtonRef: React.RefObject<HTMLDivElement>;
}) => {
  const cameraRef = useRef<PC>(null);

  // useEffect(() => {
  //   const pane = new Pane();

  //   pane.addBinding(cameraRef.current!.position, "x", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(cameraRef.current!.position, "y", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(cameraRef.current!.position, "z", {
  //     min: -20,
  //     max: 20,
  //     step: 0.01,
  //   });
  //   pane.addBinding(cameraRef.current!.rotation, "y", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  // }, []);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current!,
            scrub: 2,
            pin: true,
            // pinSpacing: true,
            end: `bottom+=${innerHeight * 30} bottom`,
          },
        })
        //#1
        .to(cameraRef.current!.position, { x: 1.67, y: 0.27, z: 13.7 })
        .to(cameraRef.current!.rotation, { y: -1.51 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#2
        .to(cameraRef.current!.position, { x: 1.59, y: 0.27, z: 12.76 })
        .to(cameraRef.current!.rotation, { y: -1.4 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#3
        .to(cameraRef.current!.position, { x: 1.39, y: 0.27, z: 11.79 })
        .to(cameraRef.current!.rotation, { y: -1.3 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#4
        .to(cameraRef.current!.position, { x: 1.14, y: 0.27, z: 10.81 })
        .to(cameraRef.current!.rotation, { y: -1.29 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#5
        .to(cameraRef.current!.position, { x: 0.87, y: 0.27, z: 9.84 })
        .to(cameraRef.current!.rotation, { y: -1.25 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#6
        .to(cameraRef.current!.position, { x: 0.5, y: 0.27, z: 8.88 })
        .to(cameraRef.current!.rotation, { y: -1.21 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#7
        .to(cameraRef.current!.position, { x: -0.25, y: 0.27, z: 8.88 })
        .to(cameraRef.current!.rotation, { y: 1.21 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#8
        .to(cameraRef.current!.position, { x: -0.62, y: 0.27, z: 9.84 })
        .to(cameraRef.current!.rotation, { y: 1.25 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#9
        .to(cameraRef.current!.position, { x: -0.89, y: 0.27, z: 10.8 })
        .to(cameraRef.current!.rotation, { y: 1.29 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#10
        .to(cameraRef.current!.position, { x: -1.14, y: 0.27, z: 11.79 })
        .to(cameraRef.current!.rotation, { y: 1.3 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#11
        .to(cameraRef.current!.position, { x: -1.34, y: 0.27, z: 12.76 })
        .to(cameraRef.current!.rotation, { y: 1.41 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#12
        .to(cameraRef.current!.position, { x: -1.42, y: 0.27, z: 13.69 })
        .to(cameraRef.current!.rotation, { y: 1.52 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //first starting point
        .to(cameraRef.current!.position, { x: 0, y: 0.5, z: 16.46 })
        .to(cameraRef.current!.rotation, { y: 0 }, "<")
        //second room
        .to(cameraRef.current!.position, { z: 4.42 })
        //#1
        .to(cameraRef.current!.position, { x: -1.43, y: 0.27, z: 1.64 })
        .to(cameraRef.current!.rotation, { y: 1.52 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#2
        .to(cameraRef.current!.position, { x: -1.34, y: 0.27, z: 0.71 })
        .to(cameraRef.current!.rotation, { y: 1.41 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#3
        .to(cameraRef.current!.position, { x: -1.14, y: 0.27, z: -0.25 })
        .to(cameraRef.current!.rotation, { y: 1.3 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#4
        .to(cameraRef.current!.position, { x: -0.89, y: 0.27, z: -1.24 })
        .to(cameraRef.current!.rotation, { y: 1.29 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#5
        .to(cameraRef.current!.position, { x: -0.62, y: 0.27, z: -2.21 })
        .to(cameraRef.current!.rotation, { y: 1.25 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#6
        .to(cameraRef.current!.position, { x: -0.25, y: 0.27, z: -3.16 })
        .to(cameraRef.current!.rotation, { y: 1.21 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#7
        .to(cameraRef.current!.position, { x: 0.5, y: 0.27, z: -3.16 })
        .to(cameraRef.current!.rotation, { y: -1.21 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#8
        .to(cameraRef.current!.position, { x: 0.87, y: 0.27, z: -2.21 })
        .to(cameraRef.current!.rotation, { y: -1.25 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#9
        .to(cameraRef.current!.position, { x: 1.14, y: 0.27, z: -1.24 })
        .to(cameraRef.current!.rotation, { y: -1.29 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#10
        .to(cameraRef.current!.position, { x: 1.39, y: 0.27, z: -0.25 })
        .to(cameraRef.current!.rotation, { y: -1.3 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#11
        .to(cameraRef.current!.position, { x: 1.59, y: 0.27, z: 0.71 })
        .to(cameraRef.current!.rotation, { y: -1.4 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#12
        .to(cameraRef.current!.position, { x: 1.67, y: 0.27, z: 1.64 })
        .to(cameraRef.current!.rotation, { y: -1.51 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //second starting point
        .to(cameraRef.current!.position, { x: 0, y: 0.5, z: 4.42 })
        .to(cameraRef.current!.rotation, { y: 0 }, "<")

        //third room
        .to(cameraRef.current!.position, {
          z: -7.42,
        })
        //#1
        .to(cameraRef.current!.position, { x: 1.67, y: 0.27, z: -10.36 })
        .to(cameraRef.current!.rotation, { y: -1.51 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1");
    },
    { dependencies: [containerRef] }
  );

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0.5, 16.46]} />
  );
};

export default AnimatedCamera;
