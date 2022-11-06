import { ITrack } from "@store/types";
import { black } from "@styles/color";
import { P2, P4 } from "@styles/font";
import _ from "lodash";
import styled from "styled-components";
import { MusicItemControlProps } from "./types";
import React from "react";

export function CBasicMusicItem({
  onMouseEnter,
  rightContent,
  ...track
}: ITrack & MusicItemControlProps) {
  return (
    <Wrap onMouseMove={onMouseEnter} onMouseEnter={onMouseEnter}>
      <AlbumArt
        src={track.album.images.length !== 0 ? track.album.images[0].url : ""}
      />
      <TitleWrap>
        <P4>
          {_.join(
            _.map(track.artists, ({ name }) => name),
            " ,"
          )}
        </P4>
        <P2>{track.name}</P2>
      </TitleWrap>
      {rightContent && rightContent}
    </Wrap>
  );
}

export const BasicMusicItem = React.memo(CBasicMusicItem, () => true);

export const Wrap = styled.div`
  width: 100%;

  height: 72px;

  padding: 0 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 12px;
`;

export const AlbumArt = styled.img`
  width: 48px;
  height: 48px;

  object-fit: cover;

  border-radius: 8px;
`;

export const TitleWrap = styled.div`
  color: ${black[700]};

  width: 312px;

  & > * {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;
