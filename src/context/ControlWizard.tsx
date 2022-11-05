import { STrack } from "@api/types";
import { RegistedMailBoxInformation } from "@store/types";
import _ from "lodash";
import React from "react";

export interface IControlWizardContext {
  content: RegistedMailBoxInformation | null;
  selectedTracks: STrack[];

  setContent: (registed: RegistedMailBoxInformation) => void;
  appendTrack: (track: STrack) => boolean;
  removeTrack: (track: STrack) => boolean;
}

export const ControlWizardContext = React.createContext<IControlWizardContext>({
  content: null,
  selectedTracks: [],

  setContent: (registed) => {},
  appendTrack: (track) => true,
  removeTrack: (track) => true,
});

export function ControlWizardProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [content, setContent] =
    React.useState<RegistedMailBoxInformation | null>(null);
  const [selected, setSelected] = React.useState<STrack[]>([]);

  const appendTrack = React.useCallback((track: STrack) => {
    try {
      setSelected((prev) => _.uniqBy(_.concat(prev, track), ({ id }) => id));

      return true;
    } catch (err) {
      return false;
    }
  }, []);

  const removeTrack = React.useCallback((track: STrack) => {
    try {
      setSelected((prev) => _.filter(prev, ({ id }) => id !== track.id));

      return true;
    } catch (err) {
      return false;
    }
  }, []);

  return (
    <ControlWizardContext.Provider
      value={{
        content,
        selectedTracks: selected,
        setContent,
        appendTrack,
        removeTrack,
      }}
    >
      {children}
    </ControlWizardContext.Provider>
  );
}
