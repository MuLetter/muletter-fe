import { STrack } from "@api/types";
import { ITrack } from "@store/types";
import { atom } from "recoil";

export const audioTrackState = atom<STrack[] | ITrack[] | null>({
  key: "audioTrack",
  default: null,
});

export const playerState = atom<any | null>({
  key: "player",
  default: null,
});
