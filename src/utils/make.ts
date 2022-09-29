import { STrack } from "@api/types";
import { ITrack } from "@store/types";
import _ from "lodash";

export function STrackToITrack(stracks: STrack[]): ITrack[] {
  const parsed: ITrack[] = _.map(stracks, ({ id, name, artists, album }) => ({
    id,
    name,
    artists: _.map(artists, ({ id, name }) => ({
      id,
      name,
    })),
    album: {
      images: album.images,
    },
  }));

  return parsed;
}
