import { black } from "@styles/color";
import styled, { keyframes } from "styled-components";

export const AniBackground = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 1120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecoListWrap = styled.div`
  margin: 48px 32px;
  width: calc(100% - 64px);
  padding: 0 0 336px;

  display: flex;
  flex-direction: column;

  row-gap: 8px;
`;

export const MailBackgroundWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  animation: ${AniBackground} 0.5s linear forwards;
`;

export const BackupBackGround = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  &.hide {
    display: none;
  }
`;

export const MailBackgroundShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: ${black[700]};
`;

export const MailBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  &.hide {
    display: none;
  }

  &.change {
    animation: ${AniBackground} 0.75s linear forwards;
  }
`;
