import { Mail3D } from "@asset/symbols";
import { RecoListWrap, Wrap } from "./styles";
import React from "react";
import { MailComponentProps } from "./types";

export function MailComponent({
  children,
  buttons,
}: React.PropsWithChildren<MailComponentProps>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const refScreen = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, []);

  React.useEffect(() => {
    window.scrollBy({
      top: 80,
    });
  }, []);

  return (
    <Wrap ref={refScreen}>
      <Mail3D isOpen={open} refScreen={refScreen} buttons={buttons}>
        <RecoListWrap>{children}</RecoListWrap>
      </Mail3D>
    </Wrap>
  );
}
