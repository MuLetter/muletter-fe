import { Track } from "@api/types";
import { atom } from "recoil";

export const selectTracksState = atom<Track[]>({
  key: "selectTracksState",
  default: [],
});
