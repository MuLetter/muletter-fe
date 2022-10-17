import { STrack } from "@api/types";
import { ITrack } from "@store/types";

export type AudioMode = "mini" | "mini-ex" | "full";

export interface ItemProps {
  onNewPlay: (track: STrack) => void;
  track: STrack | ITrack;
}
