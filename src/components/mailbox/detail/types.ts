import { STrack } from "@api/types";
import { IMailBox, ITrack } from "@store/types";
import React from "react";

export interface MailBoxDetailComponentProps {
  bottomContent: React.ReactNode;
}

export interface SmallMusicItemProps {
  tracks: STrack[] | ITrack[];
}

export interface ReactiveBoxProps {
  mailbox: IMailBox;
}

export interface DetailBottomContentProps
  extends SmallMusicItemProps,
    ReactiveBoxProps {
  isMe?: boolean;
}
