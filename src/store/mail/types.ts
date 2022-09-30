import { ITrack } from "@store/types";

export interface IMail {
  _id: string;
  title: string;
  tracks: ITrack[];
}

export interface ISizeMail extends IMail {
  size: number;
}
