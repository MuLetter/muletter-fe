import { IconButton } from "@component/common";
import { white } from "@styles/color";
import { P2, P4 } from "@styles/font";
import React from "react";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";
import { SearchItemProps, SearchItemStyleProps } from "./types";
import _ from "lodash";
import { ControlWizardContext } from "@context";

function SearchItem({ track, isSelect }: SearchItemProps) {
  const { appendTrack, removeTrack } = React.useContext(ControlWizardContext);
  const [select, setSelect] = React.useState<boolean>(isSelect);
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const refAlbumArt = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (refAlbumArt.current) {
      setIsLoad(refAlbumArt.current.complete);
      refAlbumArt.current.addEventListener("load", (e) => {
        setIsLoad(refAlbumArt.current!.complete);
      });
    }
  }, []);

  const _appendTrack = React.useCallback(() => {
    setSelect(appendTrack(track));
  }, [track, appendTrack]);

  const _removeTrack = React.useCallback(() => {
    setSelect(!removeTrack(track));
  }, [track, removeTrack]);

  React.useEffect(() => {
    console.log("render # 1");
    console.log(track);
  });

  return (
    <Wrap
      loadDuration={Math.random() * (0.4 - 0.2) + 0.2}
      isLoad={isLoad}
      onClick={select ? _removeTrack : _appendTrack}
    >
      <AlbumArt
        ref={refAlbumArt}
        src={track.album.images.length !== 0 ? track.album.images[0].url : ""}
      />
      <MusicInfo>
        <P4 className="artist-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </P4>
        <P2 className="track-name">{track.name}</P2>
      </MusicInfo>
      <IconButton className={`${select ? "select" : ""}`} type="button">
        <MdAdd />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div<SearchItemStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 64px;

  color: ${white[500]};
  border-radius: 12px;

  column-gap: 12px;
  cursor: pointer;
  transition: ${({ loadDuration }) => loadDuration}s;

  & button {
    transition: 0.3s;
  }
  & > .select {
    transform: rotateZ(135deg);
  }

  ${({ isLoad }) =>
    !isLoad
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;

const AlbumArt = styled.img`
  width: 64px;
  height: 64px;

  object-fit: cover;

  border-radius: 8px;
`;

const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  flex: 1;

  & > .artist-names {
    font-weight: 500;
  }

  & > .track-name {
  }
`;

export default React.memo(SearchItem, () => false);
