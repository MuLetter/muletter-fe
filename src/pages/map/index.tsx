import { AuthWrap } from "@component";
import { MapContainer } from "@container";
import { OpacityAnimationCont } from "@styles/block";

export function MapPage() {
  return (
    <AuthWrap>
      <OpacityAnimationCont>
        <MapContainer />
      </OpacityAnimationCont>
    </AuthWrap>
  );
}
