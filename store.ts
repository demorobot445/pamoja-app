import { proxy } from "valtio";

type Store = {
  isCartActive: boolean;
};

export const store = proxy<Store>({
  isCartActive: false,
});
