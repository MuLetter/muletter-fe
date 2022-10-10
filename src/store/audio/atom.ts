import { STrack } from "@api/types";
import { atom } from "recoil";

export const audioTrackState = atom<STrack | null>({
  key: "audioTrack",
  default: null,
});
