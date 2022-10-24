import { STrack } from "@api/types";
import { authState } from "@store/atom";
import { ITrack } from "@store/types";
import _ from "lodash";
import React from "react";
import { useRecoilValue } from "recoil";
import { PlayerType, ResultUsePlayback } from "./types";

export function usePlaybackVer2(
  refWrap: React.RefObject<HTMLDivElement>,
  tracks: STrack[] | ITrack[]
): ResultUsePlayback {
  const refPlayer = React.useRef<any>();
  const [controlTrack, setControlTracks] = React.useState<STrack[] | ITrack[]>([
    ...tracks,
  ]);
  const [track, setTrack] = React.useState<STrack | ITrack>(controlTrack[0]);
  const [type, setType] = React.useState<PlayerType>();
  const [isPlay, setIsPlay] = React.useState<boolean>(false);

  const auth = useRecoilValue(authState);

  const play = React.useCallback(() => {}, []);
  const pause = React.useCallback(() => {}, []);
  const next = React.useCallback(() => {}, []);
  const prev = React.useCallback(() => {}, []);
  const shuffle = React.useCallback(() => {
    const shuffleTracks = _.shuffle(
      _.filter(tracks as STrack[], ({ id }) => track.id !== id)
    );
    setControlTracks([...shuffleTracks]);
  }, [tracks, track]);
  const newPlay = React.useCallback((track: STrack) => {}, []);

  // tracks 초기화
  React.useEffect(() => {
    setTrack({ ...tracks[0] });
    const backTracks = _.drop(tracks as STrack[]);
    setControlTracks([...backTracks]);
  }, [tracks]);

  return [
    isPlay,
    track,
    controlTrack,
    {
      type,
      play,
      pause,
      next,
      prev,
      shuffle,
      newPlay,
    },
  ];
}
