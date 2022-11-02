import React from "react";

export interface IControlMailboxContext {
  open: boolean;
  rotate: boolean;
  topAnchor: boolean;
  content: boolean;
  setContentView: (state: boolean) => void;

  openAction: () => void;
  closeAction: () => void;
}

export const ControlMailboxContext =
  React.createContext<IControlMailboxContext>({
    open: false,
    rotate: false,
    topAnchor: false,
    content: false,
    setContentView: (state) => {},
    openAction: () => {},
    closeAction: () => {},
  });

export function ControlMailboxProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);
  const [content, setContentView] = React.useState<boolean>(false);

  const openAction = React.useCallback(() => {
    setRotate(true);

    setTimeout(() => {
      setTopAnchor(true);
      setOpen(true);
    }, 750);
  }, []);

  const closeAction = React.useCallback(() => {
    setContentView(false);

    setTimeout(() => {
      setTopAnchor(false);
      setOpen(false);
      setRotate(false);
    }, 750);
  }, []);

  return (
    <ControlMailboxContext.Provider
      value={{
        open,
        rotate,
        topAnchor,
        content,
        setContentView,
        openAction,
        closeAction,
      }}
    >
      {children}
    </ControlMailboxContext.Provider>
  );
}
