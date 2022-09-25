import { Track } from "@api/types";

export interface MusicCardProps {
  track: Track;
  selectAction?: (...args: any) => void;
}
