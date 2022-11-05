import { STrack } from "@api/types";
import { ITrack } from "@store/types";
import React from "react";

export interface MailBoxDetailComponentProps {
  bottomContent: React.ReactNode;
}

export interface SmallMusicItemProps {
  tracks: STrack[] | ITrack[];
}

export interface DetailBottomContentProps extends SmallMusicItemProps {
  isMe?: boolean;
}
