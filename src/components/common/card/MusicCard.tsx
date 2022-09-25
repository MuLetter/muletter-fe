import { white } from "@styles/color";
import { P4, Tag1 } from "@styles/font";
import styled from "styled-components";
import { MusicCardProps } from "./types";
import _ from "lodash";

export function MusicCard({ track, selectAction }: MusicCardProps) {
  return (
    <Wrap onClick={selectAction ? () => selectAction(track) : selectAction}>
      <AlbumArt src={track.album.images[0].url} />
      <TitleBlock className="title-block">
        <Tag1 className="artists-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </Tag1>
        <P4 className="track-title">{track.name}</P4>
      </TitleBlock>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 160px;
  height: 160px;

  border-radius: 16px;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    & > .title-block {
      height: 100%;

      & > .artists-names,
      .track-title {
        white-space: pre-wrap;
        overflow-x: unset;
        text-overflow: unset;
      }
    }
  }
`;

const AlbumArt = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const TitleBlock = styled.div`
  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 40%;

  background: rgba(51, 51, 51, 0.2);
  backdrop-filter: blur(10px);

  color: ${white[500]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  box-sizing: border-box;

  transition: 0.3s;

  & > .artists-names,
  .track-title {
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
