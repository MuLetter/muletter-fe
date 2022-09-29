import { Track } from "@api/types";
import { IMailBox, RegistMailBox } from "@store/types";

export interface MailBoxItemControlProps {
  mailBox: IMailBox | RegistMailBox;
  tracks: Track[];
  isAutoOpen?: boolean;
}

export interface MiniAlbumArtProps {
  image: string;
}
