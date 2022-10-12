import { IMailBox, MailboxByMap } from "@store/types";

export interface MapComponentProps {
  mailBoxes: MailboxByMap[];
}

export interface ContentProps {
  mailBoxes: IMailBox[];
}

export interface ItemProps {
  mailBox: IMailBox;
}
