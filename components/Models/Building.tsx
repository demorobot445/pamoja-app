import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere006: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube063: THREE.Mesh;
    ["ARTWORKS_DETAILS-04004"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04005"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04006"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-04007"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01045"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01046"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01047"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01048"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01049"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01050"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01051"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01052"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01053"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01054"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01055"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01056"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01057"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01058"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01059"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01060"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01061"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01062"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01063"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01064"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01065"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01066"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01067"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01068"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01069"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01070"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01072"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01074"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01075"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01076"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01077"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01078"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01079"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01080"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01081"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01082"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01084"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01086"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01087"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01088"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01089"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01090"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01091"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01092"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01093"]: THREE.Mesh;
    ["ARTWORKS_DETAILS-01094"]: THREE.Mesh;
    Sphere020: THREE.InstancedMesh;
    Cylinder009: THREE.InstancedMesh;
    Cube078: THREE.InstancedMesh;
    Cylinder005: THREE.InstancedMesh;
    Cube004: THREE.InstancedMesh;
    Cube022: THREE.InstancedMesh;
    Cube025: THREE.InstancedMesh;
    Cube021: THREE.InstancedMesh;
    Cube026: THREE.InstancedMesh;
    Cube002: THREE.InstancedMesh;
    Cylinder010: THREE.InstancedMesh;
    Cylinder017: THREE.InstancedMesh;
    Cylinder018: THREE.InstancedMesh;
    Cylinder003: THREE.InstancedMesh;
    Cylinder002: THREE.InstancedMesh;
    Cube015: THREE.InstancedMesh;
    Cube051: THREE.InstancedMesh;
    Cube030: THREE.InstancedMesh;
    Cube055: THREE.InstancedMesh;
    Cube029: THREE.InstancedMesh;
    Cube027: THREE.InstancedMesh;
    Cylinder006: THREE.InstancedMesh;
    Cylinder007: THREE.InstancedMesh;
    Cylinder008: THREE.InstancedMesh;
    Cylinder004: THREE.InstancedMesh;
    Sphere075: THREE.InstancedMesh;
    Cube176_instance_0: THREE.InstancedMesh;
    Cube177_instance_0: THREE.InstancedMesh;
    Cube178_instance_0: THREE.InstancedMesh;
    Cube179_instance_0: THREE.InstancedMesh;
    Cube180_instance_0: THREE.InstancedMesh;
    Cube181_instance_0: THREE.InstancedMesh;
    ["ARTWORKS_DETAILS-01071"]: THREE.InstancedMesh;
    ["ARTWORKS_DETAILS-01082_1"]: THREE.InstancedMesh;
  };
  materials: {
    ["White Plaster.005"]: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.004"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.005"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.006"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-04.007"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.048"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.049"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.050"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.051"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.052"]: THREE.MeshStandardMaterial;
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
    ["ARTWORKS DETAILS-01.065"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.066"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.067"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.068"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.069"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.070"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.071"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.072"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.073"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.075"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.076"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.077"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.078"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.079"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.080"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.081"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.082"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.083"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.085"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.086"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.087"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.088"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.089"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.016"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.041"]: THREE.MeshStandardMaterial;
    ["ARTWORKS DETAILS-01.084"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["White Plaster.006"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
  };
};

export function Building(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/building.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Sphere006.geometry}
        material={materials["White Plaster.005"]}
        position={[0.626, 0.236, -5.61]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.322, 0.314, 0.313]}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Cube014.geometry}
        material={materials.PaletteMaterial001}
        position={[2.323, 0.282, 5.636]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Cube063.geometry}
        material={nodes.Cube063.material}
        position={[2.323, 0.282, 5.636]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.322, -0.314, -0.313]}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-04004"].geometry}
        material={materials["ARTWORKS DETAILS-04.004"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.824, 0.185, -6.395]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-04005"].geometry}
        material={materials["ARTWORKS DETAILS-04.005"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.272, 0.282, -6.39]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-04006"].geometry}
        material={materials["ARTWORKS DETAILS-04.006"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.825, 0.262, 5.651]}
        rotation={[-Math.PI / 2, 0, 1.282]}
        scale={-0.634}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-04007"].geometry}
        material={materials["ARTWORKS DETAILS-04.007"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.272, 0.282, 5.653]}
        rotation={[Math.PI / 2, 0, 1.282]}
        scale={0.634}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01045"].geometry}
        material={materials["ARTWORKS DETAILS-01.048"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.182, 0.317, -8.367]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01046"].geometry}
        material={materials["ARTWORKS DETAILS-01.049"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.181, 0.303, -8.367]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.559}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01047"].geometry}
        material={materials["ARTWORKS DETAILS-01.050"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.557, 0.314, -7.384]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01048"].geometry}
        material={materials["ARTWORKS DETAILS-01.051"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.556, 0.314, -7.384]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01049"].geometry}
        material={materials["ARTWORKS DETAILS-01.052"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.839, 0.315, -15.392]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01050"].geometry}
        material={materials["ARTWORKS DETAILS-01.053"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.092, 0.314, -5.4]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01051"].geometry}
        material={materials["ARTWORKS DETAILS-01.054"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.091, 0.347, -5.4]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01052"].geometry}
        material={materials["ARTWORKS DETAILS-01.055"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.301, 0.312, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01053"].geometry}
        material={materials["ARTWORKS DETAILS-01.056"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.3, 0.357, -4.376]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01054"].geometry}
        material={materials["ARTWORKS DETAILS-01.057"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.393, 0.315, -3.386]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01055"].geometry}
        material={materials["ARTWORKS DETAILS-01.058"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.393, 0.339, -3.386]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01056"].geometry}
        material={materials["ARTWORKS DETAILS-01.059"]}
        material-roughness={1}
        material-metalness={0}
        position={[1.629, 0.314, -8.364]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={[0.48, 0.541, 0.541]}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01057"].geometry}
        material={materials["ARTWORKS DETAILS-01.060"]}
        material-roughness={1}
        material-metalness={0}
        position={[1.628, 0.314, -8.364]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01058"].geometry}
        material={materials["ARTWORKS DETAILS-01.061"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.004, 0.314, -7.381]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01059"].geometry}
        material={materials["ARTWORKS DETAILS-01.062"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.003, 0.314, -7.381]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01060"].geometry}
        material={materials["ARTWORKS DETAILS-01.063"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.281, 0.309, -6.391]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01061"].geometry}
        material={materials["ARTWORKS DETAILS-01.064"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.538, 0.314, -5.398]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01062"].geometry}
        material={materials["ARTWORKS DETAILS-01.065"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.839, 0.314, -15.392]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01063"].geometry}
        material={materials["ARTWORKS DETAILS-01.066"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.747, 0.314, -4.38]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01064"].geometry}
        material={materials["ARTWORKS DETAILS-01.067"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.746, 0.314, -4.38]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01065"].geometry}
        material={materials["ARTWORKS DETAILS-01.068"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.839, 0.266, -3.385]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.578}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01066"].geometry}
        material={materials["ARTWORKS DETAILS-01.069"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.839, 0.364, -3.385]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.625}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01067"].geometry}
        material={materials["ARTWORKS DETAILS-01.070"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.182, 0.327, 3.675]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01068"].geometry}
        material={materials["ARTWORKS DETAILS-01.071"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.181, 0.337, 3.676]}
        rotation={[-Math.PI / 2, 0, 1.201]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01069"].geometry}
        material={materials["ARTWORKS DETAILS-01.072"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.557, 0.314, 4.658]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01070"].geometry}
        material={materials["ARTWORKS DETAILS-01.073"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.556, 0.314, 4.659]}
        rotation={[-Math.PI / 2, 0, 1.245]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01072"].geometry}
        material={materials["ARTWORKS DETAILS-01.075"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.092, 0.314, 6.642]}
        rotation={[-Math.PI / 2, 0, 1.3]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01074"].geometry}
        material={materials["ARTWORKS DETAILS-01.076"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.302, 0.314, 7.673]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01075"].geometry}
        material={materials["ARTWORKS DETAILS-01.077"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.301, 0.314, 7.673]}
        rotation={[-Math.PI / 2, 0, 1.407]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01076"].geometry}
        material={materials["ARTWORKS DETAILS-01.078"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.393, 0.315, 8.657]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01077"].geometry}
        material={materials["ARTWORKS DETAILS-01.079"]}
        material-roughness={1}
        material-metalness={0}
        position={[-1.393, 0.308, 8.657]}
        rotation={[-Math.PI / 2, 0, 1.514]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01078"].geometry}
        material={materials["ARTWORKS DETAILS-01.080"]}
        material-roughness={1}
        material-metalness={0}
        position={[1.629, 0.314, 3.678]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01079"].geometry}
        material={materials["ARTWORKS DETAILS-01.081"]}
        material-roughness={1}
        material-metalness={0}
        position={[1.628, 0.314, 3.679]}
        rotation={[Math.PI / 2, 0, 1.201]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01080"].geometry}
        material={materials["ARTWORKS DETAILS-01.082"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.004, 0.314, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01081"].geometry}
        material={materials["ARTWORKS DETAILS-01.083"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.003, 0.314, 4.661]}
        rotation={[Math.PI / 2, 0, 1.245]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01082"].geometry}
        material={materials["Material.012"]}
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01084"].geometry}
        material={materials["ARTWORKS DETAILS-01.085"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01086"].geometry}
        material={materials["ARTWORKS DETAILS-01.086"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.749, 0.314, 7.674]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01087"].geometry}
        material={materials["ARTWORKS DETAILS-01.087"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.748, 0.314, 7.674]}
        rotation={[Math.PI / 2, 0, 1.407]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01088"].geometry}
        material={materials["ARTWORKS DETAILS-01.088"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.839, 0.315, 8.657]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.541}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01089"].geometry}
        material={materials["ARTWORKS DETAILS-01.089"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.839, 0.308, 8.657]}
        rotation={[Math.PI / 2, 0, 1.514]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01090"].geometry}
        material={materials["ARTWORKS DETAILS-01.016"]}
        material-roughness={1}
        material-metalness={0}
        position={[-0.835, 0.152, -6.397]}
        rotation={[-Math.PI / 2, 0, 1.289]}
        scale={-0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01091"].geometry}
        material={materials["ARTWORKS DETAILS-01.041"]}
        material-roughness={1}
        material-metalness={0}
        position={[2.541, 0.309, -5.4]}
        rotation={[Math.PI / 2, 0, 1.304]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01092"].geometry}
        material={materials["ARTWORKS DETAILS-01.084"]}
        position={[2.281, 0.33, 5.651]}
        rotation={[Math.PI / 2, 0, 1.288]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01093"].geometry}
        material={materials["Material.001"]}
        position={[2.538, 0.314, 6.644]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={0.584}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["ARTWORKS_DETAILS-01094"].geometry}
        material={materials["Material.013"]}
        position={[-0.834, 0.298, 5.649]}
        rotation={[-Math.PI / 2, 0, 1.288]}
        scale={-0.581}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Sphere020.geometry, materials.Material, 6]}
        instanceMatrix={nodes.Sphere020.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder009.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder009.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube078.geometry, materials["White Plaster.005"], 6]}
        instanceMatrix={nodes.Cube078.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder005.geometry, nodes.Cylinder005.material, 3]}
        instanceMatrix={nodes.Cylinder005.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube004.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube004.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube022.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube022.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube025.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube025.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube021.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube021.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube026.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube026.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube002.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube002.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder010.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder010.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder017.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder017.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder018.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder018.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder003.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder003.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder002.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder002.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube015.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube015.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube051.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube051.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube030.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube030.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube055.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube055.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube029.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube029.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cube027.geometry, materials["White Plaster.005"], 3]}
        instanceMatrix={nodes.Cube027.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder006.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder006.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder007.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder007.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder008.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder008.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Cylinder004.geometry, materials["White Plaster.006"], 3]}
        instanceMatrix={nodes.Cylinder004.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[nodes.Sphere075.geometry, materials["White Plaster.005"], 2]}
        instanceMatrix={nodes.Sphere075.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes.Cube176_instance_0.geometry,
          materials.PaletteMaterial001,
          6,
        ]}
        instanceMatrix={nodes.Cube176_instance_0.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes.Cube177_instance_0.geometry,
          materials.PaletteMaterial001,
          5,
        ]}
        instanceMatrix={nodes.Cube177_instance_0.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes.Cube178_instance_0.geometry,
          materials.PaletteMaterial001,
          6,
        ]}
        instanceMatrix={nodes.Cube178_instance_0.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes.Cube179_instance_0.geometry,
          materials.PaletteMaterial001,
          5,
        ]}
        instanceMatrix={nodes.Cube179_instance_0.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes.Cube180_instance_0.geometry,
          materials.PaletteMaterial001,
          6,
        ]}
        instanceMatrix={nodes.Cube180_instance_0.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes.Cube181_instance_0.geometry,
          materials.PaletteMaterial001,
          6,
        ]}
        instanceMatrix={nodes.Cube181_instance_0.instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes["ARTWORKS_DETAILS-01071"].geometry,
          materials["Material.014"],
          2,
        ]}
        instanceMatrix={nodes["ARTWORKS_DETAILS-01071"].instanceMatrix}
      />
      <instancedMesh
        receiveShadow
        castShadow
        args={[
          nodes["ARTWORKS_DETAILS-01082_1"].geometry,
          materials.PaletteMaterial001,
          2,
        ]}
        instanceMatrix={nodes["ARTWORKS_DETAILS-01082_1"].instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("/building.glb");
