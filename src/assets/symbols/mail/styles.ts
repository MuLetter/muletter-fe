import { black, white } from "@styles/color";
import styled, { css } from "styled-components";
import { LetterStyleProps, LidStyleProps } from "./types";

export const ShadowGuard = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const LidBlock = styled.div<LidStyleProps>`
  width: 100%;
  height: 100%;

  overflow: hidden;
  transform-origin: 50% 0%;
  transition: 0.65s ease-out;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotateX(250deg);
          filter: drop-shadow(0px 0px 0px ${black[900]});
        `
      : css`
          filter: drop-shadow(1px 3px 2px ${black[900]});
        `};
`;

export const LetterBlock = styled.div<LetterStyleProps>`
  width: calc(100% - 32px);

  right: 0;
  margin: 0 auto;
  height: 100%;

  border-radius: 8px;

  background-color: ${white[500]};
  transform-origin: 50% 100%;

  transition: 0.5s ease-out;

  ${({ isView }) =>
    isView &&
    css`
      transform: translateY(-400px);
      height: 800px;
    `}
`;
