import { black } from "@styles/color";
import React from "react";
import { LetterBlock, LidBlock, ShadowGuard } from "./styles";
import {
  LetterControlProps,
  LetterStyleProps,
  LidControlProps,
  LidStyleProps,
} from "./types";

export function Back() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 3 2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 0 
           V 1.9 C 0 1.9, 0 2, 0.1 2 
           H 2.9 C 2.9 2, 3 2, 3 1.9
           V 0 Z"
        fill="#eee"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Front() {
  return (
    <ShadowGuard>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 3 2"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `drop-shadow(-3px -3px 4px ${black[900]})` }}
      >
        <path
          d="M 0 0 
       V 1.9 C 0 1.9, 0 2, 0.1 2 
       H 2.9 C 2.9 2, 3 2, 3 1.9
       V 0 
       L 1.5 1 Z"
          stroke="white"
          fill="white"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </ShadowGuard>
  );
}

export function Lid({ isOpen, animationEnd }: LidStyleProps & LidControlProps) {
  const refLid = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (refLid.current) {
      refLid.current.addEventListener("transitionend", (e) => {
        if (refLid.current) {
          if (e.propertyName === "transform") {
            animationEnd(refLid.current.classList.contains("open"));
          }
        }
      });
    }
  }, [animationEnd]);

  return (
    <LidBlock
      ref={refLid}
      isOpen={isOpen}
      className={`${isOpen ? "open" : "close"}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 3 2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 0
           L 1.45 0.95
           C 1.45 0.95, 1.5 0.98 , 1.55 0.95
           L 3 0
           Z
        "
          stroke="white"
          fill="white"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </LidBlock>
  );
}

export function Letter({
  isView,
  animationEnd,
}: LetterStyleProps & LetterControlProps) {
  const refLetter = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (refLetter.current) {
      refLetter.current.addEventListener("transitionend", (e) => {
        if (refLetter.current) {
          if (e.propertyName === "height") {
            animationEnd(refLetter.current.classList.contains("view"));
          }
        }
      });
    }
  }, [animationEnd]);

  return (
    <LetterBlock
      ref={refLetter}
      isView={isView}
      className={`${isView ? "view" : ""}`}
    >
      Letter
    </LetterBlock>
  );
}
