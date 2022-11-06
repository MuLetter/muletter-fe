import { ITrack } from "@store/types";
import React from "react";

export interface IControlMailContext {
  open: boolean;
  selectedTrack: ITrack | null;
  mailBoxId: string | null;

  openAction: () => void;
  closeAction: () => void;
  selected: (track: ITrack) => void;
  setMailBoxId: (id: string) => void;
}

export const ControlMailContext = React.createContext<IControlMailContext>({
  open: false,
  selectedTrack: null,
  mailBoxId: null,

  openAction: () => {},
  closeAction: () => {},
  selected: () => {},
  setMailBoxId: () => {},
});

export function ControlMailProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = React.useState<ITrack | null>(null);
  const [mailBoxId, setMailBoxId] = React.useState<string | null>(null);

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
        mailBoxId,
        setMailBoxId,
      }}
    >
      {children}
    </ControlMailContext.Provider>
  );
}
