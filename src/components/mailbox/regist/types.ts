export interface StepStyleProps {
  isLast?: boolean;
  title: string;
}

export interface WizardControlItem {
  setNextConfirm: (nextConfirm: (() => Promise<boolean>) | null) => void;
}

export interface ProcessItem {
  title: string;
  component: (wizardProps: WizardControlItem) => JSX.Element;
}
