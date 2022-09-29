import { STrack } from "@api/types";
import { IMailBox, RegistMailBox } from "@store/types";

export interface MailBoxItemControlProps {
  mailBox: IMailBox | RegistMailBox;
  tracks: STrack[];
  isAutoOpen?: boolean;
}

export interface MiniAlbumArtProps {
  image: string;
}
