import { getMail } from "@api";
import { BasicMusicItem } from "@component/common";
import { ControlMailContext } from "@context";
import { ITrack } from "@store/types";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { RecoListWrap } from "./styles";

function RecoList() {
  const { id } = useParams();
  const { openAction, selected } = React.useContext(ControlMailContext);
  const { data } = useQuery(["getMail", id], () => getMail(id!));

  React.useEffect(() => {
    if (data) {
      setTimeout(() => {
        openAction();
        selected(_.sample(data.mail.tracks)!);
      }, 500);
    }
  }, [openAction, data, selected]);

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
            {...track}
            mailBoxId={id}
            {...(data.isMe
              ? { isIconTool: true, isLike: _.includes(data.likes, track.id) }
              : {})}
          />
        ))}
    </RecoListWrap>
  );
}

export { RecoList };
