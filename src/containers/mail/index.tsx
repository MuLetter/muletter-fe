import { getMail } from "@api";
import { MailComponent } from "@component";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function MailContainer() {
  const { id } = useParams();
  const { data: mail } = useQuery(["getMail", id], () => getMail(id!));

  console.log(mail);
  return <MailComponent></MailComponent>;
}
