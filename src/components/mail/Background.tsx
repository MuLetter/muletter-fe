import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  MailBackground,
  MailBackgroundGuard,
  MailBackgroundShadow,
  MailBackgroundWrap,
} from "./styles";
import { BackgroundProps } from "./types";

export function Background({ imgSrc }: BackgroundProps) {
  const refImg = React.useRef<HTMLImageElement>(null);

  return (
    <MailBackgroundWrap>
      <SwitchTransition>
        <CSSTransition
          key={`mail-bg-${imgSrc}`}
          nodeRef={refImg}
          addEndListener={(done: any) => {
            refImg.current!.addEventListener("transitionend", done, false);
          }}
          classNames={"img-opacity"}
          timeout={300}
        >
          {imgSrc ? (
            <MailBackground src={imgSrc} ref={refImg} alt="album-art" />
          ) : (
            <MailBackgroundGuard />
          )}
        </CSSTransition>
      </SwitchTransition>
      <MailBackgroundShadow />
    </MailBackgroundWrap>
  );
}

export default Background;
