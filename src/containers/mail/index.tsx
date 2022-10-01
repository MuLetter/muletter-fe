import { getMail } from "@api";
import { MailComponent } from "@component";
import { BasicMusicItem } from "@component/common";
import Background from "@component/mail/Background";
import { ITrack } from "@store/types";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import React from "react";
import { useParams } from "react-router-dom";

export function MailContainer() {
  const { id } = useParams();
  const { data: mail } = useQuery(["getMail", id], () => getMail(id!));
  const [selectedTrack, setSelectedTrack] = React.useState<ITrack | null>(
    mail ? _.sample(mail.tracks) : null
  );
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
    if (mail) {
      setTimeout(() => {
        setBgView(true);
      }, 1250);
    }
  }, [mail]);

  const onMouseTrack = React.useCallback((track: ITrack) => {
    setSelectedTrack(track);
  }, []);

  return (
    <>
      {bgView && <Background imgSrc={backgroundSrc} />}
      <MailComponent>
        {mail &&
          _.map(mail.tracks, (track) => (
            <BasicMusicItem
              key={track.id}
              {...track}
              onMouseEnter={() => onMouseTrack(track)}
            />
          ))}
      </MailComponent>
    </>
  );
}
