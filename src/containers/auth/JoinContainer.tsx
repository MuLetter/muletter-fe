import { getSpotifyOAuth } from "@api";
import { JoinComponent } from "@component/auth/JoinComponent";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function JoinContainer() {
  const [oauthUrl, setSpotifyUrl] = React.useState<string | null>(null);
  useQuery(["getSpotifyOAuth"], getSpotifyOAuth, {
    onSuccess: ({ url }) => setSpotifyUrl(url),
  });

  return <JoinComponent oauthUrl={oauthUrl} />;
}
