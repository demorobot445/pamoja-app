import { proxy } from "valtio";

type Store = {
  isCartActive: boolean;
  artistLink: string;
  moveCamera: (x: number, y: number, z: number, rotateY: number) => void;
  previousLocation: { x: number; y: number; z: number; rotateY: number };
};

export const store = proxy<Store>({
  isCartActive: false,
  artistLink: "/",
  moveCamera: () => {},
  previousLocation: { x: 0, y: 0, z: 0, rotateY: 0 },
});
