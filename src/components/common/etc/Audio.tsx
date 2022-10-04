import { authState } from "@store/atom";
import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { Button } from "../button";

export function Audio() {
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

          player.connect();
        };

        scripts.src = process.env.REACT_APP_SPOTIFY_PLAYBACK_URL!;
        scripts.async = true;

        document.body.appendChild(scripts);
      }
    }
  }, [auth]);

  const onClick = React.useCallback(() => {
    if (deviceId) {
      axios.put(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        JSON.stringify({ uris: ["spotify:track:2JqnpexlO9dmvjUMCaLCLJ"] }),
        {
          headers: {
            authorization: `Bearer ${auth!.spotifyToken!.access_token}`,
          },
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceId]);

  return deviceId ? (
    <Button
      className="test"
      colorTheme="outline"
      onClick={onClick}
      margin="8px 0 0 0"
      style={{ width: "248px" }}
    >
      OAuth 재생 테스트
    </Button>
  ) : (
    <></>
  );
}
