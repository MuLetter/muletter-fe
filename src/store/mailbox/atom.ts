import { Track } from "@api/types";
import { atom } from "recoil";
import { RegistedMailBoxInformation } from "./types";

export const selectTracksState = atom<Track[]>({
  key: "selectTracksState",
  default: [],
});

export const registedMailBoxState = atom<RegistedMailBoxInformation | null>({
  key: "registerdMailBoxState",
  default: null,
});
