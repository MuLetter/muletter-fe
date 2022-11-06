import React from "react";

export interface ButtonProps {
  title: string;
  clickAction?: (...args: any) => void;
  type?: "button" | "submit";
}

export interface RightContentProps {
  onPlay: () => void;
  onReply: () => void;
  isMe: boolean;
}

export interface MailComponentProps {
  rightContent: React.ReactNode;
}
