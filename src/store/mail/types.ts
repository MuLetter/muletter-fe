import { ITrack } from "@store/types";

export interface IMail {
  _id: string;
  title: string;
  tracks: ITrack[];
  mailBoxId: string;
  createdAt: Date;
}

export interface ISizeMail extends IMail {
  size: number;
}
