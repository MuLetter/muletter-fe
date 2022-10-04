import { Content, MapComponent } from "@component";
import { Wrap } from "./styles";

export function MapContainer() {
  return (
    <Wrap>
      <MapComponent />
      <Content />
    </Wrap>
  );
}
