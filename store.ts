import { proxy } from "valtio";

type Store = {};

export const store = proxy<Store>({});
