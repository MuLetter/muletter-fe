import { IMail, ITrack } from "@store/types";

export interface ResMail {
  likes: string[];
  mail: IMail;
}

export interface ResLike {
  mailBoxId: string;
  track: ITrack;
  isLike: boolean;
}

export interface ResDisLike {
  mailBoxId: string;
  trackId: string;
}
