import { white } from "@styles/color";
import styled, { css, keyframes } from "styled-components";
import { ContentStyleProps } from "./types";

export const ContentWrap = styled.div<ContentStyleProps>`
  display: flex;
  flex-direction: row;
  position: absolute;

  width: calc(100% - 54.04px - (258.36px / 2));
  right: 0;
  top: 100px;
  height: calc(100% - 100px);

  transform-origin: 0 0;
  transition: 0.5s ease-out;

  ${({ isView }) =>
    isView
      ? css`
          transform: scale(1, 1);
        `
      : css`
          transform: scale(0, 0);
        `}
`;

export const ContentTail = styled.svg`
  width: 70px;
  height: 30px;
`;
export const Content = styled.div`
  flex: 1;
  width: calc(100% - 54.04px - (258.36px / 2));
  height: 100%;
  max-height: 720px;
  background-color: ${white[900]};

  border-radius: 0 8px 8px 8px;
  padding: 32px;
  box-sizing: border-box;

  /* & * {
    opacity: 0;
  }

  &.view {
    & * {
      opacity: 1;
    }
  } */
`;

export const LetterBottomGuardWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background: linear-gradient(
    360deg,
    ${white[500]} 70%,
    rgba(255, 255, 255, 0)
  );
`;

export const ButtonContentWrap = styled.div`
  background: transparent !important;
  width: 100%;

  position: absolute;

  top: 100%;
  left: 0;

  transform: translateZ(-100px) translateY(48px);

  display: flex;
  flex-direction: column;
  padding: 0 36px 0 0;

  box-sizing: border-box;

  row-gap: 10px;

  transition: 0.3s;
`;

export const BottomContentAni = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const BottomContentWrap = styled.div`
  position: absolute;

  top: 100%;
  margin: 24px 0 0;
  width: 216px;

  transform-origin: 0 0;

  background-color: #333 !important;
  animation: 1.25s ${BottomContentAni} linear forwards;
`;
