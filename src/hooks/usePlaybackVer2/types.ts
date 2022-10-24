import { STrack } from "@api/types";
import { ITrack } from "@store/types";

export type PlayerType = "preview" | "spotify";
export type ResultUsePlayback = [
  isPlay: boolean,
  track: STrack | ITrack,
  tracks: STrack[] | ITrack[],
  player: Player
];

export interface Player {
  type?: PlayerType;
  pause: () => void;
  play: () => void;
  next: () => void;
  prev: () => void;
  shuffle: () => void;
  newPlay: (track: STrack) => void;
}
