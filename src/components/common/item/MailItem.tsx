import styled from "styled-components";
import { MailItemControlProps } from "./types";
import _ from "lodash";
import { black, white } from "@styles/color";
import { MiniAlbumArt, MiniAlbumArtCount } from "./MiniAlbumArt";
import { ISizeMail } from "@store/types";
import { fontStyles } from "@styles/font";
import { getTimezoneDate } from "@utils";

export function MailItem({ mail, clickAction }: MailItemControlProps) {
  return (
    <Wrap onClick={clickAction}>
      <AlbumArt
        className="mail-album-art"
        src={
          _.maxBy(_.sample(mail.tracks)!.album.images, ({ width }) => width)!
            .url
        }
        alt="album-art"
      />
      <BlurLayer>
        <Title className="title">{mail.title}</Title>
        <Line xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 125">
          <path
            d="
              M 0 0
              L 200 125
              L 400 0
            "
          />
        </Line>
        <MiniAlbumArtGroup>
          {_.map(mail.tracks, (track) => (
            <MiniAlbumArt
              key={`mini-album-art-${track.id}`}
              image={_.maxBy(track.album.images, ({ width }) => width)!.url}
              rounded="cute"
            />
          ))}
          {(mail as ISizeMail).size && (
            <MiniAlbumArtCount colorTheme="white" rounded="cute">
              +{(mail as ISizeMail).size - mail.tracks.length}
            </MiniAlbumArtCount>
          )}
        </MiniAlbumArtGroup>
        <Created>
          {getTimezoneDate(new Date(mail.createdAt)).toLocaleDateString()}
        </Created>
      </BlurLayer>
    </Wrap>
  );
}

const Line = styled.svg`
  width: 400px;
  height: 125px;
  transition: 0.3s;
  transform-origin: 50% 0;

  & > path {
    fill: none;
    stroke: ${white[500]};
  }
`;

const Created = styled.div`
  color: ${white[600]};

  ${fontStyles["p3"]};

  flex: 1;
  justify-self: flex-end;
  align-self: flex-end;

  margin: 6px 50px 0 0;
`;

const Wrap = styled.div`
  position: relative;

  width: 400px;
  height: 250px;

  border-radius: 0 0 16px 16px;

  overflow: hidden;

  cursor: pointer;
  /* box-shadow: 4px 4px 4px ${black[900]}; */

  display: flex;

  justify-content: center;
  align-items: center;

  transition: 0.2s;
  &:hover {
    transform: scale(1.15, 1.15);

    & svg {
      transform: rotateX(60deg);
    }

    & .title {
      opacity: 1;
      transform: translateY(8px);
    }
  }
`;

const Title = styled.h1`
  opacity: 0;

  position: absolute;
  top: 64px;

  color: ${white[500]};

  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  transition: 0.5s;
  overflow: hidden;
  text-align: center;
  word-break: keep-all;

  ${fontStyles["p1"]};
`;

const AlbumArt = styled.img`
  position: absolute;

  width: 400px;
  height: 250px;

  top: 0;
  left: 0;

  object-fit: cover;
  border-radius: 0 0 16px 16px;
`;

const BlurLayer = styled.div`
  perspective: 1000px;

  position: absolute;

  width: 400px;
  height: 250px;

  top: 0;
  left: 0;

  background: ${black[900]};
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
`;

const MiniAlbumArtGroup = styled.div`
  margin: 12px 0 0;

  display: flex;
  flex-direction: row;
  justify-content: center;

  column-gap: 10px;
`;
