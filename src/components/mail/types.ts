export interface BackgroundProps {
  imgSrc: string | null;
}

export interface ButtonProps {
  title: string;
  clickAction?: (...args: any) => void;
  type?: "button" | "submit";
}

export interface MailComponentProps {
  buttons?: ButtonProps[];
}
