import { MailBox3D } from "@asset/symbols";
import { ControlMailboxContext, ControlWizardContext } from "@context";

import React from "react";
import { useContext } from "react";
import { MailBoxWrap } from "../styles";
import { HelpBar } from "./HelpBar";

export * from "./Wizard";
export * from "./RegistOKAlert";

export function MailBoxRegistComponent({
  children,
}: React.PropsWithChildren<any>) {
  const { openAction, setContentView, ...rest } = useContext(
    ControlMailboxContext
  );
  const { help, setHelp } = React.useContext(ControlWizardContext);

  React.useEffect(() => {
    openAction();
  }, [openAction]);

  const changeContentView = React.useCallback(
    (state: boolean) => {
      setContentView(state);
      if (state) {
        setTimeout(() => {
          window.scrollBy({
            top: 120,
            behavior: "smooth",
          });
        }, 200);
      }
    },
    [setContentView]
  );

  return (
    <MailBoxWrap>
      <button onClick={() => setHelp(true)}>help</button>
      {help && <HelpBar />}

      <MailBox3D setContentView={changeContentView} {...rest}>
        {children}
      </MailBox3D>
    </MailBoxWrap>
  );
}
