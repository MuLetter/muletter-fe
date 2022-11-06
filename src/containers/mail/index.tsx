import { getMail } from "@api";
import { MailComponent, RecoList, RightContent } from "@component";
import { OKAlert } from "@component/common";
import Background from "@component/mail/Background";
import { ControlMailProvider } from "@context";
import { ITrack } from "@store/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { useParams } from "react-router-dom";

export function MailContainer() {
  const { id } = useParams();
  const { data } = useQuery(["getMail", id], () => getMail(id!));
  const [replyDatas, setReplyDatas] = React.useState<ITrack[]>();

  return (
    <ControlMailProvider>
      {replyDatas && (
        <OKAlert
          title="답장 고마워요."
          tracks={replyDatas}
          subtitle="당신만을 위한 음악들을 적어서 보내드릴게요."
        />
      )}
      <Background />
      <MailComponent
        rightContent={
          <RightContent
            isMe={data?.isMe ? data?.isMe : false}
            setReplyDatas={setReplyDatas}
          />
        }
      >
        <RecoList />
      </MailComponent>
    </ControlMailProvider>
  );
}
