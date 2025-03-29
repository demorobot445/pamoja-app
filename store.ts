import { proxy } from "valtio";

type Store = {
  isCartActive: boolean;
  artistLink: string;
  moveCamera: (x: number, y: number, z: number, rotateY: number) => void;
  previousLocation: { x: number; y: number; z: number; rotateY: number };
  moveToFirstRoom: () => void;
  moveToSecondRoom: () => void;
  moveToThirdRoom: () => void;
  frameInfo: { title: string; detail: string[] };
};

export const store = proxy<Store>({
  isCartActive: false,
  artistLink: "/artists/habyarimana-iddy",
  moveCamera: () => {},
  previousLocation: { x: 0, y: 0, z: 0, rotateY: 0 },
  moveToFirstRoom: () => {},
  moveToSecondRoom: () => {},
  moveToThirdRoom: () => {},
  frameInfo: { title: "", detail: ["", "", ""] },
});
