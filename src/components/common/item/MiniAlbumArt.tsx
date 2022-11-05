import { black, white } from "@styles/color";
import { fontStyles } from "@styles/font";
import React from "react";
import styled, { css } from "styled-components";
import { MiniAlbumArtProps, MiniStyleProps } from "./types";

export function MiniAlbumArt({
  image,
  ...style
}: MiniAlbumArtProps & MiniStyleProps) {
  return <MiniAlbumArtImg src={image} {...style} />;
}

export function MiniAlbumArtCount({
  children,
  ...styleProps
}: React.PropsWithChildren<MiniStyleProps>) {
  return <MiniAlbumArtFrame {...styleProps}>{children}</MiniAlbumArtFrame>;
}

const MiniAlbumArtImg = styled.img<MiniStyleProps>`
  width: 40px;
  height: 40px;

  ${({ rounded }) =>
    rounded === "cute"
      ? css`
          border-radius: 14px;
        `
      : css`
          border-radius: 8px;
        `}
`;

const MiniAlbumArtFrame = styled.div<MiniStyleProps>`
  width: 40px;
  height: 40px;

  ${({ colorTheme }) =>
    colorTheme
      ? css`
          border: 1px solid ${white[500]};
          color: ${black[500]};
          background: ${white[500]};
        `
      : css`
          border: 1px solid ${black[500]};
          color: ${black[500]};
        `}

  ${({ rounded }) =>
    rounded === "cute"
      ? css`
          border-radius: 14px;
        `
      : css`
          border-radius: 8px;
        `}
  
  box-sizing: border-box;

  ${fontStyles["p4"]};

  display: flex;
  justify-content: center;
  align-items: center;
`;
