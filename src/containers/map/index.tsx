import { getMap } from "@api";
import { Content, MapComponent } from "@component";
import { useQuery } from "@tanstack/react-query";
import { Wrap } from "./styles";

export function MapContainer() {
  const { data } = useQuery(["getMapQuery"], getMap);

  return data ? (
    <Wrap>
      <MapComponent mailBoxes={data} />
      <Content />
    </Wrap>
  ) : (
    <></>
  );
}
