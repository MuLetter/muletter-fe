import React from "react";

export interface BackgroundProps {
  imgSrc: string | null;
}

export interface ButtonProps {
  title: string;
  clickAction?: (...args: any) => void;
  type?: "button" | "submit";
}

export interface RightContentProps {
  onPlay: () => void;
  onReply: () => void;
}

export interface MailComponentProps {
  rightContent: React.ReactNode;
}
