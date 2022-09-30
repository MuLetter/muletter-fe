import { atom } from "recoil";
import { LetterAlert } from "./types";

export const letterAlertState = atom<LetterAlert | null>({
  key: "letterAlertState",
  default: null,
});
