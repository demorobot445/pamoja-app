import { proxy } from "valtio";

type Store = {
  isCartActive: boolean;
  artistLink: string;
};

export const store = proxy<Store>({
  isCartActive: false,
  artistLink: "/",
});
