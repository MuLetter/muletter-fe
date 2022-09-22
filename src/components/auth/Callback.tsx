import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LetterLoading } from "@component/common";
import qs from "qs";
import { useMutation } from "@tanstack/react-query";
import { getSpotifyOAuthToken } from "@api";

export function Callback() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { mutate: getTokenMutate } = useMutation(getSpotifyOAuthToken, {
    onSuccess: (data) => {
      const { pathname, ...restData } = data.memory.data!;

      setTimeout(() => {
        navigate(data.memory.data!.pathname, {
          state: {
            spotifyProfile: data.spotifyProfile,
            spotifyToken: data.spotifyToken,
            ...restData,
          },
        });
      }, 2000);
    },
  });

  React.useEffect(() => {
    const { error } = qs.parse(search, { ignoreQueryPrefix: true });

    if (!error) getTokenMutate(search);
  }, [search, getTokenMutate]);

  return <LetterLoading />;
}
