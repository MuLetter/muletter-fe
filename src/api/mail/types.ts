import { IMail, ITrack } from "@store/types";

export interface ResMail {
  likes: string[];
  mail: IMail;
}

export interface ResLike {
  mailBoxId: string;
  track: ITrack;
}

export interface ResDisLike {
  mailBoxId: string;
  trackId: string;
}
