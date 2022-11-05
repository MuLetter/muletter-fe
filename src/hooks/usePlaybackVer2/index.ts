import { STrack } from "@api/types";
import { audioTrackState, authState } from "@store/atom";
import { ITrack } from "@store/types";
import _ from "lodash";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { PlayerType, ResultUsePlayback } from "./types";
import axios from "axios";

export function usePlaybackVer2(
  refWrap: React.RefObject<HTMLDivElement>,
  tracks: STrack[] | ITrack[]
): ResultUsePlayback {
  const refNow = React.useRef<STrack | ITrack>();
  const refNext = React.useRef<STrack | ITrack>();
  const refPrev = React.useRef<(STrack | ITrack)[]>([]);
  const refTrackList = React.useRef<STrack[] | ITrack[]>(tracks);
  const setGlobalTracks = useSetRecoilState(audioTrackState);

  const [player, setPlayer] = React.useState<any>();

  const [controlTrack, setControlTracks] = React.useState<STrack[] | ITrack[]>(
    tracks
  );
  const [track, setTrack] = React.useState<STrack | ITrack | null>(
    controlTrack[0]
  );
  const [type, setType] = React.useState<PlayerType>();
  const [isPlay, setIsPlay] = React.useState<boolean>(false);

  const auth = useRecoilValue(authState);

  const play = React.useCallback(() => {
    if (player) {
      if (type === "preview") {
        player.play();
      } else {
        player.resume();
      }
      setIsPlay(true);
    }
  }, [player, type]);
  const pause = React.useCallback(() => {
    if (player) {
      player.pause();
      setIsPlay(false);
    }
  }, [player]);

  const shuffle = React.useCallback(() => {
    const shuffleTracks = _.shuffle(refTrackList.current) as STrack[];
    refTrackList.current = shuffleTracks;
    refNext.current = refTrackList.current[0];
    setControlTracks(shuffleTracks);
  }, []);

  const newPlay = React.useCallback(
    (track: STrack, notListUpdate?: boolean) => {
      if (player) {
        if (type === "preview") {
          player.src = track.preview_url;
        } else {
          axios.put(
            `${process.env.REACT_APP_SPOTIFY_API_URL}/me/player/play?device_id=${player.device_id}`,
            JSON.stringify({
              uris: [`spotify:track:${track.id}`],
            }),
            {
              headers: {
                authorization: `Bearer ${auth!.spotifyToken!.access_token}`,
              },
            }
          );
        }
        setIsPlay(true);

        if (!notListUpdate) {
          if (refNow.current) refPrev.current.push(refNow.current);
          const backTracks = _.filter(
            refTrackList.current,
            ({ id }: STrack) => id !== track.id
          ) as STrack[];
          refTrackList.current = backTracks;
          refNext.current = backTracks[0];

          setControlTracks(backTracks);
        }

        refNow.current = track;
        setTrack(track);
      }
    },
    [player, auth, type]
  );

  const next = React.useCallback(() => {
    if (refNext.current) newPlay(refNext.current as STrack);
  }, [newPlay]);

  const prev = React.useCallback(() => {
    if (refPrev.current) {
      const prevTrack = _.last(refPrev.current)!;
      const newPrevTracks = _.dropRight(refPrev.current);
      refPrev.current = newPrevTracks;

      const newControlTracks = _.concat(track!, refTrackList.current);

      setControlTracks(newControlTracks);

      refNext.current = newControlTracks[0];
      newPlay(prevTrack as STrack, true);
    }
  }, [newPlay, track]);

  const disconnect = React.useCallback(() => {
    if (player && type) {
      if (type === "spotify") {
        player.disconnect();

        // iframe 정리해야함
        const spotifyFrame = document.querySelector("iframe");
        console.log(spotifyFrame);
        // if (spotifyFrame) document.removeChild(spotifyFrame);
      }
      setGlobalTracks(null);
    }
  }, [type, player, setGlobalTracks]);

  // Spotify 사용자 구분
  React.useEffect(() => {
    if (!player) {
      if (auth?.spotifyToken && auth.spotifyToken.scope) {
        setType("spotify");
        const token = auth!.spotifyToken.access_token;
        const scripts = document.createElement("script");
        window.onSpotifyWebPlaybackSDKReady = () => {
          const player = new window.Spotify.Player({
            name: "MuLetter Web Playback",
            getOAuthToken: (cb: any) => {
              cb(token);
            },
            volumne: 0.5,
          });

          // Ready
          player.addListener("ready", ({ device_id }: any) => {
            console.log("Ready with Device ID", device_id);

            player.device_id = device_id;
            setPlayer(player);
            setType("spotify");
          });

          player.addListener("not_ready", ({ device_id }: any) => {
            console.log("Device ID is not ready for playback", device_id);
          });

          // Error Check
          player.on("initialization_error", ({ message }: any) => {
            console.error("Failed to initialize", message);
          });

          player.on("authentication_error", ({ message }: any) => {
            console.error("Failed to authenticate", message);
          });

          player.on("account_error", ({ message }: any) => {
            console.error("Failed to validate Spotify account", message);
          });

          player.on("playback_error", ({ message }: any) => {
            console.error("Failed to perform playback", message);
          });

          player.connect();
        };

        scripts.src = process.env.REACT_APP_SPOTIFY_PLAYBACK_URL!;
        scripts.async = true;
        scripts.id = "spotify-playback-script";

        console.log(refWrap);
        refWrap.current?.appendChild(scripts);
      } else {
        const audio = document.createElement("audio");
        audio.autoplay = true;
        setPlayer(audio);
        setType("preview");

        refWrap.current?.appendChild(audio);
      }
    }
  }, [auth, refWrap, player]);

  // tracks 초기화
  React.useEffect(() => {
    if (player) newPlay(tracks[0] as STrack);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracks, player]);

  React.useEffect(() => {
    if (player && type) {
      if (type === "preview") {
        player.addEventListener("ended", () => {
          newPlay(refNext.current as STrack);
        });
      } else {
        player.addListener(
          "player_state_changed",
          ({ position, duration, ...rest }: any) => {
            if (position === duration) newPlay(refNext.current as STrack);
            console.log(rest);
          }
        );
      }
    }
  }, [player, type, newPlay]);

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
      disconnect,
    },
  ];
}
