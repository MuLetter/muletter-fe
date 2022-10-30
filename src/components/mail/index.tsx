import { Mail3D } from "@asset/symbols";
import { RecoListWrap, Wrap } from "./styles";
import React from "react";
import { OpacityAnimationCont } from "@styles/block";

export function MailComponent({ children }: React.PropsWithChildren<any>) {
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
    <OpacityAnimationCont>
      <Wrap ref={refScreen}>
        <Mail3D isOpen={open} refScreen={refScreen}>
          <RecoListWrap>{children}</RecoListWrap>
        </Mail3D>
      </Wrap>
    </OpacityAnimationCont>
  );
}
