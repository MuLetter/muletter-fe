import { black } from "@styles/color";
import { fontStyles } from "@styles/font";
import React from "react";
import styled from "styled-components";
import { MiniAlbumArtProps } from "./types";

export function MiniAlbumArt({ image }: MiniAlbumArtProps) {
  return <MiniAlbumArtImg src={image} />;
}

export function MiniAlbumArtCount({ children }: React.PropsWithChildren<any>) {
  return <MiniAlbumArtFrame>{children}</MiniAlbumArtFrame>;
}

const MiniAlbumArtImg = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 8px;
`;

const MiniAlbumArtFrame = styled.div`
  width: 40px;
  height: 40px;

  border: 1px solid ${black[500]};
  color: ${black[500]};

  border-radius: 8px;
  box-sizing: border-box;

  ${fontStyles["p4"]};

  display: flex;
  justify-content: center;
  align-items: center;
`;
