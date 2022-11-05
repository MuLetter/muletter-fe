import { Mail3D } from "@asset/symbols";
import { RecoListWrap, Wrap } from "./styles";
import React from "react";
import { OpacityAnimationCont } from "@styles/block";
import { MailComponentProps } from "./types";
import { ControlMailContext } from "@context";

export * from "./LeftContent";
export * from "./RightContent";
export function MailComponent({
  children,
  rightContent,
}: React.PropsWithChildren<MailComponentProps>) {
  const { open } = React.useContext(ControlMailContext);
  const refScreen = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.scrollBy({
      top: 80,
    });
  }, []);

  return (
    <OpacityAnimationCont isMin>
      <Wrap ref={refScreen}>
        <Mail3D isOpen={open} refScreen={refScreen} rightContent={rightContent}>
          <RecoListWrap>{children}</RecoListWrap>
        </Mail3D>
      </Wrap>
    </OpacityAnimationCont>
  );
}
