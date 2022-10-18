import React from "react";

export interface LidStyleProps {
  isOpen: boolean;
}

export interface ContentStyleProps {
  isView: boolean;
}

export interface ContentControlProps {}

export interface ButtonProps {
  title: string;
  clickAction?: (...args: any) => void;
  type?: "button" | "submit";
}

export interface ButtonContentProps {
  buttons: ButtonProps[];
}

export interface MailBoxControlProps {
  rotate: boolean;
  topAnchor: boolean;
  open: boolean;
  content: boolean;
  setContentView: (state: boolean) => void;

  bottomContent?: React.ReactNode;
}
