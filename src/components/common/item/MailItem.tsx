import styled from "styled-components";
import { MailItemControlProps } from "./types";
import _ from "lodash";
import { black } from "@styles/color";
import { MiniAlbumArt, MiniAlbumArtCount } from "./MiniAlbumArt";
import { ISizeMail } from "@store/types";

export function MailItem({ mail }: MailItemControlProps) {
  return (
    <Wrap>
      <AlbumArt
        src={_.maxBy(mail.tracks[0].album.images, ({ width }) => width)!.url}
        alt="album-art"
      />
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
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 400px;
  height: 250px;

  border-radius: 0 0 16px 16px;

  overflow: hidden;
`;

const AlbumArt = styled.img`
  position: absolute;

  width: 400px;
  height: 250px;

  top: 0;
  left: 0;

  object-fit: cover;
`;

const MiniAlbumArtGroup = styled.div`
  position: absolute;

  width: 400px;
  height: 250px;

  top: 0;
  left: 0;

  background: ${black[900]};
  backdrop-filter: blur(2px);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  column-gap: 10px;
`;
