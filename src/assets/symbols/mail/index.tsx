import React from "react";
import styled, { css } from "styled-components";
import { Back, Front, Letter, Lid } from "./Items3D";
import { MailStyleProps } from "./types";

export function Mail3D() {
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [letterView, setLetterView] = React.useState<boolean>(false);

  // open 액션용
  const changeLetterView = React.useCallback((state: boolean) => {
    setLetterView(state);
  }, []);

  // close action 용
  const changeLid = React.useCallback((state: boolean) => {
    setOpen(state);
  }, []);

  return (
    <Mail>
      <MailWrap
        isRotate={rotate}
        onClick={letterView ? () => setLetterView(false) : () => setOpen(true)}
      >
        <Back />
        <Letter isView={letterView} animationEnd={changeLid} />
        <Front />
        <Lid isOpen={open} animationEnd={changeLetterView} />
      </MailWrap>
    </Mail>
  );
}

const Mail = styled.div`
  // 단순히 3D 효과용
  perspective: 2000px;
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

  transition: 0.5s ease-out;
  transform-origin: 50% 50%;

  ${({ isRotate }) =>
    isRotate &&
    css`
      transform: rotateY(-40deg) rotateX(25deg);
    `}
`;
