import { ITrack } from "@store/types";
import React from "react";

export interface IControlMailContext {
  open: boolean;
  selectedTrack: ITrack | null;

  openAction: () => void;
  closeAction: () => void;
  selected: (track: ITrack) => void;
}

export const ControlMailContext = React.createContext<IControlMailContext>({
  open: false,
  selectedTrack: null,

  openAction: () => {},
  closeAction: () => {},
  selected: () => {},
});

export function ControlMailProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = React.useState<ITrack | null>(null);

  const openAction = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeAction = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ControlMailContext.Provider
      value={{
        open,
        openAction,
        closeAction,
        selectedTrack,
        selected: setSelectedTrack,
      }}
    >
      {children}
    </ControlMailContext.Provider>
  );
}
