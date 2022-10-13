import { STrack } from "@api/types";
import { ITrack } from "@store/types";

export type AudioMode = "mini" | "mini-ex" | "full";

export interface ItemProps {
  onNewPlay: (trackId: string) => void;
  track: STrack | ITrack;
}
