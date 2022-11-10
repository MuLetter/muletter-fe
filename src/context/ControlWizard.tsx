import { STrack } from "@api/types";
import { RegistedMailBoxInformation } from "@store/types";
import _ from "lodash";
import React from "react";

export interface IControlWizardContext {
  content: RegistedMailBoxInformation | null;
  selectedTracks: STrack[];
  help: boolean;

  setContent: (registed: RegistedMailBoxInformation) => void;
  appendTrack: (track: STrack) => boolean;
  removeTrack: (track: STrack) => boolean;
  setHelp: (state: boolean) => void;
}

export const ControlWizardContext = React.createContext<IControlWizardContext>({
  content: null,
  selectedTracks: [],
  help: false,

  setContent: (registed) => {},
  appendTrack: (track) => true,
  removeTrack: (track) => true,
  setHelp: () => {},
});

export function ControlWizardProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [help, setHelp] = React.useState<boolean>(false);
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
        help,
        setHelp,
      }}
    >
      {children}
    </ControlWizardContext.Provider>
  );
}
