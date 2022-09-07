export interface LidStyleProps {
  isOpen: boolean;
}

export interface LidControlProps {
  animationEnd: (isOpen: boolean) => void;
}

export interface LetterStyleProps {
  isView: boolean;
}

export interface LetterControlProps {
  animationEnd: (isView: boolean) => void;
}

export interface MailStyleProps {
  isRotate: boolean;
}
