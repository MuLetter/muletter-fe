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
}

export interface ITrack {
  id: string;
  name: string;
  artists: IArtist[];
  album: IAlbum;

  isUse?: boolean;
  label?: number;
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
