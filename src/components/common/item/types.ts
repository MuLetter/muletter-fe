import { Track } from "@api/types";
import { MailBox } from "@store/types";

export interface MailBoxItemControlProps {
  mailBox: MailBox;
  tracks: Track[];
  isAutoOpen?: boolean;
}

export interface MiniAlbumArtProps {
  image: string;
}
