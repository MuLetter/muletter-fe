import { getMailBoxByMap, getMap } from "@api";
import { Content, MapComponent } from "@component";
import { useQuery } from "@tanstack/react-query";
import { Wrap } from "./styles";

export function MapContainer() {
  const { data } = useQuery(["getMapQuery"], getMap);
  const { data: mailBoxes } = useQuery(
    ["getMailboxByMapQuery"],
    getMailBoxByMap
  );

  return data ? (
    <Wrap>
      {data && <MapComponent mailBoxes={data} />}
      {mailBoxes && <Content mailBoxes={mailBoxes} />}
    </Wrap>
  ) : (
    <></>
  );
}
