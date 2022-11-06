import { IconButton } from "@component/common";
import styled from "styled-components";
import { MdOutlineHeadphones, MdForwardToInbox } from "react-icons/md";
import { RightContentProps } from "./types";
import { getMail, replyMail } from "@api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { audioTrackState, authState } from "@store/atom";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { ControlMailContext } from "@context";
import _ from "lodash";
import { useParams } from "react-router-dom";

function RightContent({ isMe, setReplyDatas }: RightContentProps) {
  const { id } = useParams();
  const { closeAction } = React.useContext(ControlMailContext);
  const { data } = useQuery(["getMail", id], () => getMail(id!));
  const setAudioTracks = useSetRecoilState(audioTrackState);
  const auth = useRecoilValue(authState);
  const { mutate: replyMutate } = useMutation(["replyMutation"], replyMail, {
    onSuccess: (data) => {
      setReplyDatas(data);
    },
  });

  const onReply = React.useCallback(() => {
    closeAction();
    if (data) {
      setTimeout(() => {
        replyMutate(data.mail.mailBoxId);
      }, 750);
    }
  }, [replyMutate, data, closeAction]);

  const onPlay = React.useCallback(() => {
    if (auth?.spotifyToken) {
      if (auth.spotifyToken.scope) {
        setAudioTracks(_.filter(data?.mail.tracks));
      } else {
        setAudioTracks(
          _.filter(data?.mail.tracks, ({ preview_url }) => preview_url !== null)
        );
      }
    }
  }, [auth, setAudioTracks, data]);

  return (
    <Wrap>
      {isMe && (
        <IconButton onClick={onReply} colorTheme="black">
          <MdForwardToInbox />
        </IconButton>
      )}
      <IconButton onClick={onPlay} colorTheme="black">
        <MdOutlineHeadphones />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
`;

export { RightContent };
