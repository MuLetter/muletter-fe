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
  id: string;
  title: string;
  image: string;
  tracks: Array<any>;
  authId: string;
}
