import { getMail, replyMail } from "@api";
import { MailComponent, RecoList, RightContent } from "@component";
import { OKAlert } from "@component/common";
import Background from "@component/mail/Background";
import { ControlMailProvider } from "@context";
import { audioTrackState, authState } from "@store/atom";
import { useMutation, useQuery } from "@tanstack/react-query";
import _ from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function MailContainer() {
  const { id } = useParams();
  const { data } = useQuery(["getMail", id], () => getMail(id!));
  const setAudioTracks = useSetRecoilState(audioTrackState);
  const auth = useRecoilValue(authState);

  const { mutate: replyMutate, data: unuseDatas } = useMutation(
    ["replyMutation"],
    replyMail
  );

  const onReply = React.useCallback(() => {
    // closeAction();
    if (data) {
      setTimeout(() => {
        replyMutate(data.mail.mailBoxId);
      }, 750);
    }
  }, [replyMutate, data]);

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
    <ControlMailProvider>
      {unuseDatas && (
        <OKAlert
          title="답장 고마워요."
          tracks={unuseDatas}
          subtitle="당신만을 위한 음악들을 적어서 보내드릴게요."
        />
      )}
      <Background />
      <MailComponent
        rightContent={
          <RightContent
            onPlay={onPlay}
            onReply={onReply}
            isMe={data?.isMe ? data?.isMe : false}
          />
        }
      >
        <RecoList />
      </MailComponent>
    </ControlMailProvider>
  );
}
