import { IAuth } from "@store/types";

export interface IPoint {
  x: number;
  y: number;
}

export interface MailboxByMap {
  _id: string;
  image: string;
  point: IPoint;
  isMe?: boolean;
}

export interface RegistedMailBoxInformation {
  title: string;
  image: Blob;
  imageLinkBak: string;
}

export interface RegistMailBox {
  title: string;
  image: string;
}

export interface IMailBox {
  _id: string;
  title: string;
  image: string;
  tracks: ITrack[];
  authId: string;

  user?: IAuth;
  mailCount?: number;
  likeCount?: number;
  isLike?: boolean;
}

export interface ITrack {
  id: string;
  name: string;
  artists: IArtist[];
  album: IAlbum;

  isUse?: boolean;
  label?: number;
  preview_url?: string;
}

export interface IAlbum {
  images: IAlbumArt[];
}

export interface IAlbumArt {
  height: number;
  url: string;
  width: number;
}

export interface IArtist {
  id: string;
  name: string;
}
