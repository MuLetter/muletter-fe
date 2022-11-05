import { ITrack } from "@store/types";
import { black, white } from "@styles/color";
import { P4, Tag1 } from "@styles/font";
import _ from "lodash";
import styled from "styled-components";
import { SmallMusicItemProps } from "./types";

export function SmallMusicItem({ tracks }: SmallMusicItemProps) {
  return (
    <Wrap>
      {_.map(tracks, ({ id, name, artists, album }: ITrack) => (
        <SmallMusicWrap key={id}>
          <AlbumArt
            src={_.maxBy(album.images, ({ width }) => width)!.url}
            alt="album-art"
          />
          <ContentWrap>
            <Tag1 className="artist-names">
              {_.join(
                _.map(artists, ({ name }) => name),
                ","
              )}
            </Tag1>
            <P4 className="track-name">{name}</P4>
          </ContentWrap>
        </SmallMusicWrap>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 128px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;

  column-gap: 8px;

  row-gap: 8px;

  max-height: 240px;
  overflow-y: scroll;
`;

const SmallMusicWrap = styled.div`
  position: relative;

  width: 128px;
  height: 128px;
`;

const AlbumArt = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 8px;

  position: relative;
`;

const ContentWrap = styled.div`
  position: absolute;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 128px;
  height: 128px;

  top: 0;
  left: 0;

  row-gap: 2px;

  border-radius: 8px;
  background: ${black[900]};

  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > .artist-names {
    width: 100px;
    text-align: center;
    color: ${white[600]};
  }

  & > .track-name {
    width: 100px;
    text-align: center;
    color: ${white[500]};
  }
`;
