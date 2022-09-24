import { Track } from "@api/types";

export interface SelectItemProps {
  track: Track;
  selectAction?: (...args: any) => void;
}
