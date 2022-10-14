import { STrack } from "@api/types";
import { ITrack } from "@store/types";
import _ from "lodash";

export function STrackToITrack(stracks: STrack[]): ITrack[] {
  const parsed: ITrack[] = _.map(
    stracks,
    ({ id, name, preview_url, artists, album }) => ({
      id,
      name,
      preview_url,
      artists: _.map(artists, ({ id, name }) => ({
        id,
        name,
      })),
      album: {
        images: album.images,
      },
    })
  );

  return parsed;
}
