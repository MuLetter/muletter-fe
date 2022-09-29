import { IMailBox, ITrack } from "@store/types";

export interface ResPostMailBox extends IMailBox {}

export interface ReqPostMailBoxTrackParams {
  id: string;
  tracks: ITrack[];
}
