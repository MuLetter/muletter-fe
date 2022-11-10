export interface StepStyleProps {
  isCompleted: boolean;
  isNow: boolean;
  isLast?: boolean;
  title: string;
}

export interface WizardProps {
  onAlert: () => void;
}

export interface WizardControlItem {
  setNextConfirm: (nextConfirm: (() => Promise<boolean>) | null) => void;
  next: () => void;
}

export interface ProcessItem {
  title: string;
  component: (wizardProps: WizardControlItem) => JSX.Element;
}

export interface ConfirmControlProps {
  next: () => void;
}

export interface HelpBalloonStyleProps {
  width?: number;
  x?: number;
  y?: number;
}
