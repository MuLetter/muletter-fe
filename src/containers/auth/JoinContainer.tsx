import { getSpotifyOAuth, postOAuthBak } from "@api";
import { join } from "@api";
import { JoinForm, SpotifyUser } from "@api/types";
import { JoinComponent } from "@component";
import { useAuth } from "@hooks";
import { SpotifyToken } from "@store/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export function JoinContainer() {
  const setToken = useAuth();
  const { register, handleSubmit, reset } = useForm<JoinForm>();
  const { mutate: joinMutate } = useMutation(join, {
    onSuccess: ({ token }) => {
      setToken(token);
    },
    onError: (err: any) => {
      alert(err.response.data.message);
      reset();
    },
  });
  const { state } = useLocation();
  const [spotifyProfie, setSpotifyProfile] = React.useState<SpotifyUser | null>(
    null
  );
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
    if (state) {
      setSpotifyProfile((state as any).spotifyProfile);
      setSpotifyToken((state as any).spotifyToken);
    }
  }, [state]);

  React.useEffect(() => {
    console.log(spotifyToken);
  }, [spotifyToken]);

  const onSubmit: SubmitHandler<JoinForm> = React.useCallback(
    (data) => {
      if (spotifyToken) {
        joinMutate({ ...data, spotifyToken: spotifyToken });
      } else {
        joinMutate(data);
      }
    },
    [joinMutate, spotifyToken]
  );

  return (
    <>
      <JoinComponent
        oauthUrl={oauthUrl}
        onSpotifyOAuth={onSpotifyOAuth}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        spotifyToken={spotifyToken}
        spotifyProfile={spotifyProfie}
      />
    </>
  );
}
