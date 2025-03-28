import { store } from "@/store";
import { useGSAP } from "@gsap/react";
import { Box, PerspectiveCamera, useCursor } from "@react-three/drei";
import gsap from "gsap";
import { Suspense, useEffect, useRef, useState } from "react";
import { PerspectiveCamera as PC } from "three";
import { Arrow } from "../Models/Arrow";
// import { Pane } from "tweakpane";

const AnimatedCamera = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const cameraRef = useRef<PC>(null);

  const gsapTimeline = useRef<GSAPTimeline | null>(null);

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

  useEffect(() => {
    store.moveCamera = (x, y, z, rotateY) => {
      gsap
        .timeline()
        .to(cameraRef.current!.position, { x, y, z })
        .to(cameraRef.current!.rotation, { y: rotateY }, "<");
      gsap.set(document.body, { overflow: "hidden" });
    };
  }, []);

  useGSAP(
    () => {
      gsapTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current!,
            scrub: 1,
            pin: true,
            end: `bottom+=${innerHeight * 40} bottom`,
          },
        })
        //#1
        .to(cameraRef.current!.position, { x: 1.2, y: 0.27, z: 13.72 })
        .to(cameraRef.current!.rotation, { y: -1.51 }, "<")

        //#2
        .to(cameraRef.current!.position, { x: 1.1, y: 0.27, z: 12.84 })
        .to(cameraRef.current!.rotation, { y: -1.4 }, "<")

        //#3
        .to(cameraRef.current!.position, { x: 1, y: 0.27, z: 11.89 })
        .to(cameraRef.current!.rotation, { y: -1.3 }, "<")

        //#4
        .to(cameraRef.current!.position, { x: 0.78, y: 0.27, z: 10.9 })
        .to(cameraRef.current!.rotation, { y: -1.29 }, "<")

        //#5
        .to(cameraRef.current!.position, { x: 0.5, y: 0.27, z: 9.97 })
        .to(cameraRef.current!.rotation, { y: -1.25 }, "<")

        //#6
        .to(cameraRef.current!.position, { x: 0.1, y: 0.27, z: 9.018 })
        .to(cameraRef.current!.rotation, { y: -1.21 }, "<")

        //#7
        .to(cameraRef.current!.position, { x: 0.15, y: 0.27, z: 9.018 })
        .to(cameraRef.current!.rotation, { y: 1.21 }, "<")

        //#8
        .to(cameraRef.current!.position, { x: -0.2, y: 0.27, z: 9.975 })
        .to(cameraRef.current!.rotation, { y: 1.25 }, "<")

        //#9
        .to(cameraRef.current!.position, { x: -0.45, y: 0.27, z: 10.93 })
        .to(cameraRef.current!.rotation, { y: 1.29 }, "<")

        // #10
        .to(cameraRef.current!.position, { x: -0.65, y: 0.27, z: 11.92 })
        .to(cameraRef.current!.rotation, { y: 1.3 }, "<")

        //#11
        .to(cameraRef.current!.position, { x: -0.85, y: 0.27, z: 12.83 })
        .to(cameraRef.current!.rotation, { y: 1.41 }, "<")

        //#12
        .to(cameraRef.current!.position, { x: -0.95, y: 0.27, z: 13.705 })
        .to(cameraRef.current!.rotation, { y: 1.52 }, "<")

        //first starting point
        .to(cameraRef.current!.position, { x: 0, y: 0.5, z: 16.46 })
        .to(cameraRef.current!.rotation, { y: 0 }, "<")

        //second room
        .to(cameraRef.current!.position, { z: 4.42 })
        .addLabel("second-room")

        //#1
        .to(cameraRef.current!.position, { x: 1.2, y: 0.27, z: 1.79 })
        .to(cameraRef.current!.rotation, { y: -1.52 }, "<")

        //#2
        .to(cameraRef.current!.position, { x: 1.1, y: 0.27, z: 0.93 })
        .to(cameraRef.current!.rotation, { y: -1.4 }, "<")

        //#3
        .to(cameraRef.current!.position, { x: 1, y: 0.27, z: -0.02 })
        .to(cameraRef.current!.rotation, { y: -1.3 }, "<")

        //#4
        .to(cameraRef.current!.position, { x: 0.78, y: 0.27, z: -1.0 })
        .to(cameraRef.current!.rotation, { y: -1.29 }, "<")

        //#5
        .to(cameraRef.current!.position, { x: 0.5, y: 0.27, z: -1.946 })
        .to(cameraRef.current!.rotation, { y: -1.25 }, "<")

        //#6
        .to(cameraRef.current!.position, { x: 0.1, y: 0.27, z: -2.89 })
        .to(cameraRef.current!.rotation, { y: -1.21 }, "<")

        //#7
        .to(cameraRef.current!.position, { x: 0.15, y: 0.27, z: -2.9 })
        .to(cameraRef.current!.rotation, { y: 1.21 }, "<")

        //#8
        .to(cameraRef.current!.position, { x: -0.2, y: 0.27, z: -1.946 })
        .to(cameraRef.current!.rotation, { y: 1.25 }, "<")

        //#9
        .to(cameraRef.current!.position, { x: -0.45, y: 0.27, z: -0.995 })
        .to(cameraRef.current!.rotation, { y: 1.29 }, "<")

        //#10
        .to(cameraRef.current!.position, { x: -0.65, y: 0.27, z: -0.006 })
        .to(cameraRef.current!.rotation, { y: 1.3 }, "<")

        //#11
        .to(cameraRef.current!.position, { x: -0.85, y: 0.27, z: 0.92 })
        .to(cameraRef.current!.rotation, { y: 1.4 }, "<")

        //#12
        .to(cameraRef.current!.position, { x: -0.95, y: 0.27, z: 1.8 })
        .to(cameraRef.current!.rotation, { y: 1.51 }, "<")

        //second starting point
        .to(cameraRef.current!.position, { x: 0, y: 0.5, z: 4.42 })
        .to(cameraRef.current!.rotation, { y: 0 }, "<")

        //third room
        .to(cameraRef.current!.position, { z: -7.42 })
        .addLabel("third-room")

        //#1
        .to(cameraRef.current!.position, { x: 1.2, y: 0.27, z: -10.12 })
        .to(cameraRef.current!.rotation, { y: -1.51 }, "<")

        //#2
        .to(cameraRef.current!.position, { x: 1.1, y: 0.27, z: -11 })
        .to(cameraRef.current!.rotation, { y: -1.4 }, "<")

        //#3
        .to(cameraRef.current!.position, { x: 1, y: 0.27, z: -11.948 })
        .to(cameraRef.current!.rotation, { y: -1.3 }, "<")

        //#4
        .to(cameraRef.current!.position, { x: 0.78, y: 0.27, z: -12.93 })
        .to(cameraRef.current!.rotation, { y: -1.29 }, "<")

        //#5
        .to(cameraRef.current!.position, { x: 0.5, y: 0.27, z: -13.868 })
        .to(cameraRef.current!.rotation, { y: -1.24 }, "<")

        //#6
        .to(cameraRef.current!.position, { x: 0.1, y: 0.27, z: -14.81 })
        .to(cameraRef.current!.rotation, { y: -1.2 }, "<")

        //#7
        .to(cameraRef.current!.position, { x: 0.15, y: 0.27, z: -14.81 })
        .to(cameraRef.current!.rotation, { y: 1.2 }, "<")

        //#8
        .to(cameraRef.current!.position, { x: -0.2, y: 0.27, z: -13.868 })
        .to(cameraRef.current!.rotation, { y: 1.25 }, "<")

        //#9
        .to(cameraRef.current!.position, { x: -0.45, y: 0.27, z: -12.915 })
        .to(cameraRef.current!.rotation, { y: 1.29 }, "<")

        //#10
        .to(cameraRef.current!.position, { x: -0.65, y: 0.27, z: -11.92 })
        .to(cameraRef.current!.rotation, { y: 1.3 }, "<")

        //#11
        .to(cameraRef.current!.position, { x: -0.85, y: 0.27, z: -11.01 })
        .to(cameraRef.current!.rotation, { y: 1.41 }, "<")

        //#12
        .to(cameraRef.current!.position, { x: -0.95, y: 0.27, z: -10.13 })
        .to(cameraRef.current!.rotation, { y: 1.52 }, "<");
    },
    { dependencies: [containerRef] }
  );

  function labelToScroll(timeline: GSAPTimeline, label: string) {
    let st = timeline.scrollTrigger!;
    return (
      st.start +
      (st.end - st.start) * (timeline.labels[label] / timeline.duration())
    );
  }

  const [isHovered, setIsHovered] = useState<boolean>(false);

  useCursor(isHovered);

  return (
    <>
      <Suspense fallback={null}>
        <Arrow
          onClick={() => {
            if (gsapTimeline.current) {
              gsap.to(window, {
                scrollTo: labelToScroll(gsapTimeline.current, "second-room"),
                duration: 1,
              });
            }
          }}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          scale={0.1}
          rotation-x={Math.PI * 0.5}
          position={[2, 1, 13.6]}
        >
          <meshStandardMaterial color={"gray"} />
        </Arrow>
        <Arrow
          onClick={() => {
            if (gsapTimeline.current) {
              gsap.to(window, {
                scrollTo: labelToScroll(gsapTimeline.current, "third-room"),
                duration: 1,
              });
            }
          }}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          scale={0.1}
          rotation-x={Math.PI * 0.5}
          position={[2, 1, 1.5]}
        >
          <meshStandardMaterial color={"gray"} />
        </Arrow>
      </Suspense>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0.5, 16.46]}
      />
    </>
  );
};

export default AnimatedCamera;
