import { atom } from "recoil";
import { IAuth } from "./types";

export const authState = atom<IAuth | null>({
  key: "AuthState",
  default: null,
});

export const initAuthState = atom<boolean>({
  key: "initAuthState",
  default: false,
});
