import { STrack } from "@api/types";

export interface MusicCardProps {
  track: STrack;
  selectAction?: (...args: any) => void;
}
