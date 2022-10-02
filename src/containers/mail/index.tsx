import { getMail } from "@api";
import { MailComponent } from "@component";
import { BasicMusicItem } from "@component/common";
import Background from "@component/mail/Background";
import { ITrack } from "@store/types";
import { useQuery } from "@tanstack/react-query";
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
    if (data && data.mail) {
      setTimeout(() => {
        setBgView(true);
      }, 1250);
    }
  }, [data]);

  const onMouseTrack = React.useCallback((track: ITrack) => {
    setSelectedTrack(track);
  }, []);

  return (
    <>
      {bgView && <Background imgSrc={backgroundSrc} />}
      <MailComponent>
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
