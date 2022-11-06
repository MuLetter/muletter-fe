import { ControlMailContext } from "@context";
import _ from "lodash";
import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  MailBackground,
  MailBackgroundGuard,
  MailBackgroundShadow,
  MailBackgroundWrap,
} from "./styles";

export function Background() {
  const { selectedTrack } = React.useContext(ControlMailContext);
  const [imgSrc, setImgSrc] = React.useState<string>();
  const refImg = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (selectedTrack)
      setImgSrc(_.maxBy(selectedTrack.album.images, ({ width }) => width)!.url);
  }, [selectedTrack]);

  return (
    <MailBackgroundWrap>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={`mail-bg-${imgSrc}`}
          nodeRef={refImg}
          addEndListener={(done: any) => {
            refImg.current!.addEventListener("transitionend", done, false);
          }}
          classNames={"img-opacity"}
          timeout={500}
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
