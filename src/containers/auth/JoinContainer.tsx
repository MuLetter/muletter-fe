import { getSpotifyOAuth, postOAuthBak } from "@api";
import { JoinComponent } from "@component";
import { SpotifyToken } from "@store/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";

export function JoinContainer() {
  const { state } = useLocation();

  const [spotifyToken, setSpotifyToken] = React.useState<SpotifyToken | null>(
    null
  );
  const [oauthUrl, setSpotifyUrl] = React.useState<string | null>(null);
  const [oauthState, setOAuthState] = React.useState<string | null>(null);
  useQuery(["getSpotifyOAuth"], getSpotifyOAuth, {
    onSuccess: ({ url, memory }) => {
      const { state } = memory;
      setOAuthState(state as string);
      setSpotifyUrl(url);
    },
  });
  const { mutate: bakMutate } = useMutation(postOAuthBak, {
    onSuccess: () => {
      if (oauthUrl) {
        window.location.href = oauthUrl;
      }
    },
  });

  const onSpotifyOAuth = React.useCallback(() => {
    if (oauthState)
      bakMutate({ state: oauthState!, data: { pathname: "/auth/join" } });
  }, [bakMutate, oauthState]);

  React.useEffect(() => {
    console.log(state);
    if (state) setSpotifyToken((state as any).spotifyToken);
  }, [state]);

  React.useEffect(() => {
    console.log(spotifyToken);
  }, [spotifyToken]);

  return <JoinComponent oauthUrl={oauthUrl} onSpotifyOAuth={onSpotifyOAuth} />;
}
