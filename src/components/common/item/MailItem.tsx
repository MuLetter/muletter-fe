import styled from "styled-components";
import { MailItemControlProps } from "./types";
import _ from "lodash";
import { black, white } from "@styles/color";
import { MiniAlbumArt, MiniAlbumArtCount } from "./MiniAlbumArt";
import { ISizeMail } from "@store/types";
import { fontStyles } from "@styles/font";

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
        <Title>{mail.title}</Title>
        <MiniAlbumArtGroup>
          {_.map(mail.tracks, (track) => (
            <MiniAlbumArt
              key={`mini-album-art-${track.id}`}
              image={_.maxBy(track.album.images, ({ width }) => width)!.url}
            />
          ))}
          {(mail as ISizeMail).size && (
            <MiniAlbumArtCount colorTheme="white">
              +{(mail as ISizeMail).size - mail.tracks.length}
            </MiniAlbumArtCount>
          )}
        </MiniAlbumArtGroup>
      </BlurLayer>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 400px;
  height: 250px;

  border-radius: 0 0 16px 16px;

  overflow: hidden;

  cursor: pointer;
  box-shadow: 4px 4px 4px ${black[900]};

  display: flex;

  justify-content: center;
  align-items: center;

  transition: 0.3s;
  &:hover {
    transform: scale(1.15, 1.15);
  }
`;

// const Date = styled.h5``;
const Title = styled.h1`
  color: ${white[500]};

  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;

  overflow: hidden;
  text-align: center;
  /* white-space: nowrap;
  text-overflow: ellipsis; */
  word-break: keep-all;

  ${fontStyles["p1"]}
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
  position: absolute;

  width: 400px;
  height: 250px;

  top: 0;
  left: 0;

  background: ${black[900]};
  backdrop-filter: blur(2px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MiniAlbumArtGroup = styled.div`
  margin: 24px 0 0;

  display: flex;
  flex-direction: row;
  justify-content: center;

  column-gap: 10px;
`;
