import React from "react";
import styled, { css } from "styled-components";
import { Back, Front, Letter, LetterBottomGuard, Lid } from "./Items3D";
import { MailControlProps, MailStyleProps } from "./types";

export function Mail3D({
  children,
  isOpen,
  isDown,
  refScreen,
  isRotate,
}: React.PropsWithChildren<MailControlProps & MailStyleProps>) {
  const refWrap = React.useRef<HTMLDivElement>(null);
  const [down, setDown] = React.useState<boolean>(isDown ? isDown : false);
  const [letterView, setLetterView] = React.useState<boolean>(false);
  const refLetter = React.useRef<HTMLDivElement>(null);

  const resizing = React.useCallback(() => {
    if (refWrap.current) {
      const { top } = refWrap.current.getBoundingClientRect();

      if (top - 400 < 160) setDown(true);
    }
  }, []);

  // close action 용
  const changeLid = React.useCallback((state: boolean) => {
    // setOpen(state);
  }, []);

  React.useEffect(() => {
    if (refScreen)
      refScreen.current!.addEventListener("wheel", (e) => {
        refLetter.current!.scrollTop += e.deltaY;
      });
  }, [refScreen]);

  // open 액션용
  const changeLetterView = React.useCallback(
    (state: boolean) => {
      setLetterView(state);
      if (refWrap.current) {
        const { top } = refWrap.current.getBoundingClientRect();

        if (top - 400 < 160) setDown(true);

        window.addEventListener("resize", resizing);
      }
    },
    [resizing]
  );

  return (
    <Mail ref={refWrap} className={`${down ? "down" : ""}`}>
      <MailWrap isRotate={isRotate}>
        <Back />
        <Letter
          isView={letterView}
          animationEnd={changeLid}
          refLetter={refLetter}
        >
          {children}
        </Letter>
        <LetterBottomGuard />
        <Front />
        <Lid isOpen={isOpen} animationEnd={changeLetterView} />
      </MailWrap>
    </Mail>
  );
}

const Mail = styled.div`
  // 단순히 3D 효과용
  perspective: 2000px;

  transform-origin: 50% 50%;
  transition: 0.8s;
  &.down {
    transform: translateY(160px);
  }
`;

const MailWrap = styled.div<MailStyleProps>`
  transform-style: preserve-3d;
  position: relative;
  width: 600px;
  height: 400px;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > .btn-grp {
    top: unset;
    left: unset;
    right: 24px;
    bottom: 16px;
  }

  transition: 0.5s ease-out;
  transform-origin: 50% 50%;

  ${({ isRotate }) =>
    isRotate &&
    css`
      transform: rotateY(-40deg) rotateX(25deg);
    `}
`;
