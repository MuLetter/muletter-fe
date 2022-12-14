import { IMail, ITrack } from "@store/types";

export interface ResMail {
  mailBoxId: string;
  likes: string[];
  mail: IMail;
  isMe: boolean;
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
