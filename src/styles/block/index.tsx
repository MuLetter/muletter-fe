import React from "react";
import styled, { keyframes } from "styled-components";
import { ControlProps } from "./types";

export const OpacityAni = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

export const OpacityAnimation = styled.div`
  animation: ${OpacityAni} 0.3s linear forwards;
`;

export function OpacityAnimationCont({
  children,
  animationEnd,
}: React.PropsWithChildren<ControlProps>) {
  const refWrap = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (animationEnd) {
      if (refWrap.current) {
        refWrap.current.addEventListener("animationend", () => {
          animationEnd();
        });
      }
    }
  }, [animationEnd]);
  return <OpacityAnimation ref={refWrap}>{children}</OpacityAnimation>;
}

export const BounceAni = keyframes`
  from {
    opacity: 0;
    transform: translateY(48px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const BounceAnimationCont = styled.div`
  animation: ${BounceAni} 0.5s linear forwards;
`;
