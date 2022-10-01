import { STrack } from "@api/types";
import { ITrack } from "@store/types";

export interface OKAlertProps {
  title: string;
  subtitle: string;
  tracks: ITrack[] | STrack[];
}
