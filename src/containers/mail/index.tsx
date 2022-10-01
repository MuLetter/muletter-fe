import { getMail } from "@api";
import { MailComponent } from "@component";
import { BasicMusicItem } from "@component/common";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import { useParams } from "react-router-dom";

export function MailContainer() {
  const { id } = useParams();
  const { data: mail } = useQuery(["getMail", id], () => getMail(id!));

  return (
    <MailComponent>
      {mail &&
        _.map(mail.tracks, (track) => (
          <BasicMusicItem key={track.id} {...track} />
        ))}
    </MailComponent>
  );
}
