import { getMail, replyMail } from "@api";
import { MailComponent } from "@component";
import { BasicMusicItem, OKAlert } from "@component/common";
import Background from "@component/mail/Background";
import { ITrack } from "@store/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { usePlayback } from "@hooks";
import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

export function MailContainer() {
  const { id } = useParams();
  const { state } = useLocation();
  const { data } = useQuery(["getMail", id], () => getMail(id!));
  const [selectedTrack, setSelectedTrack] = React.useState<
    ITrack | null | undefined
  >(data ? _.sample(data.mail.tracks) : null);
  const [bgView, setBgView] = React.useState<boolean>(false);
  const [backgroundSrc, setBackgroundSrc] = React.useState<string | null>(null);

  const { mutate: replyMutate, data: unuseDatas } = useMutation(
    ["replyMutation"],
    replyMail
  );

  React.useEffect(() => {
    if (selectedTrack) {
      if (selectedTrack.album.images.length !== 0) {
        setBackgroundSrc(
          _.last(_.sortBy(selectedTrack.album.images, ({ width }) => width))!
            .url
        );
      } else {
        setBackgroundSrc(null);
      }
    }
  }, [selectedTrack]);

  React.useEffect(() => {
    if (selectedTrack) {
      setTimeout(() => {
        setBgView(true);
      }, 1250);
    }
  }, [selectedTrack]);

  const onMouseTrack = React.useCallback((track: ITrack) => {
    setSelectedTrack(track);
  }, []);

  const onReply = React.useCallback(() => {
    if (data) {
      replyMutate(data.mail.mailBoxId);
    }
  }, [data, replyMutate]);

  const [onPlay] = usePlayback();

  return (
    <>
      {unuseDatas && (
        <OKAlert
          title="답장 고마워요."
          tracks={unuseDatas}
          subtitle="당신만을 위한 음악들을 적어서 보내드릴게요."
        />
      )}
      {bgView && <Background imgSrc={backgroundSrc} />}
      <MailComponent
        buttons={[
          {
            title: "답장하기",
            clickAction: onReply,
            type: "button",
          },
          {
            title: "전체 재생",
            clickAction: () => onPlay(data!.mail.tracks),
            type: "button",
          },
        ]}
      >
        {data &&
          _.map(data.mail.tracks, (track) => (
            <BasicMusicItem
              key={track.id}
              {...track}
              onMouseEnter={() => onMouseTrack(track)}
              isIconTool
              mailBoxId={(state as any).mailBoxId}
              isLike={_.includes(data.likes, track.id)}
            />
          ))}
      </MailComponent>
    </>
  );
}
