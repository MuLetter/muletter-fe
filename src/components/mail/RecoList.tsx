import { getMail } from "@api";
import { BasicMusicItem } from "@component/common";
import { ControlMailContext } from "@context";
import { ITrack } from "@store/types";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { MailRightContent } from "./MailRightContent";
import { RecoListWrap } from "./styles";

function RecoList() {
  const { id } = useParams();
  const { openAction, selected, setMailBoxId } =
    React.useContext(ControlMailContext);
  const { data } = useQuery(["getMail", id], () => getMail(id!));

  React.useEffect(() => {
    if (data) {
      setTimeout(() => {
        openAction();
        selected(_.sample(data.mail.tracks)!);
        setMailBoxId(data.mailBoxId);
      }, 500);
    }
  }, [openAction, data, selected, setMailBoxId]);

  const onMouseEneter = React.useCallback(
    (track: ITrack) => {
      selected(track);
    },
    [selected]
  );

  return (
    <RecoListWrap>
      {data &&
        _.map(data.mail.tracks, (track) => (
          <BasicMusicItem
            key={track.id}
            onMouseEnter={() => onMouseEneter(track)}
            rightContent={
              <MailRightContent
                mailBoxId={data.mailBoxId}
                isLike={_.includes(data.likes, track.id)}
                track={track}
              />
            }
            {...track}
            {...(data.isMe
              ? { isIconTool: true, isLike: _.includes(data.likes, track.id) }
              : {})}
          />
        ))}
    </RecoListWrap>
  );
}

export { RecoList };
