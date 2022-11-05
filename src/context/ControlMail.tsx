import React from "react";

export interface IControlMailContext {
  open: boolean;

  openAction: () => void;
  closeAction: () => void;
}

export const ControlMailContext = React.createContext<IControlMailContext>({
  open: false,

  openAction: () => {},
  closeAction: () => {},
});

export function ControlMailProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);

  const openAction = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeAction = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ControlMailContext.Provider value={{ open, openAction, closeAction }}>
      {children}
    </ControlMailContext.Provider>
  );
}
