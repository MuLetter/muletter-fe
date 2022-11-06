import { ITrack } from "@store/types";
import React from "react";

export interface ButtonProps {
  title: string;
  clickAction?: (...args: any) => void;
  type?: "button" | "submit";
}

export interface RightContentProps {
  isMe: boolean;
  setReplyDatas: (track: ITrack[]) => void;
}

export interface MailComponentProps {
  rightContent: React.ReactNode;
}

export interface MailRightContentProps {
  mailBoxId: string;
  isLike: boolean;
  track: ITrack;
}
