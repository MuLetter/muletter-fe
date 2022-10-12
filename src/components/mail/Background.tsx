import React from "react";
import {
  BackupBackGround,
  MailBackground,
  MailBackgroundShadow,
  MailBackgroundWrap,
} from "./styles";
import { BackgroundProps } from "./types";

export function Background({ imgSrc }: BackgroundProps) {
  const [eventSetting, setEventSetting] = React.useState<boolean>(false);
  const refBackupImg = React.useRef<HTMLImageElement>(null);
  const refImg = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgSrc !== null && !refImg.current!.classList.contains("change")) {
      refBackupImg.current!.src = refImg.current!.src;
      setTimeout(() => {
        if (refImg.current!.classList.contains("hide"))
          refImg.current?.classList.remove("hide");
        refImg.current!.src = imgSrc;
        refImg.current!.classList.add("change");
      }, 300);
    }
  }, [imgSrc]);

  React.useEffect(() => {
    if (imgSrc !== null && !eventSetting) {
      refImg.current!.addEventListener("animationend", () => {
        setTimeout(() => {
          if (refBackupImg.current!.classList.contains("hide"))
            refBackupImg.current?.classList.remove("hide");
          refImg.current!.classList.remove("change");
        }, 200);
      });
      setEventSetting(true);
    }
  }, [eventSetting, imgSrc]);

  return (
    <MailBackgroundWrap>
      {imgSrc && (
        <>
          <BackupBackGround
            className="hide"
            ref={refBackupImg}
            alt="backupImage"
          />
          <MailBackground ref={refImg} alt="album-art" />
        </>
      )}
      <MailBackgroundShadow />
    </MailBackgroundWrap>
  );
}

export default Background;
