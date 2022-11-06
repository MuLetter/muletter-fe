import { MailBoxRegistComponent, Wizard } from "@component";
import React from "react";
import { RegistOKAlert } from "@component";
import { OpacityAnimationCont } from "@styles/block";
import { ControlMailboxProvider, ControlWizardProvider } from "@context";

export function MailBoxRegistContainer() {
  const [alert, setAlert] = React.useState<boolean>(false);

  const onAlert = React.useCallback(() => {
    setAlert(true);
  }, []);

  return (
    <OpacityAnimationCont>
      <ControlMailboxProvider>
        <ControlWizardProvider>
          {alert && <RegistOKAlert />}
          <MailBoxRegistComponent>
            <Wizard onAlert={onAlert} />
          </MailBoxRegistComponent>
        </ControlWizardProvider>
      </ControlMailboxProvider>
    </OpacityAnimationCont>
  );
}
