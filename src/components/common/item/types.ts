import { STrack } from "@api/types";
import {
  IMail,
  IMailBox,
  ISizeMail,
  ITrack,
  RegistMailBox,
} from "@store/types";

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

export interface MailItemControlProps {
  mail: IMail | ISizeMail;
  clickAction?: (...args: any) => void;
}

export interface MiniStyleProps {
  rounded?: "normal" | "cute";
  colorTheme?: "black" | "white";
}

export interface MusicItemControlProps {
  onMouseEnter?: (...args: any) => void;
  isIconTool?: boolean;
  isLike?: boolean;
  mailBoxId?: string;
}
