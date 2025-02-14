import { store } from "@/store";
import { useGSAP } from "@gsap/react";
import { Box, PerspectiveCamera, useCursor } from "@react-three/drei";
import gsap from "gsap";
import { Suspense, useRef, useState } from "react";
import { PerspectiveCamera as PC } from "three";
import { Arrow } from "../Models/Arrow";
// import { Pane } from "tweakpane";

const AnimatedCamera = ({
  containerRef,
  frameButtonRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  frameButtonRef: React.RefObject<HTMLDivElement>;
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

  useGSAP(
    () => {
      gsapTimeline.current = gsap
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
        .call(() => {
          store.artistLink = "/artists/habyarimana-iddy";
        })
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
        .call(() => {
          store.artistLink = "/artists/niyonshimiye-cedrick";
        })
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
        .addLabel("second-room")
        //#1
        .call(() => {
          store.artistLink = "/artists/habumugisha-obed";
        })
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
        .call(() => {
          store.artistLink = "/artists/kasagga-jude";
        })
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
        .addLabel("third-room")
        //#1
        .call(() => {
          store.artistLink = "/artists/nsengiyumva-yusuf";
        })
        .to(cameraRef.current!.position, { x: 1.67, y: 0.27, z: -10.36 })
        .to(cameraRef.current!.rotation, { y: -1.51 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#2
        .to(cameraRef.current!.position, { x: 1.59, y: 0.27, z: -11.3 })
        .to(cameraRef.current!.rotation, { y: -1.4 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#3
        .to(cameraRef.current!.position, { x: 1.39, y: 0.27, z: -12.26 })
        .to(cameraRef.current!.rotation, { y: -1.3 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#4
        .to(cameraRef.current!.position, { x: 1.14, y: 0.27, z: -13.26 })
        .to(cameraRef.current!.rotation, { y: -1.29 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#5
        .to(cameraRef.current!.position, { x: 0.87, y: 0.27, z: -14.21 })
        .to(cameraRef.current!.rotation, { y: -1.24 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#6
        .call(() => {
          store.artistLink = "/artists/ishimwe-shema-b";
        })
        .to(cameraRef.current!.position, { x: 0.5, y: 0.27, z: -15.18 })
        .to(cameraRef.current!.rotation, { y: -1.2 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#7
        .to(cameraRef.current!.position, { x: -0.25, y: 0.27, z: -15.19 })
        .to(cameraRef.current!.rotation, { y: 1.2 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#8
        .to(cameraRef.current!.position, { x: -0.62, y: 0.27, z: -14.22 })
        .to(cameraRef.current!.rotation, { y: 1.25 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#9
        .to(cameraRef.current!.position, { x: -0.89, y: 0.27, z: -13.26 })
        .to(cameraRef.current!.rotation, { y: 1.29 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#10
        .call(() => {
          store.artistLink = "/artists/nsengiyumva-yusuf";
        })
        .to(cameraRef.current!.position, { x: -1.14, y: 0.27, z: -12.26 })
        .to(cameraRef.current!.rotation, { y: 1.3 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#11
        .to(cameraRef.current!.position, { x: -1.34, y: 0.27, z: -11.3 })
        .to(cameraRef.current!.rotation, { y: 1.41 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1")
        //#12
        .to(cameraRef.current!.position, { x: -1.42, y: 0.27, z: -10.38 })
        .to(cameraRef.current!.rotation, { y: 1.52 }, "<")
        .to(frameButtonRef.current, { bottom: 0 }, "<")
        .to(frameButtonRef.current, { bottom: "-100%" }, ">1");
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
