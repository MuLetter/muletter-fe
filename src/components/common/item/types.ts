import { STrack } from "@api/types";
import { IMailBox, ITrack, RegistMailBox } from "@store/types";

export interface MailBoxItemControlProps {
  mailBox: IMailBox | RegistMailBox;
  tracks: STrack[] | ITrack[];
  isAutoOpen?: boolean;
  isNavigate?: boolean;
}

export interface MailBoxItemStyleProps {
  isCursor?: boolean;
}

export interface MiniAlbumArtProps {
  image: string;
}
