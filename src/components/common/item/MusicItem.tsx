import { ITrack } from "@store/types";
import { black } from "@styles/color";
import { P2, P4 } from "@styles/font";
import _ from "lodash";
import styled from "styled-components";
import { IconButton } from "../button";
import { MusicItemControlProps } from "./types";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { disLikeMusic, likeMusic } from "@api";

export function BasicMusicItem({
  onMouseEnter,
  isIconTool,
  isLike,
  ...track
}: ITrack & MusicItemControlProps) {
  const [like, setLike] = React.useState<boolean>(isLike ? isLike : false);
  const { mutate: likeMutate } = useMutation(["likeMutation"], likeMusic, {
    onSuccess: () => {
      setLike(true);
    },
  });
  const { mutate: disLikeMutate } = useMutation(
    ["disLikeMutation"],
    disLikeMusic,
    {
      onSuccess: () => {
        setLike(false);
      },
    }
  );

  const changeLike = React.useCallback(
    (state: boolean) => {
      if (state) {
        const copyTrack = { ...track };
        delete copyTrack.label;
        const mailBoxId = copyTrack.mailBoxId!;
        delete copyTrack.mailBoxId;

        likeMutate({ mailBoxId, track: copyTrack });
      } else {
        const mailBoxId = track.mailBoxId!;
        disLikeMutate({ mailBoxId, trackId: track.id });
      }
    },
    [likeMutate, disLikeMutate, track]
  );

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
      {isIconTool && (
        <IconGroup>
          <IconButton onClick={() => changeLike(!like)} colorTheme="black">
            {like ? <BsSuitHeartFill /> : <BsSuitHeart />}
          </IconButton>
        </IconGroup>
      )}
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
`;
