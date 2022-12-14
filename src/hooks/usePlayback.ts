import { STrack } from "@api/types";
import { authState } from "@store/atom";
import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";

export function usePlayback(
  refWrap: React.RefObject<HTMLDivElement>
): [boolean, (track: STrack) => void, () => void, () => void, () => void] {
  const refPlayer = React.useRef<any>();
  const refAudio = React.useRef<HTMLAudioElement | null>(null);
  const [deviceId, setDeviceId] = React.useState<string | null>();
  const [isUse, setIsUse] = React.useState<boolean>(false);
  const auth = useRecoilValue(authState);

  React.useEffect(() => {
    if (auth?.spotifyToken) {
      if (auth.spotifyToken.scope) {
        setIsUse(true);
      } else {
        const audio = document.createElement("audio");

        audio.autoplay = true;
        refAudio.current = audio;
        refWrap.current?.appendChild(audio);
      }
    }
  }, [auth, refWrap]);

  React.useEffect(() => {
    if (isUse) {
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
          setDeviceId(device_id);
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

        player.addListener(
          "player_state_changed",
          ({ position, duration, track_window: { current_track } }: any) => {
            console.log("Currently Playing", current_track);
            console.log("Position in Song", position);
            console.log("Duration of Song", duration);
          }
        );

        player.connect();
        refPlayer.current = player;
      };

      scripts.src = process.env.REACT_APP_SPOTIFY_PLAYBACK_URL!;
      scripts.async = true;
      scripts.id = "spotify-playback-script";
      refWrap.current?.appendChild(scripts);
    }
  }, [isUse, auth, refWrap]);

  const onNewPlay = React.useCallback(
    (track: STrack) => {
      if (isUse) {
        if (deviceId) {
          axios.put(
            `${process.env.REACT_APP_SPOTIFY_API_URL}/me/player/play?device_id=${deviceId}`,
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
      } else {
        if (refAudio.current) {
          refAudio.current.src = track.preview_url;
          refAudio.current.play();
        }
      }
    },
    [deviceId, auth, isUse]
  );

  const onPause = React.useCallback(() => {
    if (isUse) {
      if (refPlayer.current) refPlayer.current.pause();
    } else {
      if (refAudio.current) refAudio.current.pause();
    }
  }, [isUse]);

  const onPlay = React.useCallback(() => {
    if (isUse) {
      if (refPlayer.current) refPlayer.current.resume();
    } else {
      if (refAudio.current) refAudio.current.play();
    }
  }, [isUse]);

  const disConnect = React.useCallback(() => {
    if (refPlayer.current) {
      refPlayer.current.disconnect();
    }
    if (refAudio.current) {
      refAudio.current.pause();
    }
  }, []);

  return [isUse, onNewPlay, onPlay, onPause, disConnect];
}
