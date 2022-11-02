import { MailBox3D } from "@asset/symbols";
import { ControlMailboxContext } from "@context";

import React from "react";
import { useContext } from "react";
import { MailBoxWrap } from "../styles";

export * from "./Wizard";
export * from "./RegistOKAlert";

export function MailBoxRegistComponent({
  children,
}: React.PropsWithChildren<any>) {
  const { openAction, setContentView, ...rest } = useContext(
    ControlMailboxContext
  );

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
      <MailBox3D setContentView={changeContentView} {...rest}>
        {children}
      </MailBox3D>
    </MailBoxWrap>
  );
}
