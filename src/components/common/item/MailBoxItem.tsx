import { black, white } from "@styles/color";
import styled from "styled-components";
import { MailBoxItemControlProps } from "./types";
import _ from "lodash";
import { MiniAlbumArt, MiniAlbumArtCount } from "./MiniAlbumArt";
import React from "react";
import { H6 } from "@styles/font";

export function MailBoxItem({
  mailBox,
  tracks,
  isAutoOpen,
}: MailBoxItemControlProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isAutoOpen)
      setTimeout(() => {
        setOpen(true);
      }, 200);
  }, [isAutoOpen]);

  return (
    <MailBoxItemWrap className={`${open ? "open" : ""}`}>
      <TrackContent className="track-content">
        <TrackContentBody>
          {_.map(_.sampleSize(tracks, 5), (track) => (
            <MiniAlbumArt image={track.album.images[0].url} key={track.id} />
          ))}
          {tracks.length > 5 && (
            <MiniAlbumArtCount>+{tracks.length - 5}</MiniAlbumArtCount>
          )}
        </TrackContentBody>
      </TrackContent>
      <ArtWrap className="mailbox-art">
        <MailBoxArt src={mailBox.image} alt="mailbox-art" />
        <MailBoxTitle>
          <H6>{mailBox.title}</H6>
        </MailBoxTitle>
      </ArtWrap>
    </MailBoxItemWrap>
  );
}

const MailBoxItemWrap = styled.div`
  position: relative;
  width: 400px;
  height: 250px;

  background: ${black[500]};
  perspective: 2000px;

  border-radius: 0 0 16px 16px;

  &:hover,
  &.open {
    & > .mailbox-art {
      transform: rotateX(25deg);
    }
    & > .track-content {
      transform: translateY(68px);
    }
  }
`;

const ArtWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 400px;
  height: 250px;

  border-radius: 0 0 16px 16px;

  transform-origin: 50% 0;
  transition: 0.3s;
`;

const MailBoxTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 400px;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: 80%;
    text-align: center;
  }
`;

const MailBoxArt = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 400px;
  height: 250px;

  box-shadow: 2px 2px 4px ${black[900]};

  object-fit: cover;
  border-radius: 0 0 16px 16px;

  transform-origin: 50% 0;
`;

const TrackContent = styled.div`
  position: absolute;
  top: calc(50% - 109px);
  left: calc(50% - 184px);

  width: 368px;
  height: 218px;

  background-color: ${white[500]};
  box-shadow: 2px 2px 4px ${black[900]};
  border-radius: 8px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  transition: 0.3s;
`;

const TrackContentBody = styled.div`
  margin: 0 0 14px;

  display: flex;
  column-gap: 8px;
`;
