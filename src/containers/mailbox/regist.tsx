import { MailBoxRegistComponent, Wizard } from "@component";
import React from "react";
import { RegistOKAlert } from "@component";
import { OpacityAnimationCont } from "@styles/block";
import { ControlMailboxProvider } from "@context";

export function MailBoxRegistContainer() {
  const [alert, setAlert] = React.useState<boolean>(false);

  const onAlert = React.useCallback(() => {
    setAlert(true);
  }, []);

  return (
    <OpacityAnimationCont>
      <ControlMailboxProvider>
        {alert && <RegistOKAlert />}
        <MailBoxRegistComponent>
          <Wizard onAlert={onAlert} />
        </MailBoxRegistComponent>
      </ControlMailboxProvider>
    </OpacityAnimationCont>
  );
}
