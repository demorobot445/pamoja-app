import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { useCursor, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import { useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube087: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane003: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube004: THREE.Mesh;
    Sphere014: THREE.Mesh;
    Sphere002: THREE.Mesh;
    Sphere004: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere003: THREE.Mesh;
    Sphere005: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane005: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    ["ARTWORKS_DETAILS-04006"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01088"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01086"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01084"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01067"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01020"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01017"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01015"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01013"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01011"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01009"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04003"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04002"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01065"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01056"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01054"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01052"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01050"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01047"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01044"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01037"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01031"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01028"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01026"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04009"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04008"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01106"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01104"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01101"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01100"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01097"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01095"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01077"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01074"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01066"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01040"]: THREE.Mesh;
    Sphere006: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Plane_BAKED.003"]: THREE.MeshStandardMaterial;
    ["Cube.003_BAKED"]: THREE.MeshStandardMaterial;
    ["Cylinder.002_BAKED"]: THREE.MeshStandardMaterial;
    ["Cube.008_BAKED"]: THREE.MeshStandardMaterial;
    ["White Plaster.003"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["White Plaster.004"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.006"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.007"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.088"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.086"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.085"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.070"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.072"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.075"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.076"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.078"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.080"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.082"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.004"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.005"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.068"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.005"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.010"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.012"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.014"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.017"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.048"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.055"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.061"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.064"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.066"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.001"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.003"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.006"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.021"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.024"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.025"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.028"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.030"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.032"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.034"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.036"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.052"]: THREE.MeshStandardMaterial;
    ["White Plaster.001"]: THREE.MeshStandardMaterial;
  };
};

type Props = {
  frameTl: React.MutableRefObject<gsap.core.Timeline | undefined>;
};

export const Building: React.FC<Props> = ({ frameTl }) => {
  const { nodes, materials } = useGLTF("/building.glb") as GLTFResult;

  const { camera } = useThree();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  useCursor(isHovered);

  const { moveCamera } = useSnapshot(store);

  const storePreviousCameraLocation = () => {
    store.previousLocation = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
      rotateY: camera.rotation.y,
    };
  };

  const [
    shemaArtOne,
    shemaArtTwo,
    shemaArtThree,
    elyseeArtOne,
    elyseeArtTwo,
    elyseeArtThree,
    elyseeArtFour,
    elyseeArtFive,
    elyseeArtSix,
    elyseeArtSeven,
    elyseeArtEight,
    obedArtOne,
    obedArtTwo,
    obedArtThree,
    obedArtFour,
  ] = useTexture([
    "/shema-artwork/0.jpg",
    "/shema-artwork/1.jpg",
    "/shema-artwork/2.jpg",
    "/elysee-artwork/0.jpg",
    "/elysee-artwork/1.jpg",
    "/elysee-artwork/2.jpg",
    "/elysee-artwork/3.jpg",
    "/elysee-artwork/4.jpg",
    "/elysee-artwork/5.jpg",
    "/elysee-artwork/6.jpg",
    "/elysee-artwork/7.jpg",
    "/obed-artwork/0.jpg",
    "/obed-artwork/1.jpg",
    "/obed-artwork/2.jpg",
    "/obed-artwork/3.jpg",
  ]);

  useEffect(() => {
    shemaArtOne.flipY = true;
    shemaArtOne.needsUpdate = true;
    shemaArtTwo.flipY = true;
    shemaArtTwo.needsUpdate = true;
    shemaArtThree.flipY = true;
    shemaArtThree.needsUpdate = true;
    elyseeArtOne.flipY = true;
    elyseeArtOne.needsUpdate = true;
    elyseeArtTwo.flipY = true;
    elyseeArtTwo.needsUpdate = true;
    elyseeArtThree.flipY = true;
    elyseeArtThree.needsUpdate = true;
    elyseeArtFour.flipY = true;
    elyseeArtFour.needsUpdate = true;
    elyseeArtFive.flipY = true;
    elyseeArtFive.needsUpdate = true;
    elyseeArtSix.flipY = true;
    elyseeArtSix.needsUpdate = true;
    elyseeArtSeven.flipY = true;
    elyseeArtSeven.needsUpdate = true;
    elyseeArtEight.flipY = true;
    elyseeArtEight.needsUpdate = true;
    obedArtOne.flipY = true;
    obedArtOne.needsUpdate = true;
    obedArtTwo.flipY = true;
    obedArtTwo.needsUpdate = true;
    obedArtThree.flipY = true;
    obedArtThree.needsUpdate = true;
    obedArtFour.flipY = true;
    obedArtFour.needsUpdate = true;
  }, []);

  return (
    <group position={[-0.6, 0, 5]} dispose={null}>
      <mesh
        geometry={nodes.Cube087.geometry}
        material={materials.Material}
        position={[0.688, 0.227, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Material}
        position={[0.71, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.Material}
        position={[0.688, 0.227, -12.281]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.Material}
        position={[0.71, 0.233, -12.281]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.Material}
        position={[0.688, 0.227, -24.202]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials.Material}
        position={[0.71, 0.233, -24.202]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Plane_BAKED.003"]}
        position={[0.71, 0.033, 6.535]}
        scale={[3.453, 1.051, 7.195]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Plane_BAKED.003"]}
        position={[0.71, 0.033, -5.386]}
        scale={[3.453, 1.051, 7.195]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials["Plane_BAKED.003"]}
        position={[0.71, 0.033, -17.307]}
        scale={[3.453, 1.051, 7.195]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Cube.003_BAKED"]}
        position={[2.807, 0.351, 6.337]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Cube.003_BAKED"]}
        position={[-1.41, 0.351, 6.337]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Cube.003_BAKED"]}
        position={[2.807, 0.351, -5.584]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["Cube.003_BAKED"]}
        position={[-1.41, 0.351, -5.584]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials["Cube.003_BAKED"]}
        position={[2.807, 0.351, -17.505]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials["Cube.003_BAKED"]}
        position={[-1.41, 0.351, -17.505]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["Cylinder.002_BAKED"]}
        position={[2.764, 0.834, 6.028]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Cylinder.002_BAKED"]}
        position={[-1.367, 0.834, 6.028]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials["Cylinder.002_BAKED"]}
        position={[2.764, 0.834, -5.894]}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={materials["Cylinder.002_BAKED"]}
        position={[-1.367, 0.834, -5.894]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cylinder007.geometry}
        material={materials["Cylinder.002_BAKED"]}
        position={[2.764, 0.834, -17.814]}
      />
      <mesh
        geometry={nodes.Cylinder008.geometry}
        material={materials["Cylinder.002_BAKED"]}
        position={[-1.367, 0.834, -17.814]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Cube.008_BAKED"]}
        position={[2.39, 0.268, 6.141]}
        rotation={[0, 0.37, 0]}
        scale={[0.049, 0.248, 0.253]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Cube.008_BAKED"]}
        position={[-0.935, 0.268, 6.141]}
        rotation={[-Math.PI, 0.37, 0]}
        scale={[-0.049, -0.248, -0.253]}
      />
      <mesh
        geometry={nodes.Sphere014.geometry}
        material={materials["White Plaster.003"]}
        position={[0.704, 0.666, 8.264]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.312, 0.31, 0.309]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials["White Plaster.003"]}
        position={[0.704, 0.666, -3.657]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.312, 0.31, 0.309]}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={materials["White Plaster.003"]}
        position={[0.704, 0.666, -15.578]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.312, 0.31, 0.309]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.011"]}
        position={[0.711, 0.234, -0.337]}
        scale={[0.32, 0.312, 0.311]}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.011"]}
        position={[0.711, 0.234, -12.258]}
        scale={[0.32, 0.312, 0.311]}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.011"]}
        position={[0.711, 0.234, -24.178]}
        scale={[0.32, 0.312, 0.311]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials["White Plaster.004"]}
        position={[0.704, 0.666, 8.264]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.315, 0.312, 0.311]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={materials["White Plaster.004"]}
        position={[0.704, 0.666, -3.657]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.315, 0.312, 0.311]}
      />
      <mesh
        geometry={nodes.Sphere005.geometry}
        material={materials["White Plaster.004"]}
        position={[0.704, 0.666, -15.578]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.315, 0.312, 0.311]}
      />
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials["Material.003"]}
        position={[0.607, 2.436, 6.173]}
        rotation={[-0.113, 0, 0]}
        scale={[1.988, 2.009, 3.218]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials["Material.003"]}
        position={[0.607, 2.436, -5.748]}
        rotation={[-0.113, 0, 0]}
        scale={[1.988, 2.009, 3.218]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials["Material.003"]}
        position={[0.607, 2.436, -17.669]}
        rotation={[-0.113, 0, 0]}
        scale={[1.988, 2.009, 3.218]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Cube.008_BAKED"]}
        position={[2.42, 0.268, -5.777]}
        rotation={[0, 0.37, 0]}
        scale={[0.049, 0.248, 0.253]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials["Cube.008_BAKED"]}
        position={[-0.935, 0.268, -5.777]}
        rotation={[-Math.PI, 0.37, 0]}
        scale={[-0.049, -0.248, -0.253]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials["Cube.008_BAKED"]}
        position={[2.39, 0.268, -17.698]}
        rotation={[0, 0.37, 0]}
        scale={[0.049, 0.248, 0.253]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials["Cube.008_BAKED"]}
        position={[-0.935, 0.268, -17.698]}
        rotation={[-Math.PI, 0.37, 0]}
        scale={[-0.049, -0.248, -0.253]}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.75, 0.186, 10.843, 1.29);
          } else {
            moveCamera(-1, 0.318, 10.6, 1.29);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Lounge in light",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 105cm/105cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-04006"].geometry}
        material={materials["ARTWORKS DETAILS-04.006"]}
        position={[-0.817, 0.255, 5.651]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1, 0.184, 10.846, -1.29);
          } else {
            moveCamera(1.34, 0.32, 10.9, -1.29);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Renaissance kigali",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 195cm/140cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-04"].geometry}
        material={materials["ARTWORKS DETAILS-04.007"]}
        position={[2.272, 0.284, 5.653]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.66, 0.225, 13.709, -1.51);
          } else {
            moveCamera(1.86, 0.33, 13.83, -1.51);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Confidant",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 115cm/105cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01088"].geometry}
        material={materials["ARTWORKS DETAILS-01.088"]}
        position={[2.839, 0.307, 8.673]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.56, 0.22, 12.768, -1.4);
          } else {
            moveCamera(1.8, 0.32, 12.86, -1.4);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Iridescent beauty 1",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 100cm/95cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01086"].geometry}
        material={materials["ARTWORKS DETAILS-01.086"]}
        position={[2.749, 0.303, 7.666]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.38, 0.23, 11.784, -1.3);
          } else {
            moveCamera(1.6, 0.328, 11.89, -1.3);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Portrait of inyambo cow",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 55cm/65cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01084"].geometry}
        material={materials["ARTWORKS DETAILS-01.085"]}
        position={[2.538, 0.305, 6.632]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.2, 0.2, 8.885, 1.21);
          } else {
            moveCamera(-0.4, 0.325, 8.66, 1.21);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Hobed in the uniform",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 45cm each side",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01067"].geometry}
        material={materials["ARTWORKS DETAILS-01.070"]}
        position={[-0.171, 0.345, 3.669]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.55, 0.22, 9.865, 1.25);
          } else {
            moveCamera(-0.7, 0.32, 9.62, 1.25);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Confidant",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 120cm/110cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01020"].geometry}
        material={materials["ARTWORKS DETAILS-01.072"]}
        position={[-0.548, 0.313, 4.664]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.05, 0.19, 11.8, 1.3);
          } else {
            moveCamera(-1.2, 0.3, 11.55, 1.3);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Confidant",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 120cm/110cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01017"].geometry}
        material={materials["ARTWORKS DETAILS-01.075"]}
        position={[-1.081, 0.292, 6.624]}
        rotation={[-Math.PI / 2, 0, 1.325]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.25, 0.21, 12.77, 1.41);
          } else {
            moveCamera(-1.45, 0.315, 12.58, 1.41);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Silent Reflection",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 110cm/ 105cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01015"].geometry}
        material={materials["ARTWORKS DETAILS-01.076"]}
        position={[-1.291, 0.304, 7.663]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.3, 0.19, 13.705, 1.52);
          } else {
            moveCamera(-1.55, 0.31, 13.5, 1.52);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "First light of blessing",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 110cm/105cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01013"].geometry}
        material={materials["ARTWORKS DETAILS-01.078"]}
        position={[-1.386, 0.296, 8.669]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(0.45, 0.22, 8.88, -1.21);
          } else {
            moveCamera(0.72, 0.33, 8.96, -1.21);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Portrait of inyambo cow",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 65cm/50cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01011"].geometry}
        material={materials["ARTWORKS DETAILS-01.080"]}
        position={[1.621, 0.314, 3.664]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(0.8, 0.21, 9.86, -1.25);
          } else {
            moveCamera(1.08, 0.33, 9.92, -1.25);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Iridescent beauty 2",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 100cm/100cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01009"].geometry}
        material={materials["ARTWORKS DETAILS-01.082"]}
        position={[2.004, 0.307, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.7, 0.15, -1.065, 1.29);
          } else {
            moveCamera(-1, 0.325, -1.32, 1.29);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Ibirunga [volcanoes]",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 66cm/ 49cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-04003"].geometry}
        material={materials["ARTWORKS DETAILS-04.004"]}
        position={[-0.814, 0.178, -6.274]}
        rotation={[-Math.PI / 2, 0, 1.284]}
        scale={-0.634}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.05, 0.19, -1.07, -1.29);
          } else {
            moveCamera(1.3, 0.28, -0.9, -1.29);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Self love",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 105cm/ 110cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-04002"].geometry}
        material={materials["ARTWORKS DETAILS-04.005"]}
        position={[2.304, 0.267, -6.26]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.6, 0.2, 1.785, -1.52);
          } else {
            moveCamera(1.9, 0.33, 1.915, -1.52);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "First light of blessing 4",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 80cm/100cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01065"].geometry}
        material={materials["ARTWORKS DETAILS-01.068"]}
        position={[2.863, 0.263, -3.248]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.578}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(0.5, 0.235, -3.035, -1.21);
          } else {
            moveCamera(0.75, 0.32, -2.92, -1.21);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Emancipation II",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 130cm/103cm",
            ],
          };
          store.artistLink = "/artists/ishimwe-shema-b";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01056"].geometry}
        material={materials["ARTWORKS DETAILS-01.005"]}
        material-map={shemaArtThree}
        position={[1.661, 0.345, -8.245]}
        rotation={[-Math.PI * 0.5, 0, -1.201]}
        scale={[0.48, 0.541, 0.541]}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.4, 0.2, 1.795, 1.51);
          } else {
            moveCamera(-1.6, 0.32, 1.63, 1.51);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Tea",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 130cm/100cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01054"].geometry}
        material={materials["ARTWORKS DETAILS-01.010"]}
        material-map={elyseeArtEight}
        position={[-1.373, 0.312, -3.27]}
        rotation={[Math.PI * 0.5, 0, -1.514]}
        scale={[-0.6, -0.541, -0.541]}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01052"].geometry}
        material={materials["ARTWORKS DETAILS-01.012"]}
        position={[-1.301, 0.312, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.9, 0.14, -0.07, 1.3);
          } else {
            moveCamera(-1.2, 0.3, -0.33, 1.3);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Emancipation III",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 115cm/100cm",
            ],
          };
          store.artistLink = "/artists/ishimwe-shema-b";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01050"].geometry}
        material={materials["ARTWORKS DETAILS-01.014"]}
        material-map={shemaArtOne}
        position={[-1.082, 0.36, -5.283]}
        rotation={[Math.PI * 0.5, 0, -1.3]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.3, 0.1, -1.975, 1.25);
          } else {
            moveCamera(-0.66, 0.3, -2.28, 1.25);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "RWANDA NZIZA",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 80cm/70cm",
            ],
          };
          store.artistLink = "/artists/ishimwe-shema-b";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01047"].geometry}
        material={materials["ARTWORKS DETAILS-01.017"]}
        material-map={shemaArtTwo}
        position={[-0.551, 0.307, -7.259]}
        rotation={[Math.PI * 0.5, 0, -1.256]}
        scale={-0.487}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.2, 0.22, -3.035, 1.21);
          } else {
            moveCamera(-0.35, 0.32, -3.25, 1.21);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Liberity 1",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 160cm/105cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01044"].geometry}
        material={materials["ARTWORKS DETAILS-01.048"]}
        position={[-0.161, 0.314, -8.253]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.468}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.2, 0.18, 0.87, 1.4);
          } else {
            moveCamera(-1.5, 0.34, 0.67, 1.4);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Nyamishaba",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 66cm/ 49cm ",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01037"].geometry}
        material={materials["ARTWORKS DETAILS-01.055"]}
        position={[-1.294, 0.312, -4.253]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(0.86, 0.22, -2.065, -1.25);
          } else {
            moveCamera(1.1, 0.32, -1.946, -1.25);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Cyato landscape 1",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 90cm/ 120cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01031"].geometry}
        material={materials["ARTWORKS DETAILS-01.061"]}
        position={[2.035, 0.308, -7.253]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.36, 0.2, -0.104, -1.3);
          } else {
            moveCamera(1.6, 0.31, -0.0, -1.3);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Vanessa",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 120cm/110cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01028"].geometry}
        material={materials["ARTWORKS DETAILS-01.064"]}
        position={[2.574, 0.324, -5.274]}
        rotation={[Math.PI / 2, 0, 1.328]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.6, 0.23, 0.855, -1.4);
          } else {
            moveCamera(1.85, 0.33, 0.96, -1.4);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Blessed morning",
            detail: [
              "Original painting",
              "Acrylic and oil on canvas",
              "Size: 120cm/125cm",
            ],
          };
          store.artistLink = "/artists/habyarimana-iddy";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01026"].geometry}
        material={materials["ARTWORKS DETAILS-01.066"]}
        position={[2.779, 0.313, -4.245]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.496}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.2, 0.27, -13.05, -1.29);
          } else {
            moveCamera(1.3, 0.3, -12.85, -1.29);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Wine date",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 85cm/105cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-04009"].geometry}
        material={materials["ARTWORKS DETAILS-04.001"]}
        material-map={elyseeArtFive}
        position={[2.275, 0.35, -18.184]}
        rotation={[-Math.PI / 2, 0, -1.282]}
        scale={0.634}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.8, 0.2, -13, 1.29);
          } else {
            moveCamera(-0.95, 0.3, -13.23, 1.29);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Umwali",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 100cm/ 95cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-04008"].geometry}
        material={materials["ARTWORKS DETAILS-04.003"]}
        material-map={elyseeArtOne}
        position={[-0.82, 0.5, -18.2]}
        rotation={[Math.PI / 2, 0, -1.282]}
        scale={-0.634}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(0.45, 0.225, -14.95, -1.2);
          } else {
            moveCamera(0.7, 0.32, -14.86, -1.2);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Purity",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 120cm/90cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01106"].geometry}
        material={materials["ARTWORKS DETAILS-01.006"]}
        material-map={elyseeArtFour}
        position={[1.6, 0.34, -20.137]}
        rotation={[-Math.PI / 2, 0, -1.201]}
        scale={[0.48, 0.541, 0.541]}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(0.6, 0.1, -13.9, -1.24);
          } else {
            moveCamera(1.05, 0.3, -13.87, -1.24);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Nyamishaba",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 66cm/49cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01104"].geometry}
        material={materials["ARTWORKS DETAILS-01.021"]}
        material-map={obedArtTwo}
        position={[1.99, 0.314, -19.165]}
        rotation={[-Math.PI / 2, 0, -1.255]}
        scale={0.51}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.4, 0.25, -12.055, -1.3);
          } else {
            moveCamera(1.55, 0.29, -11.9, -1.3);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Portrait of gorilla",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 150cm/120cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01101"].geometry}
        material={materials["ARTWORKS DETAILS-01.024"]}
        material-map={elyseeArtSix}
        position={[2.52, 0.305, -17.195]}
        rotation={[-Math.PI * 0.5, 0, -Math.PI * 0.4]}
        scale={0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.35, 0.13, -11.03, -1.4);
          } else {
            moveCamera(1.7, 0.29, -10.89, -1.4);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Budike",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 100cm/95cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01100"].geometry}
        material={materials["ARTWORKS DETAILS-01.025"]}
        material-map={elyseeArtSeven}
        position={[2.75, 0.326, -16.166]}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.55]}
        scale={[0.4, 0.482, 0.482]}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.3, 0.27, -14.994, 1.2);
          } else {
            moveCamera(-0.3, 0.31, -15.2, 1.2);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Portrait of king Mutara lll Rudahigwa",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 97cm/165cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01097"].geometry}
        material={materials["ARTWORKS DETAILS-01.028"]}
        material-map={elyseeArtThree}
        position={[-0.172, 0.325, -20.179]}
        rotation={[Math.PI / 2, 0, -1.201]}
        scale={-0.524}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-0.33, 0.1, -13.9, 1.25);
          } else {
            moveCamera(-0.7, 0.32, -14.2, 1.25);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Nyamishaba",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: : 66cm/49cm ",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01095"].geometry}
        material={materials["ARTWORKS DETAILS-01.030"]}
        material-map={obedArtThree}
        position={[-0.552, 0.33, -19.176]}
        rotation={[Math.PI / 2, 0, -1.255]}
        scale={-0.507}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.0, 0.18, -12.002, 1.3);
          } else {
            moveCamera(-1.3, 0.34, -12.23, 1.3);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Mamamwiza",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 120cm/140cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01077"].geometry}
        material={materials["ARTWORKS DETAILS-01.032"]}
        material-map={obedArtFour}
        position={[-1.084, 0.39, -17.2]}
        rotation={[Math.PI / 2, 0, -1.3]}
        scale={-0.541}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.4, 0.27, -11.09, 1.41);
          } else {
            moveCamera(-1.52, 0.33, -11.24, 1.41);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Portrait of queen Gicanda",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 97cm/165cm",
            ],
          };
          store.artistLink = "/artists/elysee-mushimiyimana";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01074"].geometry}
        material={materials["ARTWORKS DETAILS-01.034"]}
        material-map={elyseeArtTwo}
        position={[-1.276, 0.382, -16.169]}
        rotation={[Math.PI / 2, 0, -1.407]}
        scale={[-0.48, -0.48, -0.55]}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(-1.35, 0.2, -10.144, 1.52);
          } else {
            moveCamera(-1.55, 0.3, -10.35, 1.52);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Adherent",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 100cm/140cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01066"].geometry}
        material={materials["ARTWORKS DETAILS-01.036"]}
        material-map={obedArtOne}
        position={[-1.37, 0.322, -15.175]}
        rotation={[Math.PI / 2, 0, -1.514]}
        scale={[-0.42, -0.541, -0.7]}
      />
      <mesh
        onClick={() => {
          if (innerWidth < 600) {
            moveCamera(1.5, 0.16, -10.135, -1.51);
          } else {
            moveCamera(1.75, 0.27, -9.93, -1.51);
          }
          storePreviousCameraLocation();
          store.frameInfo = {
            title: "Hunter",
            detail: [
              "Original painting",
              "Acrylic on canvas",
              "Size: 120cm/120cm",
            ],
          };
          store.artistLink = "/artists/habumugisha-obed";
          frameTl.current!.reversed(false);
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        geometry={nodes["ARTWORKS_DETAILS-01040"].geometry}
        material={materials["ARTWORKS DETAILS-01.052"]}
        position={[2.8, 0.3, -15.166]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        material={materials["White Plaster.001"]}
        position={[0.692, 0.675, -21.729]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.312, 0.31, 0.309]}
      />
    </group>
  );
};

useGLTF.preload("/building.glb");
