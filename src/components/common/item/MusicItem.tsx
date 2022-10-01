import { ITrack } from "@store/types";
import { black } from "@styles/color";
import { P2, P4 } from "@styles/font";
import _ from "lodash";
import styled from "styled-components";
import { MusicItemControlProps } from "./types";

export function BasicMusicItem({
  album,
  artists,
  name,
  onMouseEnter,
}: ITrack & MusicItemControlProps) {
  return (
    <Wrap onMouseMove={onMouseEnter} onMouseEnter={onMouseEnter}>
      <AlbumArt src={album.images.length !== 0 ? album.images[0].url : ""} />
      <TitleWrap>
        <P4>
          {_.join(
            _.map(artists, ({ name }) => name),
            " ,"
          )}
        </P4>
        <P2>{name}</P2>
      </TitleWrap>
    </Wrap>
  );
}

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

export const IconGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 96px;

  & button {
    color: ${black[500]};
  }
`;
