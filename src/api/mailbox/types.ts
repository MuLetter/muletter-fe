import { IMailBox, ISizeMail, ITrack } from "@store/types";

export interface ResPostMailBox extends IMailBox {}

export interface ReqPostMailBoxTrackParams {
  id: string;
  tracks: ITrack[];
}

export interface ResMailboxDetail {
  mailbox: IMailBox;
  mails: ISizeMail[];
}
