export interface StepStyleProps {
  isLast?: boolean;
  title: string;
}

export interface WizardControlItem {
  prev: () => void;
  next: () => void;
}

export interface ProcessItem {
  title: string;
  component: (wizardProps: WizardControlItem) => JSX.Element;
}
