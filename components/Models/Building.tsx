import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["ARTWORKS_DETAILS-01017_1"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01017_2"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01010_1"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01010_2"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01010_1"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01010_2"]: THREE.Mesh;
    Cube102: THREE.Mesh;
    Cube103: THREE.Mesh;
    Cube104: THREE.Mesh;
    Cube105: THREE.Mesh;
    Cube106: THREE.Mesh;
    Cube097: THREE.Mesh;
    Cube098: THREE.Mesh;
    Cube099: THREE.Mesh;
    Cube100: THREE.Mesh;
    Cube091: THREE.Mesh;
    Cube092: THREE.Mesh;
    Cube093: THREE.Mesh;
    Cube094: THREE.Mesh;
    Cube095: THREE.Mesh;
    Cube086: THREE.Mesh;
    Cube087: THREE.Mesh;
    Cube088: THREE.Mesh;
    Cube089: THREE.Mesh;
    Cube080: THREE.Mesh;
    Cube081: THREE.Mesh;
    Cube082: THREE.Mesh;
    Cube083: THREE.Mesh;
    Cube084: THREE.Mesh;
    Cube073: THREE.Mesh;
    Cube074: THREE.Mesh;
    Cube075: THREE.Mesh;
    Cube076: THREE.Mesh;
    Cube077: THREE.Mesh;
    ["ARTWORKS_DETAILS-01006"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01016"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01004"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01071"]: THREE.Mesh;
    Cube069: THREE.Mesh;
    Cube071: THREE.Mesh;
    Cube072: THREE.Mesh;
    Cube181: THREE.Mesh;
    Cube064: THREE.Mesh;
    Cube066: THREE.Mesh;
    Cube067: THREE.Mesh;
    Cube180: THREE.Mesh;
    Cube058: THREE.Mesh;
    Cube060: THREE.Mesh;
    Cube061: THREE.Mesh;
    Cube179: THREE.Mesh;
    Cube054: THREE.Mesh;
    Cube056: THREE.Mesh;
    Cube057: THREE.Mesh;
    Cube178: THREE.Mesh;
    Cube048: THREE.Mesh;
    Cube050: THREE.Mesh;
    Cube177: THREE.Mesh;
    Cube042: THREE.Mesh;
    Cube044: THREE.Mesh;
    Cube045: THREE.Mesh;
    Cube176: THREE.Mesh;
    Sphere006_1: THREE.Mesh;
    Sphere006_2: THREE.Mesh;
    Sphere006_3: THREE.Mesh;
    Cylinder031: THREE.Mesh;
    Cylinder032: THREE.Mesh;
    Cylinder033: THREE.Mesh;
    Cylinder028: THREE.Mesh;
    Cylinder029: THREE.Mesh;
    Cylinder030: THREE.Mesh;
    Cylinder025: THREE.Mesh;
    Cylinder026: THREE.Mesh;
    Cylinder027: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Cylinder023: THREE.Mesh;
    Cylinder024: THREE.Mesh;
    Cube038: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube040: THREE.Mesh;
    Cube035: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube037: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube034: THREE.Mesh;
    Cube055: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube051: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cylinder019: THREE.Mesh;
    Cylinder020: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cylinder014: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Cylinder016: THREE.Mesh;
    Cylinder012: THREE.Mesh;
    Cylinder013: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder017: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder036_1: THREE.Mesh;
    Cylinder036_2: THREE.Mesh;
    Cylinder035: THREE.Mesh;
    Cylinder036: THREE.Mesh;
    Cylinder038: THREE.Mesh;
    Cylinder039: THREE.Mesh;
    Cylinder041: THREE.Mesh;
    Cylinder042: THREE.Mesh;
    Cylinder044: THREE.Mesh;
    Cylinder045: THREE.Mesh;
    Cylinder047: THREE.Mesh;
    Cylinder048: THREE.Mesh;
    Cylinder050: THREE.Mesh;
    Cylinder051: THREE.Mesh;
    Cylinder053: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder056: THREE.Mesh;
    Cylinder057: THREE.Mesh;
    Cylinder059: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube078: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Sphere002: THREE.Mesh;
    Sphere004: THREE.Mesh;
    Sphere020: THREE.Mesh;
    Cube049: THREE.Mesh;
    Cube014: THREE.Mesh;
    ["ARTWORKS_DETAILS-04007"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04006"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04005"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04009"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04004"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04008"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04003"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04002"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04001"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01094"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01093"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01092"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01091"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01098"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01090"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01014"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01089"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01088"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01087"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01086"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01084"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01082"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01007"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01081"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01080"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01079"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01078"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01075"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01070"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01069"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01068"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01067"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01065"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01064"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01099"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01063"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01100"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01062"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01061"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01101"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01060"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01102"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01059"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01103"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01058"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01104"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01057"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01105"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01056"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01106"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01055"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01024"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01054"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01066"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01053"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01072"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01052"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01074"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01051"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01076"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01050"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01077"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01049"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01048"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01083"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01047"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01095"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01046"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01096"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01045"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01097"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01044"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01043"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01042"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01041"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01040"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01039"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01038"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01037"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01036"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01035"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01034"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01033"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01032"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01031"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01030"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01029"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01028"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01027"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01026"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01025"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01023"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01022"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01021"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01020"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01019"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01017"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01015"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01013"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01012"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01011"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01010"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01009"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01008"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01005"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01003"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01002"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01001"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01"]: THREE.Mesh;
    Sphere001: THREE.Mesh;
  };
  materials: {
    ["ARTWORKS DETAILS-01.021"]: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.006"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["White Plaster.002"]: THREE.MeshStandardMaterial;
    ["White Plaster.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["White Plaster.005"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.007"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.006"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.001"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.002"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.004"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.005"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.084"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.041"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.016"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.089"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.088"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.087"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.086"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.085"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.083"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.082"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.081"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.080"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.077"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.073"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.072"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.071"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.070"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.068"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.002"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.001"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.065"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.003"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.009"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.008"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.004"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.007"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.005"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.011"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.010"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.013"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.012"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.015"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.014"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.052"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.018"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.017"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.020"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.019"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.048"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.049"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.050"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.051"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.053"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.054"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.055"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.056"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.057"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.058"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.059"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.060"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.061"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.062"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.063"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.064"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.066"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.067"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.069"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.075"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.076"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.078"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.079"]: THREE.MeshStandardMaterial;
  };
};

export function Building(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/building.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.666, 0.677, -15.824]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.322, 0.314, 0.313]}
      >
        <mesh
          geometry={nodes.Sphere006_1.geometry}
          material={materials["White Plaster.002"]}
        />
        <mesh
          geometry={nodes.Sphere006_2.geometry}
          material={materials["White Plaster.001"]}
        />
        <mesh
          geometry={nodes.Sphere006_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube049.geometry}
        material={materials.PaletteMaterial001}
        position={[2.789, 0.282, 7.658]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials.PaletteMaterial001}
        position={[2.323, 0.282, 5.636]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04007"].geometry}
        material={materials["ARTWORKS DETAILS-04.007"]}
        position={[2.272, 0.282, 5.653]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04006"].geometry}
        material={materials["ARTWORKS DETAILS-04.006"]}
        position={[-0.825, 0.262, 5.651]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-04005"].geometry}
        material={materials["ARTWORKS DETAILS-04.001"]}
        position={[2.272, 0.282, -6.39]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04009"].geometry}
        material={materials["ARTWORKS DETAILS-04.001"]}
        position={[2.271, 0.282, -18.412]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-04004"].geometry}
        material={materials["ARTWORKS DETAILS-04.002"]}
        position={[-0.824, 0.185, -6.395]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04008"].geometry}
        material={materials["ARTWORKS DETAILS-04.002"]}
        position={[-0.824, 0.185, -18.409]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04003"].geometry}
        material={materials["ARTWORKS DETAILS-04.004"]}
        position={[-0.825, 0.166, -6.392]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04002"].geometry}
        material={materials["ARTWORKS DETAILS-04.005"]}
        position={[2.272, 0.277, -6.39]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04001"].geometry}
        material={materials["ARTWORKS DETAILS-04.006"]}
        position={[-0.825, 0.262, 5.651]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-04"].geometry}
        material={materials["ARTWORKS DETAILS-04.007"]}
        position={[2.272, 0.282, 5.653]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01094"].geometry}
        material={materials["Material.013"]}
        position={[-0.834, 0.298, 5.649]}
        rotation={[-Math.PI / 2, 0, 1.288]}
        scale={-0.581}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01093"].geometry}
        material={materials["Material.004"]}
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01092"].geometry}
        material={materials["ARTWORKS DETAILS-01.084"]}
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01091"].geometry}
        material={materials["ARTWORKS DETAILS-01.041"]}
        position={[2.541, 0.309, -5.4]}
        rotation={[Math.PI / 2, 0, 1.304]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01098"].geometry}
        material={materials["ARTWORKS DETAILS-01.041"]}
        position={[2.541, 0.309, -17.423]}
        rotation={[Math.PI / 2, 0, 1.304]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01090"].geometry}
        material={materials["ARTWORKS DETAILS-01.016"]}
        position={[-0.835, 0.152, -6.397]}
        rotation={[-Math.PI / 2, 0, 1.289]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01014"].geometry}
        material={materials["ARTWORKS DETAILS-01.016"]}
        position={[-0.835, 0.152, -18.411]}
        rotation={[-Math.PI / 2, 0, 1.289]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01089"].geometry}
        material={materials["ARTWORKS DETAILS-01.089"]}
        position={[2.839, 0.308, 8.657]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01088"].geometry}
        material={materials["ARTWORKS DETAILS-01.088"]}
        position={[2.839, 0.315, 8.657]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01087"].geometry}
        material={materials["ARTWORKS DETAILS-01.087"]}
        position={[2.748, 0.314, 7.674]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01086"].geometry}
        material={materials["ARTWORKS DETAILS-01.086"]}
        position={[2.749, 0.314, 7.674]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01084"].geometry}
        material={materials["ARTWORKS DETAILS-01.085"]}
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01082"].geometry}
        material={materials["Material.012"]}
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01007"].geometry}
        material={materials["Material.012"]}
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01081"].geometry}
        material={materials["ARTWORKS DETAILS-01.083"]}
        position={[2.003, 0.314, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01080"].geometry}
        material={materials["ARTWORKS DETAILS-01.082"]}
        position={[2.004, 0.314, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01079"].geometry}
        material={materials["ARTWORKS DETAILS-01.081"]}
        position={[1.628, 0.314, 3.679]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01078"].geometry}
        material={materials["ARTWORKS DETAILS-01.080"]}
        position={[1.629, 0.314, 3.678]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01075"].geometry}
        material={materials["ARTWORKS DETAILS-01.077"]}
        position={[-1.301, 0.314, 7.673]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01070"].geometry}
        material={materials["ARTWORKS DETAILS-01.073"]}
        position={[-0.556, 0.314, 4.659]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01069"].geometry}
        material={materials["ARTWORKS DETAILS-01.072"]}
        position={[-0.557, 0.314, 4.658]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01068"].geometry}
        material={materials["ARTWORKS DETAILS-01.071"]}
        position={[-0.181, 0.337, 3.676]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01067"].geometry}
        material={materials["ARTWORKS DETAILS-01.070"]}
        position={[-0.182, 0.327, 3.675]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01065"].geometry}
        material={materials["ARTWORKS DETAILS-01.068"]}
        position={[2.839, 0.266, -3.385]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.578}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01064"].geometry}
        material={materials["ARTWORKS DETAILS-01.002"]}
        position={[2.746, 0.314, -4.38]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01099"].geometry}
        material={materials["ARTWORKS DETAILS-01.002"]}
        position={[2.745, 0.314, -16.402]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01063"].geometry}
        material={materials["ARTWORKS DETAILS-01.001"]}
        position={[2.747, 0.314, -4.38]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01100"].geometry}
        material={materials["ARTWORKS DETAILS-01.001"]}
        position={[2.746, 0.314, -16.403]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01062"].geometry}
        material={materials["ARTWORKS DETAILS-01.065"]}
        position={[2.839, 0.314, -15.392]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01061"].geometry}
        material={materials["ARTWORKS DETAILS-01.003"]}
        position={[2.538, 0.314, -5.398]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01101"].geometry}
        material={materials["ARTWORKS DETAILS-01.003"]}
        position={[2.538, 0.314, -17.421]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01060"].geometry}
        material={materials["ARTWORKS DETAILS-01.009"]}
        position={[2.281, 0.309, -6.391]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01102"].geometry}
        material={materials["ARTWORKS DETAILS-01.009"]}
        position={[2.28, 0.309, -18.414]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01059"].geometry}
        material={materials["ARTWORKS DETAILS-01.008"]}
        position={[2.003, 0.314, -7.381]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01103"].geometry}
        material={materials["ARTWORKS DETAILS-01.008"]}
        position={[2.002, 0.314, -19.404]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01058"].geometry}
        material={materials["ARTWORKS DETAILS-01.004"]}
        position={[2.004, 0.314, -7.381]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01104"].geometry}
        material={materials["ARTWORKS DETAILS-01.004"]}
        position={[2.003, 0.314, -19.404]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01057"].geometry}
        material={materials["ARTWORKS DETAILS-01.007"]}
        position={[1.628, 0.314, -8.364]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01105"].geometry}
        material={materials["ARTWORKS DETAILS-01.007"]}
        position={[1.627, 0.314, -20.386]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01056"].geometry}
        material={materials["ARTWORKS DETAILS-01.005"]}
        position={[1.629, 0.314, -8.364]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={[0.48, 0.541, 0.541]}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01106"].geometry}
        material={materials["ARTWORKS DETAILS-01.005"]}
        position={[1.628, 0.314, -20.386]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={[0.48, 0.541, 0.541]}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01055"].geometry}
        material={materials["ARTWORKS DETAILS-01.011"]}
        position={[-1.393, 0.339, -3.386]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01024"].geometry}
        material={materials["ARTWORKS DETAILS-01.011"]}
        position={[-1.393, 0.339, -15.4]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01054"].geometry}
        material={materials["ARTWORKS DETAILS-01.010"]}
        position={[-1.393, 0.315, -3.386]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01066"].geometry}
        material={materials["ARTWORKS DETAILS-01.010"]}
        position={[-1.393, 0.315, -15.4]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01053"].geometry}
        material={materials["ARTWORKS DETAILS-01.013"]}
        position={[-1.3, 0.357, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01072"].geometry}
        material={materials["ARTWORKS DETAILS-01.013"]}
        position={[-1.3, 0.357, -16.39]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01052"].geometry}
        material={materials["ARTWORKS DETAILS-01.012"]}
        position={[-1.301, 0.312, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01074"].geometry}
        material={materials["ARTWORKS DETAILS-01.012"]}
        position={[-1.301, 0.312, -16.39]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01051"].geometry}
        material={materials["ARTWORKS DETAILS-01.015"]}
        position={[-1.091, 0.347, -5.4]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01076"].geometry}
        material={materials["ARTWORKS DETAILS-01.015"]}
        position={[-1.091, 0.347, -17.414]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01050"].geometry}
        material={materials["ARTWORKS DETAILS-01.014"]}
        position={[-1.092, 0.314, -5.4]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01077"].geometry}
        material={materials["ARTWORKS DETAILS-01.014"]}
        position={[-1.092, 0.314, -17.414]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01049"].geometry}
        material={materials["ARTWORKS DETAILS-01.052"]}
        position={[2.839, 0.315, -15.392]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01048"].geometry}
        material={materials["ARTWORKS DETAILS-01.018"]}
        position={[-0.556, 0.314, -7.384]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01083"].geometry}
        material={materials["ARTWORKS DETAILS-01.018"]}
        position={[-0.556, 0.314, -19.398]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01047"].geometry}
        material={materials["ARTWORKS DETAILS-01.017"]}
        position={[-0.557, 0.314, -7.384]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01095"].geometry}
        material={materials["ARTWORKS DETAILS-01.017"]}
        position={[-0.557, 0.314, -19.398]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01046"].geometry}
        material={materials["ARTWORKS DETAILS-01.020"]}
        position={[-0.181, 0.303, -8.367]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.559}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01096"].geometry}
        material={materials["ARTWORKS DETAILS-01.020"]}
        position={[-0.181, 0.303, -20.381]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.559}
      />
      {/* <mesh
        geometry={nodes["ARTWORKS_DETAILS-01045"].geometry}
        material={materials["ARTWORKS DETAILS-01.019"]}
        position={[-0.182, 0.317, -8.367]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      /> */}
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01097"].geometry}
        material={materials["ARTWORKS DETAILS-01.019"]}
        position={[-0.182, 0.317, -20.381]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01044"].geometry}
        material={materials["ARTWORKS DETAILS-01.048"]}
        position={[-0.182, 0.317, -8.367]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01043"].geometry}
        material={materials["ARTWORKS DETAILS-01.049"]}
        position={[-0.181, 0.303, -8.367]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.559}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01042"].geometry}
        material={materials["ARTWORKS DETAILS-01.050"]}
        position={[-0.557, 0.314, -7.384]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01041"].geometry}
        material={materials["ARTWORKS DETAILS-01.051"]}
        position={[-0.556, 0.314, -7.384]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01040"].geometry}
        material={materials["ARTWORKS DETAILS-01.052"]}
        position={[2.839, 0.315, -15.392]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01039"].geometry}
        material={materials["ARTWORKS DETAILS-01.053"]}
        position={[-1.092, 0.314, -5.4]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01038"].geometry}
        material={materials["ARTWORKS DETAILS-01.054"]}
        position={[-1.091, 0.347, -5.4]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01037"].geometry}
        material={materials["ARTWORKS DETAILS-01.055"]}
        position={[-1.301, 0.312, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01036"].geometry}
        material={materials["ARTWORKS DETAILS-01.056"]}
        position={[-1.3, 0.357, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01035"].geometry}
        material={materials["ARTWORKS DETAILS-01.057"]}
        position={[-1.393, 0.315, -3.386]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01034"].geometry}
        material={materials["ARTWORKS DETAILS-01.058"]}
        position={[-1.393, 0.339, -3.386]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01033"].geometry}
        material={materials["ARTWORKS DETAILS-01.059"]}
        position={[1.629, 0.314, -8.364]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={[0.48, 0.541, 0.541]}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01032"].geometry}
        material={materials["ARTWORKS DETAILS-01.060"]}
        position={[1.628, 0.314, -8.364]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01031"].geometry}
        material={materials["ARTWORKS DETAILS-01.061"]}
        position={[2.004, 0.314, -7.381]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01030"].geometry}
        material={materials["ARTWORKS DETAILS-01.062"]}
        position={[2.003, 0.314, -7.381]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01029"].geometry}
        material={materials["ARTWORKS DETAILS-01.063"]}
        position={[2.281, 0.309, -6.391]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01028"].geometry}
        material={materials["ARTWORKS DETAILS-01.064"]}
        position={[2.538, 0.314, -5.398]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01027"].geometry}
        material={materials["ARTWORKS DETAILS-01.065"]}
        position={[2.839, 0.314, -15.392]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01026"].geometry}
        material={materials["ARTWORKS DETAILS-01.066"]}
        position={[2.747, 0.314, -4.38]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01025"].geometry}
        material={materials["ARTWORKS DETAILS-01.067"]}
        position={[2.746, 0.314, -4.38]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01023"].geometry}
        material={materials["ARTWORKS DETAILS-01.069"]}
        position={[2.839, 0.364, -3.385]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.625}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01022"].geometry}
        material={materials["ARTWORKS DETAILS-01.070"]}
        position={[-0.182, 0.327, 3.675]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01021"].geometry}
        material={materials["ARTWORKS DETAILS-01.071"]}
        position={[-0.181, 0.337, 3.676]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01020"].geometry}
        material={materials["ARTWORKS DETAILS-01.072"]}
        position={[-0.557, 0.314, 4.658]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01019"].geometry}
        material={materials["ARTWORKS DETAILS-01.073"]}
        position={[-0.556, 0.314, 4.659]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01017"].geometry}
        material={materials["ARTWORKS DETAILS-01.075"]}
        position={[-1.092, 0.314, 6.642]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01015"].geometry}
        material={materials["ARTWORKS DETAILS-01.076"]}
        position={[-1.302, 0.314, 7.673]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01013"].geometry}
        material={materials["ARTWORKS DETAILS-01.078"]}
        position={[-1.393, 0.315, 8.657]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01012"].geometry}
        material={materials["ARTWORKS DETAILS-01.079"]}
        position={[-1.393, 0.308, 8.657]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01011"].geometry}
        material={materials["ARTWORKS DETAILS-01.080"]}
        position={[1.629, 0.314, 3.678]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01010"].geometry}
        material={materials["ARTWORKS DETAILS-01.081"]}
        position={[1.628, 0.314, 3.679]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01009"].geometry}
        material={materials["ARTWORKS DETAILS-01.082"]}
        position={[2.004, 0.314, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01008"].geometry}
        material={materials["ARTWORKS DETAILS-01.083"]}
        position={[2.003, 0.314, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01005"].geometry}
        material={materials["ARTWORKS DETAILS-01.085"]}
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01003"].geometry}
        material={materials["ARTWORKS DETAILS-01.086"]}
        position={[2.749, 0.314, 7.674]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01002"].geometry}
        material={materials["ARTWORKS DETAILS-01.087"]}
        position={[2.748, 0.314, 7.674]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01001"].geometry}
        material={materials["ARTWORKS DETAILS-01.088"]}
        position={[2.839, 0.315, 8.657]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01"].geometry}
        material={materials["ARTWORKS DETAILS-01.089"]}
        position={[2.839, 0.308, 8.657]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.584}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials["White Plaster.005"]}
        position={[0.666, 0.677, -15.824]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.322, 0.314, 0.313]}
      />
      <group
        position={[-0.834, 0.298, 5.649]}
        rotation={[-Math.PI / 2, 0, 1.288]}
        scale={-0.581}
      >
        <mesh
          geometry={nodes["ARTWORKS_DETAILS-01017_1"].geometry}
          material={materials["ARTWORKS DETAILS-01.021"]}
        />
        <mesh
          geometry={nodes["ARTWORKS_DETAILS-01017_2"].geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <group
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.584}
      >
        <mesh
          geometry={nodes["ARTWORKS_DETAILS-01010_1"].geometry}
          material={materials["ARTWORKS DETAILS-01.006"]}
        />
        <mesh
          geometry={nodes["ARTWORKS_DETAILS-01010_2"].geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <group
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      >
        <mesh
          geometry={nodes["ARTWORKS_DETAILS-01010_1"].geometry}
          material={materials["ARTWORKS DETAILS-01.006"]}
        />
        <mesh
          geometry={nodes["ARTWORKS_DETAILS-01010_2"].geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        geometry={nodes.Cube102.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube103.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube104.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube105.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube106.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube097.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube098.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube099.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube100.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube091.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube092.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube093.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube094.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube095.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube086.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube087.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube088.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube089.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube080.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube081.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube082.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube083.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube084.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube073.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube074.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube075.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube076.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube077.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01006"].geometry}
        material={materials.PaletteMaterial001}
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01016"].geometry}
        material={materials.PaletteMaterial001}
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01004"].geometry}
        material={materials["Material.014"]}
        position={[-1.091, 0.314, 6.642]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.584}
      />
      <mesh
        geometry={nodes["ARTWORKS_DETAILS-01071"].geometry}
        material={materials["Material.014"]}
        position={[-0.834, 0.298, 5.649]}
        rotation={[-Math.PI / 2, 0, 1.288]}
        scale={-0.581}
      />
      <mesh
        geometry={nodes.Cube069.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube071.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube072.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube181.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube064.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube066.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube067.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube180.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube058.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube060.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube061.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube179.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube054.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube056.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube057.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube178.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube048.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube050.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube177.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube042.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube044.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube045.geometry}
        material={materials.PaletteMaterial001}
        position={[0.758, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        geometry={nodes.Cube176.geometry}
        material={materials.PaletteMaterial001}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <group
        position={[0.666, 0.678, -3.755]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.322, 0.314, 0.313]}
      >
        <mesh
          geometry={nodes.Sphere006_1.geometry}
          material={materials["White Plaster.002"]}
        />
        <mesh
          geometry={nodes.Sphere006_2.geometry}
          material={materials["White Plaster.001"]}
        />
        <mesh
          geometry={nodes.Sphere006_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[0.666, 0.678, 8.291]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.322, 0.314, 0.313]}
      >
        <mesh
          geometry={nodes.Sphere006_1.geometry}
          material={materials["White Plaster.002"]}
        />
        <mesh
          geometry={nodes.Sphere006_2.geometry}
          material={materials["White Plaster.001"]}
        />
        <mesh
          geometry={nodes.Sphere006_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder031.geometry}
        material={materials["White Plaster.001"]}
        position={[-0.84, 0.699, 4.012]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder032.geometry}
        material={materials["White Plaster.001"]}
        position={[-0.84, 0.699, -8.034]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder033.geometry}
        material={materials["White Plaster.001"]}
        position={[-0.84, 0.699, -20.05]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder028.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.181, 0.699, 5.012]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder029.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.181, 0.699, -7.034]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder030.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.181, 0.699, -19.05]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder025.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.458, 0.699, 6.021]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder026.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.458, 0.699, -6.025]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder027.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.458, 0.699, -18.041]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder022.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.708, 0.699, 7.022]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder023.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.708, 0.699, -5.024]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder024.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.708, 0.699, -17.04]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube038.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube039.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube040.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube036.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube037.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube033.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube055.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube028.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube051.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder019.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.858, 0.699, 8.071]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.858, 0.699, -3.975]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={materials["White Plaster.001"]}
        position={[-1.858, 0.699, -15.99]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder014.geometry}
        material={materials["White Plaster.001"]}
        position={[2.196, 0.699, 4.012]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder015.geometry}
        material={materials["White Plaster.001"]}
        position={[2.196, 0.699, -8.034]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder016.geometry}
        material={materials["White Plaster.001"]}
        position={[2.196, 0.699, -20.05]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder012.geometry}
        material={materials["White Plaster.001"]}
        position={[2.538, 0.699, -7.034]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder013.geometry}
        material={materials["White Plaster.001"]}
        position={[2.538, 0.699, -19.05]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder018.geometry}
        material={materials["White Plaster.001"]}
        position={[2.538, 0.699, 5.012]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder008.geometry}
        material={materials["White Plaster.001"]}
        position={[2.815, 0.699, -6.025]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder011.geometry}
        material={materials["White Plaster.001"]}
        position={[2.815, 0.699, -18.041]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder017.geometry}
        material={materials["White Plaster.001"]}
        position={[2.815, 0.699, 6.021]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials["White Plaster.001"]}
        position={[3.064, 0.699, -5.024]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder007.geometry}
        material={materials["White Plaster.001"]}
        position={[3.064, 0.699, -17.04]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder010.geometry}
        material={materials["White Plaster.001"]}
        position={[3.064, 0.699, 7.022]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials["White Plaster.001"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials["White Plaster.001"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials["White Plaster.001"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube025.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["White Plaster.005"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={materials["default"]}
        position={[-0.388, 2.069, 6.889]}
        scale={[0.322, 0.314, 0.313]}
      />
      <group position={[0.653, 2.069, 6.889]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.04, 6.675]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.011, 6.461]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.982, 6.247]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.952, 6.033]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.923, 5.819]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.894, 5.605]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.865, 5.391]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.836, 5.177]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.118, -5.048]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.067, -5.262]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.038, -5.476]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.009, -5.69]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.98, -5.904]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.951, -6.118]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.922, -6.332]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.892, -6.546]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.863, -6.76]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.107, -17.11]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.077, -17.324]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.047, -17.538]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 2.018, -17.752]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.989, -17.966]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.96, -18.18]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.931, -18.394]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.902, -18.608]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0.653, 1.873, -18.822]} scale={[0.322, 0.314, 0.313]}>
        <mesh
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder035.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder036.geometry}
        material={materials["default"]}
        position={[-0.388, 2.04, 6.675]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder038.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder039.geometry}
        material={materials["default"]}
        position={[-0.388, 2.011, 6.461]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder041.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder042.geometry}
        material={materials["default"]}
        position={[-0.388, 1.982, 6.247]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder044.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder045.geometry}
        material={materials["default"]}
        position={[-0.388, 1.952, 6.033]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder047.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder048.geometry}
        material={materials["default"]}
        position={[-0.388, 1.923, 5.819]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder050.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder051.geometry}
        material={materials["default"]}
        position={[-0.388, 1.894, 5.605]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder053.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder054.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder056.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder057.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder059.geometry}
        material={materials["default"]}
        position={[0.688, 0.233, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["White Plaster.001"]}
        position={[0.653, 0.233, -0.36]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["White Plaster.001"]}
        position={[0.688, 0.233, -12.406]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["White Plaster.001"]}
        position={[0.653, 0.233, -12.406]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["White Plaster.001"]}
        position={[0.688, 0.233, -24.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials["White Plaster.001"]}
        position={[0.653, 0.233, -24.422]}
      />
      <mesh
        geometry={nodes.Cube078.geometry}
        material={materials["White Plaster.001"]}
        position={[0.673, 0.233, -0.36]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["White Plaster.001"]}
        position={[3.215, 0.699, -3.975]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["White Plaster.001"]}
        position={[3.215, 0.699, -15.99]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials["White Plaster.001"]}
        position={[3.215, 0.699, 8.071]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials["Material.002"]}
        position={[0.688, 0.233, -12.406]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={materials["Material.002"]}
        position={[0.688, 0.233, -24.422]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        geometry={nodes.Sphere020.geometry}
        material={materials["Material.002"]}
        position={[0.688, 0.271, -0.36]}
        scale={[0.322, 0.314, 0.313]}
      />
    </group>
  );
}

useGLTF.preload("/building.glb");
