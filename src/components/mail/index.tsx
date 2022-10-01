import { Mail3D } from "@asset/symbols";
import { Wrap } from "./styles";
import React from "react";

export function MailComponent({ children }: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [bgView, setBgView] = React.useState<boolean>(false);
  const refScreen = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      setTimeout(() => {
        setBgView(true);
      }, 750);
    }, 500);
  }, []);

  React.useEffect(() => {
    window.scrollBy({
      top: 80,
    });
  }, []);

  return (
    <Wrap ref={refScreen}>
      <Mail3D isOpen={open} refScreen={refScreen}>
        {children}
      </Mail3D>
    </Wrap>
  );
}
