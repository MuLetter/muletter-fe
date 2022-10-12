import { STrack } from "@api/types";
import { authState } from "@store/atom";
import { ITrack } from "@store/types";
import axios from "axios";
import _ from "lodash";
import React from "react";
import { useRecoilValue } from "recoil";

export function usePlayback() {
  const refPlayer = React.useRef<any>(null);
  const [deviceId, setDeviceId] = React.useState<string | null>();
  const auth = useRecoilValue(authState);

  React.useEffect(() => {
    if (auth?.spotifyToken) {
      if (auth.spotifyToken.scope) {
        const token = auth.spotifyToken.access_token;
        const scripts = document.createElement("script");
        window.onSpotifyWebPlaybackSDKReady = () => {
          const player = new window.Spotify.Player({
            name: "MuLetter Web Playback",
            getOAuthToken: (cb: any) => {
              cb(token);
            },
            volumne: 0.5,
          });

          refPlayer.current = player;

          // Ready
          player.addListener("ready", ({ device_id }: any) => {
            console.log("Ready with Device ID", device_id);

            player.device_id = device_id;
            setDeviceId(device_id);
            // injectPlayer(player);
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
        };

        scripts.src = process.env.REACT_APP_SPOTIFY_PLAYBACK_URL!;
        scripts.async = true;
        scripts.id = "spotify-playback-script";

        document.body.appendChild(scripts);
      }
    }
  }, [auth]);

  const onPlay = React.useCallback(
    (tracks: STrack[] | ITrack[]) => {
      if (deviceId) {
        axios.put(
          `${process.env.REACT_APP_SPOTIFY_API_URL}/me/player/play?device_id=${deviceId}`,
          JSON.stringify({
            uris: _.map(tracks as STrack[], ({ id }) => `spotify:track:${id}`),
          }),
          {
            headers: {
              authorization: `Bearer ${auth!.spotifyToken!.access_token}`,
            },
          }
        );
      }
    },
    [deviceId, auth]
  );

  React.useEffect(() => {
    return () => {
      const scripts = document.getElementById("spotify-playback-script");

      if (scripts) {
        document.body.removeChild(scripts!);
        refPlayer.current.disconnect();
      }
    };
  }, []);

  return [onPlay];
}
