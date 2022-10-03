import React from "react";

export interface LidStyleProps {
  isOpen?: boolean;
}

export interface LidControlProps {
  animationEnd: (isOpen: boolean) => void;
}

export interface LetterStyleProps {
  isView: boolean;
}

export interface LetterControlProps {
  animationEnd: (isView: boolean) => void;
  refLetter: React.RefObject<HTMLDivElement>;
}

export interface MailStyleProps {
  isRotate?: boolean;
}

export interface ButtonProps {
  title: string;
  clickAction?: (...args: any) => void;
  type?: "button" | "submit";
}

export interface MailControlProps {
  isDown?: boolean;
  isOpen?: boolean;
  refScreen?: React.RefObject<HTMLDivElement>;
  buttons?: ButtonProps[];
}
